
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'ByteMatrix transformed our vision into a stunning website that perfectly represents our brand. Their attention to detail and technical expertise is unmatched.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      content: 'The video editing services provided by ByteMatrix elevated our marketing campaigns. The quality and creativity exceeded our expectations.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Content Creator',
      content: 'Their thumbnail designs increased our YouTube click-through rates by 300%. ByteMatrix truly understands what captures audience attention.',
      rating: 5,
      avatar: 'ER'
    },
    {
      name: 'David Thompson',
      role: 'E-commerce Owner',
      content: 'The digital marketing strategy ByteMatrix developed for us resulted in a 250% increase in online sales within just 3 months.',
      rating: 5,
      avatar: 'DT'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - hear from our satisfied clients.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="max-w-4xl mx-auto bg-background border-border">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-lg md:text-xl text-muted-foreground mb-6 italic">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                          {testimonial.avatar}
                        </div>
                        <div className="text-left">
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
