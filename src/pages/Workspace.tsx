import { Link } from "react-router-dom";

import React from 'react';

const Workspace: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-dark text-white font-display">

<div className="flex flex-col h-screen w-full">
{/* Top Navigation Bar */}
<header className="h-14 border-b border-onyx-border border-onyx-border flex items-center justify-between px-6 bg-black bg-onyx-surface shrink-0">
<div className="flex items-center gap-3">
<div className="size-8 bg-primary rounded flex items-center justify-center text-white">
<span className="material-symbols-outlined text-xl">deployed_code</span>
</div>
<div className="flex flex-col">
<Link to="/"><h1 className="text-sm font-bold tracking-tight">OnyxGPT Project Workspace</h1></Link>
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-emerald-500"></span>
<span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">Dev Server Active</span>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-1 px-3 py-1 bg-onyx-surface dark:bg-border-dark/50 rounded-full border border-onyx-border border-onyx-border">
<span className="material-symbols-outlined text-xs text-primary">account_tree</span>
<span className="text-xs font-medium">main</span>
</div>
<button className="flex items-center justify-center size-9 rounded-lg hover:bg-onyx-surface dark:hover:bg-border-dark transition-colors">
<span className="material-symbols-outlined text-slate-500">notifications</span>
</button>
<Link to="/settings"  className="flex items-center justify-center size-9 rounded-lg hover:bg-onyx-surface dark:hover:bg-border-dark transition-colors"><span className="material-symbols-outlined text-slate-500">settings</span></Link>
<div className="h-8 w-[1px] bg-slate-200 dark:bg-border-dark mx-1"></div>
<div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs border border-primary/30">
                    JD
                </div>
</div>
</header>
{/* Main Content Area */}
<main className="flex-1 flex overflow-hidden">
{/* Left Workspace Panel */}
<div className="flex-1 flex flex-col border-r border-onyx-border border-onyx-border bg-black bg-background-dark overflow-hidden">
{/* Tabs */}
<nav className="flex border-b border-onyx-border border-onyx-border bg-black bg-onyx-surface px-4 gap-1">
<Link to="/workspace"  className="px-4 py-3 text-xs font-bold flex items-center gap-2 border-b-2 border-primary text-primary"><span className="material-symbols-outlined text-lg">visibility</span>Preview
                    </Link>
<Link to="/terminal"  className="px-4 py-3 text-xs font-bold flex items-center gap-2 border-b-2 border-transparent text-slate-500 hover:text-slate-300 dark:hover:text-slate-200"><span className="material-symbols-outlined text-lg">terminal</span>Terminal
                    </Link>
<Link to="/database"  className="px-4 py-3 text-xs font-bold flex items-center gap-2 border-b-2 border-transparent text-slate-500 hover:text-slate-300 dark:hover:text-slate-200"><span className="material-symbols-outlined text-lg">database</span>Database
                    </Link>
<Link to="/activity"  className="px-4 py-3 text-xs font-bold flex items-center gap-2 border-b-2 border-transparent text-slate-500 hover:text-slate-300 dark:hover:text-slate-200"><span className="material-symbols-outlined text-lg">history</span>Activity
                    </Link>
