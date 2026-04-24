export interface ChatResponse {
  response: string;
  persona: string;
  session_id: string;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

const API_URL = "https://ariartry-revarie-engine-v1.hf.space/api/chat";

export async function sendChatMessage(
  message: string,
  persona: 'artery' | 'samara',
  participantId: string = "web_user",
  sessionId?: string
): Promise<ChatResponse> {
  const apiKey = process.env.NEXT_PUBLIC_CHAT_API_KEY || "12345678901234567890123456789012";

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      participant_id: participantId,
      message,
      persona,
      session_id: sessionId,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || `API Error: ${response.status}`);
  }

  return response.json();
}
