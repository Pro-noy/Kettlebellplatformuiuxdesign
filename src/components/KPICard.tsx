import React from 'react';
import { Card } from './ui/card';
import { motion } from 'motion/react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: number;
  gradient?: 'primary' | 'secondary' | 'accent' | 'success';
}

export function KPICard({ title, value, icon, change, gradient = 'primary' }: KPICardProps) {
  const gradientClasses = {
    primary: 'from-[#FF6B35] to-[#F7931E]',
    secondary: 'from-[#6C63FF] to-[#4834DF]',
    accent: 'from-[#00D9FF] to-[#00B4D8]',
    success: 'from-[#6BCF7F] to-[#48BB78]',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="relative overflow-hidden border-[#2D3454] rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F3A] to-[#252B4A]" />
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradientClasses[gradient]} opacity-10 rounded-full blur-3xl`} />
        
        <div className="relative p-6">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientClasses[gradient]} flex items-center justify-center shadow-lg`}>
              {icon}
            </div>
            {change !== undefined && (
              <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                change >= 0 ? 'bg-[#6BCF7F]/20 text-[#6BCF7F]' : 'bg-[#FF3D71]/20 text-[#FF3D71]'
              }`}>
                {change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                <span className="text-xs">{Math.abs(change)}%</span>
              </div>
            )}
          </div>
          
          <p className="text-[#A0AEC0] text-sm mb-2">{title}</p>
          <motion.p 
            className="text-4xl text-white"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {value}
          </motion.p>
        </div>
      </Card>
    </motion.div>
  );
}
