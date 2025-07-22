import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-developer.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen section-hero relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Developer workspace"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/50 to-primary/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <div className="space-y-8">
            {/* Greeting */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-4 animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
              Hi there! I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
              <span className="text-gradient-primary animate-[glow-pulse_2s_ease-in-out_infinite]">Mishal Nadeem</span>
            </h1>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
              <span className="inline-block animate-[slide-in-right_0.8s_ease-out_0.6s_both]">Web Developer</span> 
              <span className="text-muted-foreground mx-2">&</span>
              <span className="inline-block animate-[slide-in-right_0.8s_ease-out_0.8s_both]">AI Enthusiast</span>
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in opacity-0 [animation-delay:1s] [animation-fill-mode:forwards]">
              Passionate about creating innovative web solutions using React, Tailwind CSS, 
              and AI technologies. I transform ideas into beautiful, functional applications 
              while exploring cutting-edge development techniques.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                variant="hero" 
                size="lg"
                onClick={scrollToProjects}
                className="animate-scale-in opacity-0 [animation-delay:1.2s] [animation-fill-mode:forwards] hover:scale-105 transition-transform duration-200"
              >
                View My Work
              </Button>
              <Button 
                variant="outline-hero" 
                size="lg"
                onClick={scrollToContact}
                className="animate-scale-in opacity-0 [animation-delay:1.4s] [animation-fill-mode:forwards] hover:scale-105 transition-transform duration-200"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-16">
              <a
                href="https://github.com/Mishal55"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 transform animate-fade-in opacity-0 [animation-delay:1.6s] [animation-fill-mode:forwards] hover:-translate-y-1"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mishal-nadeem/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 transform animate-fade-in opacity-0 [animation-delay:1.8s] [animation-fill-mode:forwards] hover:-translate-y-1"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:mishalnadeem1122@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 transform animate-fade-in opacity-0 [animation-delay:2s] [animation-fill-mode:forwards] hover:-translate-y-1"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
            <ArrowDown 
              size={32} 
              className="text-muted-foreground animate-glow-pulse cursor-pointer hover:text-primary transition-colors"
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;