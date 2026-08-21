import React from 'react';
import { Sparkles } from 'lucide-react';

export const LoadingIndicator: React.FC = () => {
  return (
    <div className="w-full py-6 text-gray-200 bg-brand-panel/30">
      <div className="max-w-4xl mx-auto flex gap-6 px-4 items-center">
        {/* Avatar */}
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-tr from-brand-primary to-purple-600 flex items-center justify-center border border-purple-500/50 shadow-[0_0_15px_rgba(99,91,255,0.3)] animate-pulse">
          <Sparkles className="w-4 h-4 text-white" />
        </div>

        {/* Loading Dots */}
        <div className="flex space-x-2 h-4 items-center">
          <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};
