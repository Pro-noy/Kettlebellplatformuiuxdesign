import React from 'react';
import { KPICard } from '../KPICard';
import { Users, UserCheck, DollarSign, TrendingUp, Target, Zap, Award, Activity } from 'lucide-react';
import { Card } from '../ui/card';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';

const trainerPerformanceData = [
  { name: 'John', clients: 45, revenue: 12500 },
  { name: 'Sarah', clients: 38, revenue: 10800 },
  { name: 'Mike', clients: 32, revenue: 8900 },
  { name: 'Emma', clients: 28, revenue: 7800 },
  { name: 'Tom', clients: 25, revenue: 6500 },
];

const revenueData = [
  { month: 'Jan', revenue: 38000, members: 290 },
  { month: 'Feb', revenue: 39500, members: 305 },
  { month: 'Mar', revenue: 40200, members: 315 },
  { month: 'Apr', revenue: 41000, members: 325 },
  { month: 'May', revenue: 41800, members: 338 },
  { month: 'Jun', revenue: 42500, members: 348 },
];

const recentActivities = [
  { action: 'New member joined', name: 'Alex Johnson', time: '2 min ago', type: 'member', color: 'accent' },
  { action: 'Video reviewed', name: 'Sarah Lee → Mike Chen', time: '15 min ago', type: 'review', color: 'success' },
  { action: 'Plan assigned', name: 'John Doe → Emma Stone', time: '1 hour ago', type: 'plan', color: 'secondary' },
  { action: 'Payment received', name: 'David Miller - $150', time: '2 hours ago', type: 'payment', color: 'primary' },
  { action: 'Achievement unlocked', name: 'Lisa Brown - 30 Day Streak', time: '3 hours ago', type: 'achievement', color: 'success' },
];

const topTrainers = [
  { name: 'John Doe', avatar: 'JD', rating: 4.9, clients: 45, specialty: 'Strength' },
  { name: 'Sarah Lee', avatar: 'SL', rating: 4.8, clients: 38, specialty: 'HIIT' },
  { name: 'Mike Ross', avatar: 'MR', rating: 4.7, clients: 32, specialty: 'Cardio' },
];

