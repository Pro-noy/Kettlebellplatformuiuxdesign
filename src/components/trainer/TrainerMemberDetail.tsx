import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { ArrowLeft, Plus } from 'lucide-react';

interface TrainerMemberDetailProps {
  member: any;
  onBack: () => void;
}

const workoutPlan = [
  { day: 'Monday', workout: 'Kettlebell Swings', sets: '3x15', diet: 'High Protein, 2000 cal' },
  { day: 'Tuesday', workout: 'Turkish Get-Up', sets: '3x8', diet: 'Moderate Carbs, 1800 cal' },
  { day: 'Wednesday', workout: 'Rest Day', sets: '-', diet: 'Low Carbs, 1600 cal' },
  { day: 'Thursday', workout: 'Goblet Squat', sets: '4x12', diet: 'High Protein, 2000 cal' },
  { day: 'Friday', workout: 'Clean & Press', sets: '3x10', diet: 'Moderate Carbs, 1800 cal' },
];

const progressVideos = [
  { exercise: 'Kettlebell Swing', date: '2 days ago', feedback: 'Great form! Keep your core tight.' },
  { exercise: 'Turkish Get-Up', date: '5 days ago', feedback: 'Good progress. Focus on smooth transitions.' },
  { exercise: 'Goblet Squat', date: '1 week ago', feedback: 'Excellent depth. Maintain this form!' },
];

export function TrainerMemberDetail({ member, onBack }: TrainerMemberDetailProps) {
  const [activeTab, setActiveTab] = useState('plan');

  return (
    <div className="pb-20 bg-[#1A1A1A] min-h-screen">
      <div className="p-6">
        <Button 
          variant="ghost" 
          className="mb-4 text-[#B0B0B0] hover:text-white hover:bg-transparent p-0"
          onClick={onBack}
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Members
        </Button>

        <Card className="bg-[#2D2D2D] border-[#4A4E5A] p-6 rounded-xl mb-6">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16 bg-[#FF6B00]">
              <AvatarFallback className="bg-[#FF6B00] text-white text-xl">
                {member?.avatar || 'M'}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-2xl text-white mb-1">{member?.name || 'Member'}</h1>
              <p className="text-[#B0B0B0]">{member?.plan || 'No active plan'}</p>
            </div>
          </div>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full bg-[#2D2D2D] border border-[#4A4E5A] rounded-lg mb-6">
            <TabsTrigger 
              value="plan" 
              className="flex-1 data-[state=active]:bg-[#FF6B00] data-[state=active]:text-white text-[#B0B0B0] rounded-lg"
            >
              Plan
            </TabsTrigger>
            <TabsTrigger 
              value="progress" 
              className="flex-1 data-[state=active]:bg-[#FF6B00] data-[state=active]:text-white text-[#B0B0B0] rounded-lg"
            >
              Progress
            </TabsTrigger>
            <TabsTrigger 
              value="videos" 
              className="flex-1 data-[state=active]:bg-[#FF6B00] data-[state=active]:text-white text-[#B0B0B0] rounded-lg"
            >
              Videos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="plan" className="space-y-3">
            {workoutPlan.map((day, index) => (
              <Card key={index} className="bg-[#2D2D2D] border-[#4A4E5A] p-4 rounded-xl">
                <h3 className="text-white mb-2">{day.day}</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-[#B0B0B0]">Workout</p>
                    <p className="text-white">{day.workout}</p>
                  </div>
                  <div>
                    <p className="text-[#B0B0B0]">Sets</p>
                    <p className="text-white">{day.sets}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-[#B0B0B0]">Diet</p>
                    <p className="text-white">{day.diet}</p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="progress">
            <Card className="bg-[#2D2D2D] border-[#4A4E5A] p-6 rounded-xl">
              <p className="text-[#B0B0B0] text-center">Progress charts will appear here</p>
            </Card>
          </TabsContent>

          <TabsContent value="videos" className="space-y-3">
            {progressVideos.map((video, index) => (
              <Card key={index} className="bg-[#2D2D2D] border-[#4A4E5A] p-4 rounded-xl">
                <h3 className="text-white mb-1">{video.exercise}</h3>
                <p className="text-[#B0B0B0] text-sm mb-2">{video.date}</p>
                <p className="text-[#B0B0B0] text-sm italic">"{video.feedback}"</p>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        <Button className="fixed bottom-24 right-6 w-14 h-14 rounded-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white shadow-lg">
          <Plus size={24} />
        </Button>
      </div>
    </div>
  );
}
