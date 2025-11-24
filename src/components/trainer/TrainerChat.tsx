import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Send, Search, MessageCircle, Dumbbell } from 'lucide-react';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { motion } from 'motion/react';

const mockConversations = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'SJ',
    lastMessage: 'Thanks for the workout tips!',
    time: '5m ago',
    unread: 2,
    color: '#FF6B35',
  },
  {
    id: 2,
    name: 'Mike Chen',
    avatar: 'MC',
    lastMessage: 'Can we schedule a form check?',
    time: '1h ago',
    unread: 0,
    color: '#6C63FF',
  },
  {
    id: 3,
    name: 'Emily Davis',
    avatar: 'ED',
    lastMessage: 'Great session today!',
    time: '3h ago',
    unread: 1,
    color: '#00D9FF',
  },
  {
    id: 4,
    name: 'Alex Martinez',
    avatar: 'AM',
    lastMessage: 'Question about tomorrow...',
    time: '5h ago',
    unread: 0,
    color: '#6BCF7F',
  },
];

const mockMessages = [
  { sender: 'member', message: 'Hi! I have a question about my form.', time: '10:30 AM' },
  { sender: 'trainer', message: 'Of course! What would you like to know?', time: '10:32 AM' },
  { sender: 'member', message: 'My lower back feels tight after kettlebell swings.', time: '10:33 AM' },
  { sender: 'trainer', message: 'That usually means you need to focus more on hip hinge. Make sure you\'re pushing your hips back, not squatting down.', time: '10:35 AM' },
  { sender: 'member', message: 'Should I reduce the weight?', time: '10:36 AM' },
  { sender: 'trainer', message: 'Yes, drop down to 12kg and focus on perfect form. Quality over quantity!', time: '10:37 AM' },
];

export function TrainerChat() {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { 
        sender: 'trainer', 
        message: newMessage, 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      }]);
      setNewMessage('');
    }
  };

  const filteredConversations = mockConversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!selectedChat) {
    return (
      <div className="pb-20 bg-[#0A0E27] min-h-screen overflow-x-hidden">
        {/* Header with gym theme */}
        <div className="p-6 border-b border-[#2D3454] bg-gradient-to-r from-[#1A1F3A] to-[#252B4A]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#4834DF] flex items-center justify-center">
              <MessageCircle size={20} className="text-white" />
            </div>
            <h1 className="text-2xl text-white">Messages</h1>
          </div>
          
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A0AEC0]" size={20} />
            <Input
              placeholder="Search conversations..."
              className="pl-12 bg-[#0F1129] border-[#2D3454] text-white placeholder:text-[#A0AEC0] rounded-xl h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Conversations list */}
        <div className="p-4 space-y-2">
          {filteredConversations.map((conv, index) => (
            <motion.div
              key={conv.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card
                className="p-4 bg-[#1A1F3A] border-[#2D3454] hover:border-[#6C63FF] cursor-pointer transition-all hover:shadow-glow-secondary"
                onClick={() => setSelectedChat(conv.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="w-14 h-14" style={{ backgroundColor: conv.color }}>
                      <AvatarFallback style={{ backgroundColor: conv.color }} className="text-white">
                        {conv.avatar}
                      </AvatarFallback>
                    </Avatar>
                    {conv.unread > 0 && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#FF6B35] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">{conv.unread}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-white truncate">{conv.name}</h3>
                      <span className="text-[#A0AEC0] text-xs">{conv.time}</span>
                    </div>
                    <p className="text-[#A0AEC0] text-sm truncate">{conv.lastMessage}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  const selectedConversation = mockConversations.find(c => c.id === selectedChat);

  return (
    <div className="pb-20 bg-[#0A0E27] min-h-screen flex flex-col overflow-x-hidden">
      {/* Chat header */}
      <div className="p-4 border-b border-[#2D3454] bg-[#1A1F3A]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSelectedChat(null)}
            className="text-[#A0AEC0] hover:text-white transition-colors"
          >
            ←
          </button>
          <Avatar className="w-12 h-12" style={{ backgroundColor: selectedConversation?.color }}>
            <AvatarFallback style={{ backgroundColor: selectedConversation?.color }} className="text-white">
              {selectedConversation?.avatar}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-white">{selectedConversation?.name}</h2>
            <p className="text-[#A0AEC0] text-sm flex items-center gap-1">
              <Dumbbell size={14} />
              Active member
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`flex ${msg.sender === 'trainer' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[75%] ${msg.sender === 'trainer' ? 'order-2' : 'order-1'}`}>
              <Card 
                className={`p-3 rounded-xl ${
                  msg.sender === 'trainer' 
                    ? 'bg-gradient-to-r from-[#6C63FF] to-[#4834DF] border-[#6C63FF]' 
                    : 'bg-[#1A1F3A] border-[#2D3454]'
                }`}
              >
                <p className="text-white text-sm">{msg.message}</p>
                <p className="text-white/70 text-xs mt-1">{msg.time}</p>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Message input */}
      <div className="p-4 border-t border-[#2D3454] bg-[#1A1F3A]">
        <div className="flex gap-2">
          <Input
            placeholder="Type a message..."
            className="flex-1 bg-[#0F1129] border-[#2D3454] text-white placeholder:text-[#A0AEC0] rounded-xl"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <Button 
            className="bg-gradient-to-r from-[#6C63FF] to-[#4834DF] hover:opacity-90 text-white rounded-xl px-4"
            onClick={sendMessage}
          >
            <Send size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
