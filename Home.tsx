import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Smartphone, Cloud, Database, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const features = [{
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Modern, responsive websites built with cutting-edge technologies"
  }, {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications"
  }, {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment services"
  }, {
    icon: <Database className="w-8 h-8" />,
    title: "Database Design",
    description: "Efficient database architecture and optimization"
  }];
  const stats = [{
    number: "100+",
    label: "Projects Completed"
  }, {
    number: "50+",
    label: "Happy Clients"
  }, {
    number: "5+",
    label: "Years Experience"
  }, {
    number: "24/7",
    label: "Support Available"
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'url(/images/hero_image_1.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-blue-500/20 rounded-full animate-float" style={{
          animationDelay: '2s'
        }}></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500/20 rounded-full animate-float" style={{
          animationDelay: '0.5s'
        }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">R.R Developers</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">Transforming Ideas into Digital Reality with Cutting-Edge Technology Solution</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="btn-animated bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="btn-animated border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-fade-in-up">
              Our Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              We specialize in delivering comprehensive IT solutions that drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => <Card key={index} className="glass neon-border hover:shadow-glow transition-all duration-300 animate-fade-in-up group" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => <div key={index} className="text-center animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 animate-pulse-custom">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-lg">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's collaborate to bring your vision to life with innovative technology solutions
            </p>
            <Button size="lg" className="btn-animated bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg animate-glow">
              <Users className="mr-2 w-5 h-5" />
              Start Collaboration
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;