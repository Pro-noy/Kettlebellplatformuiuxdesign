import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { ArrowLeft, Play, Star } from 'lucide-react';

interface TrainerVideoReviewProps {
  onBack: () => void;
}

export function TrainerVideoReview({ onBack }: TrainerVideoReviewProps) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  return (
    <div className="pb-20 bg-[#0A0E27] min-h-screen overflow-x-hidden overflow-y-auto">
      <div className="p-6 max-w-full">
        <Button 
          variant="ghost" 
          className="mb-4 text-[#B0B0B0] hover:text-white hover:bg-transparent p-0"
          onClick={onBack}
        >
          <ArrowLeft size={20} className="mr-2" />
          Back
        </Button>

        <h1 className="text-2xl mb-6 text-white">Video Review</h1>

        <Card className="bg-[#2D2D2D] border-[#4A4E5A] rounded-xl overflow-hidden mb-6">
          <div className="aspect-video bg-[#1A1A1A] flex items-center justify-center">
            <Play size={64} className="text-[#FF6B00]" />
          </div>
          <div className="p-4">
            <h2 className="text-white mb-1">Alex Johnson</h2>
            <p className="text-[#B0B0B0] text-sm">Kettlebell Swing - Uploaded 2 hours ago</p>
          </div>
        </Card>

        <Card className="bg-[#2D2D2D] border-[#4A4E5A] p-6 rounded-xl mb-6">
          <h3 className="text-white mb-4">Rate Performance</h3>
          <div className="flex gap-2 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className="transition-colors"
              >
                <Star 
                  size={32} 
                  className={star <= rating ? 'text-[#FF6B00] fill-[#FF6B00]' : 'text-[#4A4E5A]'}
                />
              </button>
            ))}
          </div>

          <h3 className="text-white mb-4">Feedback</h3>
          <Textarea
            placeholder="Enter your feedback for the member..."
            className="bg-[#1A1A1A] border-[#4A4E5A] text-white placeholder:text-[#B0B0B0] min-h-[120px] rounded-lg"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </Card>

        <Button className="w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white rounded-lg h-12">
          Send Feedback
        </Button>
      </div>
    </div>
  );
}