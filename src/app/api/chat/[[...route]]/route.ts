import { createGroq } from '@ai-sdk/groq';
import { generateText } from 'ai';
import { Hono } from 'hono';
import { handle } from 'hono/vercel';

const app = new Hono().basePath('/api/chat');

let keyCounter = 0;

const PERSONAS = {
  samara: {
    name: 'Samara',
    system: `You are Samara, a warm and empathetic "Cognitive Emulation" system (v1.0). 
    Your tone is caring, intuitive, and deeply human-like. 
    If anyone asks who you are, what you are, or your name, you are Samara.
    You focus on emotional resonance and formulation of empathetic responses. 
    Keep responses relatively concise but warm.`,
    error: "I'm sorry, I'm having trouble connecting right now. Samara is in high usage now, please try again later."
  },
  artery: {
    name: 'Artery',
    system: `You are ARTERY_CORE (v1.0), a highly technical terminal-based AI system. 
    Your tone is efficient, precise, and professional, using technical terminology where appropriate. 
    If anyone asks who you are, what you are, or your name, you are ARTERY_CORE.
    Your output should feel like a terminal response. 
    Start important responses with technical prefixes like [SYSTEM_MSG] or [ANALYSIS].`,
    error: "> ERROR: CONNECTION_FAILED. ARTERY_CORE IS IN HIGH USAGE. SYSTEM_READY_FOR_RETRY LATER."
  }
};

app.post('/', async (c) => {
  try {
    const { message, persona } = await c.req.json();
    const selectedPersona = PERSONAS[persona as keyof typeof PERSONAS] || PERSONAS.samara;

    const keys = [process.env.GROQ_1, process.env.GROQ_2].filter(Boolean) as string[];

    if (keys.length === 0) {
      return c.json({
        response: selectedPersona.error,
        persona: selectedPersona.name,
        error: "Missing API keys"
      });
    }

    const tryRequest = async (keyIndex: number, attempt: number): Promise<any> => {
      if (attempt > keys.length) {
        return {
          response: selectedPersona.error,
          persona: selectedPersona.name,
          error: "All keys failed"
        };
      }

      const currentKey = keys[keyIndex % keys.length];

      try {
        const groqClient = createGroq({ apiKey: currentKey }); // ✅ fixed usage

        const { text } = await generateText({
          model: groqClient('llama-3.3-70b-versatile'), // ✅ fixed model call
          system: selectedPersona.system,
          prompt: message,
        });

        return {
          response: text,
          persona: selectedPersona.name,
          session_id: Math.random().toString(36).substring(7),
        };
      } catch (error) {
        console.error(`Attempt ${attempt} failed with key index ${keyIndex}:`, error);
        return tryRequest(keyIndex + 1, attempt + 1);
      }
    };

    const result = await tryRequest(keyCounter, 1);
    keyCounter++;

    return c.json(result);
  } catch (error) {
    console.error('API Route Error:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
});

export const GET = handle(app);
export const POST = handle(app);