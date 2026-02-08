import { Link } from "react-router-dom";

import React from 'react';

const Database: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-dark text-white font-display">

<div className="fixed inset-0 z-[-1] mesh-gradient opacity-50"></div>
<div className="flex flex-col h-screen">
<header className="h-14 border-b border-onyx-border bg-onyx-surface/50 backdrop-blur-md flex items-center justify-between px-4">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-2 py-1 rounded-md bg-onyx-surface border border-onyx-border">
<div className="size-6 bg-primary rounded flex items-center justify-center">
<span className="material-symbols-outlined text-xs">terminal</span>
</div>
<span className="text-sm font-bold tracking-tight">OnyxGPT</span>
</div>
<div className="h-6 w-px bg-onyx-border"></div>
<div className="flex items-center gap-2">
<span className="text-slate-400 text-sm">Project:</span>
<button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                        Fitness Tracker Pro
                        <span className="material-symbols-outlined text-sm">unfold_more</span>
</button>
</div>
<div className="flex items-center gap-2 ml-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/10 text-green-500 border border-green-500/20 uppercase tracking-wider">Production</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1 bg-onyx-surface rounded-lg p-0.5 border border-onyx-border">
<button className="px-3 py-1 text-xs font-medium text-slate-400 hover:text-white transition-all">Code</button>
<button className="px-3 py-1 text-xs font-medium bg-primary text-white rounded-md shadow-lg shadow-primary/20">Database</button>
<button className="px-3 py-1 text-xs font-medium text-slate-400 hover:text-white transition-all">Storage</button>
<button className="px-3 py-1 text-xs font-medium text-slate-400 hover:text-white transition-all">Logs</button>
</div>
<div className="h-6 w-px bg-onyx-border"></div>
<button className="size-8 rounded-full bg-onyx-surface border border-onyx-border flex items-center justify-center hover:bg-onyx-surface-light">
<span className="material-symbols-outlined text-lg">notifications</span>
</button>
<div className="size-8 rounded-full bg-gradient-to-tr from-primary to-purple-500 p-0.5">
<div className="size-full rounded-full bg-onyx-surface flex items-center justify-center text-[10px] font-bold">JD</div>
</div>
</div>
</header>
<div className="flex flex-1 overflow-hidden">
<aside className="w-64 border-r border-onyx-border bg-onyx-surface/30 flex flex-col">
<div className="p-4 border-b border-onyx-border">
<button className="w-full py-2 bg-primary hover:bg-primary/90 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-all">
<span className="material-symbols-outlined text-sm">add</span>
                        New Table
                    </button>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
<div className="text-[10px] font-bold text-slate-500 px-3 py-2 uppercase tracking-widest">Supabase Tables</div>
<button className="w-full group flex items-center justify-between px-3 py-2 rounded-lg bg-primary/10 border border-primary/20 text-white text-sm">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-lg">table_chart</span>
<span className="font-medium">profiles</span>
</div>
<span className="size-2 rounded-full bg-rls-active shadow-[0_0_8px_rgba(16,185,129,0.5)]" title="RLS Enabled"></span>
</button>
<button className="w-full group flex items-center justify-between px-3 py-2 rounded-lg hover:bg-onyx-surface-light text-slate-400 hover:text-white text-sm transition-all">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-lg opacity-60">table_rows</span>
<span>workouts</span>
</div>
<span className="size-2 rounded-full bg-rls-active shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
</button>
<button className="w-full group flex items-center justify-between px-3 py-2 rounded-lg hover:bg-onyx-surface-light text-slate-400 hover:text-white text-sm transition-all">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-lg opacity-60">table_rows</span>
<span>exercises</span>
</div>
<span className="size-2 rounded-full bg-rls-active shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
</button>
<button className="w-full group flex items-center justify-between px-3 py-2 rounded-lg hover:bg-onyx-surface-light text-slate-400 hover:text-white text-sm transition-all">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-lg opacity-60">table_rows</span>
<span>user_settings</span>
</div>
<span className="size-2 rounded-full bg-rls-inactive shadow-[0_0_8px_rgba(245,158,11,0.5)]" title="RLS Disabled"></span>
</button>
<button className="w-full group flex items-center justify-between px-3 py-2 rounded-lg hover:bg-onyx-surface-light text-slate-400 hover:text-white text-sm transition-all">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-lg opacity-60">table_rows</span>
<span>audit_logs</span>
</div>
<span className="size-2 rounded-full bg-rls-active shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
</button>
</div>
<div className="p-4 border-t border-onyx-border mt-auto">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">RLS Summary</span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-400">Enabled</span>
<span className="text-rls-active font-bold">4</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-400">Disabled</span>
<span className="text-rls-inactive font-bold">1</span>
</div>
<div className="w-full h-1.5 bg-onyx-border rounded-full overflow-hidden mt-2">
<div className="bg-rls-active h-full" style={{width: "80%"}}></div>
</div>
</div>
</div>
</aside>
<main className="flex-1 flex flex-col min-w-0 bg-[#08080c]">
<div className="h-12 border-b border-onyx-border flex items-center justify-between px-4 bg-onyx-surface/20">
<div className="flex items-center gap-4">
<h1 className="text-sm font-bold flex items-center gap-2">
<span className="text-primary material-symbols-outlined text-base">schema</span>
                            Schema View
                        </h1>
