
import React from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
}

const PortfolioCard = ({ title, category, description, image, technologies, liveUrl }: PortfolioCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <span className="text-white text-sm font-medium">{category}</span>
            {liveUrl && (
              <Button size="sm" variant="secondary" className="opacity-90">
                <Eye className="h-4 w-4 mr-1" />
                View
              </Button>
            )}
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold font-space-grotesk mb-2 group-hover:text-teal-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-teal-50 text-teal-700 text-xs rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        {liveUrl && (
          <Button variant="outline" size="sm" className="w-full group-hover:bg-teal-50 group-hover:border-teal-200">
            <ExternalLink className="h-4 w-4 mr-2" />
            View Project
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
