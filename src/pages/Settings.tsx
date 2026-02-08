import { Link } from "react-router-dom";

import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-dark text-white font-display">

<div className="fixed inset-0 z-[-1] mesh-gradient opacity-50"></div>
<div className="fixed inset-0 z-[-1] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>
<div className="blur-md pointer-events-none select-none">
<header className="flex items-center justify-between px-16 py-4 border-b border-onyx-border/50">
<div className="flex items-center gap-3">
<div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
<span className="material-symbols-outlined text-xl">terminal</span>
</div>
<h2 className="text-white text-xl font-bold">OnyxGPT</h2>
</div>
<div className="flex gap-6 items-center">
<nav className="flex gap-8">
<span className="text-slate-400 text-sm">Docs</span>
<span className="text-slate-400 text-sm">Pricing</span>
</nav>
<div className="size-10 rounded-full bg-onyx-surface border border-onyx-border"></div>
</div>
</header>
<main className="flex flex-col items-center justify-center pt-24">
<h1 className="text-6xl font-bold mb-8">Develop at the speed of thought.</h1>
<div className="w-full max-w-2xl h-16 bg-onyx-surface rounded-xl border border-onyx-border"></div>
</main>
</div>
<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
<div className="glass-panel w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
<div className="flex items-center justify-between p-6 border-b border-onyx-border">
<div className="flex items-center gap-3">
<div className="size-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">settings</span>
</div>
<div>
<h2 className="text-xl font-bold text-white leading-none">Project Settings</h2>
<p className="text-slate-500 text-xs mt-1">Configure environment and agent behavior</p>
</div>
</div>
<button className="text-slate-500 hover:text-white transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
<section className="space-y-4">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-purple-400 text-sm">model_training</span>
<h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">LLM Configuration</h3>
</div>
<div className="grid md:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-300 ml-1">Predefined Model</label>
<div className="relative">
<select className="w-full bg-onyx-surface border border-onyx-border rounded-lg px-4 py-2.5 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary appearance-none outline-none">
<option>GPT-4o (Optimized)</option>
<option>Claude 3.5 Sonnet</option>
<option>Onyx-Engine-v2</option>
<option>Gemini 1.5 Pro</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-2.5 text-slate-500 pointer-events-none">expand_more</span>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-300 ml-1">Custom Model ID</label>
<input className="w-full bg-onyx-surface border border-onyx-border rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="e.g. gpt-4-turbo-preview" type="text"/>
</div>
</div>
<p className="text-[10px] text-slate-500 px-1">Using a custom ID will override the predefined selection and may require specific API keys.</p>
</section>
<hr className="border-onyx-border/50"/>
<section className="space-y-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-purple-400 text-sm">smart_toy</span>
<h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Agentic Settings</h3>
</div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-onyx-surface/50 border border-onyx-border/30">
<div className="space-y-1">
<h4 className="text-sm font-medium text-white">Max Tool Depth</h4>
<p className="text-xs text-slate-500">Maximum recursive tool calls allowed per prompt.</p>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-mono text-primary font-bold">12</span>
<input className="w-32 accent-primary h-1.5 bg-onyx-border rounded-lg cursor-pointer" max="25" min="1" type="range" value="12"/>
</div>
</div>
<div className="flex items-center justify-between p-4 rounded-xl bg-onyx-surface/50 border border-onyx-border/30">
<div className="space-y-1">
<h4 className="text-sm font-medium text-white">Auto-Execution</h4>
<p className="text-xs text-slate-500">Allow agent to run shell commands without confirmation.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-onyx-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<div className="flex items-center justify-between p-4 rounded-xl bg-onyx-surface/50 border border-onyx-border/30">
<div className="space-y-1">
<h4 className="text-sm font-medium text-white">Strict Sandbox</h4>
<p className="text-xs text-slate-500">Isolated environment for package installations.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-onyx-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</section>
<section className="space-y-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-purple-400 text-sm">inventory_2</span>
<h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Environment</h3>
</div>
<div className="bg-background-dark rounded-lg p-3 border border-onyx-border">
<div className="grid grid-cols-2 gap-4">
<div className="text-[11px]">
<span className="text-slate-500 block mb-1">Project Root</span>
<code className="text-purple-300">/home/onyx/app-genesis</code>
</div>
<div className="text-[11px]">
<span className="text-slate-500 block mb-1">Runtime</span>
<code className="text-purple-300">Node.js 20.x + Vite</code>
</div>
</div>
</div>
</section>
</div>
<div className="p-6 border-t border-onyx-border bg-onyx-surface/20 flex items-center justify-between">
<button className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                    Reset to Default
                </button>
<div className="flex gap-3">
<button className="px-5 py-2 rounded-lg border border-onyx-border text-sm font-medium hover:bg-white/5 transition-all">
                        Cancel
                    </button>
<button className="px-6 py-2 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                        Save Changes
                    </button>
</div>
</div>
</div>
</div>


    </div>
  );
};

export default Settings;
