import React, { useState } from 'react';
import { GymOwnerDashboard } from './components/gym-owner/GymOwnerDashboard';
import { ManageTrainers } from './components/gym-owner/ManageTrainers';
import { ManageMembers } from './components/gym-owner/ManageMembers';
import { Analytics } from './components/gym-owner/Analytics';
import { TrainerHome } from './components/trainer/TrainerHome';
import { TrainerMembersList } from './components/trainer/TrainerMembersList';
import { TrainerMemberDetail } from './components/trainer/TrainerMemberDetail';
import { TrainerVideoReview } from './components/trainer/TrainerVideoReview';
import { MemberToday } from './components/member/MemberToday';
import { MemberPlan } from './components/member/MemberPlan';
import { MemberUpload } from './components/member/MemberUpload';
import { MemberProgress } from './components/member/MemberProgress';
import { MemberChat } from './components/member/MemberChat';
import { BottomNav } from './components/BottomNav';
import { Button } from './components/ui/button';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  BarChart3,
  Home,
  UsersRound,
  MessageSquare,
  User,
  Calendar,
  Upload,
  TrendingUp,
  Dumbbell
} from 'lucide-react';
import './styles/globals.css';

type Role = 'gym-owner' | 'trainer' | 'member';
type GymOwnerScreen = 'dashboard' | 'trainers' | 'members' | 'analytics';
type TrainerScreen = 'home' | 'members-list' | 'member-detail' | 'video-review';
type MemberScreen = 'today' | 'plan' | 'upload' | 'progress' | 'chat';

