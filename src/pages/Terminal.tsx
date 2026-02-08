import { Link } from "react-router-dom";

import React from 'react';

const Terminal: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-dark text-white font-display">

<div className="fixed inset-0 z-[-1] mesh-gradient"></div>
<div className="fixed inset-0 z-[-1] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] pointer-events-none"></div>
<aside className="fixed left-0 top-0 h-full w-16 border-r border-onyx-border bg-background-dark/50 flex flex-col items-center py-6 gap-8 z-10">
<div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(55,19,236,0.3)]">
<span className="material-symbols-outlined">terminal</span>
</div>
<div className="flex flex-col gap-6">
<button className="text-slate-500 hover:text-white transition-colors"><span className="material-symbols-outlined">folder</span></button>
<button className="text-slate-500 hover:text-white transition-colors"><span className="material-symbols-outlined">search</span></button>
<button className="text-primary"><span className="material-symbols-outlined">code</span></button>
<Link to="/settings"  className="text-slate-500 hover:text-white transition-colors"><span className="material-symbols-outlined text-slate-500">settings</span></Link>
</div>
</aside>
<header className="fixed top-0 left-16 right-0 h-14 border-b border-onyx-border flex items-center justify-between px-6 bg-background-dark/30 backdrop-blur-sm z-10">
<div className="flex items-center gap-4">
<span className="text-slate-400 text-sm font-medium">My Awesome Project</span>
<span className="text-slate-600">/</span>
<div className="flex items-center gap-2 bg-onyx-surface px-3 py-1 rounded border border-onyx-border">
<span className="material-symbols-outlined text-sm text-green-500">check_circle</span>
<span className="text-xs font-mono text-slate-300">onyxgpt-v2-active</span>
</div>
</div>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg border border-primary/20 transition-all text-sm font-bold">
<span className="material-symbols-outlined text-sm">rocket_launch</span>
            Deploy
        </button>
<button className="size-8 rounded-full overflow-hidden border border-onyx-border">
<img alt="User Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNE80xYy9IP-OhpHmet2D8beN0THv0JtakZYE243PaNMMust0grI-7YpAalh1Ovzjp-C_2QgMLWZJKpv25r1Js3hoxWOue3_PALVNzaKBSBtXykBIaphiCD7VHrPnqk4RXwAb_24u3ZcVXVysn0n_EavDncFEe4mSpUiJ1yIwyUXtDdZUMctdpcRhwpVxARes7OphshMyB8Id5JHKBP1wOMdmHysULDa2t5Z-_x2Y8KIXStaKL7S79AqCp8XFf9GyChZUeD0qOiUI"/>
</button>
</div>
</header>
<main className="ml-16 pt-14 h-full p-8 flex flex-col">
<div className="w-full h-full rounded-xl border border-onyx-border bg-onyx-surface/20 flex flex-col overflow-hidden">
<div className="flex-1 p-8">
<div className="flex gap-4 opacity-40">
<div className="w-full max-w-sm space-y-4">
<div className="h-4 bg-slate-800 rounded w-3/4"></div>
<div className="h-4 bg-slate-800 rounded w-1/2"></div>
<div className="h-4 bg-slate-800 rounded w-5/6"></div>
<div className="h-32 bg-slate-800/50 rounded w-full"></div>
</div>
<div className="flex-1 space-y-4">
<div className="h-64 bg-slate-800/20 rounded w-full"></div>
</div>
</div>
</div>
</div>
<div className="fixed bottom-10 left-[calc(50%+32px)] -translate-x-1/2 w-[90%] max-w-5xl h-[45vh] z-20">
<div className="glass-terminal rounded-2xl h-full flex flex-col overflow-hidden">
<div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/5">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">terminal</span>
<span className="text-sm font-bold text-white tracking-wide uppercase">Terminal</span>
</div>
<div className="h-4 w-px bg-white/10"></div>
<div className="relative flex items-center group">
<span className="material-symbols-outlined absolute left-2.5 text-slate-500 text-base group-focus-within:text-primary transition-colors">search</span>
<input className="bg-black/20 border border-white/10 rounded-lg py-1 pl-8 pr-3 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 w-48 transition-all" placeholder="Filter logs..." type="text"/>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all">
<span className="material-symbols-outlined text-base">file_download</span>
                        Export
                    </button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-red-400 hover:bg-red-400/10 transition-all border border-transparent hover:border-red-400/20">
