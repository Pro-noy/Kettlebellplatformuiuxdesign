import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Plus, Eye, Trash2 } from 'lucide-react';
import { Badge } from '../ui/badge';

const membersData = [
  { name: 'Alex Johnson', email: 'alex@email.com', trainer: 'John Doe', status: 'Active' },
  { name: 'Mike Chen', email: 'mike@email.com', trainer: 'Sarah Lee', status: 'Active' },
  { name: 'Emma Stone', email: 'emma@email.com', trainer: 'John Doe', status: 'Active' },
  { name: 'David Miller', email: 'david@email.com', trainer: 'Mike Ross', status: 'Inactive' },
  { name: 'Lisa Brown', email: 'lisa@email.com', trainer: 'Sarah Lee', status: 'Active' },
  { name: 'James Wilson', email: 'james@email.com', trainer: 'Tom Hardy', status: 'Active' },
];

export function ManageMembers() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl text-white">Manage Members</h1>
        <Button className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white rounded-lg">
          <Plus size={20} className="mr-2" />
          Add New Member
        </Button>
      </div>

      <Card className="bg-[#2D2D2D] border-[#4A4E5A] rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-[#4A4E5A] hover:bg-[#2D2D2D]">
              <TableHead className="text-[#B0B0B0]">Name</TableHead>
              <TableHead className="text-[#B0B0B0]">Email</TableHead>
              <TableHead className="text-[#B0B0B0]">Assigned Trainer</TableHead>
              <TableHead className="text-[#B0B0B0]">Status</TableHead>
              <TableHead className="text-[#B0B0B0]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {membersData.map((member, index) => (
              <TableRow key={index} className="border-[#4A4E5A] hover:bg-[#1A1A1A]">
                <TableCell className="text-white">{member.name}</TableCell>
                <TableCell className="text-[#B0B0B0]">{member.email}</TableCell>
                <TableCell className="text-white">{member.trainer}</TableCell>
                <TableCell>
                  <Badge 
                    className={member.status === 'Active' 
                      ? 'bg-[#FF6B00] text-white hover:bg-[#FF6B00]' 
                      : 'bg-[#4A4E5A] text-white hover:bg-[#4A4E5A]'}
                  >
                    {member.status}
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
