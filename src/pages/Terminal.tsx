import React, { useEffect, useRef } from 'react';
import ProjectLayout from '../components/ProjectLayout';
import { useWebContainer } from '../contexts/WebContainerContext';

const Terminal: React.FC = () => {
  const { terminalOutput } = useWebContainer();
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalOutput]);

  return (
    <ProjectLayout>
      <div className="h-full bg-black rounded-xl border border-onyx-border shadow-2xl overflow-hidden flex flex-col font-mono">
        {/* Terminal Header */}
        <div className="h-9 bg-onyx-surface border-b border-onyx-border flex items-center px-4 gap-4 shrink-0">
          <div className="flex gap-1.5">
            <div className="size-2 rounded-full bg-slate-700"></div>
            <div className="size-2 rounded-full bg-slate-700"></div>
            <div className="size-2 rounded-full bg-slate-700"></div>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-xs text-primary">terminal</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">zsh</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="flex-1 p-4 text-xs overflow-y-auto custom-scrollbar leading-relaxed text-slate-300">
          <pre className="whitespace-pre-wrap font-mono">
            {terminalOutput || (
              <div className="text-slate-600 italic">
                Waiting for AI to run commands...
              </div>
            )}
          </pre>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </ProjectLayout>
  );
};

export default Terminal;
