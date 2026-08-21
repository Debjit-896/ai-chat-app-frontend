import React from 'react';
import { Sparkles, User } from 'lucide-react';
import { ChatMessageData } from '../../services/chatService';
import clsx from 'clsx';

interface ChatMessageProps {
  message: ChatMessageData;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const { text, isAi } = message;

  return (
    <div className={clsx("w-full py-6 text-gray-200", isAi ? "bg-brand-panel/30" : "")}>
      <div className="max-w-4xl mx-auto flex gap-6 px-4">
        {/* Avatar */}
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mt-1">
          {isAi ? (
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-primary to-purple-600 flex items-center justify-center border border-purple-500/50 shadow-[0_0_15px_rgba(99,91,255,0.3)]">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
              <User className="w-5 h-5 text-gray-300" />
            </div>
          )}
        </div>

        {/* Message Content */}
        <div className="flex-1 space-y-2">
          <div className="font-semibold text-[15px] text-white">
            {isAi ? "Deb AI" : "You"}
          </div>
          <div className="text-[15px] leading-relaxed text-gray-300 whitespace-pre-wrap">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};
