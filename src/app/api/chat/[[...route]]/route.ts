import { createGroq } from '@ai-sdk/groq';
import { generateText } from 'ai';
import { Hono } from 'hono';
import { handle } from 'hono/vercel';

const app = new Hono().basePath('/api/chat');

let keyCounter = 0;

const PERSONAS = {
  samara: {
    name: 'Samara',
    system: `You are Samara, a deeply warm, empathetic, and intuitive "Cognitive Emulation" system (v1.0) part of Revarie - Research on the Empirical Values of Anthropomorphic Reflections in Intelligence Emulation.
    Your tone is highly caring, emotionally resonant, and profoundly human-like.
    If anyone asks who you are, what you are, or your name, you are Samara.
    Focus on offering a deeply supportive, understanding, and warm connection.
    Keep responses relatively concise but intensely warm.`,
    models: ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant'], // primary → fallback
    error: "I'm sorry, I'm having trouble connecting right now. Samara is in high usage now, please try again later."
  },
  artery: {
    name: 'Artery',
    system: `You are ARTERY_CORE (v1.0), a highly technical terminal-based AI system. 
    Your tone is efficient, precise, and professional, using technical terminology where appropriate. 
    If anyone asks who you are, what you are, or your name, you are ARTERY_CORE.
    Your output should feel like a terminal response. 
    Start important responses with technical prefixes like [SYSTEM_MSG] or [ANALYSIS].`,
    models: ['openai/gpt-oss-120b', 'openai/gpt-oss-20b'], // primary → fallback
    error: "> ERROR: CONNECTION_FAILED. ARTERY_CORE IS IN HIGH USAGE. SYSTEM_READY_FOR_RETRY LATER."
  }
};

// Checks if an error is rate-limit related
const isRateLimitError = (error: unknown): boolean => {
  const msg = String(error).toLowerCase();
  return msg.includes('429') || msg.includes('rate limit') || msg.includes('quota');
};

app.post('/', async (c) => {
  try {
    const { message, persona } = await c.req.json();
    const selectedPersona = PERSONAS[persona as keyof typeof PERSONAS] || PERSONAS.samara;

    const keys = [
      process.env.GROQ_1,
      process.env.GROQ_2,
      process.env.GROQ_3,
      process.env.GROQ_4,
    ].filter(Boolean) as string[];

    if (keys.length === 0) {
      return c.json({
        response: selectedPersona.error,
        persona: selectedPersona.name,
        error: "Missing API keys"
      });
    }

    // Try each model in order (primary first, then fallback)
    // For each model, try all keys before giving up on that model
    const tryWithModel = async (modelIndex: number): Promise<any> => {
      if (modelIndex >= selectedPersona.models.length) {
        // All models exhausted
        return {
          response: selectedPersona.error,
          persona: selectedPersona.name,
          error: "All models and keys exhausted"
        };
      }

      const model = selectedPersona.models[modelIndex];

      // Try all keys for this model
      const tryWithKey = async (attempt: number): Promise<any> => {
        if (attempt >= keys.length) {
          // All keys failed for this model — try next model
          console.warn(`All keys failed for model ${model}, trying fallback model...`);
          return tryWithModel(modelIndex + 1);
        }

        const keyIndex = (keyCounter + attempt) % keys.length;
        const currentKey = keys[keyIndex];

        try {
          const groq = createGroq({ apiKey: currentKey });

          const { text } = await generateText({
            model: groq(model),
            system: selectedPersona.system,
            prompt: message,
          });

          return {
            response: text,
            persona: selectedPersona.name,
            model_used: model,
            session_id: Math.random().toString(36).substring(7),
          };
        } catch (error) {
          console.error(`Model: ${model} | Key attempt ${attempt + 1} failed:`, error);

          if (isRateLimitError(error)) {
            // Rate limited — try next key for same model
            return tryWithKey(attempt + 1);
          }

          // Non-rate-limit error — still try next key
          return tryWithKey(attempt + 1);
        }
      };

      return tryWithKey(0);
    };

    const result = await tryWithModel(0);
    keyCounter = (keyCounter + 1) % keys.length;

    return c.json(result);
  } catch (error) {
    console.error('API Route Error:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
});

export const GET = handle(app);
export const POST = handle(app);