import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { AnimatedTitle } from "@/components/ui/animated-title";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Using publicKey directly in send method

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      console.log('Starting email send...');
      const serviceId = 'service_h3y7bah';
      const templateId = 'template_07ze94f';
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Chandru',
        reply_to: formData.email,
      };

      console.log('Sending with params:', { serviceId, templateId, templateParams });
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        'CeHKnPEAB1JwErmoiOvQF' // Your public key
      );

      if (response.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. You'll receive a confirmation email shortly, and I'll get back to you soon!",
        });
        
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      value: "chandru2003113@gmail.com",
      link: "mailto:chandru2003113@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone", 
      value: "+91 8884167023",
      link: "tel:+918884167023"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Location",
      value: "Chennai, Tamil Nadu, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <AnimatedTitle gradient>Get In Touch</AnimatedTitle>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-muted-foreground"
            >
              Let's discuss your project or just say hello!
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's talk about your project</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a project in mind or just want to connect, feel free to reach out!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:transform hover:translate-x-2"
                  >
                    <div className="p-2 rounded-full bg-primary/10">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">Follow me on</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com/in/chandru-s-596195225" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit my LinkedIn profile"
                    className="p-3 rounded-full bg-card/30 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                  </a>
                  <a 
                    href="https://github.com/Chandru6607" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit my GitHub profile"
                    className="p-3 rounded-full bg-card/30 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background/50 border-primary/20 focus:border-primary/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background/50 border-primary/20 focus:border-primary/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background/50 border-primary/20 focus:border-primary/50 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;