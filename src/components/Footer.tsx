import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card/30 backdrop-blur-sm border-t border-primary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">Chandru S</h3>
              <p className="text-muted-foreground">
                Full Stack Developer passionate about creating innovative solutions and building scalable applications.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Experience", "Certifications", "Projects", "Contact"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Get in Touch</h4>
              <div className="space-y-2">
                <a 
                  href="mailto:chandru2003113@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  chandru2003113@gmail.com
                </a>
                <p className="text-muted-foreground">Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://linkedin.com/in/chandru-s-596195225" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/30 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
            <a 
              href="https://github.com/Chandru6607" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/30 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5 text-primary" />
            </a>
            <a 
              href="mailto:chandru2003113@gmail.com"
              className="p-3 rounded-full bg-card/30 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5 text-primary" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> by Chandru S
            </p>
            <p className="mt-2 text-sm">
              © {new Date().getFullYear()} Chandru S. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;