import React from 'react';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Search, ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback } from '../ui/avatar';

const members = [
  { name: 'Alex Johnson', plan: 'Strength Builder - Week 3', avatar: 'AJ' },
  { name: 'Mike Chen', plan: 'Fat Loss Program - Week 2', avatar: 'MC' },
  { name: 'Emma Stone', plan: 'Beginner Kettlebell - Week 1', avatar: 'ES' },
  { name: 'David Miller', plan: 'Advanced Training - Week 5', avatar: 'DM' },
  { name: 'Lisa Brown', plan: 'Strength Builder - Week 2', avatar: 'LB' },
  { name: 'James Wilson', plan: 'Fat Loss Program - Week 4', avatar: 'JW' },
  { name: 'Sarah Kim', plan: 'Beginner Kettlebell - Week 3', avatar: 'SK' },
];

interface TrainerMembersListProps {
  onMemberClick: (member: any) => void;
}

export function TrainerMembersList({ onMemberClick }: TrainerMembersListProps) {
  return (
    <div className="pb-20 bg-[#0A0E27] min-h-screen overflow-x-hidden overflow-y-auto">
      <div className="p-6 max-w-full">
        <h1 className="text-2xl mb-6 text-white">My Members</h1>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B0B0B0]" size={20} />
          <Input 
            placeholder="Search members..." 
            className="pl-10 bg-[#2D2D2D] border-[#4A4E5A] text-white placeholder:text-[#B0B0B0] rounded-lg"
          />
        </div>

        <div className="space-y-3">
          {members.map((member, index) => (
            <Card 
              key={index} 
              className="bg-[#2D2D2D] border-[#4A4E5A] p-4 rounded-xl cursor-pointer hover:bg-[#3D3D3D] transition-colors"
              onClick={() => onMemberClick(member)}
            >
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12 bg-[#FF6B00]">
                  <AvatarFallback className="bg-[#FF6B00] text-white">
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-white mb-1">{member.name}</p>
                  <p className="text-[#B0B0B0] text-sm truncate">{member.plan}</p>
                </div>
                <ChevronRight size={20} className="text-[#B0B0B0] shrink-0" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}