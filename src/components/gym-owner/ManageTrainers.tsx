import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Plus, Eye, Trash2 } from 'lucide-react';
import { Badge } from '../ui/badge';

const trainersData = [
  { name: 'John Doe', email: 'john@kettlebell.com', members: 45, status: 'Active' },
  { name: 'Sarah Lee', email: 'sarah@kettlebell.com', members: 38, status: 'Active' },
  { name: 'Mike Ross', email: 'mike@kettlebell.com', members: 32, status: 'Active' },
  { name: 'Emma Watson', email: 'emma@kettlebell.com', members: 28, status: 'Inactive' },
  { name: 'Tom Hardy', email: 'tom@kettlebell.com', members: 25, status: 'Active' },
];

export function ManageTrainers() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl text-white">Manage Trainers</h1>
        <Button className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white rounded-lg">
          <Plus size={20} className="mr-2" />
          Add New Trainer
        </Button>
      </div>

      <Card className="bg-[#2D2D2D] border-[#4A4E5A] rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-[#4A4E5A] hover:bg-[#2D2D2D]">
              <TableHead className="text-[#B0B0B0]">Name</TableHead>
              <TableHead className="text-[#B0B0B0]">Email</TableHead>
              <TableHead className="text-[#B0B0B0]">Assigned Members</TableHead>
              <TableHead className="text-[#B0B0B0]">Status</TableHead>
              <TableHead className="text-[#B0B0B0]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trainersData.map((trainer, index) => (
              <TableRow key={index} className="border-[#4A4E5A] hover:bg-[#1A1A1A]">
                <TableCell className="text-white">{trainer.name}</TableCell>
                <TableCell className="text-[#B0B0B0]">{trainer.email}</TableCell>
                <TableCell className="text-white">{trainer.members}</TableCell>
                <TableCell>
                  <Badge 
                    className={trainer.status === 'Active' 
                      ? 'bg-[#FF6B00] text-white hover:bg-[#FF6B00]' 
                      : 'bg-[#4A4E5A] text-white hover:bg-[#4A4E5A]'}
                  >
                    {trainer.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="text-[#B0B0B0] hover:text-[#FF6B00] hover:bg-transparent">
                      <Eye size={18} />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-[#B0B0B0] hover:text-red-500 hover:bg-transparent">
                      <Trash2 size={18} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
