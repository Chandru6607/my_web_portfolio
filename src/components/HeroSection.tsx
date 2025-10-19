import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import darkHeroBg from "@/assets/dark-hero-bg.jpg";
import profilePhoto from "@/assets/profile-pic.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(20, 20, 30, 0.8)), url(${darkHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/50 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-accent p-1"
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src={profilePhoto} 
                alt="Chandru S" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Main Content */}
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Chandru S</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light"
          >
            Full Stack Developer & Software Engineer
          </motion.h2>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative solutions and building scalable applications. 
            Experienced in modern web technologies and cloud platforms.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button variant="hero" size="lg" className="gap-2" asChild>
              <a href="mailto:chandru2003113@gmail.com">
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </Button>
            <Button variant="glass" size="lg" className="gap-2" asChild>
              <a href="/assets/chandru_resume.pdf" download>
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </Button>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-6 mb-16"
          >
            <a 
              href="https://linkedin.com/in/chandru-s-596195225" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn Profile"
              className="p-3 rounded-full bg-card/10 backdrop-blur-md border border-primary/20 hover:bg-card/20 hover:border-primary/40 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-primary" />
            </a>
            <a 
              href="https://github.com/Chandru6607" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub Profile"
              className="p-3 rounded-full bg-card/10 backdrop-blur-md border border-primary/20 hover:bg-card/20 hover:border-primary/40 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 text-primary" />
            </a>
            <a 
              href="mailto:chandru2003113@gmail.com"
              aria-label="Send Email"
              className="p-3 rounded-full bg-card/10 backdrop-blur-md border border-primary/20 hover:bg-card/20 hover:border-primary/40 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-primary" />
            </a>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;