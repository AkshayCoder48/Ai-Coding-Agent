import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { projectService } from '../services/projectService';
import type { Project } from '../lib/supabase';

const ProjectsPage: React.FC = () => {
  const { user, signOut } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectService.getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Fallback to mock data for demonstration if Supabase is not connected
        setProjects([
          { id: '12345', name: 'E-commerce Dashboard', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), user_id: '1' },
          { id: '67890', name: 'Portfolio Site', created_at: new Date(Date.now() - 86400000).toISOString(), updated_at: new Date(Date.now() - 86400000).toISOString(), user_id: '1' },
        ] as Project[]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-background-dark text-white font-display flex flex-col">
      <header className="h-16 border-b border-onyx-border flex items-center justify-between px-6 md:px-16 bg-onyx-surface shrink-0">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(55,19,236,0.3)]">
            <span className="material-symbols-outlined text-xl">terminal</span>
          </div>
          <Link to="/"><h2 className="text-white text-xl font-bold group-hover:text-primary transition-colors">OnyxGPT</h2></Link>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/projects" className="text-white">My Projects</Link>
            <Link to="/docs" className="hover:text-white transition-colors">Docs</Link>
          </nav>
          <div className="h-6 w-px bg-onyx-border hidden md:block"></div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-xs text-slate-400 font-medium">{user?.username}</p>
              <button onClick={signOut} className="text-[10px] text-primary hover:text-white transition-colors uppercase font-bold tracking-widest">Sign out</button>
            </div>
            <div className="size-10 rounded-full bg-onyx-surface border border-onyx-border flex items-center justify-center text-primary font-bold">
              {user?.username?.charAt(0).toUpperCase() || 'U'}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-6 md:p-16 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">My Projects</h1>
            <p className="text-slate-500 text-lg font-light">Manage and access your generated applications.</p>
          </div>
          <Link to="/" className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">add</span>
            New Project
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-48 rounded-2xl bg-onyx-surface border border-onyx-border animate-pulse"></div>
            ))}
          </div>
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group bg-onyx-surface border border-onyx-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">deployed_code</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-onyx-border/50">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">ID: {project.id}</span>
                  <span className="text-[10px] font-medium text-slate-400">
                    {new Date(project.created_at).toLocaleDateString()}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="size-20 bg-onyx-surface border border-onyx-border rounded-3xl flex items-center justify-center text-slate-700 mb-6">
              <span className="material-symbols-outlined text-4xl">folder_off</span>
            </div>
            <h3 className="text-xl font-bold mb-2">No projects yet</h3>
            <p className="text-slate-500 mb-8 max-w-sm mx-auto">Start by describing an app you want to build on the home page.</p>
            <Link to="/" className="text-primary hover:text-white transition-colors font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              <span className="material-symbols-outlined">arrow_forward</span>
              Create your first project
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProjectsPage;
