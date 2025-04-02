import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: generateBotResponse(inputValue.trim()),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const generateBotResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('pricing') || input.includes('cost') || input.includes('price')) {
      return "Our pricing varies based on project complexity. For a detailed quote, please provide more information about your project requirements. Generally:\n\n" +
             "• Basic websites: 2-4 weeks\n" +
             "• E-commerce sites: 4-8 weeks\n" +
             "• Custom web applications: 8-12 weeks\n\n" +
             "Would you like to schedule a consultation to discuss your specific needs?";
    }
    
    if (input.includes('timeline') || input.includes('duration') || input.includes('how long')) {
      return "Project timelines depend on scope and complexity. Here's a general overview:\n\n" +
             "• Landing pages: 1-2 weeks\n" +
             "• Business websites: 3-4 weeks\n" +
             "• E-commerce platforms: 6-8 weeks\n" +
             "• Custom applications: 8-12+ weeks\n\n" +
             "Would you like to discuss your project timeline?";
    }
    
    if (input.includes('process') || input.includes('how do we start') || input.includes('begin')) {
      return "Our process is simple:\n\n" +
             "1. Initial Consultation\n" +
             "2. Project Planning\n" +
             "3. Design Phase\n" +
             "4. Development\n" +
             "5. Testing\n" +
             "6. Launch\n\n" +
             "Ready to start? Let's schedule a consultation!";
    }

    return "Thanks for reaching out! How can I help you today? You can ask about our:\n\n" +
           "• Project process\n" +
           "• Timeline estimates\n" +
           "• Service offerings\n" +
           "• Getting started";
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 p-4 bg-[#0074b7] text-white rounded-full shadow-lg hover:bg-[#003b73] transition-all duration-200 hover:scale-110"
      >
        <FiMessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-24 right-8 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#0074b7] p-4 text-white flex justify-between items-center">
              <h3 className="font-semibold">Chat with us</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-[#003b73] rounded"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 h-[380px] overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-[#0074b7] text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                    <span className="text-xs opacity-75 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <div className="flex gap-2">
                      <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-[#0074b7] text-gray-700"
                />
                <button
                  type="submit"
                  className="p-2 bg-[#0074b7] text-white rounded-lg hover:bg-[#003b73] transition-colors"
                >
                  <FiSend className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
