import React from 'react';
import ProjectLayout from '../components/ProjectLayout';

const Database: React.FC = () => {
  return (
    <ProjectLayout>
      <div className="h-full bg-onyx-surface border border-onyx-border rounded-xl shadow-sm overflow-hidden flex">
        {/* Sidebar for Tables */}
        <aside className="w-64 border-r border-onyx-border bg-onyx-surface/30 flex flex-col">
          <div className="p-4 border-b border-onyx-border">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Supabase Tables</span>
              <span className="material-symbols-outlined text-xs text-primary cursor-pointer">add</span>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            <div className="flex items-center gap-2 px-3 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20 text-xs font-bold">
              <span className="material-symbols-outlined text-sm">table_chart</span>
              projects
            </div>
            <div className="flex items-center gap-2 px-3 py-2 text-slate-500 hover:bg-border-dark rounded-lg text-xs font-medium transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-sm text-slate-600">table_chart</span>
              project_files
            </div>
            <div className="flex items-center gap-2 px-3 py-2 text-slate-500 hover:bg-border-dark rounded-lg text-xs font-medium transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-sm text-slate-600">table_chart</span>
              chat_messages
            </div>
          </div>
        </aside>

        {/* Data Grid Placeholder */}
        <div className="flex-1 flex flex-col">
          <div className="h-12 border-b border-onyx-border flex items-center px-6 justify-between bg-background-dark/30">
            <div className="flex items-center gap-4">
              <h2 className="text-sm font-bold">projects</h2>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/10 text-green-500 border border-green-500/20 uppercase tracking-wider">Production</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 rounded-lg border border-onyx-border text-[10px] font-bold uppercase tracking-widest hover:bg-border-dark transition-colors">Export CSV</button>
            </div>
          </div>
          <div className="flex-1 p-8 flex items-center justify-center italic text-slate-500 text-sm">
            <div className="text-center space-y-4">
              <span className="material-symbols-outlined text-4xl text-slate-700">storage</span>
              <p>AI will populate this table as it builds the application.</p>
            </div>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
};

export default Database;
