import React, { useEffect, useState } from 'react';
import ProjectLayout from '../components/ProjectLayout';
import { useWebContainer } from '../contexts/WebContainerContext';

const Workspace: React.FC = () => {
  const { webcontainer } = useWebContainer();
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (!webcontainer) return;

    const handleServerReady = (port: number, serverUrl: string) => {
      setUrl(serverUrl);
    };

    webcontainer.on('server-ready', handleServerReady);

    return () => {
      // webcontainer.off('server-ready', handleServerReady);
    };
  }, [webcontainer]);

  return (
    <ProjectLayout>
      <div className="h-full bg-onyx-surface border border-onyx-border rounded-xl shadow-sm overflow-hidden flex flex-col">
        {/* Preview Toolbar */}
        <div className="h-10 bg-[#15161e] border-b border-onyx-border flex items-center px-4 justify-between">
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <div className="size-2.5 rounded-full bg-red-400"></div>
              <div className="size-2.5 rounded-full bg-amber-400"></div>
              <div className="size-2.5 rounded-full bg-emerald-400"></div>
            </div>
            <div className="bg-background-dark px-3 py-1 rounded border border-onyx-border flex items-center gap-2 min-w-[300px]">
              <span className="material-symbols-outlined text-xs text-slate-400">lock</span>
              <span className="text-[10px] text-slate-500 font-mono">{url || 'http://localhost:5173/'}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-slate-500 cursor-pointer hover:text-white transition-colors" onClick={() => {}}>refresh</span>
            <a href={url} target="_blank" rel="noreferrer" className="material-symbols-outlined text-sm text-slate-500 cursor-pointer hover:text-white transition-colors">open_in_new</a>
          </div>
        </div>

        {/* Preview Content */}
        <div className="flex-1 bg-white relative">
          {url ? (
            <iframe src={url} className="w-full h-full border-none" title="Preview" />
          ) : (
            <div className="absolute inset-0 bg-slate-900 flex items-center justify-center p-8">
              <div className="w-full max-w-4xl h-full flex flex-col gap-6 animate-pulse opacity-50">
                <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                  <div className="h-8 w-32 bg-slate-800 rounded"></div>
                  <div className="flex gap-2">
                    <div className="h-8 w-8 bg-slate-800 rounded-full"></div>
                    <div className="h-8 w-24 bg-primary rounded"></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="h-32 bg-slate-800/50 rounded-xl p-4 flex flex-col gap-2">
                    <div className="h-4 w-1/2 bg-slate-700 rounded"></div>
                    <div className="h-8 w-3/4 bg-slate-600 rounded"></div>
                  </div>
                  <div className="h-32 bg-slate-800/50 rounded-xl p-4 flex flex-col gap-2">
                    <div className="h-4 w-1/2 bg-slate-700 rounded"></div>
                    <div className="h-8 w-3/4 bg-slate-600 rounded"></div>
                  </div>
                  <div className="h-32 bg-slate-800/50 rounded-xl p-4 flex flex-col gap-2">
                    <div className="h-4 w-1/2 bg-slate-700 rounded"></div>
                    <div className="h-8 w-3/4 bg-slate-600 rounded"></div>
                  </div>
                </div>
                <div className="h-full bg-slate-800/30 rounded-xl border border-dashed border-slate-700 flex items-center justify-center">
                  <p className="text-slate-400 text-sm">Waiting for development server...</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ProjectLayout>
  );
};

export default Workspace;
