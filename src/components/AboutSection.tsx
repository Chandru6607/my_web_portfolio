import { Card } from "@/components/ui/card";
import { 
  Code, 
  Globe, 
  Database, 
  Smartphone, 
  Cpu, 
  Palette, 
  Layers3, 
  Microchip 
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedTitle } from "@/components/ui/animated-title";

const AboutSection = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Frontend Development",
      description: "Building responsive web interfaces with React, TypeScript, and modern CSS frameworks"
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Backend Development", 
      description: "Creating scalable server solutions with Node.js, Python, and SQL/NoSQL databases"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Web Technologies",
      description: "Modern web architectures using REST APIs, GraphQL, and microservices"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Mobile Development",
      description: "Cross-platform mobile apps with React Native and Progressive Web Apps"
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Robotics & AI",
      description: "ROS2, Gazebo simulation, Computer Vision, and autonomous systems"
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Graphics Design",
      description: "Creative design with Adobe Suite, Figma, and 3D modeling tools"
    },
    {
      icon: <Layers3 className="w-8 h-8 text-primary" />,
      title: "NVIDIA Omniverse",
      description: "3D collaboration, simulation, and development with Omniverse platforms"
    },
    {
      icon: <Microchip className="w-8 h-8 text-primary" />,
      title: "Embedded Systems",
      description: "IoT development with Arduino, Raspberry Pi, and low-level programming"
    }
  ];

  return (
    <div id="about" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <AnimatedTitle gradient>About Me</AnimatedTitle>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Hi, I'm Chandru S, a passionate AI/ML Engineer and CSE student at SRMIST. I love building smart, real-time solutions using Computer Vision, Robotics (ROS, Gazebo), and Machine Learning. With a creative touch in frontend development and a strong research background, I enjoy turning ideas into impactful tech.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Description */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <div className="relative pl-8 mb-8 border-l-2 border-primary/20">
                {[
                  {
                    year: "2023",
                    title: "Started AI/ML Journey",
                    description: "Began exploring machine learning and computer vision at SRMIST"
                  },
                  {
                    year: "2024",
                    title: "Research & Innovation",
                    description: "Published research paper at Springer ICICC 2024, developed YOLO-based systems"
                  },
                  {
                    year: "2024",
                    title: "Tech Summit Speaker",
                    description: "Presented at IRIS 2024, focusing on robotics and AI applications"
                  },
                  {
                    year: "2025",
                    title: "Innovation in Healthcare",
                    description: "Developed ML-powered music therapy applications"
                  }
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    className="mb-6 relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <motion.div
                      className="absolute -left-[2.5rem] w-5 h-5 rounded-full bg-primary"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <span className="text-sm text-primary font-medium">{event.year}</span>
                    <h4 className="text-lg font-semibold mt-1">{event.title}</h4>
                    <p className="text-muted-foreground">{event.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.p 
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                I'm passionate about clean code, best practices, and continuous learning. I enjoy tackling 
                complex problems and turning ideas into impactful solutions through innovative technology.
              </motion.p>
              
              <motion.div className="flex flex-wrap gap-3 mt-6">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Node.js",
                  "Python",
                  "PostgreSQL",
                  "MongoDB",
                  "AWS",
                  "Robotics",
                  "Arduino",
                  "Adobe Creative Suite",
                  "NVIDIA Omniverse",
                  "Embedded C",
                  "IoT"
                ].map((tech) => (
                  <motion.span 
                    key={tech}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <motion.div 
                        className="p-3 rounded-full bg-primary/10"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <h4 className="font-semibold text-lg">{skill.title}</h4>
                      <p className="text-muted-foreground text-sm">{skill.description}</p>
                      <motion.div 
                        className="w-full h-1 bg-primary/10 rounded-full mt-2 overflow-hidden"
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                      >
                        <motion.div 
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${85 + (index % 3) * 5}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 1, ease: "easeOut" }}
                        />
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;