export default function App() {
  const [role, setRole] = useState<Role | null>(null);
  
  // Gym Owner state
  const [gymOwnerScreen, setGymOwnerScreen] = useState<GymOwnerScreen>('dashboard');
  
  // Trainer state
  const [trainerScreen, setTrainerScreen] = useState<TrainerScreen>('home');
  const [selectedMember, setSelectedMember] = useState<any>(null);
  
  // Member state
  const [memberScreen, setMemberScreen] = useState<MemberScreen>('today');

  // Role selection screen
  if (!role) {
    return (
      <div className="min-h-screen bg-[#0A0E27] flex items-center justify-center p-6 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#FF6B35] rounded-full opacity-10 blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#6C63FF] rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#00D9FF] rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-lg w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] shadow-glow-primary mb-4">
              <Dumbbell size={48} className="text-white" />
            </div>
            <h1 className="text-5xl text-white mb-3">Kettlebell Platform</h1>
            <p className="text-[#A0AEC0] text-lg">Transform your fitness journey</p>
          </motion.div>
          
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button
                onClick={() => setRole('gym-owner')}
                className="w-full bg-gradient-to-br from-[#1A1F3A] to-[#252B4A] hover:from-[#FF6B35] hover:to-[#F7931E] text-white h-24 rounded-2xl border border-[#2D3454] hover:border-[#FF6B35] transition-all shadow-lg hover:shadow-glow-primary group"
              >
                <div className="flex items-center gap-4 w-full px-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <LayoutDashboard size={28} />
                  </div>
                  <div className="text-left flex-1">
                    <span className="text-xl block mb-1">Gym Owner</span>
                    <span className="text-sm text-[#A0AEC0] group-hover:text-white/80">Manage your fitness empire</span>
                  </div>
                  <div className="text-[#A0AEC0] group-hover:text-white">→</div>
                </div>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                onClick={() => setRole('trainer')}
                className="w-full bg-gradient-to-br from-[#1A1F3A] to-[#252B4A] hover:from-[#6C63FF] hover:to-[#4834DF] text-white h-24 rounded-2xl border border-[#2D3454] hover:border-[#6C63FF] transition-all shadow-lg hover:shadow-glow-secondary group"
              >
                <div className="flex items-center gap-4 w-full px-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#4834DF] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <UserCheck size={28} />
                  </div>
                  <div className="text-left flex-1">
                    <span className="text-xl block mb-1">Trainer</span>
                    <span className="text-sm text-[#A0AEC0] group-hover:text-white/80">Guide and inspire members</span>
                  </div>
                  <div className="text-[#A0AEC0] group-hover:text-white">→</div>
                </div>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                onClick={() => setRole('member')}
                className="w-full bg-gradient-to-br from-[#1A1F3A] to-[#252B4A] hover:from-[#00D9FF] hover:to-[#00B4D8] text-white h-24 rounded-2xl border border-[#2D3454] hover:border-[#00D9FF] transition-all shadow-lg hover:shadow-glow-accent group"
              >
                <div className="flex items-center gap-4 w-full px-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00D9FF] to-[#00B4D8] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Dumbbell size={28} />
                  </div>
                  <div className="text-left flex-1">
                    <span className="text-xl block mb-1">Member</span>
                    <span className="text-sm text-[#A0AEC0] group-hover:text-white/80">Start your transformation</span>
                  </div>
                  <div className="text-[#A0AEC0] group-hover:text-white">→</div>
                </div>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-[#A0AEC0] text-sm">
              Demo Mode • All features available
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  // Gym Owner Dashboard
  if (role === 'gym-owner') {
    return (
      <div className="min-h-screen bg-[#0A0E27] flex">
        {/* Sidebar */}
        <motion.div 
          className="w-72 bg-[#0F1129] border-r border-[#2D3454] fixed h-screen"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center">
                <Dumbbell size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-lg text-white">Kettlebell</h1>
                <p className="text-xs text-[#A0AEC0]">Platform</p>
              </div>
            </div>
            
            <nav className="space-y-2">
              <motion.button
                onClick={() => setGymOwnerScreen('dashboard')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${
                  gymOwnerScreen === 'dashboard' 
                    ? 'bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white shadow-glow-primary' 
                    : 'text-[#A0AEC0] hover:bg-[#1A1F3A] hover:text-white'
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </motion.button>
              
              <motion.button
                onClick={() => setGymOwnerScreen('trainers')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${
                  gymOwnerScreen === 'trainers' 
                    ? 'bg-gradient-to-r from-[#6C63FF] to-[#4834DF] text-white shadow-glow-secondary' 
                    : 'text-[#A0AEC0] hover:bg-[#1A1F3A] hover:text-white'
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <UserCheck size={20} />
                <span>Trainers</span>
              </motion.button>
              
              <motion.button
                onClick={() => setGymOwnerScreen('members')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${
                  gymOwnerScreen === 'members' 
                    ? 'bg-gradient-to-r from-[#00D9FF] to-[#00B4D8] text-white shadow-glow-accent' 
                    : 'text-[#A0AEC0] hover:bg-[#1A1F3A] hover:text-white'
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Users size={20} />
                <span>Members</span>
              </motion.button>
              
              <motion.button
                onClick={() => setGymOwnerScreen('analytics')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${
                  gymOwnerScreen === 'analytics' 
                    ? 'bg-gradient-to-r from-[#6BCF7F] to-[#48BB78] text-white shadow-glow-success' 
                    : 'text-[#A0AEC0] hover:bg-[#1A1F3A] hover:text-white'
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <BarChart3 size={20} />
                <span>Analytics</span>
              </motion.button>
            </nav>
          </div>
          
          <div className="absolute bottom-6 left-6 right-6">
            <Button
              onClick={() => setRole(null)}
              variant="outline"
              className="w-full border-[#2D3454] text-[#A0AEC0] hover:text-white hover:bg-[#1A1F3A] rounded-xl"
            >
              Switch Role
            </Button>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="ml-72 flex-1">
          {gymOwnerScreen === 'dashboard' && <GymOwnerDashboard />}
          {gymOwnerScreen === 'trainers' && <ManageTrainers />}
          {gymOwnerScreen === 'members' && <ManageMembers />}
          {gymOwnerScreen === 'analytics' && <Analytics />}
        </div>
      </div>
    );
  }

  // Trainer Mobile App
  if (role === 'trainer') {
    const handleMemberClick = (member: any) => {
      setSelectedMember(member);
      setTrainerScreen('member-detail');
    };

    return (
      <div className="max-w-md mx-auto bg-[#1A1A1A] min-h-screen relative">
        {/* Back button for role switching */}
        <div className="absolute top-4 right-4 z-50">
          <Button
            onClick={() => setRole(null)}
            variant="outline"
            size="sm"
            className="border-[#4A4E5A] text-[#B0B0B0] hover:text-white hover:bg-[#4A4E5A]"
          >
            Switch Role
          </Button>
        </div>

        {trainerScreen === 'home' && <TrainerHome />}
        {trainerScreen === 'members-list' && <TrainerMembersList onMemberClick={handleMemberClick} />}
        {trainerScreen === 'member-detail' && (
          <TrainerMemberDetail 
            member={selectedMember} 
            onBack={() => setTrainerScreen('members-list')} 
          />
        )}
        {trainerScreen === 'video-review' && (
          <TrainerVideoReview onBack={() => setTrainerScreen('home')} />
        )}

        <BottomNav
          items={[
            {
              icon: <Home size={24} />,
              label: 'Home',
              active: trainerScreen === 'home',
              onClick: () => setTrainerScreen('home'),
            },
            {
              icon: <UsersRound size={24} />,
              label: 'Members',
              active: trainerScreen === 'members-list' || trainerScreen === 'member-detail',
              onClick: () => setTrainerScreen('members-list'),
            },
            {
              icon: <MessageSquare size={24} />,
              label: 'Chat',
              active: false,
              onClick: () => {},
            },
            {
              icon: <User size={24} />,
              label: 'Profile',
              active: false,
              onClick: () => {},
            },
          ]}
        />
      </div>
    );
  }

  // Member Mobile App
  if (role === 'member') {
    return (
      <div className="max-w-md mx-auto bg-[#1A1A1A] min-h-screen relative">
        {/* Back button for role switching */}
        <div className="absolute top-4 right-4 z-50">
          <Button
            onClick={() => setRole(null)}
            variant="outline"
            size="sm"
            className="border-[#4A4E5A] text-[#B0B0B0] hover:text-white hover:bg-[#4A4E5A]"
          >
            Switch Role
          </Button>
        </div>

        {memberScreen === 'today' && <MemberToday />}
        {memberScreen === 'plan' && <MemberPlan />}
        {memberScreen === 'upload' && <MemberUpload />}
        {memberScreen === 'progress' && <MemberProgress />}
        {memberScreen === 'chat' && <MemberChat />}

        <BottomNav
          items={[
            {
              icon: <Home size={24} />,
              label: 'Today',
              active: memberScreen === 'today',
              onClick: () => setMemberScreen('today'),
            },
            {
              icon: <Calendar size={24} />,
              label: 'Plan',
              active: memberScreen === 'plan',
              onClick: () => setMemberScreen('plan'),
            },
            {
              icon: <Upload size={24} />,
              label: 'Upload',
              active: memberScreen === 'upload',
              onClick: () => setMemberScreen('upload'),
            },
            {
              icon: <TrendingUp size={24} />,
              label: 'Progress',
              active: memberScreen === 'progress',
              onClick: () => setMemberScreen('progress'),
            },
            {
              icon: <MessageSquare size={24} />,
              label: 'Chat',
              active: memberScreen === 'chat',
              onClick: () => setMemberScreen('chat'),
            },
          ]}
        />
      </div>
    );
  }

  return null;
}
