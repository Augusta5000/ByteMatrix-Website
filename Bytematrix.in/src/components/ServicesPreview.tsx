
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Film, ImageIcon, TrendingUp } from 'lucide-react';

const ServicesPreview = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance']
    },
    {
      icon: Film,
      title: 'Video Editing',
      description: 'Professional video editing services to bring your stories to life with cinematic quality.',
      features: ['Color Grading', 'Motion Graphics', 'Sound Design']
    },
    {
      icon: ImageIcon,
      title: 'Thumbnail Design',
      description: 'Eye-catching thumbnails that boost click-through rates and engagement for your content.',
      features: ['Custom Graphics', 'A/B Testing', 'Brand Consistency']
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns to grow your online presence and drive results.',
      features: ['Social Media', 'SEO/SEM', 'Analytics']
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="card-hover bg-background border-border">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