<div className="h-4 w-px bg-onyx-border"></div>
<div className="flex items-center gap-1">
<button className="p-1.5 rounded bg-onyx-surface border border-onyx-border hover:text-primary">
<span className="material-symbols-outlined text-sm">zoom_in</span>
</button>
<button className="p-1.5 rounded bg-onyx-surface border border-onyx-border hover:text-primary">
<span className="material-symbols-outlined text-sm">zoom_out</span>
</button>
<button className="p-1.5 rounded bg-onyx-surface border border-onyx-border hover:text-primary">
<span className="material-symbols-outlined text-sm">center_focus_strong</span>
</button>
</div>
</div>
<div className="flex items-center gap-2">
<div className="flex bg-onyx-surface rounded border border-onyx-border p-0.5">
<button className="flex items-center gap-1.5 px-3 py-1 rounded text-xs font-medium bg-primary text-white">
<span className="material-symbols-outlined text-xs">schema</span> Visual
                            </button>
<button className="flex items-center gap-1.5 px-3 py-1 rounded text-xs font-medium text-slate-400 hover:text-white">
<span className="material-symbols-outlined text-xs">grid_on</span> Data Grid
                            </button>
</div>
<button className="px-3 py-1 bg-onyx-surface border border-onyx-border rounded text-xs font-medium hover:bg-onyx-surface-light">
                            Export Schema
                        </button>
