
import React from 'react';
import { Code, Video, Palette, TrendingUp, Check } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development & Maintenance",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: [
        "Responsive Design",
        "Fast Performance Optimization",
        "SEO-Friendly Structure",
        "Mobile-First Approach",
        "Cross-Browser Compatibility",
        "Content Management Systems",
        "E-commerce Solutions",
        "Ongoing Maintenance & Updates"
      ],
      pricing: "Starting at $2,500",
      popular: false
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing services for content creators, businesses, and marketing campaigns.",
      features: [
        "Professional Color Grading",
        "Motion Graphics & Animations",
        "Audio Enhancement & Mixing",
        "Quick Turnaround Times",
        "Multiple Format Delivery",
        "Brand Consistency",
        "Social Media Optimization",
        "Revision Rounds Included"
      ],
      pricing: "Starting at $500/video",
      popular: true
    },
    {
      icon: Palette,
      title: "Thumbnail Design",
      description: "Eye-catching thumbnail designs that significantly increase click-through rates and engagement.",
      features: [
        "Custom Graphic Design",
        "Brand Consistency",
        "A/B Testing Support",
        "High CTR Focus",
        "Multiple Variations",
        "Quick Delivery",
        "Unlimited Revisions",
        "Social Platform Optimization"
      ],
      pricing: "Starting at $50/thumbnail",
      popular: false
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive marketing strategies designed to grow your online presence and drive measurable results.",
      features: [
        "Social Media Marketing",
        "Content Strategy Development",
        "SEO & SEM Campaigns",
        "Analytics & Reporting",
        "Conversion Optimization",
        "Email Marketing",
        "Influencer Partnerships",
        "Campaign Management"
      ],
      pricing: "Starting at $1,500/month",
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your goals, target audience, and project requirements through detailed consultation."
    },
    {
      step: "02",
      title: "Strategy & Design",
      description: "Our team develops a comprehensive strategy and creates initial designs based on your brand and objectives."
    },
    {
      step: "03",
      title: "Development & Creation",
      description: "We bring your project to life using the latest tools and technologies while maintaining open communication."
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Rigorous testing ensures everything works perfectly before launch, with ongoing optimization for best results."
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "We handle the launch process and provide ongoing support to ensure your project continues to succeed."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-space-grotesk mb-6 animate-fade-in">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
            Comprehensive digital solutions designed to help your business thrive 
            in today's competitive online landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in ${service.popular ? 'ring-2 ring-teal-500' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-teal text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-teal rounded-2xl flex items-center justify-center mr-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-space-grotesk mb-2">{service.title}</h3>
                      <p className="text-teal-600 font-semibold">{service.pricing}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-gradient-teal">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project is delivered 
              on time, on budget, and exceeds expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-teal">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold font-space-grotesk mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project and create a customized solution that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-teal-600">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
