import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Send } from 'lucide-react';
import { Avatar, AvatarFallback } from '../ui/avatar';

const initialMessages = [
  { sender: 'trainer', message: 'Great work on today\'s session!', time: '10:30 AM' },
  { sender: 'member', message: 'Thank you! The kettlebell swings are getting easier.', time: '10:32 AM' },
  { sender: 'trainer', message: 'That\'s excellent progress! Remember to focus on your form.', time: '10:35 AM' },
  { sender: 'member', message: 'Will do. Quick question about tomorrow\'s workout...', time: '10:37 AM' },
  { sender: 'trainer', message: 'Sure, what would you like to know?', time: '10:38 AM' },
];

export function MemberChat() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { 
        sender: 'member', 
        message: newMessage, 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      }]);
      setNewMessage('');
    }
  };

  return (
    <div className="pb-20 bg-[#1A1A1A] min-h-screen flex flex-col">
      <div className="p-6 border-b border-[#4A4E5A]">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12 bg-[#FF6B00]">
            <AvatarFallback className="bg-[#FF6B00] text-white">JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-lg text-white">John Doe</h1>
            <p className="text-[#B0B0B0] text-sm">Your Trainer</p>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`flex ${msg.sender === 'member' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[75%] ${msg.sender === 'member' ? 'order-2' : 'order-1'}`}>
              <Card 
                className={`p-3 rounded-xl ${
                  msg.sender === 'member' 
                    ? 'bg-[#FF6B00] border-[#FF6B00] ml-2' 
                    : 'bg-[#2D2D2D] border-[#4A4E5A] mr-2'
                }`}
              >
                <p className="text-white text-sm">{msg.message}</p>
                <p className={`text-xs mt-1 ${
                  msg.sender === 'member' ? 'text-white/70' : 'text-[#B0B0B0]'
                }`}>
                  {msg.time}
                </p>
              </Card>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border-t border-[#4A4E5A] bg-[#1A1A1A]">
        <div className="flex gap-2">
          <Input
            placeholder="Type a message..."
            className="flex-1 bg-[#2D2D2D] border-[#4A4E5A] text-white placeholder:text-[#B0B0B0] rounded-lg"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <Button 
            className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white rounded-lg px-4"
            onClick={sendMessage}
          >
            <Send size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
