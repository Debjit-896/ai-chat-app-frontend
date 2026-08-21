import api from '../api/axios';

export interface ChatMessageData {
  id: string;
  text: string;
  isAi: boolean;
  timestamp: string;
}

export interface ChatSession {
  id: string;
  title: string;
  lastUpdated: string;
}

export const chatService = {
  // Send a message to the AI
  sendMessage: async (message: string): Promise<{ response: string }> => {
    try {
      const response = await api.post('/chat', { message });
      return response.data;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  },

  // Mock function for development to simulate API call without backend
  mockSendMessage: async (message: string): Promise<{ response: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          response: `This is a mock response to: "${message}". Connect to the backend for real AI responses.`
        });
      }, 1500);
    });
  },

  // Get history (mocked for now)
  getHistory: async (): Promise<ChatSession[]> => {
    return [
      { id: '1', title: 'What is AI?', lastUpdated: '10:30 AM' },
      { id: '2', title: 'Explain Quantum Computing', lastUpdated: 'Yesterday' },
      { id: '3', title: 'JavaScript vs TypeScript', lastUpdated: '2 Days ago' },
      { id: '4', title: 'How to learn React?', lastUpdated: '3 Days ago' },
    ];
  }
};