<span className="material-symbols-outlined text-base">delete_sweep</span>
                        Clear Terminal
                    </button>
<div className="h-4 w-px bg-white/10 mx-1"></div>
<div className="flex gap-2">
<button className="size-6 rounded flex items-center justify-center hover:bg-white/10 text-slate-400"><span className="material-symbols-outlined text-base">remove</span></button>
<button className="size-6 rounded flex items-center justify-center hover:bg-white/10 text-slate-400"><span className="material-symbols-outlined text-base">close</span></button>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto terminal-scroll p-6 font-mono text-[13px] leading-relaxed">
<div className="space-y-1.5">
<div className="flex gap-3">
<span className="text-green-500 shrink-0">info</span>
<span className="text-slate-500">09:41:02</span>
<span className="text-slate-300">Initializing OnyxGPT development environment...</span>
</div>
<div className="flex gap-3">
<span className="text-green-500 shrink-0">info</span>
<span className="text-slate-500">09:41:03</span>
<span className="text-slate-300">Detected React + Vite configuration.</span>
</div>
<div className="flex gap-3">
<span className="text-primary shrink-0">exec</span>
<span className="text-slate-500">09:41:03</span>
<span className="text-blue-400">npm install tailwindcss autoprefixer postcss</span>
</div>
<div className="flex gap-3">
<span className="text-slate-500 shrink-0">stdout</span>
<span className="text-slate-500">09:41:05</span>
<span className="text-slate-400">added 84 packages, and audited 85 packages in 2s</span>
</div>
<div className="flex gap-3">
<span className="text-green-500 shrink-0">info</span>
<span className="text-slate-500">09:41:06</span>
<span className="text-white">Starting development server on <a className="text-primary hover:underline" href="#">http://localhost:5173</a></span>
</div>
<div className="pt-4 flex gap-3">
<span className="text-yellow-500 shrink-0">warn</span>
<span className="text-slate-500">09:41:08</span>
<span className="text-yellow-400/80">Unused variable 'state' in components/Dashboard.tsx</span>
</div>
<div className="flex gap-3">
<span className="text-green-500 shrink-0">info</span>
<span className="text-slate-500">09:41:12</span>
<span className="text-slate-300">HMR updated <span className="text-purple-400">/src/App.tsx</span></span>
</div>
<div className="flex gap-3">
<span className="text-green-500 shrink-0">info</span>
<span className="text-slate-500">09:41:15</span>
<span className="text-slate-300">Generating requested component: <span className="italic text-primary">FitnessTrackerCharts</span></span>
</div>
<div className="flex gap-3">
<span className="text-primary shrink-0">exec</span>
<span className="text-slate-500">09:41:16</span>
<span className="text-blue-400">onyx compile --target=charts</span>
</div>
<div className="flex gap-3 items-center">
<span className="text-primary">➜</span>
<span className="text-slate-300">onyxgpt-workspace</span>
<span className="animate-pulse bg-primary h-4 w-2 ml-1"></span>
</div>
</div>
</div>
<div className="px-5 py-3 border-t border-white/10 bg-black/20 flex items-center gap-3">
<span className="text-primary font-mono text-sm">λ</span>
<input className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-mono text-white placeholder:text-slate-700" placeholder="Type a command or ask OnyxGPT to refactor..." type="text"/>
<div className="flex items-center gap-4 text-[10px] text-slate-500 font-mono tracking-widest uppercase">
<span className="flex items-center gap-1.5"><div className="size-1.5 rounded-full bg-green-500"></div> STABLE</span>
<span>UTF-8</span>
<span>LN 12, COL 45</span>
</div>
</div>
</div>
</div>
</main>
<footer className="fixed bottom-0 left-16 right-0 h-6 border-t border-onyx-border bg-background-dark/80 px-4 flex items-center justify-between z-10">
<div className="flex gap-4">
<span className="text-[10px] text-slate-500 flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">account_tree</span> main*</span>
<span className="text-[10px] text-slate-500 flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">sync</span> Synced</span>
</div>
<div className="flex gap-4">
<span className="text-[10px] text-slate-500 uppercase tracking-tighter">Onyx Engine v2.4.0</span>
</div>
</footer>


    </div>
  );
};

export default Terminal;