export function GymOwnerDashboard() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-4xl text-white mb-2">Welcome back, Owner! 👋</h1>
            <p className="text-[#A0AEC0]">Here's what's happening with your gym today</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="bg-gradient-to-r from-[#6BCF7F] to-[#48BB78] text-white px-4 py-2">
              <Activity size={16} className="mr-2" />
              All Systems Active
            </Badge>
          </div>
        </div>
      </motion.div>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard title="Total Members" value="348" icon={<Users size={24} className="text-white" />} change={12.5} gradient="primary" />
        <KPICard title="Active Trainers" value="12" icon={<UserCheck size={24} className="text-white" />} change={8.3} gradient="secondary" />
        <KPICard title="Monthly Revenue" value="$42.5K" icon={<DollarSign size={24} className="text-white" />} change={15.2} gradient="accent" />
        <KPICard title="Attendance Rate" value="89%" icon={<TrendingUp size={24} className="text-white" />} change={5.7} gradient="success" />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue & Members Chart */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-[#2D3454] rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-br from-[#1A1F3A] to-[#252B4A] p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl text-white mb-1">Revenue & Growth</h2>
                  <p className="text-[#A0AEC0] text-sm">Last 6 months performance</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E]" />
                    <span className="text-sm text-[#A0AEC0]">Revenue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#4834DF]" />
                    <span className="text-sm text-[#A0AEC0]">Members</span>
                  </div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF6B35" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#FF6B35" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6C63FF" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6C63FF" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2D3454" />
                  <XAxis dataKey="month" stroke="#A0AEC0" tick={{ fill: '#A0AEC0' }} />
                  <YAxis stroke="#A0AEC0" tick={{ fill: '#A0AEC0' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1A1F3A', border: '1px solid #2D3454', borderRadius: '12px' }}
                    labelStyle={{ color: '#FFFFFF' }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#FF6B35" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                  <Area type="monotone" dataKey="members" stroke="#6C63FF" strokeWidth={3} fillOpacity={1} fill="url(#colorMembers)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        {/* Top Trainers */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border-[#2D3454] rounded-2xl overflow-hidden h-full">
            <div className="bg-gradient-to-br from-[#1A1F3A] to-[#252B4A] p-6 h-full">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFD93D] to-[#FFC700] flex items-center justify-center">
                  <Award size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl text-white">Top Trainers</h2>
                  <p className="text-[#A0AEC0] text-sm">This month</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {topTrainers.map((trainer, index) => (
                  <motion.div
                    key={index}
                    className="p-4 rounded-xl bg-[#0A0E27]/50 border border-[#2D3454] hover:border-[#FF6B35] transition-all cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative">
                        <Avatar className="w-12 h-12 border-2 border-[#FF6B35]">
                          <AvatarFallback className="bg-gradient-to-br from-[#FF6B35] to-[#F7931E] text-white">
                            {trainer.avatar}
                          </AvatarFallback>
                        </Avatar>
                        {index === 0 && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-[#FFD93D] to-[#FFC700] flex items-center justify-center">
                            <span className="text-xs">👑</span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-white">{trainer.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className="bg-[#6C63FF]/20 text-[#6C63FF] text-xs px-2 py-0 hover:bg-[#6C63FF]/20">
                            {trainer.specialty}
                          </Badge>
                          <span className="text-[#FFD93D] text-sm">⭐ {trainer.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#A0AEC0]">{trainer.clients} clients</span>
                      <div className="flex items-center gap-1 text-[#6BCF7F]">
                        <TrendingUp size={14} />
                        <span>Active</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Performance & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trainer Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-[#2D3454] rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-br from-[#1A1F3A] to-[#252B4A] p-6">
              <h2 className="text-xl mb-6 text-white">Trainer Performance</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={trainerPerformanceData}>
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF6B35" />
                      <stop offset="100%" stopColor="#F7931E" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2D3454" />
                  <XAxis dataKey="name" stroke="#A0AEC0" tick={{ fill: '#A0AEC0' }} />
                  <YAxis stroke="#A0AEC0" tick={{ fill: '#A0AEC0' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1A1F3A', border: '1px solid #2D3454', borderRadius: '12px' }}
                    labelStyle={{ color: '#FFFFFF' }}
                  />
                  <Bar dataKey="clients" fill="url(#barGradient)" radius={[12, 12, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="border-[#2D3454] rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-br from-[#1A1F3A] to-[#252B4A] p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl text-white">Live Activity Feed</h2>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#6BCF7F] animate-pulse" />
                  <span className="text-sm text-[#A0AEC0]">Live</span>
                </div>
              </div>
              <div className="space-y-3 max-h-[280px] overflow-y-auto">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    className="p-4 rounded-xl bg-[#0A0E27]/50 border border-[#2D3454] hover:border-[#FF6B35]/50 transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                        activity.color === 'primary' ? 'from-[#FF6B35] to-[#F7931E]' :
                        activity.color === 'secondary' ? 'from-[#6C63FF] to-[#4834DF]' :
                        activity.color === 'accent' ? 'from-[#00D9FF] to-[#00B4D8]' :
                        'from-[#6BCF7F] to-[#48BB78]'
                      } flex items-center justify-center shrink-0`}>
                        {activity.type === 'member' && <Users size={18} className="text-white" />}
                        {activity.type === 'review' && <Zap size={18} className="text-white" />}
                        {activity.type === 'plan' && <Target size={18} className="text-white" />}
                        {activity.type === 'payment' && <DollarSign size={18} className="text-white" />}
                        {activity.type === 'achievement' && <Award size={18} className="text-white" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm">{activity.action}</p>
                        <p className="text-[#A0AEC0] text-xs mt-1 truncate">{activity.name}</p>
                        <p className="text-[#6C63FF] text-xs mt-1">{activity.time}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
