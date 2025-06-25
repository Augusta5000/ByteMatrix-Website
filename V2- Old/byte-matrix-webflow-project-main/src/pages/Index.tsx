
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Video, Palette, TrendingUp, Star, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import PortfolioCard from '@/components/PortfolioCard';

const Index = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["Responsive Design", "Fast Performance", "SEO Optimized", "Mobile First"]
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing for content creators and businesses",
      features: ["Color Grading", "Motion Graphics", "Audio Enhancement", "Quick Turnaround"]
    },
    {
      icon: Palette,
      title: "Thumbnail Design",
      description: "Eye-catching thumbnails that increase click-through rates",
      features: ["Custom Graphics", "Brand Consistency", "A/B Testing", "High CTR Focus"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your online presence",
      features: ["Social Media Marketing", "Content Strategy", "Analytics", "Campaign Management"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      content: "ByteMatrix transformed our online presence completely. Their web development skills are top-notch!",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      company: "Content Creator",
      content: "The video editing quality exceeded my expectations. My subscriber count doubled after working with them.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "E-commerce Store",
      content: "Their digital marketing strategy increased our sales by 150% in just 3 months. Highly recommended!",
      rating: 5,
      avatar: "ER"
    }
  ];

  const portfolioItems = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with advanced features and seamless user experience",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#"
    },
    {
      title: "Brand Video Campaign",
      category: "Video Editing",
      description: "Engaging brand story video that increased brand awareness by 200%",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      technologies: ["After Effects", "Premiere Pro", "Motion Graphics"],
      liveUrl: "#"
    },
    {
      title: "YouTube Thumbnail Set",
      category: "Design",
      description: "High-converting thumbnail designs that boosted click rates by 300%",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: ["Photoshop", "Illustrator", "Figma"],
      liveUrl: "#"
    }
  ];

  const stats = [
    { icon: Users, number: "50+", label: "Happy Clients" },
    { icon: Award, number: "100+", label: "Projects Completed" },
    { icon: Star, number: "5.0", label: "Average Rating" },
    { icon: TrendingUp, number: "200%", label: "Average Growth" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6">
              Transform Your
              <span className="text-gradient block">Digital Presence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We create stunning websites, engaging videos, and powerful marketing strategies 
              that help your business thrive in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-teal text-lg px-8 py-3 group">
                Let's Work Together
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-slide-up">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">About ByteMatrix</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a dynamic digital agency passionate about helping businesses succeed online. 
              With expertise in web development, video production, and digital marketing, 
              we deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To empower businesses with cutting-edge digital solutions that not only look amazing 
                but also deliver measurable results. We believe in the power of great design, 
                compelling content, and strategic thinking.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-4"></div>
                  <span>Innovation-driven approach</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-4"></div>
                  <span>Client-focused solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-4"></div>
                  <span>Results that matter</span>
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to execution, we provide comprehensive digital solutions 
              tailored to your unique needs and goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">Featured Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent projects that showcase our expertise 
              and commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioItems.map((item, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <PortfolioCard {...item} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-teal">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold font-space-grotesk mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project and see how we can help you achieve your digital goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Get Started Today
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-teal-600">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
