
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Target, Users, Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-gradient">ByteMatrix</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We are a cutting-edge digital agency specializing in web development, video production, 
                and digital marketing. Our mission is to transform your ideas into powerful digital 
                experiences that drive results and exceed expectations.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">Innovation First</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">Client Focused</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">Quality Assured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">Results Driven</span>
                </div>
              </div>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">
                    Empowering businesses with innovative digital solutions
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">
                    Leading the future of digital transformation
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Our Values</h3>
                  <p className="text-sm text-muted-foreground">
                    Integrity, excellence, and client success
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Our Promise</h3>
                  <p className="text-sm text-muted-foreground">
                    Delivering beyond expectations, every time
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <ServicesPreview />

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life with our comprehensive digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
