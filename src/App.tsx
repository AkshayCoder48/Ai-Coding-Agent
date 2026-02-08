import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Workspace from './pages/Workspace';
import Database from './pages/Database';
import Terminal from './pages/Terminal';
import Activity from './pages/Activity';
import Settings from './pages/Settings';
import DocsPage from './pages/DocsPage';
import { useAuth } from './contexts/AuthContext';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="min-h-screen bg-background-dark flex items-center justify-center text-white font-mono uppercase tracking-widest animate-pulse">Initializing OnyxOS...</div>;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/docs" element={<DocsPage />} />

        {/* Project Workspace Routes */}
        <Route path="/project/:id" element={<ProtectedRoute><Workspace /></ProtectedRoute>} />
        <Route path="/project/:id/database" element={<ProtectedRoute><Database /></ProtectedRoute>} />
        <Route path="/project/:id/terminal" element={<ProtectedRoute><Terminal /></ProtectedRoute>} />
        <Route path="/project/:id/activity" element={<ProtectedRoute><Activity /></ProtectedRoute>} />
        <Route path="/project/:id/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />

        {/* Legacy Routes - Redirect to landing for now or keep for dev */}
        <Route path="/workspace" element={<Navigate to="/" />} />
        <Route path="/database" element={<Navigate to="/" />} />
        <Route path="/terminal" element={<Navigate to="/" />} />
        <Route path="/activity" element={<Navigate to="/" />} />
        <Route path="/settings" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
