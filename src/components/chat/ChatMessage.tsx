import React from 'react';
import { Bot, User } from 'lucide-react';
import { Message } from '../../types';

interface ChatMessageProps {
  message: Message;
  isTyping?: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isTyping }) => {
  const isBot = message.sender === 'bot';
  
  return (
    <div className={`flex items-start space-x-3 ${isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        isBot 
          ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
          : 'bg-gradient-to-r from-green-500 to-teal-600'
      }`}>
        {isBot ? (
          <Bot className="w-5 h-5 text-white" />
        ) : (
          <User className="w-5 h-5 text-white" />
        )}
      </div>
      
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
        isBot
          ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md border border-gray-200 dark:border-gray-700'
          : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
      }`}>
        <p className="text-sm leading-relaxed">
          {message.content}
          {isTyping && (
            <span className="inline-block ml-1 w-1 h-4 bg-current animate-pulse" />
          )}
        </p>
        <p className={`text-xs mt-1 ${
          isBot ? 'text-gray-500 dark:text-gray-400' : 'text-blue-100'
        }`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};