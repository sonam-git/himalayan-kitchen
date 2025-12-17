'use client';
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Namaste! 🙏 Welcome to Himalayan Kitchen Marin! I'm your AI assistant and I'm here to help you explore our authentic Nepali, Indian & Tibetan cuisine. I can answer questions about our menu, dietary options, prices, or help you find the perfect dish. What would you like to know?",
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Ensure component is mounted (client-side only)
  useEffect(() => {
    setMounted(true);
    // Check if desktop on mount
    setIsDesktop(window.innerWidth >= 768);
    
    // Add resize listener
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Listen for event from mobile bottom bar
  useEffect(() => {
    const handleOpenAI = () => {
      setIsOpen(true);
    };
    
    window.addEventListener('openAIAssistant', handleOpenAI);
    return () => window.removeEventListener('openAIAssistant', handleOpenAI);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: "I apologize, but I'm having trouble connecting right now. Please try again or contact us directly at (415) 526-3161 or himalayankitchenmarin@gmail.com.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickQuestions = [
    "What are your most popular dishes?",
    "Do you have vegetarian or vegan options?",
    "How much is chicken tikka masala?",
    "What time do you close?",
  ];

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    inputRef.current?.focus();
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating Chat Button - Hidden on mobile (available in MobileBottomBar), visible on md+ */}
      {!isOpen && mounted && isDesktop && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 group bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110"
          aria-label="Open AI Assistant"
          style={{ 
            position: 'fixed',
            bottom: '16px',
            right: '16px',
            zIndex: 999999
          }}
        >
          <Sparkles className="w-6 h-6 animate-pulse" />
          <MessageCircle className="w-6 h-6" />
          <span className="hidden lg:group-hover:inline-block text-sm font-semibold whitespace-nowrap pr-2">
            Ask AI Assistant
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="rounded-2xl shadow-2xl flex flex-col overflow-hidden bg-white dark:bg-gray-900"
          style={{ 
            position: 'fixed',
            bottom: '16px',
            right: '16px',
            width: 'calc(100vw - 32px)',
            maxWidth: '420px',
            height: 'calc(100vh - 120px)',
            maxHeight: '620px',
            zIndex: 999999
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Sparkles className="w-6 h-6 animate-pulse" />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-gray-700 dark:text-white text-base">Himalayan Kitchen AI</h3>
                <p className="text-xs text-gray-500 dark:text-gray-100">Powered by Google Gemini</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-1.5 transition-all hover:rotate-90 duration-300"
              aria-label="Close chat"
            >
              <X className="w-5 h-5 text-gray-800 dark:text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg dark:from-blue-500 dark:to-teal-500'
                      : 'bg-white text-gray-900 shadow-md border border-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600'
                  }`}
                >
                  <p className={`text-sm leading-relaxed whitespace-pre-wrap ${
                    message.role === 'user' ? 'text-white' : 'text-gray-900 dark:text-gray-100'
                  }`}>{message.content}</p>
                  <p className={`text-xs mt-1.5 ${
                    message.role === 'user' ? 'text-green-100 dark:text-blue-100' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl px-4 py-3 bg-white shadow-md border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin text-green-500 dark:text-teal-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Thinking...</span>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Questions (show when chat is empty) */}
            {messages.length === 1 && !isLoading && (
              <div className="space-y-2 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                  Quick questions:
                </p>
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="w-full text-left text-xs px-4 py-2.5 rounded-xl transition-all hover:scale-[1.02] bg-white hover:bg-gray-50 text-gray-700 shadow-md border border-gray-200 hover:border-green-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:border-teal-400"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex gap-2 items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our menu, prices, hours..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 rounded-full border-2 transition-all bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-400 focus:ring-green-500/20 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-teal-500 dark:focus:ring-teal-500/20 focus:outline-none focus:ring-2 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 dark:from-blue-500 dark:to-teal-500 dark:hover:from-blue-600 dark:hover:to-teal-600 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-full p-3 transition-all duration-200 disabled:cursor-not-allowed hover:scale-105 shadow-lg"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs mt-2 text-center text-gray-500 dark:text-gray-400">
              Powered by AI • May occasionally make mistakes
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
