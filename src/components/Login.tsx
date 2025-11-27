import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Dumbbell, Lock, User, AlertCircle, Trophy, Award } from 'lucide-react';

type Role = 'gym-owner' | 'trainer' | 'member';

interface LoginProps {
  role: Role;
  onLoginSuccess: () => void;
  onBack: () => void;
}

// Mock user credentials
const mockCredentials = {
  'gym-owner': { id: 'gym25', password: 'gym25' },
  'trainer': { id: 'tra25', password: 'tra25' },
  'member': { id: 'mem25', password: 'mem25' },
};

export function Login({ role, onLoginSuccess, onBack }: LoginProps) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const getRoleConfig = () => {
    switch (role) {
      case 'gym-owner':
        return {
          title: 'Gym Owner Login',
          subtitle: 'Manage your fitness empire',
          gradient: 'from-[#FF6B35] to-[#F7931E]',
          icon: <Trophy size={32} />,
          bgGlow: 'bg-[#FF6B35]',
        };
      case 'trainer':
        return {
          title: 'Trainer Login',
          subtitle: 'Guide and inspire members',
          gradient: 'from-[#6C63FF] to-[#4834DF]',
          icon: <Award size={32} />,
          bgGlow: 'bg-[#6C63FF]',
        };
      case 'member':
        return {
          title: 'Member Login',
          subtitle: 'Start your transformation',
          gradient: 'from-[#00D9FF] to-[#00B4D8]',
          icon: <Dumbbell size={32} />,
          bgGlow: 'bg-[#00D9FF]',
        };
    }
  };

  const config = getRoleConfig();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const credentials = mockCredentials[role];
    
    if (userId === credentials.id && password === credentials.password) {
      onLoginSuccess();
    } else {
      setError('Invalid ID or password');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0E27] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background with gym theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-20 w-96 h-96 ${config.bgGlow} rounded-full opacity-10 blur-3xl animate-pulse`} />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#6BCF7F] rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#6C63FF] rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Gym equipment silhouettes */}
        <div className="absolute inset-0 opacity-5">
          <Dumbbell className="absolute top-20 right-32 text-white" size={80} />
          <Trophy className="absolute bottom-32 left-20 text-white" size={60} />
          <Award className="absolute top-40 left-1/4 text-white" size={50} />
        </div>
      </div>

      <div className="max-w-md w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-8"
        >
          <div className={`inline-block p-5 rounded-2xl bg-gradient-to-br ${config.gradient} shadow-glow-primary mb-4`}>
            {config.icon}
          </div>
          <h1 className="text-4xl text-white mb-2">{config.title}</h1>
          <p className="text-[#A0AEC0]">{config.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-[#1A1F3A]/50 backdrop-blur-xl border-[#2D3454] p-8 rounded-2xl shadow-2xl">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <Label htmlFor="userId" className="text-[#A0AEC0] mb-2 block">
                  User ID
                </Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A0AEC0]" size={20} />
                  <Input
                    id="userId"
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Enter your ID"
                    className="pl-12 bg-[#0F1129] border-[#2D3454] text-white placeholder:text-[#A0AEC0]/50 h-14 rounded-xl focus:border-[#6C63FF]"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-[#A0AEC0] mb-2 block">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A0AEC0]" size={20} />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="pl-12 bg-[#0F1129] border-[#2D3454] text-white placeholder:text-[#A0AEC0]/50 h-14 rounded-xl focus:border-[#6C63FF]"
                    required
                  />
                </div>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-xl"
                >
                  <AlertCircle className="text-red-500" size={20} />
                  <p className="text-red-500 text-sm">{error}</p>
                </motion.div>
              )}

              <Button
                type="submit"
                className={`w-full h-14 bg-gradient-to-r ${config.gradient} hover:opacity-90 text-white rounded-xl transition-all shadow-lg hover:shadow-glow-primary`}
              >
                Login to Dashboard
              </Button>
            </form>

            <div className="mt-6 p-4 bg-[#0F1129] rounded-xl border border-[#2D3454]">
              <p className="text-[#A0AEC0] text-sm mb-2">Demo Credentials:</p>
              <p className="text-white text-xs font-mono">ID: {mockCredentials[role].id}</p>
              <p className="text-white text-xs font-mono">Password: {mockCredentials[role].password}</p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-center"
        >
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-[#A0AEC0] hover:text-white"
          >
            ← Back to role selection
          </Button>
        </motion.div>
      </div>
    </div>
  );
}