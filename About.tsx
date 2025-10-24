import React, { useEffect, useState } from 'react';
import { Users, Target, Award, Lightbulb, Heart, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Quality",
      description: "Every project is crafted with attention to detail and commitment to excellence."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with our clients to understand their needs and exceed expectations."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Efficiency",
      description: "We deliver projects on time and within budget without compromising on quality."
    }
  ];

  const milestones = [
    { year: "2019", event: "Company Founded", description: "Started with a vision to transform digital experiences" },
    { year: "2020", event: "First Major Project", description: "Delivered our first enterprise-level solution" },
    { year: "2021", event: "Team Expansion", description: "Grew to a team of 10+ skilled developers" },
    { year: "2022", event: "50+ Projects", description: "Reached milestone of 50 successful projects" },
    { year: "2023", event: "Industry Recognition", description: "Received awards for innovation and excellence" },
    { year: "2024", event: "Global Reach", description: "Expanded services to international markets" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                About R.R Developers
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We are a passionate team of developers, designers, and innovators dedicated to creating 
                exceptional digital experiences. With years of expertise in cutting-edge technologies, 
                we transform complex challenges into elegant solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-animated bg-primary hover:bg-primary/90">
                  <Target className="mr-2 w-5 h-5" />
                  Our Mission
                </Button>
                <Button variant="outline" className="btn-animated border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Award className="mr-2 w-5 h-5" />
                  Our Achievements
                </Button>
              </div>
            </div>
            <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="relative">
                <img 
                  src="/images/team_images_1.jpeg" 
                  alt="R.R Developers Team" 
                  className="rounded-lg shadow-2xl animate-float"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-fade-in-up">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="glass neon-border hover:shadow-glow transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-fade-in-up">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up">
              Key milestones that shaped our growth and success
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>

            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-12 animate-fade-in-up ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="glass neon-border hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.event}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background animate-pulse-custom"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="glass neon-border hover:shadow-glow transition-all duration-300 animate-fade-in-left">
              <CardContent className="p-8">
                <div className="text-primary mb-4">
                  <Target className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Our Mission</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, 
                  enhance efficiency, and create meaningful digital experiences. We strive to be 
                  the trusted partner that transforms ideas into reality.
                </p>
              </CardContent>
            </Card>

            <Card className="glass neon-border hover:shadow-glow transition-all duration-300 animate-fade-in-right">
              <CardContent className="p-8">
                <div className="text-accent mb-4">
                  <Award className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Our Vision</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be a leading force in the digital transformation landscape, recognized for 
                  our innovation, quality, and commitment to excellence. We envision a future 
                  where technology seamlessly enhances human potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;