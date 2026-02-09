import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { WebContainer } from '@webcontainer/api';

interface WebContainerContextType {
  webcontainer: WebContainer | null;
  isReady: boolean;
  error: string | null;
  terminalOutput: string;
  appendOutput: (data: string) => void;
  clearOutput: () => void;
}

const WebContainerContext = createContext<WebContainerContextType | undefined>(undefined);

export const WebContainerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [webcontainer, setWebcontainer] = useState<WebContainer | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [terminalOutput, setTerminalOutput] = useState('');

  const appendOutput = useCallback((data: string) => {
    setTerminalOutput(prev => prev + data);
  }, []);

  const clearOutput = useCallback(() => {
    setTerminalOutput('');
  }, []);

  useEffect(() => {
    const init = async () => {
      try {
        const instance = await WebContainer.boot();
        setWebcontainer(instance);
        setIsReady(true);
      } catch (err) {
        console.error('Failed to boot WebContainer:', err);
        setError('Failed to initialize development environment.');
      }
    };

    init();
  }, []);

  return (
    <WebContainerContext.Provider value={{ webcontainer, isReady, error, terminalOutput, appendOutput, clearOutput }}>
      {children}
    </WebContainerContext.Provider>
  );
};

export const useWebContainer = () => {
  const context = useContext(WebContainerContext);
  if (context === undefined) {
    throw new Error('useWebContainer must be used within a WebContainerProvider');
  }
  return context;
};
