import React, { useState, KeyboardEvent } from 'react';
import { Paperclip, ArrowUp } from 'lucide-react';
import { useChat } from '../../context/ChatContext';

export const ChatInput: React.FC = () => {
  const [input, setInput] = useState('');
  const { sendMessage, isLoading } = useChat();

  const handleSend = () => {
    if (input.trim() && !isLoading) {
      sendMessage(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="relative flex items-center bg-brand-panel border border-brand-border rounded-2xl p-2 pl-4 focus-within:border-brand-primary transition-colors">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          disabled={isLoading}
          className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-[15px]"
        />
        
        <div className="flex items-center gap-2 ml-2">
          <button 
            type="button" 
            className="p-2 text-gray-400 hover:text-white transition-colors disabled:opacity-50"
            disabled={isLoading}
          >
            <Paperclip className="w-5 h-5" />
          </button>
          
          <button
            type="button"
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="p-2.5 bg-gradient-to-r from-brand-primary to-purple-600 text-white rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
