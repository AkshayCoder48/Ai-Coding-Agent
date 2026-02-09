import { supabase } from '../lib/supabase';
import type { Project, ProjectFile, ChatMessage } from '../lib/supabase';

export const projectService = {
  async getProjects() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data as Project[];
  },

  async getProject(id: string) {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data as Project;
  },

  async createProject(name: string) {
    const { data, error } = await supabase
      .from('projects')
      .insert([{ name }])
      .select()
      .single();
    if (error) throw error;
    return data as Project;
  },

  async getProjectFiles(projectId: string) {
    const { data, error } = await supabase
      .from('project_files')
      .select('*')
      .eq('project_id', projectId);
    if (error) throw error;
    return data as ProjectFile[];
  },

  async saveProjectFile(projectId: string, path: string, content: string) {
    const { data, error } = await supabase
      .from('project_files')
      .upsert([{ project_id: projectId, path, content }], { onConflict: 'project_id,path' })
      .select()
      .single();
    if (error) throw error;
    return data as ProjectFile;
  },

  async getChatMessages(projectId: string) {
    const { data, error } = await supabase
      .from('chat_messages')
      .select('*')
      .eq('project_id', projectId)
      .order('created_at', { ascending: true });
    if (error) throw error;
    return data as ChatMessage[];
  },

  async addChatMessage(projectId: string, role: ChatMessage['role'], content: string) {
    const { data, error } = await supabase
      .from('chat_messages')
      .insert([{ project_id: projectId, role, content }])
      .select()
      .single();
    if (error) throw error;
    return data as ChatMessage;
  }
};
