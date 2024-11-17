import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './contexts/ToastContext';
import ErrorBoundary from './components/common/ErrorBoundary';
import routes from './config/routes';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <AuthProvider>
          <div className="min-h-screen bg-gray-50">
            <Navigation />
            <main>
              <Routes>
                {routes.map((route) => (
                  <Route 
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </main>
          </div>
        </AuthProvider>
      </ToastProvider>
    </ErrorBoundary>
  );
};

export default App; 