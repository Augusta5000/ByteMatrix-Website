
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to progressive web apps and beyond.',
      content: 'The web development landscape is evolving rapidly, with new technologies and methodologies emerging...',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      category: 'Web Development',
      author: 'Alex Johnson',
      date: '2024-03-15',
      readTime: '8 min read',
      tags: ['React', 'AI', 'Progressive Web Apps', 'Performance']
    },
    {
      id: 2,
      title: 'Video Marketing: How to Create Content That Converts',
      excerpt: 'Learn the secrets of creating compelling video content that engages your audience and drives conversions.',
      content: 'Video marketing has become one of the most effective ways to reach and engage audiences...',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop',
      category: 'Video Marketing',
      author: 'Sarah Davis',
      date: '2024-03-12',
      readTime: '6 min read',
      tags: ['Video Marketing', 'Content Strategy', 'Engagement', 'ROI']
    },
    {
      id: 3,
      title: 'The Psychology Behind Effective Thumbnail Design',
      excerpt: 'Discover the psychological principles that make thumbnails irresistible and drive higher click-through rates.',
      content: 'Creating effective thumbnails is both an art and a science. Understanding the psychology...',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      category: 'Design',
      author: 'Mike Rodriguez',
      date: '2024-03-10',
      readTime: '5 min read',
      tags: ['Design Psychology', 'Thumbnails', 'Click-through Rate', 'Visual Appeal']
    },
    {
      id: 4,
      title: 'Digital Marketing ROI: Measuring What Matters',
      excerpt: 'A comprehensive guide to tracking and measuring the ROI of your digital marketing campaigns.',
      content: 'Understanding the return on investment for your digital marketing efforts is crucial...',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop',
      category: 'Digital Marketing',
      author: 'Emma Chen',
      date: '2024-03-08',
      readTime: '7 min read',
      tags: ['ROI', 'Analytics', 'Performance Marketing', 'KPIs']
    },
    {
      id: 5,
      title: 'Building Responsive Websites: Best Practices for 2024',
      excerpt: 'Essential techniques and best practices for creating websites that work perfectly across all devices.',
      content: 'With mobile traffic accounting for over 50% of web traffic, responsive design is no longer optional...',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      category: 'Web Development',
      author: 'Alex Johnson',
      date: '2024-03-05',
      readTime: '9 min read',
      tags: ['Responsive Design', 'Mobile First', 'CSS Grid', 'Performance']
    },
    {
      id: 6,
      title: 'The Power of Storytelling in Brand Videos',
      excerpt: 'How to craft compelling narratives that connect with your audience and build brand loyalty.',
      content: 'Storytelling is one of the most powerful tools in video marketing. It helps create emotional connections...',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop',
      category: 'Video Marketing',
      author: 'Sarah Davis',
      date: '2024-03-03',
      readTime: '6 min read',
      tags: ['Storytelling', 'Brand Video', 'Emotional Marketing', 'Audience Engagement']
    }
  ];

  const categories = ['All', 'Web Development', 'Video Marketing', 'Design', 'Digital Marketing'];

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ByteMatrix <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights, industry trends, and practical tips 
            for web development, video production, and digital marketing.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Featured <span className="text-gradient">Article</span>
            </h2>
          </div>
          
          <Card className="overflow-hidden bg-background border-border max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white">Featured</Badge>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button className="self-start bg-primary hover:bg-primary/90">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover actionable insights to grow your digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card key={post.id} className="card-hover overflow-hidden bg-background border-border h-full">
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      By {post.author}
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-primary/10 to-purple-600/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                Stay Updated with Our Newsletter
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get the latest insights, tips, and industry trends delivered directly to your inbox. 
                Join our community of digital professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's turn these insights into action. Contact us to discuss your project requirements.
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

export default Blog;
