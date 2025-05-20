import React, { useState } from "react";
import { RxChatBubble, RxCross1 } from 'react-icons/rx';

/**
 * ChatbotButton
 * A floating chat button positioned at the bottom right corner.
 * Uses CSS variables --primary and --secondary for styling.
 */
export function ChatbotButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "fixed bottom-40 right-8 z-20 flex items-center justify-center " +
        "h-12 w-12 rounded-full bg-primary text-secondary " +
        "shadow-lg hover:bg-secondary hover:text-primary " +
        "transition-colors duration-200"
      }
      aria-label="Open chat"
    >
      <RxChatBubble className="h-6 w-6" />
    </button>
  );
}

/**
 * ChatWindow
 * A simple mock chat window that appears above the button.
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