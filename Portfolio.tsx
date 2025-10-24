import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Calendar, Users, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ['All', 'Web Development', 'Mobile Apps', 'E-Commerce', 'Cloud Solutions'];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with advanced features including real-time inventory, payment processing, and analytics dashboard.",
      image: "/images/portfolio_projects_1.png",
      category: "E-Commerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      duration: "3 months",
      team: "5 developers",
      rating: 5,
      features: ["Payment Integration", "Inventory Management", "Admin Dashboard", "Mobile Responsive"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform for patient management, appointment scheduling, and medical records.",
      image: "/images/portfolio_projects_2.png",
      category: "Web Development",
      technologies: ["Next.js", "PostgreSQL", "AWS", "TypeScript"],
      duration: "4 months",
      team: "6 developers",
      rating: 5,
      features: ["Patient Portal", "Appointment System", "Medical Records", "Telemedicine"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Financial Dashboard",
      description: "Real-time financial analytics dashboard with advanced charting and reporting capabilities.",
      image: "/images/portfolio_projects_3.png",
      category: "Web Development",
      technologies: ["React", "D3.js", "Python", "Redis"],
      duration: "2 months",
      team: "4 developers",
      rating: 4,
      features: ["Real-time Data", "Interactive Charts", "Custom Reports", "Data Export"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      image: "/images/hero_image_2.jpeg",
      category: "Mobile Apps",
      technologies: ["React Native", "Node.js", "MongoDB", "JWT"],
      duration: "5 months",
      team: "7 developers",
      rating: 5,
      features: ["Biometric Auth", "Real-time Transactions", "Bill Payments", "Investment Tracking"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Cloud Infrastructure",
      description: "Scalable cloud infrastructure setup with auto-scaling, monitoring, and disaster recovery.",
      image: "/images/hero_image_3.jpeg",
      category: "Cloud Solutions",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      duration: "6 months",
      team: "3 developers",
      rating: 5,
      features: ["Auto Scaling", "Load Balancing", "Monitoring", "Backup Solutions"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Social Media Platform",
      description: "Modern social media platform with real-time messaging, content sharing, and community features.",
      image: "/images/services_icons_2.jpeg",
      category: "Web Development",
      technologies: ["React", "Socket.io", "MongoDB", "Redis"],
      duration: "8 months",
      team: "8 developers",
      rating: 4,
      features: ["Real-time Chat", "Content Sharing", "Community Groups", "Live Streaming"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { number: "100+", label: "Projects Completed", icon: "🚀" },
    { number: "50+", label: "Happy Clients", icon: "😊" },
    { number: "99%", label: "Success Rate", icon: "✅" },
    { number: "24/7", label: "Support", icon: "🛠️" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Showcasing our expertise through successful projects that have transformed businesses and delighted clients
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`btn-animated ${
                  selectedCategory === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="glass neon-border hover:shadow-glow transition-all duration-300 animate-fade-in-up group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {project.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                      <Users className="w-4 h-4 ml-2" />
                      <span>{project.team}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-sm">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="btn-animated bg-primary hover:bg-primary/90 flex-1"
                    >
                      View Details <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-fade-in-up">
              Client Testimonials
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              What our clients say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "TechCorp Inc.",
                testimonial: "R.R Developers delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is outstanding.",
                rating: 5
              },
              {
                name: "Michael Chen",
                company: "HealthTech Solutions",
                testimonial: "The healthcare management system they built for us has streamlined our operations significantly. Highly professional team with great communication.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                company: "FinanceFlow",
                testimonial: "Our financial dashboard is now the centerpiece of our operations. The real-time analytics have transformed how we make business decisions.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card 
                key={index} 
                className="glass neon-border hover:shadow-glow transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.testimonial}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create something amazing together. Contact us to discuss your next project.
            </p>
            <Button 
              size="lg" 
              className="btn-animated bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg animate-glow"
            >
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;