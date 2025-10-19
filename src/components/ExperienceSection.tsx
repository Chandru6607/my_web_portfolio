import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedTitle } from "@/components/ui/animated-title";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Defence Research and Development Organisation (DRDO)",
      position: "Project Intern",
      duration: "Dec 2024 - Jan 2025",
      location: "Chennai,Avadi, Tamil Nadu, India",
      description: "Design of GUI for Operator Control Unit for Ammunition Autoloader. Developed a user-friendly interface using Qt6 and C++, enhancing the usability and functionality of the control unit. Collaborated with cross-functional teams to gather requirements and implement features that improved operational efficiency.",
      skills: ["Qt6", "SQL", "C++", "Git", "Agile Methodologies"],
      certificateUrl: "/certificates/drdo-internship.pdf"
    },
    {
      company: "GradTwin IT Solutions", 
      position: "Machine Learning Intern",
      duration: "Aug 2024 - Nov 2024",
      location: "Chennai,Sholinganallur, Tamil Nadu, India",
      description: "As an ML Intern I have successfully completed my project on Intelligent Ransomware Detection Framework Using Supervised Learning Techniques with Hybrid Feature Extraction and Dimensionality Reduction.",
      skills: ["Machine Learning", "CyberSecurity", "MongoDB", "Express.js", "HTML", "CSS", "Git"],
      certificateUrl: "/certificates/gradtwin-internship.pdf"
    },
    {
      company: "SkillVertex",
      position: "Marketing   Intern",
      duration: "Jul 2023 - Aug 2023",
      location: "Bengaluru, HSR Layout, Karnataka, India",
      description: "Contributed to lead generation, digital campaign outreach, and client engagement strategies. Promoted Skill Vertex’s upskilling programs through social media and direct outreach, helping increase visibility and enrollment. Gained hands-on experience in marketing funnels, communication, and customer acquisition.",
      skills: ["React", "JavaScript", "HTML", "CSS", "Bootstrap", "WordPress"],
      certificateUrl: "/certificates/skillvertex-internship.pdf"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <AnimatedTitle gradient>Work Experience</AnimatedTitle>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              My professional journey in software development
            </motion.p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 relative">
                  {/* Timeline dot */}
                  <motion.div 
                    className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                  />
                
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        <a 
                          href={exp.certificateUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2"
                        >
                          {exp.position}
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <Building className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 text-muted-foreground text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.2 + skillIndex * 0.1 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;