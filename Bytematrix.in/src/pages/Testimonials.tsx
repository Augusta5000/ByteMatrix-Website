
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      content: 'ByteMatrix completely transformed our online presence. Their web development team created a stunning, fast-loading website that perfectly captures our brand essence. Our conversion rates increased by 200% within the first month of launch.',
      rating: 5,
      avatar: 'SJ',
      project: 'E-commerce Platform Development'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'GrowthCo',
      content: 'The video editing services provided by ByteMatrix are exceptional. They took our raw footage and created compelling marketing videos that significantly boosted our social media engagement. Professional, creative, and always on time.',
      rating: 5,
      avatar: 'MC',
      project: 'Video Marketing Campaign'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Content Creator',
      company: 'Creative Studios',
      content: 'Their thumbnail designs are game-changers! ByteMatrix understood our brand perfectly and created thumbnails that increased our YouTube click-through rates by 300%. The attention to detail and psychological understanding of viewer behavior is impressive.',
      rating: 5,
      avatar: 'ER',
      project: 'YouTube Thumbnail Package'
    },
    {
      name: 'David Thompson',
      role: 'Founder',
      company: 'EcoTech Solutions',
      content: 'ByteMatrix\'s digital marketing strategy transformed our business. Their comprehensive approach including SEO, PPC, and social media marketing resulted in a 250% increase in qualified leads and significantly improved our market position.',
      rating: 5,
      avatar: 'DT',
      project: 'Digital Marketing Strategy'
    },
    {
      name: 'Lisa Wang',
      role: 'Operations Manager',
      company: 'HealthFirst Clinic',
      content: 'Working with ByteMatrix was seamless from start to finish. They developed a custom patient management system that streamlined our operations and improved patient satisfaction. Their ongoing support has been invaluable.',
      rating: 5,
      avatar: 'LW',
      project: 'Healthcare Management System'
    },
    {
      name: 'James Parker',
      role: 'Creative Director',
      company: 'Artistic Vision',
      content: 'The quality of video production and editing from ByteMatrix exceeded our highest expectations. They brought our creative vision to life with stunning visuals and seamless storytelling. Highly recommended for any video project.',
      rating: 5,
      avatar: 'JP',
      project: 'Brand Documentary Series'
    },
    {
      name: 'Rachel Green',
      role: 'Startup Founder',
      company: 'InnovateLab',
      content: 'ByteMatrix didn\'t just build us a website; they created a complete digital ecosystem. Their understanding of startup needs and ability to scale solutions as we grow has made them an invaluable partner.',
      rating: 5,
      avatar: 'RG',
      project: 'Startup Website & Branding'
    },
    {
      name: 'Alex Kumar',
      role: 'E-learning Director',
      company: 'EduPlatform',
      content: 'The video content ByteMatrix created for our online courses is exceptional. Their editing skills, motion graphics, and attention to educational flow significantly improved student engagement and completion rates.',
      rating: 5,
      avatar: 'AK',
      project: 'Educational Video Series'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-gradient">Testimonials</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our satisfied clients about their experience working with ByteMatrix 
            and the results we've delivered for their businesses.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Project Completion Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover bg-background border-border h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-primary/20 mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="border-t border-border pt-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </div>
                        <div className="text-xs text-primary font-medium mt-1">
                          {testimonial.project}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Clients Say Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Clients <span className="text-gradient">Choose Us</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Consistent themes from our client feedback that highlight our core strengths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center card-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Exceptional Quality</h3>
                <p className="text-muted-foreground">
                  Clients consistently praise our attention to detail and commitment to delivering 
                  high-quality work that exceeds expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Clear Communication</h3>
                <p className="text-muted-foreground">
                  Our transparent communication and regular updates keep clients informed 
                  and confident throughout the project lifecycle.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Measurable Results</h3>
                <p className="text-muted-foreground">
                  Every project is designed to deliver tangible business results, from increased 
                  sales to improved engagement metrics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results and become our next success story.
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

export default Testimonials;
