import { Link } from "react-router-dom";

import React from 'react';

const Activity: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-dark text-white font-display">

<div className="fixed inset-0 z-[-1] mesh-gradient opacity-40"></div>
<div className="fixed inset-0 z-[-1] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] pointer-events-none"></div>
<header className="h-14 border-b border-onyx-border flex items-center justify-between px-6 bg-background-dark/80 backdrop-blur-md shrink-0">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="size-6 bg-primary rounded flex items-center justify-center text-white">
<span className="material-symbols-outlined text-sm">terminal</span>
</div>
<h1 className="text-white text-sm font-bold tracking-tight">OnyxGPT</h1>
</div>
<div className="h-4 w-px bg-onyx-border"></div>
<div className="flex items-center gap-2 text-sm">
<span className="text-onyx-muted">Projects</span>
<span className="material-symbols-outlined text-xs text-onyx-muted">chevron_right</span>
<span className="text-white font-medium">fitness-tracker-pro</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1 bg-onyx-surface border border-onyx-border px-2 py-1 rounded text-[11px] font-mono text-emerald-400">
<span className="size-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                LIVE PREVIEW
            </div>
<Link to="/settings"  className="text-onyx-muted hover:text-white transition-colors"><span className="material-symbols-outlined text-slate-500">settings</span></Link>
<div className="size-8 rounded-full bg-onyx-surface border border-onyx-border flex items-center justify-center overflow-hidden">
<img alt="User Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-8OfF_b9m-U9a6JHgikSXXDnN9LWyxe2l7MvUmcm4rWGWF4RzQT-vg9ApXojalnVEXXMAzlqaQ_lHVsO1d3UMSK1D4IdbrIht2h0j6ot85ONexbkW86qzEqNsu5HJSAaJHg3pELPegSkWHxxFLFlj1X5uVOe5wgznmTtBWgMOH4QZ6zxgAHGe-4vjxzQiuOXA31eejfkLXi5f6_1OAz9vtmDsLZlwVWpaLgDJq8QoGQy8RbnddYajKt2ap0eYbF0lAT6uPqLvW1c"/>
</div>
</div>
</header>
<div className="flex flex-1 overflow-hidden">
<aside className="w-16 border-r border-onyx-border flex flex-col items-center py-6 gap-6 bg-background-dark shrink-0">
<button className="text-onyx-muted hover:text-primary transition-all p-2 rounded-lg" title="Explorer">
<span className="material-symbols-outlined">folder</span>
</button>
<button className="text-onyx-muted hover:text-primary transition-all p-2 rounded-lg" title="Search">
<span className="material-symbols-outlined">search</span>
</button>
<button className="text-primary bg-primary/10 p-2 rounded-lg border border-primary/20" title="Activity">
<span className="material-symbols-outlined">analytics</span>
</button>
<Link to="/terminal"  className="text-onyx-muted hover:text-primary transition-all p-2 rounded-lg" title="Terminal"><span className="material-symbols-outlined text-lg">terminal</span></Link>
<div className="mt-auto">
<button className="text-onyx-muted hover:text-white transition-all p-2 rounded-lg">
<span className="material-symbols-outlined">help</span>
</button>
</div>
</aside>
<main className="flex-1 overflow-y-auto p-8 max-w-6xl mx-auto w-full">
<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-3xl font-bold text-white mb-2">Project Activity</h2>
<p className="text-onyx-muted">Observability log for AI tool calls, terminal commands, and source control.</p>
</div>
<div className="flex items-center gap-3 bg-onyx-surface border border-onyx-border p-2 pr-4 rounded-xl shadow-sm">
<div className="size-10 bg-black rounded-lg flex items-center justify-center text-white border border-onyx-border">
<svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
</div>
<div>
<p className="text-xs text-onyx-muted uppercase font-bold tracking-tighter">GitHub Connected</p>
<div className="flex gap-4 mt-1">
<button className="text-xs font-bold text-primary hover:underline">Commit</button>
<button className="text-xs font-bold text-primary hover:underline">Push</button>
<button className="text-xs font-bold text-slate-400 hover:text-white">Revert</button>
</div>
</div>
</div>
</div>
<div className="space-y-0 relative">
<div className="relative pl-14 pb-12 group">
<div className="activity-timeline-line"></div>
<div className="absolute left-0 top-0 size-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 z-10 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-lg">construction</span>
</div>
<div className="glass-panel p-5 rounded-2xl group-hover:border-blue-500/30 transition-all">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wide">Tool Call</span>
<h3 className="font-bold text-white tracking-tight">FileSystem.writeFile</h3>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-onyx-muted font-medium">2 mins ago</span>
<span className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
<span className="size-1.5 rounded-full bg-emerald-400"></span>
                                    Success
                                </span>
