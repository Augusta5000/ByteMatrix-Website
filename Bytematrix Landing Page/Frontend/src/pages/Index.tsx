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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-lime-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
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

      {/* Sections go here: Hero, About, Services, Portfolio, Contact, Testimonials */}
      {/* These will be added in next steps */}
    </div>
  );
};

export default Index;
