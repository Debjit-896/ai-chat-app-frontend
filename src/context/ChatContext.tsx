import React, { createContext, useContext, useState, ReactNode, useCallback, useEffect } from 'react';
import { chatService, ChatMessageData, ChatSession } from '../services/chatService';

interface ChatContextType {
  messages: ChatMessageData[];
  sessions: ChatSession[];
  isLoading: boolean;
  error: string | null;
  currentSessionId: string | null;
  sendMessage: (text: string) => Promise<void>;
  clearChat: () => void;
  createNewSession: () => void;
  loadSession: (id: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<ChatMessageData[]>([]);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load initial history mock
  useEffect(() => {
    chatService.getHistory().then(setSessions).catch(console.error);
  }, []);

  const createNewSession = useCallback(() => {
    setMessages([]);
    setCurrentSessionId(null);
    setError(null);
  }, []);

  const loadSession = useCallback((id: string) => {
    // In a real app, fetch messages for this session
    setMessages([{
      id: 'mock-1',
      text: 'Loaded chat history for session ' + id + '. (Backend integration required to load actual messages)',
      isAi: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }]);
    setCurrentSessionId(id);
    setError(null);
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    // Create session if it doesn't exist
    let activeSessionId = currentSessionId;
    if (!activeSessionId) {
      const newSession: ChatSession = {
        id: Date.now().toString(),
        title: text.length > 25 ? text.substring(0, 25) + '...' : text,
        lastUpdated: 'Just now'
      };
      setSessions(prev => [newSession, ...prev]);
      setCurrentSessionId(newSession.id);
      activeSessionId = newSession.id;
    }

    // Add user message
    const userMessage: ChatMessageData = {
      id: Date.now().toString() + Math.random(),
      text,
      isAi: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      // Use mockSendMessage for UI development, switch to sendMessage for real backend
      const response = await chatService.mockSendMessage(text);
      
      const aiMessage: ChatMessageData = {
        id: Date.now().toString() + Math.random(),
        text: response.response,
        isAi: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
      
      // Update session last updated time
      setSessions(prev => prev.map(s => s.id === activeSessionId ? { ...s, lastUpdated: 'Just now' } : s));
    } catch (err: any) {
      setError(err.message || "Failed to communicate with AI");
    } finally {
      setIsLoading(false);
    }
  }, [currentSessionId]);

  const clearChat = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return (
    <ChatContext.Provider value={{ messages, sessions, isLoading, error, currentSessionId, sendMessage, clearChat, createNewSession, loadSession }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
