import React, { useEffect, useRef } from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { ChatInput } from '../components/chat/ChatInput';
import { ChatMessage } from '../components/chat/ChatMessage';
import { LoadingIndicator } from '../components/common/LoadingIndicator';
import { useChat } from '../context/ChatContext';
import { Sparkles, Menu } from 'lucide-react';

export const ChatPage: React.FC = () => {
  const { messages, isLoading, error } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Mobile sidebar state could go here

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="flex h-screen w-full bg-brand-dark text-white overflow-hidden">
      {/* Sidebar for Desktop */}
      <div className="hidden md:block h-full">
        <Sidebar />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-full relative">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-brand-border bg-brand-panel">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-brand-primary" />
            <h1 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-purple-400">Deb AI</h1>
          </div>
          <button className="p-2">
            <Menu className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-brand-border scrollbar-track-transparent">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-brand-panel flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(99,91,255,0.2)]">
                <Sparkles className="w-10 h-10 text-brand-primary" />
              </div>
              <h2 className="text-3xl font-semibold mb-2">
                <span className="text-brand-secondary">Hello!</span> How can I help you today?
              </h2>
              <p className="text-gray-400">Ask me anything. I'm here to help!</p>
            </div>
          ) : (
            <div className="pb-32 pt-4">
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}
              {isLoading && <LoadingIndicator />}
              
              {error && (
                <div className="max-w-4xl mx-auto p-4 my-4 bg-red-900/20 border border-red-500/50 rounded-lg text-red-200 text-sm text-center">
                  {error}
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Area (Fixed at bottom) */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-dark via-brand-dark to-transparent pt-10 pb-6 px-4">
          <ChatInput />
        </div>
      </div>
    </div>
  );
};
