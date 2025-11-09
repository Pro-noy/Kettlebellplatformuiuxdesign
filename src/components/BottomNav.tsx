import React from 'react';
import { motion } from 'motion/react';

interface BottomNavProps {
  items: {
    icon: React.ReactNode;
    label: string;
    active: boolean;
    onClick: () => void;
  }[];
}

export function BottomNav({ items }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0F1129] border-t border-[#2D3454] flex justify-around items-center h-20 z-50 backdrop-blur-xl bg-opacity-95">
      {items.map((item, index) => (
        <motion.button
          key={index}
          onClick={item.onClick}
          className={`relative flex flex-col items-center justify-center gap-1.5 px-4 py-2 transition-all ${
            item.active ? 'text-[#FF6B35]' : 'text-[#A0AEC0]'
          }`}
          whileTap={{ scale: 0.9 }}
        >
          {item.active && (
            <motion.div
              layoutId="activeNav"
              className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 to-[#F7931E]/20 rounded-2xl"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <div className="relative">
            {item.icon}
            {item.active && (
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500 }}
              />
            )}
          </div>
          <span className="text-xs relative z-10">{item.label}</span>
        </motion.button>
      ))}
    </div>
  );
}