</div>
</div>
<div className="flex-1 relative overflow-hidden bg-[radial-gradient(#1a1923_1px,transparent_1px)] [background-size:24px_24px]">
<svg className="absolute inset-0 pointer-events-none w-full h-full">
<path className="er-line opacity-40" d="M380 180 Q450 180 450 250"></path>
<path className="er-line opacity-40" d="M720 300 Q780 300 780 200"></path>
</svg>
<div className="absolute top-10 left-40 w-60 table-card rounded-xl shadow-2xl">
<div className="p-3 border-b border-onyx-border flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm text-primary">key</span>
<span className="text-sm font-bold">profiles</span>
</div>
<span className="text-[10px] bg-rls-active/20 text-rls-active px-1.5 py-0.5 rounded border border-rls-active/30 font-bold uppercase">RLS</span>
</div>
<div className="p-2 space-y-1">
<div className="flex items-center justify-between px-2 py-1 rounded hover:bg-white/5 group">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-xs text-yellow-500">vpn_key</span>
<span className="text-xs">id</span>
</div>
<span className="text-[10px] text-slate-500">uuid</span>
</div>
<div className="flex items-center justify-between px-2 py-1 rounded hover:bg-white/5">
<span className="text-xs">username</span>
<span className="text-[10px] text-slate-500">text</span>
</div>
<div className="flex items-center justify-between px-2 py-1 rounded hover:bg-white/5">
<span className="text-xs">avatar_url</span>
<span className="text-[10px] text-slate-500">text</span>
</div>
<div className="flex items-center justify-between px-2 py-1 rounded hover:bg-white/5">
<span className="text-xs">created_at</span>
<span className="text-[10px] text-slate-500">timestamptz</span>
</div>
</div>
</div>
<div className="absolute top-48 left-[450px] w-64 table-card rounded-xl shadow-2xl">
<div className="p-3 border-b border-onyx-border flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm text-primary">fitness_center</span>
<span className="text-sm font-bold">workouts</span>
</div>
<span className="text-[10px] bg-rls-active/20 text-rls-active px-1.5 py-0.5 rounded border border-rls-active/30 font-bold uppercase">RLS</span>
</div>
<div className="p-2 space-y-1">
<div className="flex items-center justify-between px-2 py-1 rounded hover:bg-white/5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-xs text-yellow-500">vpn_key</span>
<span className="text-xs">id</span>
</div>
<span className="text-[10px] text-slate-500">uuid</span>
</div>
<div className="flex items-center justify-between px-2 py-1 rounded hover:bg-white/5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-xs text-primary">link</span>
<span className="text-xs">user_id</span>
</div>
<span className="text-[10px] text-slate-500">uuid</span>
</div>
<div className="flex items-center justify-between px-2 py-1 rounded hover:bg-white/5">
<span className="text-xs">title</span>
<span className="text-[10px] text-slate-500">text</span>
</div>
<div className="flex items-center justify-between px-2 py-1 rounded hover:bg-white/5">
<span className="text-xs">notes</span>
<span className="text-[10px] text-slate-500">text</span>
</div>
<div className="flex items-center justify-between px-2 py-1 rounded hover:bg-white/5">
<span className="text-xs">date</span>
<span className="text-[10px] text-slate-500">date</span>
</div>
</div>
</div>
<div className="absolute top-20 right-40 w-60 table-card rounded-xl shadow-2xl">
<div className="p-3 border-b border-onyx-border flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm text-primary">list_alt</span>
<span className="text-sm font-bold">exercises</span>
</div>
<span className="text-[10px] bg-rls-active/20 text-rls-active px-1.5 py-0.5 rounded border border-rls-active/30 font-bold uppercase">RLS</span>
</div>
<div className="p-2 space-y-1">
<div className="flex items-center justify-between px-2 py-1 rounded hover:bg-white/5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-xs text-yellow-500">vpn_key</span>
<span className="text-xs">id</span>
</div>
<span className="text-[10px] text-slate-500">uuid</span>
</div>
<div className="flex items-center justify-between px-2 py-1 rounded hover:bg-white/5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-xs text-primary">link</span>
<span className="text-xs">workout_id</span>
</div>
<span className="text-[10px] text-slate-500">uuid</span>
</div>
<div className="flex items-center justify-between px-2 py-1 rounded hover:bg-white/5">
<span className="text-xs">name</span>
<span className="text-[10px] text-slate-500">text</span>
</div>
<div className="flex items-center justify-between px-2 py-1 rounded hover:bg-white/5">
<span className="text-xs">sets</span>
<span className="text-[10px] text-slate-500">int4</span>
</div>
</div>
</div>
<div className="absolute bottom-6 right-6 size-32 bg-onyx-surface border border-onyx-border rounded-lg shadow-xl p-1 opacity-60 hover:opacity-100 transition-opacity">
<div className="size-full bg-background-dark/80 rounded border border-onyx-border/30 relative">
<div className="absolute top-2 left-4 w-4 h-6 bg-primary/20 border border-primary/40 rounded-sm"></div>
<div className="absolute top-8 left-10 w-6 h-8 bg-primary/20 border border-primary/40 rounded-sm"></div>
<div className="absolute top-4 right-4 w-4 h-6 bg-primary/20 border border-primary/40 rounded-sm"></div>
<div className="absolute inset-2 border border-white/20 rounded"></div>
</div>
</div>
</div>
<footer className="h-8 border-t border-onyx-border bg-onyx-surface px-4 flex items-center justify-between text-[10px] text-slate-500">
<div className="flex items-center gap-4">
<div className="flex items-center gap-1.5">
<span className="size-2 rounded-full bg-green-500"></span>
<span>Connected to Supabase</span>
</div>
<span>Region: us-east-1</span>
</div>
<div className="flex items-center gap-4">
<span>Rows: ~1.2k</span>
<span>DB Size: 4.2 MB</span>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-xs">history</span>
<span>Last sync: 2m ago</span>
</div>
</div>
</footer>
</main>
<aside className="w-72 border-l border-onyx-border bg-onyx-surface/30 flex flex-col p-4">
<div className="flex items-center justify-between mb-6">
<h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Details</h2>
<button className="text-slate-500 hover:text-white"><span className="material-symbols-outlined text-lg">close</span></button>
</div>
<div className="space-y-6">
<div>
<label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Active Table</label>
<div className="p-3 bg-onyx-surface-light rounded-lg border border-onyx-border">
<div className="flex items-center gap-3 mb-1">
<span className="material-symbols-outlined text-primary">table_chart</span>
<span className="font-bold text-sm">profiles</span>
</div>
<p className="text-xs text-slate-400 leading-relaxed">Stores user profile information, synced with Auth.users.</p>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Row Level Security</label>
<span className="text-[10px] text-rls-active font-bold">Enabled</span>
</div>
<div className="p-3 bg-onyx-surface-light rounded-lg border border-rls-active/30 bg-rls-active/5">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-rls-active text-sm">verified_user</span>
<span className="text-xs font-bold text-white">4 Active Policies</span>
</div>
<ul className="space-y-2">
<li className="text-[10px] flex items-center justify-between">
<span className="text-slate-400">Public Profiles</span>
<span className="text-slate-300">SELECT</span>
</li>
<li className="text-[10px] flex items-center justify-between">
<span className="text-slate-400">User Updates Own</span>
<span className="text-slate-300">UPDATE</span>
</li>
</ul>
<button className="w-full mt-3 py-1.5 border border-onyx-border rounded text-[10px] font-bold hover:bg-onyx-surface transition-colors">Edit Policies</button>
</div>
</div>
<div>
<label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Incoming Relations</label>
<div className="space-y-2">
<div className="flex items-center justify-between p-2 rounded bg-onyx-surface border border-onyx-border">
<span className="text-xs font-medium">workouts.user_id</span>
<span className="material-symbols-outlined text-xs text-slate-500">arrow_forward</span>
</div>
<div className="flex items-center justify-between p-2 rounded bg-onyx-surface border border-onyx-border">
<span className="text-xs font-medium">comments.author_id</span>
<span className="material-symbols-outlined text-xs text-slate-500">arrow_forward</span>
</div>
</div>
</div>
<div className="pt-6 mt-6 border-t border-onyx-border">
<button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-red-500/30 text-red-500 text-xs font-bold hover:bg-red-500/10 transition-colors">
<span className="material-symbols-outlined text-sm">delete</span>
                            Drop Table
                        </button>
</div>
</div>
</aside>
</div>
</div>


    </div>
  );
};

export default Database;
