
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Zap, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted/30">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block">Transform Your</span>
            <span className="block text-gradient">Digital Vision</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            ByteMatrix brings cutting-edge web development, stunning video editing, and powerful digital marketing solutions to elevate your brand in the digital landscape.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg glow">
              <Link to="/contact">
                Let's Work Together
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">100+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">99%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
