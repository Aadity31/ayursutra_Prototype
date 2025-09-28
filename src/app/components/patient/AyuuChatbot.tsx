"use client";

import React, { useState, useRef, useEffect } from "react";
import { XMarkIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  time: string;
}

const AyuuChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Ayuu. How can I help you today?",
      sender: 'bot',
      time: '7:30'
    },
    {
      id: 2,
      text: "Can you schedule an appointment for me",
      sender: 'user',
      time: '7:30'
    },
    {
      id: 3,
      text: "Yes, I can do that for you. When and where do you want to schedule it?",
      sender: 'bot',
      time: '7:30'
    },
    {
      id: 4,
      text: "In Dehradun anywhere between 10 to 12 am.",
      sender: 'user',
      time: '7:30'
    }
  ]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Smart bot response generator
  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Appointment related responses
    if (lowerMessage.includes('appointment') || lowerMessage.includes('book')) {
      return "I can help you schedule an appointment. What date and time would work best for you? We have slots available from 9 AM to 6 PM.";
    }
    
    // Session/therapy related
    if (lowerMessage.includes('session') || lowerMessage.includes('therapy')) {
      return "Let me check available therapy sessions for you. What type of therapy are you looking for - individual, group, or couples therapy?";
    }
    
    // Help requests
    if (lowerMessage.includes('help') || lowerMessage.includes('assist')) {
      return "I'm here to help! I can assist with:\n• Scheduling appointments\n• Session information\n• Payment queries\n• General questions\n\nWhat would you like to know?";
    }
    
    // Pricing queries
    if (lowerMessage.includes('pricing') || lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('fee')) {
      return "Our therapy sessions are priced as follows:\n• Individual Session: ₹800\n• Couples Therapy: ₹1200\n• Group Session: ₹500\n\nWe also offer package deals. Would you like more details?";
    }
    
    // Location queries
    if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('where')) {
      return "We have multiple locations:\n• Dehradun Main Clinic\n• Delhi Branch\n• Online Sessions\n\nWhich location would you prefer?";
    }
    
    // Time/schedule queries
    if (lowerMessage.includes('time') || lowerMessage.includes('schedule') || lowerMessage.includes('available')) {
      return "Our clinic hours are:\n• Monday - Friday: 9 AM - 7 PM\n• Saturday: 10 AM - 5 PM\n• Sunday: Closed\n\nWould you like to book a specific time slot?";
    }
    
    // Greeting responses
    if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
      return "Hello! Welcome to Ayuu Therapy Services. I'm here to assist you with appointments, session information, and any questions you might have. How can I help you today?";
    }
    
    // Thank you responses
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're welcome! Is there anything else I can help you with today? I'm here to make your therapy experience as smooth as possible.";
    }
    
    // FAQ responses
    if (lowerMessage.includes('faq') || lowerMessage.includes('question')) {
      return "Here are some frequently asked questions:\n• How to book an appointment?\n• What types of therapy do you offer?\n• Do you accept insurance?\n• Can I reschedule my appointment?\n\nWhich topic interests you?";
    }
    
    // Default response
    return "Thank you for your message. I understand you're asking about our therapy services. Could you please be more specific about what you'd like to know? I can help with appointments, pricing, locations, or general information.";
  };

  // Handle sending messages
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
        time: new Date().toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: false 
        }).slice(0, 5)
      };
      
      setMessages(prev => [...prev, userMessage]);
      const currentMessage = newMessage;
      setNewMessage('');
      setIsTyping(true);
      
      // Simulate bot thinking time
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          text: generateBotResponse(currentMessage),
          sender: 'bot',
          time: new Date().toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: false 
          }).slice(0, 5)
        };
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, Math.random() * 1000 + 1000); // Random delay 1-2 seconds
    }
  };

  // Handle keyboard events
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Quick action handlers
  const handleQuickAction = (action: string) => {
    const quickMessages = {
      'whats-up': "What's up Ayuu?",
      'pricing': "What are your pricing plans?",
      'faqs': "Show me frequently asked questions"
    };
    
    setNewMessage(quickMessages[action as keyof typeof quickMessages] || action);
  };

  // Minimized chatbot button
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-indigo-700 transition-all duration-200 hover:scale-110 z-50 animate-pulse"
        aria-label="Open Ayuu Chatbot"
      >
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
          <span className="text-indigo-600 font-bold text-sm">A</span>
        </div>
        {/* Notification badge */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">1</span>
        </div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-indigo-600 font-bold">A</span>
          </div>
          <div>
            <h3 className="text-white font-semibold">Ayuu</h3>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <p className="text-indigo-200 text-sm">AI Assistant • Online</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:bg-indigo-700 p-1 rounded transition-colors"
          aria-label="Close chatbot"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
          >
            <div className="flex items-end space-x-2 max-w-xs">
              {message.sender === 'bot' && (
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">A</span>
                </div>
              )}
              <div
                className={`rounded-2xl px-4 py-2 shadow-sm max-w-xs ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    : 'bg-white text-gray-800 border border-gray-200'
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-indigo-200' : 'text-gray-500'
                }`}>
                  {message.time}
                </p>
              </div>
              {message.sender === 'user' && (
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600 font-bold text-xs">U</span>
                </div>
              )}
            </div>
          </div>
        ))}
        
        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start animate-fadeIn">
            <div className="flex items-end space-x-2 max-w-xs">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs">A</span>
              </div>
              <div className="bg-white text-gray-800 border border-gray-200 rounded-2xl px-4 py-2 shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-2 border-t bg-gray-50">
        <div className="flex space-x-2 text-xs">
          <button 
            onClick={() => handleQuickAction('whats-up')}
            className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors font-medium"
          >
            What's up Ayuu?
          </button>
          <span className="text-gray-300">•</span>
          <button 
            onClick={() => handleQuickAction('pricing')}
            className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors font-medium"
          >
            Pricing
          </button>
          <span className="text-gray-300">•</span>
          <button 
            onClick={() => handleQuickAction('faqs')}
            className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors font-medium"
          >
            FAQs
          </button>
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t bg-white">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
            disabled={isTyping}
          />
          <button
            onClick={handleSendMessage}
            disabled={!newMessage.trim() || isTyping}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-2 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
            aria-label="Send message"
          >
            <PaperAirplaneIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AyuuChatbot;
