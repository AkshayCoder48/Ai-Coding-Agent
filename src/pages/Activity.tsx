import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import { supabase } from '../lib/supabase';

const Activity: React.FC = () => {
  // Simple check for Supabase connection (if client is initialized and URL is present)
  const isSupabaseConnected = !!supabase;
  const isGitHubConnected = false; // Placeholder until GitHub OAuth is implemented

  return (
    <ProjectLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full overflow-hidden">
        {/* Connection Status Panel */}
        <div className="lg:col-span-1 flex flex-col gap-6 overflow-y-auto custom-scrollbar pb-6">
          <div className="bg-onyx-surface border border-onyx-border rounded-xl p-6 space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Integrations</h2>

            <div className="space-y-4">
              {/* Supabase Connection */}
              <div className="flex items-center justify-between p-4 bg-background-dark/50 border border-onyx-border rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-[#3ECF8E]/10 rounded-lg flex items-center justify-center">
                    <img src="https://supabase.com/dashboard/img/supabase-logo.svg" alt="Supabase" className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-tight">Supabase</h3>
                    <p className="text-[10px] text-slate-500 font-medium">Cloud Database</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`size-2 rounded-full ${isSupabaseConnected ? 'bg-emerald-500' : 'bg-red-500 animate-pulse'}`}></span>
                  <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">
                    {isSupabaseConnected ? 'Active' : 'Offline'}
                  </span>
                </div>
              </div>

              {/* GitHub Connection */}
              <div className="flex items-center justify-between p-4 bg-background-dark/50 border border-onyx-border rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="size-6 invert" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-tight">GitHub</h3>
                    <p className="text-[10px] text-slate-500 font-medium">Source Control</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`size-2 rounded-full ${isGitHubConnected ? 'bg-emerald-500' : 'bg-slate-700'}`}></span>
                  <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">
                    {isGitHubConnected ? 'Connected' : 'Disconnected'}
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-onyx-border rounded-xl text-xs font-bold text-slate-300 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">add_link</span>
              Manage Connections
            </button>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
            <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Usage Metrics</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-slate-400 font-bold uppercase">AI Generations</span>
                <span className="text-xs font-mono text-white">12 / 100</span>
              </div>
              <div className="w-full h-1.5 bg-background-dark rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[12%]"></div>
              </div>
              <p className="text-[10px] text-slate-500 italic mt-2">Next reset in 24 days</p>
            </div>
          </div>
        </div>

        {/* Activity Stream Panel */}
        <div className="lg:col-span-2 flex flex-col bg-onyx-surface border border-onyx-border rounded-xl shadow-sm overflow-hidden">
          <div className="h-12 border-b border-onyx-border flex items-center px-6 bg-background-dark/30">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Activity Stream</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
            <div className="relative pl-8 before:absolute before:left-3 before:top-2 before:bottom-[-24px] before:w-[1px] before:bg-onyx-border last:before:hidden">
              <div className="absolute left-0 top-0 size-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary z-10">
                <span className="material-symbols-outlined text-xs">auto_awesome</span>
              </div>
              <div className="bg-background-dark/50 border border-onyx-border rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-sm font-bold text-white">Project Initialization</h3>
                    <p className="text-xs text-slate-500">OnyxGPT started the workspace</p>
                  </div>
                  <span className="text-[10px] text-slate-600 font-mono">10:45:01 AM</span>
                </div>
              </div>
            </div>

            <div className="relative pl-8 before:absolute before:left-3 before:top-2 before:bottom-[-24px] before:w-[1px] before:bg-onyx-border last:before:hidden">
              <div className="absolute left-0 top-0 size-6 rounded-full bg-amber-900/20 border border-amber-800/30 flex items-center justify-center text-amber-500 z-10">
                <span className="material-symbols-outlined text-xs">terminal</span>
              </div>
              <div className="bg-background-dark/50 border border-onyx-border rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-sm font-bold text-white">npm install lucide-react</h3>
                    <p className="text-xs text-slate-500">Installing required dependencies</p>
                  </div>
                  <span className="text-[10px] text-slate-600 font-mono">10:47:12 AM</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center py-12 text-slate-600 space-y-2">
              <span className="material-symbols-outlined text-3xl opacity-20">history</span>
              <p className="text-xs italic uppercase tracking-widest font-bold">End of Stream</p>
            </div>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
};

export default Activity;
