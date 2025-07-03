import { Play, ArrowRight, Menu, X, Code, Video, Image, TrendingUp, Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true, offset: 100 });
  }, []);

  const services = [
    {
      icon: Code,
      image: "https://images.unsplash.com/photo-1585247226801-bc613c441316?fm=jpg&q=60&w=3000",
      title: "Web Development",
      description: "Build and customize your website with modern technologies to scale your business confidently.",
      color: "from-orange-400 to-lime-400"
    },
    {
      icon: Video,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Video Editing",
      description: "Professional video editing services to create engaging content that captures your audience.",
      color: "from-green-400 to-lime-400"
    },
    {
      icon: Image,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Thumbnail Design",
      description: "Eye-catching thumbnail designs that increase click-through rates and engagement.",
      color: "from-lime-400 to-green-500"
    },
    {
      icon: TrendingUp,
      image: "https://plus.unsplash.com/premium_photo-1661693870771-dbbd8b95b2b1?fm=jpg&q=60&w=3000",
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence and reach.",
      color: "from-green-400 to-lime-400"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "ByteMatrix transformed our online presence completely. Their web development team delivered beyond our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Content Creator",
      content: "The video editing quality is outstanding. They helped us increase our engagement by 300%.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content: "Professional thumbnail designs that actually convert. Our click-through rates doubled!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-lime-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo added here */}
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="Logo" className="h-10 w-10 object-contain" />
              <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                ByteMatrix
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 font-medium">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-green-600 font-medium">Portfolio</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium">Contact</a>
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">Get Started</button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-green-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
                <a href="#about" className="text-gray-700 hover:text-green-600 font-medium">About</a>
                <a href="#services" className="text-gray-700 hover:text-green-600 font-medium">Services</a>
                <a href="#portfolio" className="text-gray-700 hover:text-green-600 font-medium">Portfolio</a>
                <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium">Contact</a>
                <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 w-fit">Get Started</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            poster="https://images.pexels.com/photos/931887/pexels-photo-931887.jpeg">
            <source src="https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-green-400 via-lime-400 to-lime-500 bg-clip-text text-transparent animate-pulse">
              Digital Presence
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            We help businesses scale confidently with cutting-edge web development, 
            video editing, and digital marketing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3">
              Let's Work Together <ArrowRight size={24} />
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all border border-white/20 flex items-center gap-3">
              <Play size={24} />
              Watch Our Story
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-aos="fade-up" data-aos-delay="1000">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
            <div className="w-1 h-4 bg-white/70 rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-900 via-lime-700 to-green-900 bg-clip-text text-transparent mb-6">
              Our Services
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the modern world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/20" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-8`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-8">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">{service.description}</p>
                <button className="text-green-600 font-semibold hover:text-green-700 flex items-center gap-3 text-lg">
                  Learn more <ArrowRight size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