</nav>
{/* Tab Content: Preview (Default) */}
<div className="flex-1 p-4 overflow-hidden flex flex-col">
<div className="flex-1 bg-black bg-onyx-surface border border-onyx-border border-onyx-border rounded-xl shadow-sm overflow-hidden flex flex-col">
{/* Preview Toolbar */}
<div className="h-10 bg-black dark:bg-[#15161e] border-b border-onyx-border border-onyx-border flex items-center px-4 justify-between">
<div className="flex items-center gap-4">
<div className="flex gap-1.5">
<div className="size-2.5 rounded-full bg-red-400"></div>
<div className="size-2.5 rounded-full bg-amber-400"></div>
<div className="size-2.5 rounded-full bg-emerald-400"></div>
</div>
<div className="bg-black bg-background-dark px-3 py-1 rounded border border-onyx-border border-onyx-border flex items-center gap-2 min-w-[300px]">
<span className="material-symbols-outlined text-xs text-slate-400">lock</span>
<span className="text-[10px] text-slate-500 font-mono">localhost:5173/dashboard</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm text-slate-500 cursor-pointer">refresh</span>
<span className="material-symbols-outlined text-sm text-slate-500 cursor-pointer">open_in_new</span>
</div>
</div>
{/* Preview Iframe Placeholder */}
<div className="flex-1 bg-black dark:bg-slate-900 flex items-center justify-center p-8 relative">
<div className="w-full max-w-4xl h-full flex flex-col gap-6">
<div className="flex justify-between items-center border-b border-onyx-border dark:border-slate-800 pb-4">
<div className="h-8 w-32 bg-slate-200 dark:bg-slate-800 rounded"></div>
<div className="flex gap-2">
<div className="h-8 w-8 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
<div className="h-8 w-24 bg-primary rounded"></div>
</div>
</div>
<div className="grid grid-cols-3 gap-6">
<div className="h-32 bg-onyx-surface dark:bg-slate-800/50 rounded-xl p-4 flex flex-col gap-2">
<div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-700 rounded"></div>
<div className="h-8 w-3/4 bg-slate-300 dark:bg-slate-600 rounded"></div>
</div>
<div className="h-32 bg-onyx-surface dark:bg-slate-800/50 rounded-xl p-4 flex flex-col gap-2">
<div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-700 rounded"></div>
<div className="h-8 w-3/4 bg-slate-300 dark:bg-slate-600 rounded"></div>
</div>
<div className="h-32 bg-onyx-surface dark:bg-slate-800/50 rounded-xl p-4 flex flex-col gap-2">
<div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-700 rounded"></div>
<div className="h-8 w-3/4 bg-slate-300 dark:bg-slate-600 rounded"></div>
</div>
</div>
<div className="h-full bg-black dark:bg-slate-800/30 rounded-xl border border-dashed border-onyx-border dark:border-slate-700 flex items-center justify-center">
<p className="text-slate-400 text-sm">Main Content Placeholder</p>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</div>
{/* Right Chat Panel */}
<aside className="w-[420px] flex flex-col bg-black bg-onyx-surface shrink-0">
{/* Chat Header */}
<div className="h-12 flex items-center justify-between px-4 border-b border-onyx-border border-onyx-border">
<span className="text-xs font-bold uppercase tracking-widest text-slate-500">AI Assistant</span>
<div className="flex gap-1">
<button className="p-1 hover:bg-onyx-surface dark:hover:bg-border-dark rounded text-slate-400">
<span className="material-symbols-outlined text-sm">delete</span>
</button>
</div>
</div>
{/* Message History */}
<div className="flex-1 overflow-y-auto p-4 custom-scrollbar space-y-6">
{/* AI Message */}
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-primary flex items-center justify-center">
<span className="material-symbols-outlined text-xs text-white">smart_toy</span>
</div>
<span className="text-xs font-bold">OnyxGPT</span>
<span className="text-[10px] text-slate-400">10:45 AM</span>
</div>
<div className="bg-black bg-background-dark/50 border border-onyx-border border-onyx-border p-3 rounded-xl text-sm leading-relaxed">
                            Hello! I've initialized the React + Vite project with Tailwind CSS. What would you like to build today?
                        </div>
</div>
{/* User Message */}
<div className="flex flex-col gap-2 items-end">
<div className="flex items-center gap-2 flex-row-reverse">
<div className="size-6 rounded-full bg-slate-200 dark:bg-border-dark flex items-center justify-center">
<span className="material-symbols-outlined text-xs">person</span>
</div>
<span className="text-xs font-bold">You</span>
<span className="text-[10px] text-slate-400">10:46 AM</span>
</div>
<div className="bg-primary text-white p-3 rounded-xl text-sm shadow-lg shadow-primary/10 max-w-[90%]">
                            Create a dashboard for an e-commerce store with sales charts and a list of recent orders.
                        </div>
