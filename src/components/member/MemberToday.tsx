import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Dumbbell, Apple, Flame, Award, Trophy, Target, CheckCircle2, Circle } from 'lucide-react';
import { motion } from 'motion/react';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';

const todayWorkout = [
  { exercise: 'Kettlebell Swings', sets: '3 sets', reps: '15 reps', rest: '60s rest', completed: false, calories: 45 },
  { exercise: 'Goblet Squats', sets: '4 sets', reps: '12 reps', rest: '90s rest', completed: false, calories: 60 },
  { exercise: 'Turkish Get-Up', sets: '3 sets', reps: '8 reps each side', rest: '120s rest', completed: false, calories: 55 },
  { exercise: 'Plank Hold', sets: '3 sets', reps: '45s hold', rest: '60s rest', completed: false, calories: 30 },
];

const todayDiet = {
  breakfast: 'Oatmeal with berries & protein shake',
  lunch: 'Grilled chicken, quinoa, steamed vegetables',
  snack: 'Greek yogurt with almonds',
  dinner: 'Salmon, sweet potato, green salad',
  calories: { current: 1450, target: 2000 },
  protein: { current: 110, target: 150 },
  carbs: { current: 135, target: 180 },
  fats: { current: 48, target: 65 },
};

const achievements = [
  { icon: '🔥', label: '7 Day Streak', unlocked: true },
  { icon: '💪', label: 'Strong Week', unlocked: true },
  { icon: '⭐', label: 'Perfect Form', unlocked: false },
];

export function MemberToday() {
  const [exercises, setExercises] = useState(todayWorkout);
  const completedCount = exercises.filter(e => e.completed).length;
  const progressPercentage = (completedCount / exercises.length) * 100;

  const toggleExercise = (index: number) => {
    const newExercises = [...exercises];
    newExercises[index].completed = !newExercises[index].completed;
    setExercises(newExercises);
  };

  return (
    <div className="pb-20 bg-[#0A0E27] min-h-screen">
      <div className="p-6 space-y-6">
        {/* Header with Stats */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl text-white mb-1">Welcome back! 👋</h1>
              <p className="text-[#A0AEC0]">Let's crush today's goals</p>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] px-4 py-2 rounded-xl">
              <Flame size={20} className="text-white" />
              <div className="text-white">
                <p className="text-xs opacity-80">Streak</p>
                <p className="text-lg">7 days</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className={`p-3 rounded-xl text-center ${
                  achievement.unlocked 
                    ? 'bg-gradient-to-br from-[#FFD93D]/20 to-[#FFC700]/20 border border-[#FFD93D]/30' 
                    : 'bg-[#1A1F3A] border border-[#2D3454]'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl mb-1">{achievement.icon}</div>
                <p className={`text-xs ${achievement.unlocked ? 'text-[#FFD93D]' : 'text-[#A0AEC0]'}`}>
                  {achievement.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Workout Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-[#2D3454] rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-br from-[#1A1F3A] to-[#252B4A] p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center shadow-glow-primary">
                    <Dumbbell size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl text-white">Today's Workout</h2>
                    <p className="text-[#A0AEC0] text-sm">{completedCount}/{exercises.length} exercises</p>
                  </div>
                </div>
                <Badge className="bg-[#6C63FF]/20 text-[#6C63FF] hover:bg-[#6C63FF]/20">
                  45 min
                </Badge>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#A0AEC0]">Progress</span>
                  <span className="text-sm text-white">{progressPercentage.toFixed(0)}%</span>
                </div>
                <Progress value={progressPercentage} className="h-2 bg-[#0A0E27]" />
              </div>

              <div className="space-y-3 mb-6">
                {exercises.map((exercise, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      exercise.completed 
                        ? 'bg-[#6BCF7F]/10 border-[#6BCF7F]/30' 
                        : 'bg-[#0A0E27]/50 border-[#2D3454] hover:border-[#FF6B35]/50'
                    }`}
                    onClick={() => toggleExercise(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-1 ${exercise.completed ? 'text-[#6BCF7F]' : 'text-[#A0AEC0]'}`}>
                        {exercise.completed ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                      </div>
                      <div className="flex-1">
                        <h3 className={`mb-1 ${exercise.completed ? 'text-[#A0AEC0] line-through' : 'text-white'}`}>
                          {exercise.exercise}
                        </h3>
                        <div className="flex flex-wrap gap-2 text-sm text-[#A0AEC0]">
                          <span>{exercise.sets}</span>
                          <span>•</span>
                          <span>{exercise.reps}</span>
                          <span>•</span>
                          <span>{exercise.rest}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-[#FF6B35]">
                        <Flame size={16} />
                        <span className="text-sm">{exercise.calories}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:opacity-90 text-white rounded-xl h-12 shadow-glow-primary">
                <Target size={20} className="mr-2" />
                Start Workout
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Diet Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-[#2D3454] rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-br from-[#1A1F3A] to-[#252B4A] p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6BCF7F] to-[#48BB78] flex items-center justify-center">
                  <Apple size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl text-white">Today's Nutrition</h2>
                  <p className="text-[#A0AEC0] text-sm">Track your meals</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="p-3 rounded-xl bg-[#0A0E27]/50 border border-[#2D3454]">
                  <p className="text-[#A0AEC0] text-sm mb-1">Breakfast</p>
                  <p className="text-white text-sm">{todayDiet.breakfast}</p>
                </div>
                <div className="p-3 rounded-xl bg-[#0A0E27]/50 border border-[#2D3454]">
                  <p className="text-[#A0AEC0] text-sm mb-1">Lunch</p>
                  <p className="text-white text-sm">{todayDiet.lunch}</p>
                </div>
                <div className="p-3 rounded-xl bg-[#0A0E27]/50 border border-[#2D3454]">
                  <p className="text-[#A0AEC0] text-sm mb-1">Snack</p>
                  <p className="text-white text-sm">{todayDiet.snack}</p>
                </div>
                <div className="p-3 rounded-xl bg-[#0A0E27]/50 border border-[#2D3454]">
                  <p className="text-[#A0AEC0] text-sm mb-1">Dinner</p>
                  <p className="text-white text-sm">{todayDiet.dinner}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Calories', ...todayDiet.calories, unit: 'kcal', color: 'from-[#FF6B35] to-[#F7931E]' },
                  { label: 'Protein', ...todayDiet.protein, unit: 'g', color: 'from-[#6C63FF] to-[#4834DF]' },
                  { label: 'Carbs', ...todayDiet.carbs, unit: 'g', color: 'from-[#00D9FF] to-[#00B4D8]' },
                  { label: 'Fats', ...todayDiet.fats, unit: 'g', color: 'from-[#FFD93D] to-[#FFC700]' },
                ].map((macro, index) => (
                  <div key={index} className="p-3 rounded-xl bg-[#0A0E27]/50 border border-[#2D3454]">
                    <p className="text-[#A0AEC0] text-xs mb-2">{macro.label}</p>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-white text-lg">{macro.current}</span>
                      <span className="text-[#A0AEC0] text-xs">/ {macro.target}{macro.unit}</span>
                    </div>
                    <div className="h-1.5 bg-[#0A0E27] rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${macro.color} rounded-full transition-all`}
                        style={{ width: `${(macro.current / macro.target) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
