import React from 'react';
import ProjectLayout from '../components/ProjectLayout';

const Settings: React.FC = () => {
  return (
    <ProjectLayout>
      <div className="h-full bg-onyx-surface border border-onyx-border rounded-xl shadow-sm overflow-hidden flex flex-col p-8 space-y-8 max-w-4xl mx-auto custom-scrollbar overflow-y-auto">
        <div className="flex items-center gap-4 border-b border-onyx-border pb-6">
          <div className="size-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(55,19,236,0.2)]">
            <span className="material-symbols-outlined text-3xl">settings</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Project Settings</h2>
            <p className="text-slate-500 text-sm">Configure AI behavior and environment</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">model_training</span>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">LLM Configuration</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300 ml-1">Predefined Model</label>
                <div className="relative">
                  <select className="w-full bg-background-dark border border-onyx-border rounded-lg px-4 py-2 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary appearance-none outline-none transition-all">
                    <option>GPT-4o (Optimized)</option>
                    <option>Claude 3.5 Sonnet</option>
                    <option>Onyx-Engine-v2</option>
                    <option>Gemini 1.5 Pro</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-2 text-slate-500 pointer-events-none">expand_more</span>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300 ml-1">Custom Model ID</label>
                <input className="w-full bg-background-dark border border-onyx-border rounded-lg px-4 py-2 text-sm text-white placeholder:text-slate-700 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="e.g. gpt-4-turbo" type="text" />
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">smart_toy</span>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Agentic Behavior</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-background-dark/50 border border-onyx-border">
                <span className="text-xs text-slate-300">Auto-Execution</span>
                <div className="size-5 rounded bg-primary/20 border border-primary/40 flex items-center justify-center cursor-pointer">
                  <span className="material-symbols-outlined text-xs text-primary">check</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-background-dark/50 border border-onyx-border">
                <span className="text-xs text-slate-300">Tool Verification</span>
                <div className="size-5 rounded border border-onyx-border cursor-pointer"></div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-background-dark/50 border border-onyx-border">
                <span className="text-xs text-slate-300">Strict Sandbox</span>
                <div className="size-5 rounded bg-primary/20 border border-primary/40 flex items-center justify-center cursor-pointer">
                  <span className="material-symbols-outlined text-xs text-primary">check</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="pt-6 border-t border-onyx-border flex justify-end gap-3">
          <button className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Reset Defaults</button>
          <button className="px-6 py-2 rounded-lg bg-primary text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">Save Changes</button>
        </div>
      </div>
    </ProjectLayout>
  );
};

export default Settings;
