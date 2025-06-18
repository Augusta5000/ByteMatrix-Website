
import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PortfolioCard from '@/components/PortfolioCard';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Development', 'Video Editing', 'Design', 'Marketing'];

  const portfolioItems = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with advanced features and seamless user experience that increased sales by 300%",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#"
    },
    {
      title: "Corporate Website Redesign",
      category: "Web Development",
      description: "Complete website redesign for a Fortune 500 company with improved UX and performance optimization",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      liveUrl: "#"
    },
    {
      title: "SaaS Dashboard",
      category: "Web Development",
      description: "Intuitive dashboard interface for a SaaS platform with real-time analytics and data visualization",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "D3.js", "PostgreSQL"],
      liveUrl: "#"
    },
    {
      title: "Brand Story Video",
      category: "Video Editing",
      description: "Compelling brand story video that increased brand awareness by 200% and generated 1M+ views",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      technologies: ["After Effects", "Premiere Pro", "Motion Graphics"],
      liveUrl: "#"
    },
    {
      title: "Product Launch Campaign",
      category: "Video Editing",
      description: "High-impact product launch video series that drove 150% increase in pre-orders",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      technologies: ["Cinema 4D", "After Effects", "DaVinci Resolve"],
      liveUrl: "#"
    },
    {
      title: "YouTube Content Series",
      category: "Video Editing",
      description: "Weekly content series editing that helped creator reach 500K subscribers in 6 months",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      technologies: ["Premiere Pro", "Photoshop", "Audition"],
      liveUrl: "#"
    },
    {
      title: "YouTube Thumbnail Package",
      category: "Design",
      description: "High-converting thumbnail designs that boosted click rates by 300% for tech channel",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: ["Photoshop", "Illustrator", "Figma"],
      liveUrl: "#"
    },
    {
      title: "Brand Identity Design",
      category: "Design",
      description: "Complete brand identity package including logo, color palette, and brand guidelines",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
      technologies: ["Illustrator", "Photoshop", "InDesign"],
      liveUrl: "#"
    },
    {
      title: "Social Media Templates",
      category: "Design",
      description: "Cohesive social media template package that increased engagement by 250%",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["Figma", "Photoshop", "Canva"],
      liveUrl: "#"
    },
    {
      title: "Digital Marketing Campaign",
      category: "Marketing",
      description: "Multi-channel marketing campaign that generated $2M+ in revenue for B2B client",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      technologies: ["Google Ads", "Facebook Ads", "Analytics"],
      liveUrl: "#"
    },
    {
      title: "SEO Optimization Project",
      category: "Marketing",
      description: "Complete SEO overhaul that increased organic traffic by 400% in 6 months",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["SEMrush", "Google Analytics", "Search Console"],
      liveUrl: "#"
    },
    {
      title: "Content Marketing Strategy",
      category: "Marketing",
      description: "Content strategy that increased blog traffic by 500% and generated 200+ qualified leads",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      technologies: ["HubSpot", "Mailchimp", "WordPress"],
      liveUrl: "#"
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-space-grotesk mb-6 animate-fade-in">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
            Explore our collection of successful projects that showcase our expertise 
            and the impact we've made for our clients.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-gradient-teal' 
                    : 'hover:bg-teal-50 hover:border-teal-200'
                }`}
              >
                <Filter className="h-4 w-4 mr-2" />
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={`${activeFilter}-${index}`} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PortfolioCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-space-grotesk mb-6">Project Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak for themselves - the measurable impact of our work.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-teal-600 mb-2">150+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-teal-600 mb-2">300%</div>
              <div className="text-gray-600">Average Growth</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-teal-600 mb-2">$10M+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-teal-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-teal">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold font-space-grotesk mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's work together to bring your vision to life and achieve outstanding results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-teal-600">
              View Process
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
