
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  name: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

const TestimonialCard = ({ name, company, content, rating, avatar }: TestimonialCardProps) => {
  return (
    <Card className="h-full border-0 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-gray-700 mb-6 italic">"{content}"</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-teal rounded-full flex items-center justify-center mr-4">
            <span className="text-white font-bold text-lg">
              {name.charAt(0)}
            </span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-600">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
