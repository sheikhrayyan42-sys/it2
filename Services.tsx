import React, { useEffect, useState } from 'react';
import { Code, Smartphone, Cloud, Database, Globe, Shield, Zap, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and technologies",
      features: ["React & Next.js", "Node.js Backend", "Responsive Design", "SEO Optimization"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment services",
      features: ["AWS/Azure/GCP", "DevOps & CI/CD", "Microservices", "Auto Scaling"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Database Design",
      description: "Efficient database architecture and optimization services",
      features: ["SQL & NoSQL", "Data Migration", "Performance Tuning", "Backup Solutions"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "E-Commerce Solutions",
      description: "Complete e-commerce platforms with payment integration",
      features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Analytics"],
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      features: ["Security Audits", "Penetration Testing", "SSL Certificates", "Data Encryption"],
      color: "from-red-500 to-orange-600"
    }
  ];

  const processes = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes and prototypes to visualize the solution"
    },
    {
      step: "03",
      title: "Development",
      description: "Building your solution using best practices and modern technologies"
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Rigorous testing to ensure quality and performance standards"
    },
    {
      step: "05",
      title: "Deployment",
      description: "Launching your solution with proper monitoring and support"
    },
    {
      step: "06",
      title: "Maintenance",
      description: "Ongoing support and updates to keep your solution running smoothly"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive IT solutions tailored to meet your business needs and drive digital transformation
            </p>
            <div className="flex justify-center">
              <img 
                src="/images/services_icons_1.jpeg" 
                alt="IT Services" 
                className="rounded-lg shadow-2xl max-w-2xl w-full animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-fade-in-up">
              What We Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              From concept to deployment, we provide end-to-end solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="glass neon-border hover:shadow-glow transition-all duration-300 animate-fade-in-up group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <Badge 
                        key={featureIndex} 
                        variant="secondary" 
                        className="mr-2 mb-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-fade-in-up">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              A systematic approach to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processes.map((process, index) => (
              <Card 
                key={index} 
                className="glass neon-border hover:shadow-glow transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-fade-in-up">
              Technologies We Use
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              Cutting-edge tools and frameworks to build robust solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React", "Node.js", "Python", "AWS", "Docker", "MongoDB",
              "TypeScript", "Next.js", "GraphQL", "Kubernetes", "PostgreSQL", "Redis"
            ].map((tech, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 animate-pulse-custom">
                  {tech.charAt(0)}
                </div>
                <p className="text-sm font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our services can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-animated bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg animate-glow"
              >
                <Settings className="mr-2 w-5 h-5" />
                Get Custom Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-animated border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
              >
                <Zap className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;