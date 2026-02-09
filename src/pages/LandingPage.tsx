import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

const LandingPage: React.FC = () => {
  const { user, signIn, signOut } = useAuth();
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();

  const handleGenerate = async () => {
    if (!user) {
      signIn();
      return;
    }

    if (!prompt.trim()) return;

    try {
      // Generate a 5-digit code for the project
      const projectCode = Math.floor(10000 + Math.random() * 90000).toString();

      // Redirect to project workspace with the prompt as state
      navigate(`/project/${projectCode}`, { state: { initialPrompt: prompt } });
    } catch (error) {
      console.error('Error starting project:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-white font-display">

      {/* Background Pattern Overlay */}
      <div className="fixed inset-0 z-[-1] mesh-gradient opacity-50"></div>
      <div className="fixed inset-0 z-[-1] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">

          {/* Top Navigation Bar */}
          <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-onyx-border/50 bg-background-dark/80 backdrop-blur-md px-6 md:px-16 py-4">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(55,19,236,0.5)]">
                <span className="material-symbols-outlined text-xl">terminal</span>
              </div>
              <Link to="/"><h2 className="text-white text-xl font-bold leading-tight tracking-tight group-hover:text-primary transition-colors">OnyxGPT</h2></Link>
            </div>

            <div className="flex flex-1 justify-end gap-6 md:gap-10 items-center">
              <nav className="hidden md:flex items-center gap-8">
                <a className="text-slate-400 hover:text-white text-sm font-medium transition-colors" href="#">Showcase</a>
                {user && <Link to="/projects" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">My Projects</Link>}
                <Link to="/docs" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Docs</Link>
              </nav>

              <div className="h-6 w-px bg-onyx-border hidden md:block"></div>

              {user ? (
                <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                    <p className="text-xs text-slate-400 font-medium">{user.username}</p>
                    <button onClick={signOut} className="text-[10px] text-primary hover:text-white transition-colors uppercase font-bold tracking-widest">Sign out</button>
                  </div>
                  <div className="size-10 rounded-full bg-onyx-surface border border-onyx-border flex items-center justify-center text-primary font-bold">
                    {user.username.charAt(0).toUpperCase() || 'U'}
                  </div>
                </div>
              ) : (
                <button
                  onClick={signIn}
                  className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span className="truncate">Sign in</span>
                </button>
              )}
            </div>
          </header>

          <main className="flex flex-1 flex-col items-center justify-center px-6 py-20">
            <div className="max-w-[1000px] w-full flex flex-col items-center text-center">

              {/* Hero Section Text */}
              <div className="mb-12 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  v2.0 Beta Now Live
                </div>
                <h1 className="text-white tracking-tight text-4xl md:text-7xl font-bold leading-tight max-w-3xl mx-auto">
                  Develop at the speed of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">thought.</span>
                </h1>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                  OnyxGPT turns natural language into production-ready React + Vite applications instantly. Built for the modern engineer.
                </p>
              </div>

              {/* Main Command Input */}
              <div className="w-full max-w-3xl glass-panel rounded-2xl p-2 glow-input transition-all duration-300">
                <div className="flex items-center gap-4 bg-onyx-surface rounded-xl p-4 md:p-6 border border-onyx-border shadow-inner">
                  <div className="text-primary">
                    <span className="material-symbols-outlined text-3xl">prompt_suggestion</span>
                  </div>
                  <div className="flex-1 text-left">
                    <input
                      className="w-full bg-transparent border-none focus:ring-0 text-white text-lg md:text-xl placeholder:text-slate-600 font-medium"
                      placeholder="Describe the app you want to build..."
                      type="text"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                    />
                  </div>
                  <button
                    onClick={handleGenerate}
                    className="bg-primary text-white p-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center shadow-lg shadow-primary/20"
                  >
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Prompt Chips */}
              <div className="mt-8 flex flex-wrap justify-center gap-3 px-4">
                <span className="text-slate-500 text-sm font-medium py-1">Try:</span>
                <button
                  onClick={() => setPrompt("Portfolio with dark mode")}
                  className="flex items-center gap-2 rounded-full bg-onyx-surface border border-onyx-border px-4 py-1.5 text-slate-300 text-sm hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <span className="material-symbols-outlined text-xs text-primary">auto_awesome</span>
                  Portfolio with dark mode
                </button>
                <button
                  onClick={() => setPrompt("Crypto dashboard")}
                  className="flex items-center gap-2 rounded-full bg-onyx-surface border border-onyx-border px-4 py-1.5 text-slate-300 text-sm hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <span className="material-symbols-outlined text-xs text-primary">dashboard</span>
                  Crypto dashboard
                </button>
                <button
                  onClick={() => setPrompt("Task manager")}
                  className="flex items-center gap-2 rounded-full bg-onyx-surface border border-onyx-border px-4 py-1.5 text-slate-300 text-sm hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <span className="material-symbols-outlined text-xs text-primary">checklist</span>
                  Task manager
                </button>
              </div>

              {/* Feature Image / Preview */}
              <div className="mt-24 w-full relative">
                <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full opacity-30"></div>
                <div className="relative glass-panel rounded-2xl overflow-hidden border border-onyx-border shadow-2xl">
                  <div className="h-8 bg-onyx-border/30 flex items-center px-4 gap-1.5">
                    <div className="size-2.5 rounded-full bg-red-500/50"></div>
                    <div className="size-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="size-2.5 rounded-full bg-green-500/50"></div>
                    <div className="ml-4 text-[10px] text-slate-500 font-mono tracking-widest uppercase">onyxgpt-compiler-v2.exe</div>
                  </div>
                  <div className="aspect-video w-full bg-background-dark/50 flex items-center justify-center">
                    <img className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQwLkRLAVFJdsu0fil5AtTjxXD5wpfjx-Hw57-U3dqU-e4enNjT60ZZbmUrhxUPV3DaZdSsZP8F0bauyYbt9-34nwGp9tDYMhfQAoBYp0dQYBMsxJhflpDuipTv3T33yVnsKnHyNGosoGWhg8y1FXytcAMvVtzD4NHN_NO88fRz5Ho0lVj2-C0fHW35KHMmgHXOeVEYzwkUkjVgOwTPi1OHdmEreGOJhQcD9VJFagW-xKxyZbc9C9SwZEGCG-0it1nYQULT-_IXMs" alt="OnyxGPT Interface" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-6 rounded-xl glass-panel border border-primary/30 flex flex-col items-center gap-4">
                        <div className="flex gap-2">
                          <div className="h-2 w-8 bg-primary rounded-full animate-pulse"></div>
                          <div className="h-2 w-12 bg-slate-700 rounded-full"></div>
                          <div className="h-2 w-6 bg-slate-700 rounded-full"></div>
                        </div>
                        <p className="text-white font-mono text-sm">Generating production build...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Secondary Info Section */}
          <section className="py-24 bg-onyx-surface/30 border-y border-onyx-border">
            <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <h3 className="text-xl font-bold text-white">Instant Scaffolding</h3>
                <p className="text-slate-400 leading-relaxed">From prompt to Vite-ready project in under 10 seconds. No more boilerplate fatigue.</p>
              </div>
              <div className="space-y-4">
                <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">auto_fix_high</span>
                </div>
                <h3 className="text-xl font-bold text-white">Smart Refactoring</h3>
                <p className="text-slate-400 leading-relaxed">Iterate on your design by simply asking. "Change the theme to midnight" or "Add a sidebar."</p>
              </div>
              <div className="space-y-4">
                <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">deployed_code</span>
                </div>
                <h3 className="text-xl font-bold text-white">Cloud Deploy</h3>
                <p className="text-slate-400 leading-relaxed">Integrated deployment pipeline. Go from idea to live URL with a single command.</p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 px-6 md:px-16 border-t border-onyx-border flex flex-col md:flex-row justify-between items-center gap-8 bg-background-dark">
            <div className="flex items-center gap-3">
              <div className="size-6 bg-onyx-border rounded flex items-center justify-center text-slate-400">
                <span className="material-symbols-outlined text-sm">terminal</span>
              </div>
              <span className="text-slate-500 font-medium text-sm">© 2024 OnyxGPT.dev</span>
            </div>
            <div className="flex gap-8">
              <a className="text-slate-500 hover:text-white transition-colors text-sm" href="#">Twitter</a>
              <a className="text-slate-500 hover:text-white transition-colors text-sm" href="#">GitHub</a>
              <a className="text-slate-500 hover:text-white transition-colors text-sm" href="#">Discord</a>
              <a className="text-slate-500 hover:text-white transition-colors text-sm" href="#">Terms</a>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500"></div>
              <span className="text-xs text-slate-500 font-medium uppercase tracking-widest">All Systems Operational</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
