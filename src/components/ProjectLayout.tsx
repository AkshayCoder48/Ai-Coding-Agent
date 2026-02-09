import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useWebContainer } from '../contexts/WebContainerContext';
import { createTools, executeTool } from '../services/aiAgent';

interface Message {
  role: 'user' | 'assistant' | 'system' | 'tool';
  content: string;
  tool_calls?: any[];
  tool_call_id?: string;
  timestamp: string;
}

interface ToolExecution {
  id: string;
  name: string;
  status: 'working' | 'completed' | 'error';
  message: string;
}

const ProjectLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { webcontainer, isReady: isWebContainerReady, appendOutput } = useWebContainer();

  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I've initialized the React + Vite project with Tailwind CSS. What would you like to build today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [toolExecutions, setToolExecutions] = useState<ToolExecution[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, toolExecutions]);

  useEffect(() => {
    const state = location.state as { initialPrompt?: string };
    if (state?.initialPrompt) {
      handleSendMessage(state.initialPrompt);
      window.history.replaceState({}, document.title);
    }
  }, []);

  const handleSendMessage = async (text: string = input) => {
    if (!text.trim() || !window.puter) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMessage: Message = { role: 'user', content: text, timestamp };

    setMessages(prev => [...prev, userMessage]);
    if (text === input) setInput('');
    setIsTyping(true);

    try {
      const tools = createTools(webcontainer);
      let currentMessages = [...messages, userMessage].map(m => ({
        role: m.role,
        content: m.content,
        tool_calls: m.tool_calls,
        tool_call_id: m.tool_call_id
      }));

      const callAI = async (msgs: any[]) => {
        const response = await window.puter.ai.chat(msgs, { tools, model: 'gpt-4o' });
        return response;
      };

      let response = await callAI(currentMessages);

      while (response.message.tool_calls?.length > 0) {
        const assistantMessage: Message = {
          role: 'assistant',
          content: response.message.content || 'Executing tools...',
          tool_calls: response.message.tool_calls,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, assistantMessage]);

        const toolResults = [];
        for (const toolCall of response.message.tool_calls) {
          const args = JSON.parse(toolCall.function.arguments);
          const executionId = Math.random().toString(36).substr(2, 9);

          setToolExecutions(prev => [...prev, {
            id: executionId,
            name: toolCall.function.name,
            status: 'working',
            message: `Executing ${toolCall.function.name}...`
          }]);

          try {
            const result = await executeTool(toolCall.function.name, args, webcontainer, (data) => {
              appendOutput(data);
            });
            toolResults.push({
              role: 'tool',
              tool_call_id: toolCall.id,
              content: typeof result === 'string' ? result : JSON.stringify(result)
            });
            setToolExecutions(prev => prev.filter(t => t.id !== executionId));
          } catch (err: any) {
            toolResults.push({
              role: 'tool',
              tool_call_id: toolCall.id,
              content: `Error: ${err.message}`
            });
            setToolExecutions(prev => prev.map(t => t.id === executionId ? { ...t, status: 'error', message: `Error: ${err.message}` } : t));
          }
        }

        const toolMessages = toolResults.map(tr => ({
          ...tr,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        } as Message));
        setMessages(prev => [...prev, ...toolMessages]);

        currentMessages = [...currentMessages, response.message, ...toolResults];
        response = await callAI(currentMessages);
      }

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: response.message.content,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);

    } catch (error: any) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Sorry, I encountered an error: ${error.message}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } finally {
      setIsTyping(false);
      setToolExecutions([]);
    }
  };

  const activeTab = location.pathname.endsWith(id || '') ? 'preview' : location.pathname.split('/').pop();

  return (
    <div className="min-h-screen bg-background-dark text-white font-display">
      <div className="flex flex-col h-screen w-full">
        <header className="h-14 border-b border-onyx-border flex items-center justify-between px-6 bg-onyx-surface shrink-0 z-20">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-xl">deployed_code</span>
            </div>
            <div className="flex flex-col">
              <Link to="/"><h1 className="text-sm font-bold tracking-tight hover:text-primary transition-colors">OnyxGPT Project Workspace</h1></Link>
              <div className="flex items-center gap-2">
                <span className={`size-2 rounded-full ${isWebContainerReady ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></span>
                <span className="text-[10px] text-slate-500 uppercase font-semibold">
                  {isWebContainerReady ? 'Dev Server Active' : 'Initializing WebContainer...'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1 px-3 py-1 bg-border-dark/50 rounded-full border border-onyx-border">
              <span className="material-symbols-outlined text-xs text-primary">account_tree</span>
              <span className="text-xs font-medium">main</span>
            </div>
            <button className="flex items-center justify-center size-9 rounded-lg hover:bg-border-dark transition-colors">
              <span className="material-symbols-outlined text-slate-500">notifications</span>
            </button>
            <Link to={`/project/${id}/settings`} className="flex items-center justify-center size-9 rounded-lg hover:bg-border-dark transition-colors">
              <span className="material-symbols-outlined text-slate-500">settings</span>
            </Link>
            <div className="h-8 w-[1px] bg-border-dark mx-1"></div>
            <div className="group relative">
              <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs border border-primary/30 cursor-pointer">
                {user?.username.charAt(0).toUpperCase() || 'U'}
              </div>
              <div className="absolute right-0 mt-2 w-48 bg-onyx-surface border border-onyx-border rounded-xl shadow-2xl p-2 hidden group-hover:block z-50">
                <p className="px-3 py-2 text-xs font-bold text-slate-400 border-b border-onyx-border mb-2">{user?.email}</p>
                <button onClick={signOut} className="w-full text-left px-3 py-2 text-xs text-red-400 hover:bg-red-400/10 rounded-lg transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">logout</span> Sign Out
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 flex overflow-hidden">
          <div className="flex-1 flex flex-col border-r border-onyx-border bg-background-dark overflow-hidden">
            <nav className="flex border-b border-onyx-border bg-onyx-surface px-4 gap-1">
              <Link to={`/project/${id}`} className={`px-4 py-3 text-xs font-bold flex items-center gap-2 border-b-2 transition-all ${activeTab === 'preview' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-300'}`}>
                <span className="material-symbols-outlined text-lg">visibility</span>Preview
              </Link>
              <Link to={`/project/${id}/terminal`} className={`px-4 py-3 text-xs font-bold flex items-center gap-2 border-b-2 transition-all ${activeTab === 'terminal' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-300'}`}>
                <span className="material-symbols-outlined text-lg">terminal</span>Terminal
              </Link>
              <Link to={`/project/${id}/database`} className={`px-4 py-3 text-xs font-bold flex items-center gap-2 border-b-2 transition-all ${activeTab === 'database' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-300'}`}>
                <span className="material-symbols-outlined text-lg">database</span>Database
              </Link>
              <Link to={`/project/${id}/activity`} className={`px-4 py-3 text-xs font-bold flex items-center gap-2 border-b-2 transition-all ${activeTab === 'activity' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-300'}`}>
                <span className="material-symbols-outlined text-lg">history</span>Activity
              </Link>
            </nav>

            <div className="flex-1 p-4 overflow-hidden">
              {children}
            </div>
          </div>

          <aside className="w-[420px] flex flex-col bg-onyx-surface shrink-0 border-l border-onyx-border">
            <div className="h-12 flex items-center justify-between px-4 border-b border-onyx-border">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">AI Assistant</span>
              <div className="flex gap-1">
                <button onClick={() => setMessages([])} className="p-1 hover:bg-border-dark rounded text-slate-400 transition-colors">
                  <span className="material-symbols-outlined text-sm">delete</span>
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar space-y-6">
              {messages.map((msg, i) => (
                msg.role !== 'tool' && (
                  <div key={i} className={`flex flex-col gap-2 ${msg.role === 'user' ? 'items-end' : ''}`}>
                    <div className={`flex items-center gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`size-6 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-border-dark' : 'bg-primary'}`}>
                        <span className="material-symbols-outlined text-xs text-white">
                          {msg.role === 'user' ? 'person' : 'smart_toy'}
                        </span>
                      </div>
                      <span className="text-xs font-bold">{msg.role === 'user' ? 'You' : 'OnyxGPT'}</span>
                      <span className="text-[10px] text-slate-400">{msg.timestamp}</span>
                    </div>
                    <div className={`p-3 rounded-xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-primary text-white shadow-lg shadow-primary/10 max-w-[90%]'
                        : 'bg-background-dark/50 border border-onyx-border'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                )
              ))}

              {isTyping && (
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
                </div>
              )}

              {toolExecutions.length > 0 && (
                <div className="space-y-2 mt-4">
                  {toolExecutions.map((tool, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <div className={`flex items-center gap-1.5 px-2 py-1 border rounded text-[10px] font-bold uppercase tracking-tight w-fit ${
                        tool.status === 'error' ? 'bg-red-900/30 border-red-800 text-red-400' : 'bg-primary/10 border-primary/20 text-primary'
                      }`}>
                        <span className={`material-symbols-outlined text-[14px] ${tool.status === 'working' ? 'animate-spin' : ''}`}>
                          {tool.status === 'working' ? 'sync' : tool.status === 'error' ? 'error' : 'check_circle'}
                        </span>
                        {tool.message}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-onyx-border bg-onyx-surface">
              <div className="relative bg-background-dark rounded-xl border border-onyx-border p-2 transition-all focus-within:ring-2 ring-primary/20 focus-within:border-primary">
                <textarea
                  className="w-full bg-transparent border-none focus:ring-0 text-sm resize-none custom-scrollbar min-h-[80px] text-white"
                  placeholder="Ask OnyxGPT to build something..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                ></textarea>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex gap-1">
                    <button className="p-1.5 hover:bg-border-dark rounded text-slate-500 transition-colors">
                      <span className="material-symbols-outlined text-xl">attach_file</span>
                    </button>
                    <button className="p-1.5 hover:bg-border-dark rounded text-slate-500 transition-colors">
                      <span className="material-symbols-outlined text-xl">image</span>
                    </button>
                  </div>
                  <button
                    onClick={() => handleSendMessage()}
                    disabled={!input.trim() || isTyping}
                    className="bg-primary text-white p-2 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    <span className="material-symbols-outlined text-xl">send</span>
                  </button>
                </div>
              </div>
              <p className="text-[10px] text-center text-slate-400 mt-2 italic font-light">Powered by Puter.js AI</p>
            </div>
          </aside>
        </main>

        <footer className="h-6 bg-primary flex items-center justify-between px-4 text-white text-[10px] font-medium shrink-0 shadow-[0_-2px_10px_rgba(55,19,236,0.2)]">
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

export default ProjectLayout;
