import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, MessageSquare, LogIn, Plus } from 'lucide-react';
import { useChat } from '../../context/ChatContext';

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const { sessions, currentSessionId, loadSession, createNewSession } = useChat();

  return (
    <div className="w-64 h-full bg-[#111119] border-r border-brand-border flex flex-col p-4 flex-shrink-0 text-gray-300">
      {/* Brand Header */}
      <div className="flex items-center justify-between mb-8 px-2 mt-2">
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-brand-primary" />
          <h1 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-purple-400">Deb AI</h1>
        </div>
        <button onClick={createNewSession} className="p-1 hover:bg-brand-panel rounded-lg transition-colors text-gray-400 hover:text-white" title="New Chat">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* History List */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden space-y-2 pr-2 scrollbar-thin">
        <div className="text-xs text-gray-500 font-medium mb-4 px-2 uppercase tracking-wider">History</div>
        
        {sessions.map((session) => (
          <button 
            key={session.id}
            onClick={() => loadSession(session.id)}
            className={`w-full flex items-center justify-between text-left p-2 rounded-lg transition-colors group ${currentSessionId === session.id ? 'bg-brand-panel text-white' : 'hover:bg-brand-panel'}`}
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <MessageSquare className={`w-4 h-4 flex-shrink-0 ${currentSessionId === session.id ? 'text-brand-primary' : 'text-brand-secondary group-hover:text-brand-primary transition-colors'}`} />
              <span className={`text-sm truncate w-28 transition-colors ${currentSessionId === session.id ? 'text-white font-medium' : 'group-hover:text-white'}`}>{session.title}</span>
            </div>
            <span className="text-[10px] text-gray-500 flex-shrink-0">{session.lastUpdated}</span>
          </button>
        ))}
      </div>

      {/* Footer / Login */}
      <div className="pt-4 border-t border-brand-border mt-auto">
        <button 
          onClick={() => navigate('/login')}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-purple-600 hover:opacity-90 text-white p-3 rounded-xl transition-opacity font-medium"
        >
          <LogIn className="w-4 h-4" />
          <span>Login</span>
        </button>
        <div className="text-center text-[10px] text-gray-500 mt-4">
          Design and developed by <a href="#" className="text-brand-secondary hover:underline">Debjit</a>
        </div>
      </div>
    </div>
  );
};
