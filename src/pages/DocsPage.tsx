import React from 'react';
import { Link } from 'react-router-dom';

const DocsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-dark text-white font-display flex flex-col items-center justify-center p-6 text-center">
      <div className="size-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20 mb-8">
        <span className="material-symbols-outlined text-4xl">description</span>
      </div>
      <h1 className="text-4xl font-bold mb-4 tracking-tight">Documentation</h1>
      <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">Documentation is coming soon. We are working hard to provide you with the best experience.</p>
      <Link to="/" className="text-primary hover:text-white transition-colors font-bold uppercase tracking-widest text-sm flex items-center gap-2">
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Home
      </Link>
    </div>
  );
};

export default DocsPage;
