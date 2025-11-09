import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Play, MessageSquare, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { motion } from 'motion/react';
import { Badge } from '../ui/badge';

const videosAwaitingReview = [
  { member: 'Alex Johnson', exercise: 'Kettlebell Swing', uploadedAt: '2 hours ago' },
  { member: 'Mike Chen', exercise: 'Turkish Get-Up', uploadedAt: '5 hours ago' },
  { member: 'Emma Stone', exercise: 'Goblet Squat', uploadedAt: '1 day ago' },
];

const unreadMessages = [
  { member: 'David Miller', message: 'Can we reschedule tomorrow\'s session?', time: '10 min ago' },
  { member: 'Lisa Brown', message: 'Thank you for the feedback!', time: '1 hour ago' },
  { member: 'James Wilson', message: 'I have a question about my diet plan', time: '3 hours ago' },
  { member: 'Sarah Kim', message: 'Completed today\'s workout!', time: '5 hours ago' },
];

export function TrainerHome() {
  return (
    <div className="pb-20 bg-[#0A0E27] min-h-screen">
      <div className="p-6 space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl text-white mb-2">Welcome, Trainer! 👋</h1>
          <p className="text-[#A0AEC0]">You have {videosAwaitingReview.length} videos to review</p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-[#2D3454] rounded-xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#1A1F3A] to-[#252B4A] p-3 text-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center mx-auto mb-2">
                  <AlertCircle size={20} className="text-white" />
                </div>
                <p className="text-2xl text-white mb-1">{videosAwaitingReview.length}</p>
                <p className="text-xs text-[#A0AEC0]">Pending</p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-[#2D3454] rounded-xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#1A1F3A] to-[#252B4A] p-3 text-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6C63FF] to-[#4834DF] flex items-center justify-center mx-auto mb-2">
                  <CheckCircle size={20} className="text-white" />
                </div>
                <p className="text-2xl text-white mb-1">24</p>
                <p className="text-xs text-[#A0AEC0]">Reviewed</p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-[#2D3454] rounded-xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#1A1F3A] to-[#252B4A] p-3 text-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00D9FF] to-[#00B4D8] flex items-center justify-center mx-auto mb-2">
                  <MessageSquare size={20} className="text-white" />
                </div>
                <p className="text-2xl text-white mb-1">{unreadMessages.length}</p>
                <p className="text-xs text-[#A0AEC0]">Messages</p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Videos Awaiting Review */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl text-white">Videos to Review</h2>
            <Badge className="bg-[#FF6B35]/20 text-[#FF6B35] hover:bg-[#FF6B35]/20">
              {videosAwaitingReview.length} new
            </Badge>
          </div>
          <ScrollArea className="w-full">
            <div className="flex gap-4 pb-2">
              {videosAwaitingReview.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="border-[#2D3454] rounded-2xl overflow-hidden min-w-[280px]">
                    <div className="bg-gradient-to-br from-[#1A1F3A] to-[#252B4A] p-4">
                      <div className="relative aspect-video bg-[#0A0E27] rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 to-[#F7931E]/20" />
                        <Play size={48} className="text-[#FF6B35] relative z-10" />
                      </div>
                      <p className="text-white mb-1">{video.member}</p>
                      <p className="text-[#A0AEC0] text-sm mb-2">{video.exercise}</p>
                      <div className="flex items-center gap-2 text-[#6C63FF] text-xs mb-3">
                        <Clock size={14} />
                        <span>{video.uploadedAt}</span>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:opacity-90 text-white rounded-xl">
                        Review Now
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </motion.div>

        {/* Unread Messages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl text-white mb-4">Recent Messages</h2>
          <div className="space-y-3">
            {unreadMessages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ x: 4 }}
              >
                <Card className="border-[#2D3454] rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-br from-[#1A1F3A] to-[#252B4A] p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#4834DF] flex items-center justify-center text-white shrink-0">
                        {msg.member.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-white">{msg.member}</p>
                          <div className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
                        </div>
                        <p className="text-[#A0AEC0] text-sm truncate mb-1">{msg.message}</p>
                        <p className="text-[#6C63FF] text-xs">{msg.time}</p>
                      </div>
                      <MessageSquare size={20} className="text-[#00D9FF] shrink-0" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
