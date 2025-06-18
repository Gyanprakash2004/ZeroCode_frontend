import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { AuthForm } from '../components/auth/AuthForm';
import { useAuth } from '../hooks/useAuth';

export const AuthPage: React.FC = () => {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const { login, register } = useAuth();

  const handleAuth = async (email: string, password: string, name?: string) => {
    if (authMode === 'register' && name) {
      return await register(email, password, name);
    } else {
      return await login(email, password);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ZeroCode Chat
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Your intelligent AI assistant
          </p>
        </div>

        <AuthForm
          mode={authMode}
          onSubmit={handleAuth}
          onToggleMode={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
        />
      </div>
    </div>
  );
};