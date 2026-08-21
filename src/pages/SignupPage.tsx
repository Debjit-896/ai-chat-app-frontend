import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles, MessageSquare, Mail, Lock, EyeOff, Eye, Heart, User } from 'lucide-react';

export const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder signup logic
    localStorage.setItem('jwt_token', 'mock_token');
    navigate('/');
  };

  return (
    <div className="flex h-screen w-full bg-brand-dark text-white relative overflow-hidden">
      {/* Background radial gradients for ambient light */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex w-full h-full max-w-6xl mx-auto z-10 p-4 lg:p-6 items-center">
        
        {/* Left Side - Branding & Illustration */}
        <div className="hidden lg:flex flex-col w-1/2 h-full justify-center py-4 pr-8 relative">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2 justify-center">
              <div className="relative">
                 <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-brand-primary to-purple-600 flex items-center justify-center border border-purple-500/50 shadow-[0_0_20px_rgba(99,91,255,0.4)]">
                   <MessageSquare className="w-7 h-7 text-white fill-current" />
                 </div>
                 <Sparkles className="w-4 h-4 text-brand-primary absolute -top-1 -right-1" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-center mb-1 text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-purple-400">Deb AI</h1>
            <p className="text-sm text-gray-300 text-center mx-auto max-w-sm">
              Your AI Assistant for Smarter Conversations
            </p>
          </div>

          <div className="flex justify-center items-center relative mb-4">
             {/* Large glowing chat bubble placeholder */}
             <div className="relative w-40 h-40 flex items-center justify-center transform scale-90">
               <div className="absolute inset-0 bg-brand-primary/20 blur-3xl rounded-full"></div>
               <div className="w-40 h-32 bg-gradient-to-br from-[#2a2a4a] to-[#1a1a2e] rounded-3xl border border-brand-primary/50 flex items-center justify-center relative shadow-[0_0_50px_rgba(99,91,255,0.3)] backdrop-blur-sm z-10 transform -rotate-2">
                 <div className="flex space-x-2">
                   <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(99,91,255,0.8)]"></div>
                   <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse delay-100 shadow-[0_0_10px_rgba(99,91,255,0.8)]"></div>
                   <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse delay-200 shadow-[0_0_10px_rgba(99,91,255,0.8)]"></div>
                 </div>
                 <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-t-[20px] border-t-[#1a1a2e] border-r-[12px] border-r-transparent filter drop-shadow-[0_10px_10px_rgba(99,91,255,0.2)]"></div>
               </div>
               
               {/* Ground reflection */}
               <div className="absolute -bottom-6 w-32 h-3 bg-brand-primary/30 blur-md rounded-[100%]"></div>
               <div className="absolute -bottom-6 w-20 h-1 bg-brand-primary/50 blur-sm rounded-[100%]"></div>
             </div>
          </div>

          <div className="text-center text-[12px] text-gray-400 flex items-center justify-center gap-1 mt-6">
            Design and developed by <span className="text-brand-secondary font-medium">Debjit</span> <Heart className="w-3.5 h-3.5 text-brand-secondary" />
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end h-full">
          <div className="w-full max-w-[420px] bg-[#11111a]/80 backdrop-blur-xl border border-brand-border rounded-3xl p-6 sm:p-7 shadow-2xl relative">
            
            <div className="flex flex-col items-center mb-5">
              <div className="relative mb-2">
                 <div className="w-12 h-12 rounded-full flex items-center justify-center border border-purple-500/30 shadow-[0_0_15px_rgba(99,91,255,0.2)] bg-[#1A1A24]">
                   <User className="w-6 h-6 text-gray-300" />
                 </div>
                 <Sparkles className="w-3.5 h-3.5 text-brand-primary absolute -top-1 -right-1" />
              </div>
              <h2 className="text-xl font-bold mb-1"><span className="text-brand-secondary">Create</span> your account</h2>
              <p className="text-[13px] text-gray-400">Join Deb AI and start a smarter way to chat</p>
            </div>

            <form onSubmit={handleSignup} className="space-y-3">
              <div>
                <label className="block text-[12px] font-medium text-gray-300 mb-1">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-4 w-4 text-gray-500" />
                  </div>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-[#1A1A24] border border-brand-border rounded-xl pl-9 pr-3 py-2 text-[13px] text-white focus:border-brand-primary outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-medium text-gray-300 mb-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-gray-500" />
                  </div>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-[#1A1A24] border border-brand-border rounded-xl pl-9 pr-14 py-2 text-[13px] text-white focus:border-brand-primary outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                  <button 
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-[12px] text-brand-secondary hover:text-brand-primary transition-colors font-medium"
                  >
                    Verify
                  </button>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">We'll send you a verification code (OTP)</p>
              </div>

              <div>
                <label className="block text-[12px] font-medium text-gray-300 mb-1">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-500" />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    required
                    className="w-full bg-[#1A1A24] border border-brand-border rounded-xl pl-9 pr-10 py-2 text-[13px] text-white focus:border-brand-primary outline-none transition-colors"
                    placeholder="Enter your password"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-300"
                  >
                    {showPassword ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                  </button>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">Password must be at least 8 characters</p>
              </div>

              <div>
                <label className="block text-[12px] font-medium text-gray-300 mb-1">Confirm Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-500" />
                  </div>
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    required
                    className="w-full bg-[#1A1A24] border border-brand-border rounded-xl pl-9 pr-10 py-2 text-[13px] text-white focus:border-brand-primary outline-none transition-colors"
                    placeholder="Confirm your password"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-300"
                  >
                    {showConfirmPassword ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-brand-primary to-purple-600 hover:opacity-90 text-white font-medium p-2.5 rounded-xl transition-opacity mt-4 text-[13px]"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-4 text-center text-[12px] text-gray-400">
              Already have an account? <Link to="/login" className="text-brand-secondary hover:text-brand-primary font-medium">Login</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
