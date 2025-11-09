import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Upload, Video } from 'lucide-react';

export function MemberUpload() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  return (
    <div className="pb-20 bg-[#1A1A1A] min-h-screen">
      <div className="p-6">
        <h1 className="text-2xl mb-2 text-white">Upload Video</h1>
        <p className="text-[#B0B0B0] mb-6">Share your workout video with your trainer</p>

        <Card className="bg-[#2D2D2D] border-[#4A4E5A] p-8 rounded-xl mb-6">
          <div className="border-2 border-dashed border-[#4A4E5A] rounded-xl p-12 text-center">
            <div className="w-20 h-20 bg-[#1A1A1A] rounded-full flex items-center justify-center mx-auto mb-4">
              <Video size={40} className="text-[#FF6B00]" />
            </div>
            <h3 className="text-white mb-2">Upload your workout video</h3>
            <p className="text-[#B0B0B0] text-sm mb-4">
              {selectedFile ? selectedFile : 'Max file size: 100MB'}
            </p>
            <p className="text-[#B0B0B0] text-xs">
              Supported formats: MP4, MOV, AVI
            </p>
          </div>
        </Card>

        <Button 
          className="w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white rounded-lg h-12 mb-3"
          onClick={() => setSelectedFile('workout_video.mp4')}
        >
          <Upload size={20} className="mr-2" />
          Select Video
        </Button>

        {selectedFile && (
          <Button 
            className="w-full bg-[#4A4E5A] hover:bg-[#4A4E5A]/90 text-white rounded-lg h-12"
            onClick={() => setSelectedFile(null)}
          >
            Clear Selection
          </Button>
        )}

        <div className="mt-8">
          <h2 className="text-lg text-white mb-4">Recent Uploads</h2>
          <div className="space-y-3">
            {['Kettlebell Swing - Oct 30', 'Turkish Get-Up - Oct 28', 'Goblet Squat - Oct 25'].map((video, index) => (
              <Card key={index} className="bg-[#2D2D2D] border-[#4A4E5A] p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center">
                    <Video size={20} className="text-[#FF6B00]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white">{video}</p>
                    <p className="text-[#B0B0B0] text-sm">Reviewed by trainer</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
