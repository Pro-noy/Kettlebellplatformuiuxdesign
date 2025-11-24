import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { motion } from 'motion/react';
import {
  User,
  Mail,
  Phone,
  Award,
  Calendar,
  TrendingUp,
  Users,
  Target,
  Trophy,
  Dumbbell,
  Star,
  Clock,
  Activity
} from 'lucide-react';

const trainerStats = [
  { label: 'Active Clients', value: '24', icon: <Users size={20} />, color: '#FF6B35' },
  { label: 'Sessions This Month', value: '156', icon: <Calendar size={20} />, color: '#6C63FF' },
  { label: 'Avg Client Progress', value: '87%', icon: <TrendingUp size={20} />, color: '#6BCF7F' },
  { label: 'Client Satisfaction', value: '4.9', icon: <Star size={20} />, color: '#00D9FF' },
];

const certifications = [
  { name: 'Certified Kettlebell Trainer', year: '2022', icon: <Trophy size={18} /> },
  { name: 'Strength & Conditioning', year: '2021', icon: <Dumbbell size={18} /> },
  { name: 'Nutrition Specialist', year: '2023', icon: <Target size={18} /> },
  { name: 'Sports Performance', year: '2020', icon: <Activity size={18} /> },
];

const recentAchievements = [
  { title: 'Top Trainer of the Month', date: 'Nov 2024', icon: '🏆' },
  { title: '100 Sessions Milestone', date: 'Oct 2024', icon: '💯' },
  { title: 'Perfect Attendance', date: 'Sep 2024', icon: '⭐' },
];

export function TrainerProfile() {
  return (
    <div className="pb-20 bg-[#0A0E27] min-h-screen overflow-x-hidden overflow-y-auto">
      {/* Header with gradient */}
      <div className="relative h-48 bg-gradient-to-br from-[#6C63FF] via-[#4834DF] to-[#FF6B35] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Dumbbell className="absolute top-8 right-8 text-white" size={60} />
          <Trophy className="absolute bottom-8 left-8 text-white" size={50} />
          <Award className="absolute top-12 left-1/3 text-white" size={40} />
        </div>
      </div>

      {/* Profile section */}
      <div className="px-6 -mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <Avatar className="w-32 h-32 mx-auto mb-4 ring-4 ring-[#0A0E27] bg-gradient-to-br from-[#6C63FF] to-[#4834DF]">
            <AvatarFallback className="bg-gradient-to-br from-[#6C63FF] to-[#4834DF] text-white text-3xl">
              JD
            </AvatarFallback>
          </Avatar>
          <h1 className="text-3xl text-white mb-2">John Doe</h1>
          <Badge className="bg-gradient-to-r from-[#6C63FF] to-[#4834DF] text-white border-0 mb-2">
            Senior Trainer
          </Badge>
          <p className="text-[#A0AEC0] text-sm">Specializing in Kettlebell Training</p>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-[#1A1F3A] border-[#2D3454] p-6 mb-6">
            <h2 className="text-white text-lg mb-4 flex items-center gap-2">
              <User size={20} className="text-[#6C63FF]" />
              Contact Information
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[#A0AEC0]">
                <Mail size={18} />
                <span>john.doe@kettlebell.com</span>
              </div>
              <div className="flex items-center gap-3 text-[#A0AEC0]">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-[#A0AEC0]">
                <Clock size={18} />
                <span>Mon-Fri: 6:00 AM - 8:00 PM</span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-4 mb-6"
        >
          {trainerStats.map((stat, index) => (
            <Card
              key={index}
              className="bg-[#1A1F3A] border-[#2D3454] p-4 hover:border-[#6C63FF] transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <div style={{ color: stat.color }}>{stat.icon}</div>
                </div>
              </div>
              <div className="text-2xl text-white mb-1">{stat.value}</div>
              <div className="text-[#A0AEC0] text-xs">{stat.label}</div>
            </Card>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-[#1A1F3A] border-[#2D3454] p-6 mb-6">
            <h2 className="text-white text-lg mb-4 flex items-center gap-2">
              <Award size={20} className="text-[#FF6B35]" />
              Certifications
            </h2>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-[#0F1129] rounded-lg border border-[#2D3454]"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-[#6C63FF]">{cert.icon}</div>
                    <span className="text-white text-sm">{cert.name}</span>
                  </div>
                  <Badge className="bg-[#2D3454] text-[#A0AEC0] border-0">
                    {cert.year}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Recent achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-[#1A1F3A] border-[#2D3454] p-6 mb-6">
            <h2 className="text-white text-lg mb-4 flex items-center gap-2">
              <Trophy size={20} className="text-[#6BCF7F]" />
              Recent Achievements
            </h2>
            <div className="space-y-3">
              {recentAchievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#1A1F3A] to-[#252B4A] rounded-lg border border-[#2D3454]"
                >
                  <div className="text-3xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-white text-sm">{achievement.title}</h3>
                    <p className="text-[#A0AEC0] text-xs">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-3 mb-6"
        >
          <Button className="w-full h-14 bg-gradient-to-r from-[#6C63FF] to-[#4834DF] hover:opacity-90 text-white rounded-xl">
            Edit Profile
          </Button>
          <Button className="w-full h-14 bg-[#1A1F3A] hover:bg-[#252B4A] text-white rounded-xl border border-[#2D3454]">
            View Schedule
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
