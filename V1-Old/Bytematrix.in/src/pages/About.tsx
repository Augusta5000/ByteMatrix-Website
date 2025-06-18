
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      expertise: 'Full-Stack Development',
      avatar: 'AJ'
    },
    {
      name: 'Sarah Davis',
      role: 'Creative Director',
      expertise: 'UI/UX Design',
      avatar: 'SD'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Video Production Lead',
      expertise: 'Video Editing & Motion Graphics',
      avatar: 'MR'
    },
    {
      name: 'Emma Chen',
      role: 'Digital Marketing Manager',
      expertise: 'SEO & Social Media',
      avatar: 'EC'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new tools and techniques to deliver cutting-edge solutions.'
    },
    {
      icon: Heart,
      title: 'Quality',
      description: 'Every project receives our meticulous attention to detail, ensuring the highest standards of craftsmanship and performance.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in working closely with our clients, fostering transparent communication and partnership throughout the process.'
    },
    {
      icon: TrendingUp,
      title: 'Results',
      description: 'Our success is measured by your success. We focus on delivering tangible results that drive your business forward.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">ByteMatrix</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a passionate team of digital innovators dedicated to transforming businesses 
            through cutting-edge web development, creative video production, and strategic digital marketing.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-purple-600/5 border-primary/20">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To empower businesses of all sizes with innovative digital solutions that drive growth, 
                  enhance user experiences, and create lasting impact in the digital landscape. We believe 
                  in turning complex challenges into simple, elegant solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-purple-600/5 to-primary/5 border-purple-600/20">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-600/10 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the leading digital transformation partner that businesses trust to navigate 
                  the evolving digital landscape. We envision a future where technology seamlessly 
                  bridges the gap between ambitious ideas and remarkable realities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of experts brings together years of experience in technology, 
              design, and digital marketing to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your digital presence and achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8">
              <Link to="/contact">Get In Touch</Link>
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

export default About;
