import { useState, useCallback, useRef, useEffect } from 'react';
import { Message, ChatState } from '../types';

const CHAT_STORAGE_KEY = 'zerocode_chat_history';

export const useChat = () => {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    inputHistory: [],
    currentHistoryIndex: -1,
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedMessages = localStorage.getItem(CHAT_STORAGE_KEY);
    if (storedMessages) {
      try {
        const parsedMessages = JSON.parse(storedMessages).map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }));
        setChatState(prev => ({ ...prev, messages: parsedMessages }));
      } catch (error) {
        console.error('Error parsing stored messages:', error);
      }
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatState.messages]);

  const saveMessages = (messages: Message[]) => {
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
  };

  const getBotResponse = async (userMessage: string): Promise<string> => {
    
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    
    const responses = [
      "That's an interesting question! Let me think about that...",
      "I understand what you're asking. Here's my perspective on that topic.",
      "Great question! Based on my knowledge, I can share some insights.",
      "I'd be happy to help you with that. Let me provide some information.",
      "That's a thoughtful inquiry. Here's what I know about this subject.",
      "I can definitely assist you with that. Let me break it down for you.",
      "Excellent question! I have some relevant information that might help.",
      "I appreciate you asking about this. Here's my take on the matter.",
    ];

    const contextualResponses: Record<string, string> = {
      'hello': 'Hello! I\'m ZeroCode AI Assistant. How can I help you today?',
      'hi': 'Hi there! Welcome to ZeroCode Chat. What would you like to talk about?',
      'help': 'I can help you with various topics including programming, general questions, and more. What specific area would you like assistance with?',
      'what can you do': 'I can assist with programming questions, general knowledge, problem-solving, and engaging conversations. Try asking me anything!',
      'thanks': 'You\'re welcome! I\'m here if you need any more help.',
      'bye': 'Goodbye! Feel free to come back anytime you need assistance.',
    };

    const lowerMessage = userMessage.toLowerCase();
    for (const [key, response] of Object.entries(contextualResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    return responses[Math.floor(Math.random() * responses.length)] + 
           ` Regarding "${userMessage}", I think this is a topic worth exploring further. What specific aspect would you like to know more about?`;
  };

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
      inputHistory: [content, ...prev.inputHistory.slice(0, 49)], // Keep last 50
      currentHistoryIndex: -1,
    }));

    try {
      const botResponse = await getBotResponse(content);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };

      setChatState(prev => {
        const newMessages = [...prev.messages, botMessage];
        saveMessages(newMessages);
        return {
          ...prev,
          messages: newMessages,
          isLoading: false,
        };
      });
    } catch (error) {
      console.error('Error getting bot response:', error);
      setChatState(prev => ({
        ...prev,
        isLoading: false,
      }));
    }
  }, []);

  const clearChat = () => {
    setChatState(prev => ({
      ...prev,
      messages: [],
    }));
    localStorage.removeItem(CHAT_STORAGE_KEY);
  };

  const getHistoryItem = (direction: 'up' | 'down') => {
    const { inputHistory, currentHistoryIndex } = chatState;
    
    if (direction === 'up') {
      const newIndex = Math.min(currentHistoryIndex + 1, inputHistory.length - 1);
      setChatState(prev => ({ ...prev, currentHistoryIndex: newIndex }));
      return inputHistory[newIndex] || '';
    } else {
      const newIndex = Math.max(currentHistoryIndex - 1, -1);
      setChatState(prev => ({ ...prev, currentHistoryIndex: newIndex }));
      return newIndex >= 0 ? inputHistory[newIndex] : '';
    }
  };

  return {
    ...chatState,
    sendMessage,
    clearChat,
    getHistoryItem,
    messagesEndRef,
  };
};