</div>
</div>
<p className="text-sm text-onyx-muted mb-4 font-mono bg-black/40 p-3 rounded-lg border border-onyx-border">
                            path: "/src/components/Dashboard.tsx"<br/>
                            content: "export const Dashboard = () =&gt; &#123; ... &#125;"
                        </p>
</div>
</div>
<div className="relative pl-14 pb-12 group">
<div className="activity-timeline-line"></div>
<div className="absolute left-0 top-0 size-10 rounded-full bg-black/5 border border-white/20 flex items-center justify-center text-white z-10 group-hover:scale-110 transition-transform">
<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
</div>
<div className="glass-panel p-5 rounded-2xl group-hover:border-primary/30 transition-all border-l-4 border-l-primary">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<span className="text-xs font-mono px-2 py-0.5 rounded bg-black/5 text-slate-300 border border-white/10 uppercase tracking-wide">GitHub Action</span>
<h3 className="font-bold text-white tracking-tight">Push to main branch</h3>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-onyx-muted font-medium">8 mins ago</span>
<span className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
<span className="size-1.5 rounded-full bg-emerald-400"></span>
                                    Completed
                                </span>
</div>
</div>
<p className="text-sm text-onyx-muted">
                            Successfully committed and pushed 4 changes. Deployment triggered on Vercel.
                        </p>
</div>
</div>
<div className="relative pl-14 pb-12 group">
<div className="activity-timeline-line"></div>
<div className="absolute left-0 top-0 size-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary z-10 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-lg">terminal</span>
</div>
<div className="glass-panel p-5 rounded-2xl group-hover:border-primary/30 transition-all">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<span className="text-xs font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 uppercase tracking-wide">Terminal</span>
<h3 className="font-bold text-white tracking-tight">npm install lucide-react</h3>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-onyx-muted font-medium">Just now</span>
<span className="flex items-center gap-1.5 text-xs text-primary font-bold animate-pulse">
<span className="size-1.5 rounded-full bg-primary"></span>
                                    Executing...
                                </span>
</div>
</div>
<div className="bg-black/80 rounded-lg p-3 border border-onyx-border font-mono text-[13px] text-slate-300">
<div className="flex gap-2">
<span className="text-emerald-500">➜</span>
<span className="text-primary">~</span>
<span>npm install lucide-react</span>
</div>
<div className="mt-1 text-onyx-muted">
                                added 4 packages, and audited 184 packages in 2s
                            </div>
</div>
</div>
</div>
<div className="relative pl-14 group">
<div className="absolute left-0 top-0 size-10 rounded-full bg-black0/10 border border-dashed border-slate-500/30 flex items-center justify-center text-slate-500 z-10">
<span className="material-symbols-outlined text-lg">link</span>
</div>
<div className="border border-dashed border-onyx-border p-6 rounded-2xl flex flex-col items-center justify-center text-center bg-onyx-surface/20">
<div className="size-12 bg-black rounded-xl border border-onyx-border flex items-center justify-center mb-4">
<svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
</div>
<h4 className="text-white font-bold mb-1">GitHub Connection Required</h4>
<p className="text-onyx-muted text-sm max-w-xs mb-4">Connect your repository to enable seamless version control, automated commits, and cloud deployment.</p>
<button className="bg-black text-black px-6 py-2 rounded-lg font-bold text-sm hover:bg-slate-200 transition-all flex items-center gap-2">
                            Connect GitHub Account
                        </button>
</div>
</div>
</div>
</main>
</div>
<footer className="h-8 border-t border-onyx-border flex items-center justify-between px-6 bg-background-dark text-[10px] text-onyx-muted font-mono shrink-0">
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<span className="size-2 rounded-full bg-emerald-500"></span>
                READY
            </div>
<div>UTF-8</div>
<div>REGEN_SPEED: 42.1 t/s</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">account_tree</span>
                main*
            </div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">cloud_done</span>
                Synced
            </div>
</div>
</footer>


    </div>
  );
};

export default Activity;
