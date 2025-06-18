
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Code, Film, ImageIcon, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development & Maintenance',
      description: 'Custom websites and web applications built with cutting-edge technologies to deliver exceptional user experiences and robust functionality.',
      features: [
        'Responsive Web Design',
        'E-commerce Solutions',
        'Content Management Systems',
        'API Development & Integration',
        'Website Maintenance & Updates',
        'Performance Optimization',
        'Security Implementation',
        'SEO-Friendly Development'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Next.js'],
      priceRange: 'Starting from $2,999'
    },
    {
      icon: Film,
      title: 'Video Editing',
      description: 'Professional video editing services that bring your stories to life with cinematic quality, engaging narratives, and stunning visual effects.',
      features: [
        'Professional Video Editing',
        'Color Correction & Grading',
        'Motion Graphics & Animation',
        'Sound Design & Audio Mixing',
        'Subtitle & Caption Services',
        'Multi-Format Delivery',
        'Brand Integration',
        'Social Media Optimization'
      ],
      technologies: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Final Cut Pro'],
      priceRange: 'Starting from $299'
    },
    {
      icon: ImageIcon,
      title: 'Thumbnail Design',
      description: 'Eye-catching thumbnail designs that maximize click-through rates and boost engagement across all video platforms and social media channels.',
      features: [
        'Custom Thumbnail Creation',
        'A/B Testing & Optimization',
        'Platform-Specific Sizing',
        'Brand Consistency',
        'Psychology-Based Design',
        'Rapid Turnaround',
        'Unlimited Revisions',
        'Performance Analytics'
      ],
      technologies: ['Adobe Photoshop', 'Illustrator', 'Figma', 'Canva Pro'],
      priceRange: 'Starting from $49'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies that drive traffic, increase conversions, and build lasting relationships with your target audience.',
      features: [
        'Social Media Marketing',
        'Search Engine Optimization',
        'Pay-Per-Click Advertising',
        'Content Marketing Strategy',
        'Email Marketing Campaigns',
        'Analytics & Reporting',
        'Brand Strategy Development',
        'Conversion Rate Optimization'
      ],
      technologies: ['Google Analytics', 'Google Ads', 'Facebook Ads', 'SEMrush', 'Mailchimp'],
      priceRange: 'Starting from $999/month'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand, engage your audience, 
            and drive measurable results in today's competitive digital landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="card-hover bg-background border-border h-full">
                  <CardHeader className="pb-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <div className="text-sm text-primary font-semibold mt-1">
                          {service.priceRange}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-6">
                      {/* Features */}
                      <div>
                        <h4 className="font-semibold mb-3">What's Included:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3">Technologies We Use:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button asChild className="w-full bg-primary hover:bg-primary/90">
                        <Link to="/contact">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, 
              within budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We understand your goals, target audience, and project requirements through detailed consultation.'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'We develop a comprehensive strategy and project roadmap tailored to your specific needs.'
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Our expert team brings your vision to life using the latest tools and best practices.'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'We deliver the final product with ongoing support and optimization recommendations.'
              }
            ].map((process, index) => (
              <Card key={index} className="text-center card-hover">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-4">{process.step}</div>
                  <h3 className="text-xl font-semibold mb-4">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution that drives results for your business.
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

export default Services;
