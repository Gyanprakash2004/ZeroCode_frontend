# ZeroCode Chat - AI Assistant

[![Demo](https://img.shields.io/badge/Demo-Live-blue)](https://your-demo-url.com)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black)](https://github.com/your-handle/zerocode-fe-assignment)

## 🚀 Overview

ZeroCode Chat is a production-ready AI chatbot web application built with React and TypeScript. It features secure JWT authentication, real-time messaging, dark/light mode theming, and an intuitive user interface designed for seamless conversations with an AI assistant.

## ✨ Features

### Core Features
- **🔐 Authentication System**: JWT-based login and registration with form validation
- **💬 Real-time Chat Interface**: Instant messaging with auto-scroll and typing indicators
- **🌙 Dark/Light Mode**: Toggle between themes with smooth transitions
- **📱 Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **⌨️ Input History**: Navigate previous messages with arrow keys
- **🎤 Voice Input**: Speech-to-text functionality (browser dependent)

### Bonus Features
- **📥 Chat Export**: Download conversation history as JSON
- **💾 Message Persistence**: Conversations saved to localStorage
- **🎨 Modern UI/UX**: Glassmorphism effects and smooth animations
- **⚡ Loading States**: Professional loading indicators throughout
- **🔄 Auto-scroll**: Messages automatically scroll to latest
- **🎯 Error Handling**: Comprehensive error management

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint with TypeScript support
- **Authentication**: JWT (localStorage-based)
- **State Management**: React Hooks (useState, useEffect, custom hooks)

## 🏗️ Project Architecture

```
src/
├── components/
│   ├── auth/
│   │   └── AuthForm.tsx          # Login/Register form
│   ├── chat/
│   │   ├── ChatWindow.tsx        # Main chat interface
│   │   ├── ChatMessage.tsx       # Individual message component
│   │   └── ChatInput.tsx         # Message input with features
│   ├── layout/
│   │   └── Header.tsx            # App header with navigation
│   └── ui/
│       ├── Button.tsx            # Reusable button component
│       ├── Input.tsx             # Form input component
│       └── LoadingSpinner.tsx    # Loading indicator
├── hooks/
│   ├── useAuth.ts               # Authentication logic
│   ├── useChat.ts               # Chat functionality
│   └── useTheme.ts              # Theme management
├── pages/
│   ├── AuthPage.tsx             # Authentication page
│   └── ChatPage.tsx             # Main chat page
├── types/
│   └── index.ts                 # TypeScript interfaces
└── App.tsx                      # Main app component
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-handle/zerocode-fe-assignment.git
   cd zerocode-fe-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 🔐 Authentication

The app uses a mock authentication system for demonstration purposes:

**Test Credentials:**
- Email: any valid email format
- Password: minimum 6 characters
- Name: any name (for registration)

**Features:**
- JWT token simulation
- Form validation
- Error handling
- Persistent login state

## 💬 Chat Features

### Real-time Messaging
- Instant message delivery simulation
- Auto-scroll to latest messages
- Message timestamps
- Distinct styling for user vs bot messages

### AI Responses
- Contextual responses based on user input
- Simulated typing delay for realistic experience
- Variety of response templates
- Error handling for failed requests

### Input Enhancements
- **History Navigation**: Use ↑/↓ arrow keys to navigate previous messages
- **Voice Input**: Click microphone icon for speech-to-text
- **Multi-line Support**: Shift+Enter for new lines
- **Auto-resize**: Text area expands with content

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (#3B82F6 to #2563EB)
- **Secondary**: Purple gradient (#8B5CF6 to #7C3AED)
- **Accent**: Teal (#14B8A6)
- **Success**: Green (#10B981)
- **Warning**: Orange (#F59E0B)
- **Error**: Red (#EF4444)

### Typography
- **Headings**: Inter font family, weights 600-700
- **Body**: Inter font family, weight 400
- **Line Heights**: 1.5 for body text, 1.2 for headings

### Spacing System
- Based on 8px grid system
- Consistent spacing throughout application
- Responsive breakpoints for mobile, tablet, desktop

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Features
- Adaptive layouts for all screen sizes
- Touch-friendly interface on mobile
- Optimized typography and spacing
- Collapsible navigation elements

## 🧪 Code Quality

### TypeScript
- Strict type checking enabled
- Comprehensive interface definitions
- Type-safe API calls and state management

### ESLint Configuration
- React hooks rules
- TypeScript-specific rules
- Import/export validation
- Code style consistency

### Best Practices
- Functional components throughout
- Custom hooks for reusable logic
- Proper error boundaries
- Accessibility considerations

## 🔒 Security Features

### Authentication Security
- Input validation and sanitization
- XSS prevention
- CSRF protection considerations
- Secure token storage

### Data Privacy
- No sensitive data in localStorage
- Proper error message handling
- Input sanitization
- Safe HTML rendering

## 🎯 Performance Optimizations

### React Optimizations
- Functional components with hooks
- Proper dependency arrays in useEffect
- Debounced input handling
- Optimized re-renders

### Bundle Optimization
- Vite for fast builds
- Tree shaking enabled
- Code splitting considerations
- Optimized asset loading

## 📊 Browser Compatibility

- **Chrome**: Latest versions
- **Firefox**: Latest versions
- **Safari**: Latest versions
- **Edge**: Latest versions

### Progressive Enhancement
- Graceful degradation for older browsers
- Feature detection for advanced APIs
- Fallbacks for unsupported features

## 🚀 Deployment

### Build Process
```bash
npm run build
```

### Deployment Platforms
- **Vercel**: Recommended for React apps
- **Netlify**: Simple drag-and-drop deployment
- **GitHub Pages**: Free hosting for static sites

### Environment Variables
- No environment variables required for basic functionality
- API keys should be added for production AI integration

## 📈 Future Enhancements

### Planned Features
- [ ] Real AI integration (OpenAI, Anthropic)
- [ ] File upload support
- [ ] Chat rooms/channels
- [ ] Message search functionality
- [ ] User preferences/settings
- [ ] Push notifications
- [ ] Offline support
- [ ] Chat analytics dashboard

### Technical Improvements
- [ ] Service worker implementation
- [ ] Advanced caching strategies
- [ ] Real-time collaboration features
- [ ] Advanced security measures
- [ ] Performance monitoring

## 🐛 Known Issues

- Voice input requires browser support for Web Speech API
- Chat history is limited to localStorage capacity
- No real-time updates between browser tabs

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **GitHub**: [@your-handle](https://github.com/your-handle)
- **Email**: your.email@example.com
- **LinkedIn**: [Your Name](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- ZeroCode team for the assignment opportunity
- React community for excellent documentation
- Tailwind CSS for the utility-first approach
- Lucide React for beautiful icons

---

**Built with ❤️ for ZeroCode Frontend Engineer Assignment**