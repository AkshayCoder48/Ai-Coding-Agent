import React from 'react';
import ProjectLayout from '../components/ProjectLayout';

const Activity: React.FC = () => {
  return (
    <ProjectLayout>
      <div className="h-full bg-onyx-surface border border-onyx-border rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="h-12 border-b border-onyx-border flex items-center px-6 bg-background-dark/30">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Action Stream</h2>
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
    </ProjectLayout>
  );
};

export default Activity;
