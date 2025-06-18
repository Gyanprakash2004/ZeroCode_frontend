import React from 'react';
import { Header } from '../components/layout/Header';
import { ChatWindow } from '../components/chat/ChatWindow';

export const ChatPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 overflow-hidden">
        <ChatWindow />
      </div>
    </div>
  );
};