import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Star, TrendingUp, TrendingDown, Award, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { Badge } from '../ui/badge';

const weightData = [
  { month: 'Jul', weight: 85 },
  { month: 'Aug', weight: 83 },
  { month: 'Sep', weight: 81 },
  { month: 'Oct', weight: 79 },
  { month: 'Nov', weight: 77 },
];

const attendanceData = [
  { month: 'Jul', days: 18 },
  { month: 'Aug', days: 22 },
  { month: 'Sep', days: 20 },
  { month: 'Oct', days: 24 },
  { month: 'Nov', days: 6 },
];

const feedbackData = [
  {
    exercise: 'Kettlebell Swing',
    date: 'Oct 30, 2024',
    rating: 4,
    feedback: 'Great form! Keep your core tight and maintain the hip hinge. You\'re making excellent progress!',
  },
  {
    exercise: 'Turkish Get-Up',
    date: 'Oct 28, 2024',
    rating: 5,
    feedback: 'Perfect execution! Your transitions are smooth and controlled. This is exactly what we want to see.',
  },
  {
    exercise: 'Goblet Squat',
    date: 'Oct 25, 2024',
    rating: 4,
    feedback: 'Good depth and posture. Try to keep your chest up a bit more at the bottom position.',
  },
];

export function MemberProgress() {
  const [activeTab, setActiveTab] = useState('stats');
  const weightChange = weightData[0].weight - weightData[weightData.length - 1].weight;
  const avgAttendance = attendanceData.reduce((acc, curr) => acc + curr.days, 0) / attendanceData.length;

  return (
    <div className="pb-20 bg-[#0A0E27] min-h-screen">
      <div className="p-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl text-white mb-2">My Progress</h1>
          <p className="text-[#A0AEC0]">Track your fitness journey</p>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-[#2D3454] rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#1A1F3A] to-[#252B4A] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6BCF7F] to-[#48BB78] flex items-center justify-center">
                    <TrendingDown size={16} className="text-white" />
                  </div>
                  <p className="text-[#A0AEC0] text-sm">Weight Lost</p>
                </div>
                <p className="text-2xl text-white">{weightChange}kg</p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-[#2D3454] rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#1A1F3A] to-[#252B4A] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center">
                    <Target size={16} className="text-white" />
                  </div>
                  <p className="text-[#A0AEC0] text-sm">Avg Sessions</p>
                </div>
                <p className="text-2xl text-white">{avgAttendance.toFixed(0)}/mo</p>
              </div>
            </Card>
          </motion.div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full bg-[#1A1F3A] border border-[#2D3454] rounded-xl mb-6 p-1">
            <TabsTrigger 
              value="stats" 
              className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#FF6B35] data-[state=active]:to-[#F7931E] data-[state=active]:text-white text-[#A0AEC0] rounded-lg transition-all"
            >
              My Stats
            </TabsTrigger>
            <TabsTrigger 
              value="feedback" 
              className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#6C63FF] data-[state=active]:to-[#4834DF] data-[state=active]:text-white text-[#A0AEC0] rounded-lg transition-all"
            >
              Feedback
            </TabsTrigger>
          </TabsList>

          <TabsContent value="stats" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="border-[#2D3454] rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-br from-[#1A1F3A] to-[#252B4A] p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg text-white">Weight Progress</h2>
                    <Badge className="bg-[#6BCF7F]/20 text-[#6BCF7F] hover:bg-[#6BCF7F]/20">
                      -{weightChange}kg
                    </Badge>
                  </div>
                  <ResponsiveContainer width="100%" height={220}>
                    <AreaChart data={weightData}>
                      <defs>
                        <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6BCF7F" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#6BCF7F" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#2D3454" />
                      <XAxis dataKey="month" stroke="#A0AEC0" tick={{ fill: '#A0AEC0' }} />
                      <YAxis stroke="#A0AEC0" tick={{ fill: '#A0AEC0' }} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1A1F3A', border: '1px solid #2D3454', borderRadius: '12px' }}
                        labelStyle={{ color: '#FFFFFF' }}
                      />
                      <Area type="monotone" dataKey="weight" stroke="#6BCF7F" strokeWidth={3} fillOpacity={1} fill="url(#weightGradient)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-[#2D3454] rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-br from-[#1A1F3A] to-[#252B4A] p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg text-white">Gym Attendance</h2>
                    <Badge className="bg-[#FF6B35]/20 text-[#FF6B35] hover:bg-[#FF6B35]/20">
                      {avgAttendance.toFixed(0)} days/mo
                    </Badge>
                  </div>
                  <ResponsiveContainer width="100%" height={220}>
                    <AreaChart data={attendanceData}>
                      <defs>
                        <linearGradient id="attendanceGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#FF6B35" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#FF6B35" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#2D3454" />
                      <XAxis dataKey="month" stroke="#A0AEC0" tick={{ fill: '#A0AEC0' }} />
                      <YAxis stroke="#A0AEC0" tick={{ fill: '#A0AEC0' }} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1A1F3A', border: '1px solid #2D3454', borderRadius: '12px' }}
                        labelStyle={{ color: '#FFFFFF' }}
                      />
                      <Area type="monotone" dataKey="days" stroke="#FF6B35" strokeWidth={3} fillOpacity={1} fill="url(#attendanceGradient)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-4">
            {feedbackData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-[#2D3454] rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-br from-[#1A1F3A] to-[#252B4A] p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#4834DF] flex items-center justify-center shrink-0">
                          <Award size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-white mb-1">{item.exercise}</h3>
                          <p className="text-[#A0AEC0] text-sm">{item.date}</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={16}
                            className={star <= item.rating ? 'text-[#FFD93D] fill-[#FFD93D]' : 'text-[#2D3454]'}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="pl-13">
                      <p className="text-[#A0AEC0] text-sm italic">"{item.feedback}"</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
