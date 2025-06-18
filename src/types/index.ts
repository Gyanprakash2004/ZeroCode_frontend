export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  inputHistory: string[];
  currentHistoryIndex: number;
}

export interface ThemeState {
  isDarkMode: boolean;
}