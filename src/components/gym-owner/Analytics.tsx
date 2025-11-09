import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Download } from 'lucide-react';

const memberGrowthData = [
  { month: 'Jan', members: 250 },
  { month: 'Feb', members: 270 },
  { month: 'Mar', members: 290 },
  { month: 'Apr', members: 310 },
  { month: 'May', members: 330 },
  { month: 'Jun', members: 348 },
];

const memberDistributionData = [
  { name: 'John Doe', value: 45 },
  { name: 'Sarah Lee', value: 38 },
  { name: 'Mike Ross', value: 32 },
  { name: 'Emma Watson', value: 28 },
  { name: 'Others', value: 205 },
];

const COLORS = ['#FF6B00', '#FF8533', '#FFA066', '#FFBB99', '#4A4E5A'];

export function Analytics() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl text-white">Analytics</h1>
        <Button variant="outline" className="border-[#4A4E5A] text-[#B0B0B0] hover:text-white hover:bg-[#4A4E5A] rounded-lg">
          <Download size={20} className="mr-2" />
          Export as PDF/CSV
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <Select defaultValue="all">
          <SelectTrigger className="w-[200px] bg-[#2D2D2D] border-[#4A4E5A] text-white rounded-lg">
            <SelectValue placeholder="Select Trainer" />
          </SelectTrigger>
          <SelectContent className="bg-[#2D2D2D] border-[#4A4E5A] text-white">
            <SelectItem value="all">All Trainers</SelectItem>
            <SelectItem value="john">John Doe</SelectItem>
            <SelectItem value="sarah">Sarah Lee</SelectItem>
            <SelectItem value="mike">Mike Ross</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="6months">
          <SelectTrigger className="w-[200px] bg-[#2D2D2D] border-[#4A4E5A] text-white rounded-lg">
            <SelectValue placeholder="Date Range" />
          </SelectTrigger>
          <SelectContent className="bg-[#2D2D2D] border-[#4A4E5A] text-white">
            <SelectItem value="1month">Last Month</SelectItem>
            <SelectItem value="3months">Last 3 Months</SelectItem>
            <SelectItem value="6months">Last 6 Months</SelectItem>
            <SelectItem value="1year">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#2D2D2D] border-[#4A4E5A] p-6 rounded-xl">
          <h2 className="text-xl mb-4 text-white">Member Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={memberGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4A4E5A" />
              <XAxis dataKey="month" stroke="#B0B0B0" tick={{ fill: '#B0B0B0' }} />
              <YAxis stroke="#B0B0B0" tick={{ fill: '#B0B0B0' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#2D2D2D', border: '1px solid #4A4E5A', borderRadius: '8px' }}
                labelStyle={{ color: '#FFFFFF' }}
              />
              <Line type="monotone" dataKey="members" stroke="#FF6B00" strokeWidth={3} dot={{ fill: '#FF6B00', r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="bg-[#2D2D2D] border-[#4A4E5A] p-6 rounded-xl">
          <h2 className="text-xl mb-4 text-white">Member Distribution by Trainer</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={memberDistributionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {memberDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#2D2D2D', border: '1px solid #4A4E5A', borderRadius: '8px' }}
                labelStyle={{ color: '#FFFFFF' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
