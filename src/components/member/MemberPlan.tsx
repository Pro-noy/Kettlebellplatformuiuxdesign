import React, { useState } from 'react';
import { Card } from '../ui/card';
import { ChevronRight } from 'lucide-react';

const weekPlan = [
  { 
    day: 'Mon', 
    date: 'Nov 4',
    workout: 'Kettlebell Swings, Goblet Squats, Turkish Get-Up',
    diet: 'High Protein, 2000 cal',
    isToday: true
  },
  { 
    day: 'Tue', 
    date: 'Nov 5',
    workout: 'Clean & Press, Lunges, Plank Variations',
    diet: 'Moderate Carbs, 1800 cal',
    isToday: false
  },
  { 
    day: 'Wed', 
    date: 'Nov 6',
    workout: 'Rest Day - Light Stretching',
    diet: 'Low Carbs, 1600 cal',
    isToday: false
  },
  { 
    day: 'Thu', 
    date: 'Nov 7',
    workout: 'Kettlebell Snatch, Deadlifts, Core Work',
    diet: 'High Protein, 2000 cal',
    isToday: false
  },
  { 
    day: 'Fri', 
    date: 'Nov 8',
    workout: 'Complex Training, HIIT Session',
    diet: 'Moderate Carbs, 1900 cal',
    isToday: false
  },
  { 
    day: 'Sat', 
    date: 'Nov 9',
    workout: 'Full Body Circuit Training',
    diet: 'High Carbs, 2200 cal',
    isToday: false
  },
  { 
    day: 'Sun', 
    date: 'Nov 10',
    workout: 'Active Recovery - Yoga',
    diet: 'Balanced, 1700 cal',
    isToday: false
  },
];

export function MemberPlan() {
  const [selectedDay, setSelectedDay] = useState(weekPlan[0]);

  return (
    <div className="pb-20 bg-[#1A1A1A] min-h-screen">
      <div className="p-6">
        <h1 className="text-2xl mb-6 text-white">My Plan</h1>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {weekPlan.map((day, index) => (
            <button
              key={index}
              onClick={() => setSelectedDay(day)}
              className={`flex flex-col items-center justify-center min-w-[60px] h-[70px] rounded-xl transition-colors ${
                selectedDay.day === day.day
                  ? 'bg-[#FF6B00] text-white'
                  : day.isToday
                  ? 'bg-[#2D2D2D] border-2 border-[#FF6B00] text-white'
                  : 'bg-[#2D2D2D] text-[#B0B0B0]'
              }`}
            >
              <span className="text-xs mb-1">{day.day}</span>
              <span className="text-sm">{day.date.split(' ')[1]}</span>
            </button>
          ))}
        </div>

        <Card className="bg-[#2D2D2D] border-[#4A4E5A] p-6 rounded-xl mb-4">
          <h2 className="text-xl text-white mb-4">Workout Plan</h2>
          <div className="space-y-3">
            {selectedDay.workout.split(', ').map((exercise, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-[#1A1A1A] rounded-lg">
                <span className="text-white">{exercise}</span>
                <ChevronRight size={20} className="text-[#B0B0B0]" />
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-[#2D2D2D] border-[#4A4E5A] p-6 rounded-xl">
          <h2 className="text-xl text-white mb-4">Diet Plan</h2>
          <div className="flex items-center justify-between p-3 bg-[#1A1A1A] rounded-lg">
            <span className="text-white">{selectedDay.diet}</span>
            <ChevronRight size={20} className="text-[#B0B0B0]" />
          </div>
        </Card>
      </div>
    </div>
  );
}