</div>
{/* AI Streaming/Working Message */}
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-primary flex items-center justify-center">
<span className="material-symbols-outlined text-xs text-white">smart_toy</span>
</div>
<span className="text-xs font-bold">OnyxGPT</span>
<div className="flex gap-1 items-center ml-2">
<span className="size-1 rounded-full bg-primary animate-pulse"></span>
<span className="size-1 rounded-full bg-primary animate-pulse" style={{animationDelay: "0.2s"}}></span>
<span className="size-1 rounded-full bg-primary animate-pulse" style={{animationDelay: "0.4s"}}></span>
</div>
</div>
{/* Tool Execution Badges */}
<div className="flex flex-wrap gap-2 mb-2">
<div className="flex items-center gap-1.5 px-2 py-1 bg-amber-100 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800/50 rounded text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-tight">
<span className="material-symbols-outlined text-[14px]">save</span>
                                Writing App.tsx
                            </div>
<div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 rounded text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-tight">
<span className="material-symbols-outlined text-[14px]">terminal</span>
                                Installing Recharts
                            </div>
</div>
<div className="bg-black bg-background-dark/50 border border-onyx-border border-onyx-border p-3 rounded-xl text-sm italic text-slate-500">
                            Thinking about the layout... I'll use a sidebar navigation and a main grid for the statistics cards. Pushing initial structure to GitHub now.
                        </div>
<div className="flex items-center gap-2 px-3 py-2 bg-onyx-surface dark:bg-border-dark/30 rounded-lg border border-onyx-border border-onyx-border">
<span className="material-symbols-outlined text-sm text-slate-500">rebase</span>
<span className="text-[10px] font-mono">feat/dashboard-ui</span>
<span className="text-[10px] text-emerald-500 font-bold ml-auto">Committing...</span>
</div>
</div>
</div>
{/* Chat Input */}
<div className="p-4 border-t border-onyx-border border-onyx-border bg-black bg-onyx-surface">
<div className="relative bg-black bg-background-dark rounded-xl border border-onyx-border border-onyx-border p-2 transition-all focus-within:ring-2 ring-primary/20 focus-within:border-primary">
<textarea className="w-full bg-transparent border-none focus:ring-0 text-sm resize-none custom-scrollbar min-h-[80px]" placeholder="Ask OnyxGPT to build something..."></textarea>
<div className="flex items-center justify-between mt-2">
<div className="flex gap-1">
<button className="p-1.5 hover:bg-slate-200 dark:hover:bg-border-dark rounded text-slate-500">
<span className="material-symbols-outlined text-xl">attach_file</span>
</button>
<button className="p-1.5 hover:bg-slate-200 dark:hover:bg-border-dark rounded text-slate-500">
<span className="material-symbols-outlined text-xl">image</span>
</button>
</div>
<button className="bg-primary text-white p-2 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-xl">send</span>
</button>
</div>
</div>
<p className="text-[10px] text-center text-slate-400 mt-2">OnyxGPT may generate code that needs review.</p>
</div>
</aside>
</main>
{/* Footer / Status Bar */}
<footer className="h-6 bg-primary dark:bg-primary flex items-center justify-between px-4 text-white text-[10px] font-medium shrink-0">
<div className="flex items-center gap-4">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">cloud_done</span>
<span>Synced with Supabase</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">check_circle</span>
<span>No vulnerabilities</span>
</div>
</div>
<div className="flex items-center gap-4">
<span>UTF-8</span>
<span>React v18.2</span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">speed</span>
<span>Build: 1.2s</span>
</span>
</div>
</footer>
</div>

    </div>
  );
};

export default Workspace;
