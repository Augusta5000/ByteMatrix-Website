
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ExternalLink, Play } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'TechFlow E-commerce Platform',
      category: 'web',
      description: 'A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      results: '300% increase in online sales',
      link: '#'
    },
    {
      id: 2,
      title: 'Brand Story Video Campaign',
      category: 'video',
      description: 'A compelling brand story video that increased customer engagement and drove significant traffic to client social media channels.',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop',
      technologies: ['Adobe Premiere', 'After Effects', 'Color Grading'],
      results: '500% increase in social engagement',
      link: '#'
    },
    {
      id: 3,
      title: 'Healthcare Dashboard',
      category: 'web',
      description: 'A comprehensive patient management dashboard for healthcare providers with real-time data visualization and reporting.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Express'],
      results: '40% improvement in workflow efficiency',
      link: '#'
    },
    {
      id: 4,
      title: 'YouTube Thumbnail Package',
      category: 'design',
      description: 'Custom thumbnail designs for a tech YouTuber that dramatically improved click-through rates and subscriber growth.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      technologies: ['Photoshop', 'Illustrator', 'Brand Design'],
      results: '250% increase in CTR',
      link: '#'
    },
    {
      id: 5,
      title: 'SaaS Marketing Campaign',
      category: 'marketing',
      description: 'A comprehensive digital marketing strategy for a B2B SaaS company including SEO, PPC, and content marketing.',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop',
      technologies: ['Google Ads', 'SEMrush', 'HubSpot', 'Analytics'],
      results: '180% increase in qualified leads',
      link: '#'
    },
    {
      id: 6,
      title: 'Product Demo Video Series',
      category: 'video',
      description: 'A series of product demonstration videos with motion graphics and professional voice-over for software company.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop',
      technologies: ['After Effects', 'Cinema 4D', 'Voice Recording'],
      results: '60% increase in product adoption',
      link: '#'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'video', label: 'Video Editing' },
    { key: 'design', label: 'Design' },
    { key: 'marketing', label: 'Digital Marketing' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform 
            their digital presence and achieve remarkable results.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={filter === category.key ? "default" : "outline"}
                onClick={() => setFilter(category.key)}
                className={filter === category.key ? "bg-primary hover:bg-primary/90" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="card-hover overflow-hidden bg-background border-border">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      {project.category === 'video' ? (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Watch Video
                        </>
                      ) : (
                        <>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Project
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-primary font-medium">
                      {project.results}
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.link}>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Project <span className="text-gradient">Success Metrics</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from real projects - our commitment to delivering measurable impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">250%</div>
              <div className="text-muted-foreground">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">99%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">48hrs</div>
              <div className="text-muted-foreground">Average Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
