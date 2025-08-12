'use client';

import React, { useState, useEffect } from "react";
import { RxChatBubble, RxCross1 } from 'react-icons/rx';

/**
 * ChatbotButton
 */
export function ChatbotButton({ onClick }) {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 10000); // 10s
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setShowBubble(false);
    onClick();
  };

  return (
    <div className="fixed bottom-4 right-4 z-20 flex flex-col items-end">
      {showBubble && (
        <div
          className="mb-2 max-w-xs rounded-lg bg-gray-800 text-white text-sm px-3 py-2 shadow-lg animate-fade-in"
          role="alert"
        >
          Need any help?
        </div>
      )}
      <button
        type="button"
        onClick={handleClick}
        className={
          "h-12 w-12 rounded-full bg-primary text-secondary " +
          "shadow-lg hover:bg-secondary hover:text-primary " +
          "transition-colors duration-200 flex items-center justify-center"
        }
        aria-label="Open chat"
      >
        <RxChatBubble className="h-6 w-6" />
      </button>
    </div>
  );
}

/**
 * ChatWindow
 */
export function ChatWindow({ onClose }) {
  return (
    <div className="fixed bottom-20 right-8 z-30 w-80 h-96 bg-white rounded-lg shadow-lg flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-3 border-b">
        <span className="font-semibold text-gray-800">Chatbot</span>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <RxCross1 className="h-5 w-5" />
        </button>
      </div>
      {/* Messages area */}
      <div className="flex-1 p-3 overflow-y-auto space-y-2">
        <div className="text-sm text-gray-700">
          Hello! How can I help you today?
        </div>
      </div>
      {/* Input area */}
      <div className="p-3 border-t">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full p-2 border rounded focus:outline-none focus:ring"
        />
      </div>
    </div>
  );
}
