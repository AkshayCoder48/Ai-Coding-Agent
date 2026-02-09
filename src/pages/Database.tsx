import React, { useState } from 'react';
import ProjectLayout from '../components/ProjectLayout';

const Database: React.FC = () => {
  // Simulating connection state for the restriction requirement
  const [isConnected, setIsConnected] = useState(true); // Default to true for now but UI will allow "disconnecting" for demo

  if (!isConnected) {
    return (
      <ProjectLayout>
        <div className="h-full bg-onyx-surface border border-onyx-border rounded-xl shadow-sm flex flex-col items-center justify-center text-center p-12 space-y-6">
          <div className="size-20 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/20 mb-4">
            <span className="material-symbols-outlined text-4xl text-amber-500">lock</span>
          </div>
          <div className="max-w-md space-y-2">
            <h2 className="text-xl font-bold text-white">Supabase Connection Required</h2>
            <p className="text-sm text-slate-400">To manage your database tables and view live data, you must have an active Supabase integration connected to this project.</p>
          </div>
          <button
            onClick={() => setIsConnected(true)}
            className="px-6 py-3 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <span className="material-symbols-outlined">link</span>
            Connect Supabase
          </button>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Authorized Personnel Only</p>
        </div>
      </ProjectLayout>
    );
  }

  return (
    <ProjectLayout>
      <div className="h-full bg-onyx-surface border border-onyx-border rounded-xl shadow-sm overflow-hidden flex">
        {/* Sidebar for Tables */}
        <aside className="w-64 border-r border-onyx-border bg-onyx-surface/30 flex flex-col shrink-0">
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
            <div className="mt-8 px-3">
              <button
                onClick={() => setIsConnected(false)}
                className="w-full text-left px-2 py-1 text-[10px] text-red-500/50 hover:text-red-500 transition-colors uppercase font-bold tracking-tighter"
              >
                Disconnect DB
              </button>
            </div>
          </div>
        </aside>

        {/* Data Grid Placeholder */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="h-12 border-b border-onyx-border flex items-center px-6 justify-between bg-background-dark/30 shrink-0">
            <div className="flex items-center gap-4">
              <h2 className="text-sm font-bold">projects</h2>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/10 text-green-500 border border-green-500/20 uppercase tracking-wider">Production</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex bg-background-dark border border-onyx-border rounded-lg p-0.5">
                <button className="px-3 py-1 text-[10px] font-bold bg-border-dark text-white rounded-md">Table</button>
                <button className="px-3 py-1 text-[10px] font-bold text-slate-500 hover:text-slate-300">API</button>
              </div>
              <button className="px-3 py-1.5 rounded-lg border border-onyx-border text-[10px] font-bold uppercase tracking-widest hover:bg-border-dark transition-colors">Export CSV</button>
            </div>
          </div>
          <div className="flex-1 p-8 flex items-center justify-center italic text-slate-500 text-sm overflow-y-auto">
            <div className="text-center space-y-4 max-w-sm">
              <span className="material-symbols-outlined text-4xl text-slate-700 animate-pulse">storage</span>
              <p className="leading-relaxed">AI will populate this table as it builds the application. Once the schema is generated, live data will appear here.</p>
              <div className="flex flex-wrap gap-2 justify-center pt-4">
                <span className="px-2 py-1 bg-border-dark rounded text-[10px] font-mono">id: uuid</span>
                <span className="px-2 py-1 bg-border-dark rounded text-[10px] font-mono">name: text</span>
                <span className="px-2 py-1 bg-border-dark rounded text-[10px] font-mono">user_id: uuid</span>
                <span className="px-2 py-1 bg-border-dark rounded text-[10px] font-mono">...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
};

export default Database;
