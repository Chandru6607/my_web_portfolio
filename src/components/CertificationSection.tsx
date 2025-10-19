import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink, Shield, Star, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedTitle } from "@/components/ui/animated-title";
import MatlabLogo from "../assets/company-logos/matlab.svg";
import NptelLogo from "../assets/company-logos/nptel.svg";
import AicteLogo from "../assets/company-logos/aicte.svg.svg";
import UiPathLogo from "../assets/company-logos/uipath.svg";
import UdemyLogo from "../assets/company-logos/udemy.svg";
import CourseraLogo from "../assets/company-logos/coursera.svg";
import SpringerLogo from "../assets/company-logos/springer.svg";
import NvidiaLogo from "../assets/company-logos/nvidia.svg";
import RapidminerLogo from "../assets/company-logos/rapidminer.svg";
import ScalerLogo from "../assets/company-logos/scaler.svg";
import OmniverseLogo from "../assets/company-logos/omniverse.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface Certificate {
  title: string;
  date: string;
  credentialId: string;
  description: string;
  skills: string[];
  verified: boolean;
  certificateUrl: string;
}

interface CertificationProvider {
  issuer: string;
  logo: string;
  bgColor?: string;
  certificates: Certificate[];
}

const CertificationSection = () => {
  const certifications: CertificationProvider[] = [
    // AICTE Certification
    {
      issuer: "AICTE  ",
      logo: AicteLogo,
      bgColor: "#1E88E5",  // A professional blue color
      certificates: [
        {
          title: "AWS AI and Machine Learning",
          date: "2024",
          credentialId: "AICTE-AWS-AIML-2024",
          description: "AICTE-AWS joint certification in Artificial Intelligence and Machine Learning",
          skills: ["AI", "Machine Learning", "AWS", "Cloud Computing"],
          verified: true,
          certificateUrl: "/certificates/AICTE-AWS-AIML.pdf"
        },
        {
          title: "AWS Data Engineering",
          date: "2024",
          credentialId: "AICTE-AWS-DE-2024",
          description: "AICTE-AWS joint certification in Data Engineering and Analytics",
          skills: ["Data Engineering", "AWS", "Big Data", "Analytics"],
          verified: true,
          certificateUrl: "/certificates/AICTE-AWS-DATAENGINEERING.pdf"
        },
        {
          title: "Google Android Development",
          date: "2024",
          credentialId: "AICTE-GOOGLE-ANDROID-DEV-2024",
          description: "AICTE-Google joint certification in Android Application Development",
          skills: ["Android", "Mobile Development", "Java", "Kotlin"],
          verified: true,
          certificateUrl: "/certificates/AICTE-Google-AndroidDev.pdf"
        }
      ]
    },
    // AI & Machine Learning Certifications
    {
      issuer: "NVIDIA",
      logo: NvidiaLogo,
      bgColor: "#76B900",
      certificates: [
        {
          title: "AI for Infrastructure and Operations Fundamentals",
          date: "2024",
          credentialId: "NVIDIA-AI-IOF-2024",
          description: "Mastery in AI Infrastructure and Operations",
          skills: ["AI", "IoT", "Deep Learning"],
          verified: true,
          certificateUrl: "./certificates/AI_IOF.pdf"
        },
        {
          title: "Jetson Nano Development",
          date: "2024",
          credentialId: "NVIDIA-JETSON-2024",
          description: "Embedded AI development with Jetson Nano platform",
          skills: ["Jetson", "Embedded AI", "Edge Computing"],
          verified: true,
          certificateUrl: "/certificates/Jetson_nano.pdf"
        },
        {
          title: "Introduction to Networking",
          date: "2024",
          credentialId: "NVIDIA-NET-2024",
          description: "Fundamentals of networking in AI and GPU systems",
          skills: ["Networking", "GPU Computing", "System Architecture"],
          verified: true,
          certificateUrl: "/certificates/intro_Networking.pdf"
        }
      ]
    },
    {
      issuer: "NVIDIA Omniverse",
      logo: OmniverseLogo,
      bgColor: "#76B900",
      certificates: [
        {
          title: "NVIDIA Omniverse Developer",
          date: "2024",
          credentialId: "NVIDIA-OD-2024-128",
          description: "Specialized certification in 3D collaboration and simulation platform development using NVIDIA Omniverse.",
          skills: ["Omniverse", "3D Development", "Simulation", "Collaboration"],
          verified: true,
          certificateUrl: "/certificates/nvidia-omniverse.pdf"
        }
      ]
    },
    {
      issuer: "MATLAB",
      logo: MatlabLogo,
      bgColor: "#E65100",
      certificates: [
        {
          title: "Deep Learning Onramp",
          date: "2024",
          credentialId: "MATLAB-DL-2024",
          description: "Deep learning fundamentals using MATLAB",
          skills: ["Deep Learning", "Neural Networks", "MATLAB"],
          verified: true,
          certificateUrl: "/certificates/Deep_learning_onramp.pdf"
        },
        {
          title: "Image Processing",
          date: "2024",
          credentialId: "MATLAB-IP-2024",
          description: "Advanced image processing techniques in MATLAB",
          skills: ["Image Processing", "Computer Vision", "MATLAB"],
          verified: true,
          certificateUrl: "/certificates/Image_processing.pdf"
        },
        {
          title: "Machine Learning Onramp",
          date: "2024",
          credentialId: "MATLAB-ML-2024",
          description: "Machine learning fundamentals with MATLAB",
          skills: ["Machine Learning", "Data Analysis", "MATLAB"],
          verified: true,
          certificateUrl: "/certificates/Machine_learning_onramp.pdf"
        },
        {
          title: "MATLAB Onramp",
          date: "2024",
          credentialId: "MATLAB-BASIC-2024",
          description: "Core MATLAB programming and tools",
          skills: ["MATLAB", "Programming", "Data Analysis"],
          verified: true,
          certificateUrl: "/certificates/Matlab_onramp.pdf"
        }
      ]
    },
    {
      issuer: "NPTEL",
      logo: NptelLogo,
      bgColor: "#2196F3",
      certificates: [
        {
          title: "Introduction to Machine Learning",
          date: "2024",
          credentialId: "NPTEL-ML-2024",
          description: "Comprehensive introduction to machine learning concepts",
          skills: ["Machine Learning", "AI", "Python"],
          verified: true,
          certificateUrl: "/certificates/Intro_ML.pdf"
        },
        {
          title: "Java Programming",
          date: "2024",
          credentialId: "NPTEL-JAVA-2024",
          description: "Advanced Java programming concepts and applications",
          skills: ["Java", "OOP", "Software Development"],
          verified: true,
          certificateUrl: "/certificates/Java_Programming.pdf"
        },
        {
          title: "Privacy and Security in Online Social Media",
          date: "2024",
          credentialId: "NPTEL-SEC-2024",
          description: "Understanding privacy and security in social media platforms",
          skills: ["Cybersecurity", "Privacy", "Social Media"],
          verified: true,
          certificateUrl: "/certificates/Privacy and Security in Online Social Media.pdf"
        }
      ]
    },
    {
      issuer: "UiPath",
      logo: UiPathLogo,
      bgColor: "#FA4616",
      certificates: [
        {
          title: "RPA Developer Foundation",
          date: "2024",
          credentialId: "UIPATH-RPA-2024",
          description: "Foundation in Robotic Process Automation development",
          skills: ["RPA", "Automation", "UiPath Studio"],
          verified: true,
          certificateUrl: "/certificates/Diploma_EAD.pdf"
        }
      ]
    },
    {
      issuer: "RapidMiner",
      logo: RapidminerLogo,
      bgColor: "#F7931E",
      certificates: [
        {
          title: "Application Use Case",
          date: "2024",
          credentialId: "RM-APP-2024",
          description: "Practical applications of RapidMiner in real-world scenarios",
          skills: ["Data Mining", "Analytics", "Machine Learning"],
          verified: true,
          certificateUrl: "/certificates/Application_Usecase.pdf"
        },
        {
          title: "Data Engineering",
          date: "2024",
          credentialId: "RM-DE-2024",
          description: "Data engineering practices and principles",
          skills: ["Data Engineering", "ETL", "Data Processing"],
          verified: true,
          certificateUrl: "/certificates/Data_Engineering.pdf"
        }
      ]
    },
    {
      issuer: "Scaler",
      logo: ScalerLogo,
      bgColor: "#000000",
      certificates: [
        {
          title: "Database Management Systems",
          date: "2024",
          credentialId: "SCALER-DBMS-2024",
          description: "Advanced database management concepts and practices",
          skills: ["DBMS", "SQL", "Database Design"],
          verified: true,
          certificateUrl: "/certificates/DBMS.pdf"
        }
      ]
    },
    {
      issuer: "Udemy",
      logo: UdemyLogo,
      bgColor: "#A435F0",
      certificates: [
        {
          title: "Python Zero to Master",
          date: "2024",
          credentialId: "UDEMY-PY-2024",
          description: "Comprehensive Python programming from basics to advanced",
          skills: ["Python", "Programming", "Software Development"],
          verified: true,
          certificateUrl: "/certificates/Python_Zero_Master.pdf"
        }
      ]
    },
    {
      issuer: "Coursera",
      logo: CourseraLogo,
      bgColor: "#0056D2",
      certificates: [
        {
          title: "Learning How to Learn",
          date: "2024",
          credentialId: "COURSERA-LHL-2024",
          description: "Meta-learning techniques and cognitive strategies",
          skills: ["Learning Techniques", "Productivity", "Study Skills"],
          verified: true,
          certificateUrl: "/certificates/Learn_How_to_Learn.pdf"
        }
      ]
    },
    {
      issuer: "Conference Publications",
      logo: SpringerLogo,
      bgColor: "#FF7F00",
      certificates: [
        {
          title: "Accurate Segmentation Using MLR and Predicting Herniation in Cervical Disc Using SVDA",
          date: "2024",
          credentialId: "CONF-2024-001",
          description: "Research paper on medical image analysis using machine learning",
          skills: ["Machine Learning", "Medical Imaging", "Research"],
          verified: true,
          certificateUrl: "/certificates/ACCURATE SEGMENTATION USING MLR AND PREDICTING HERNIATION IN CERVICAL DISC USING SVDA - Mr.S.Chandru.pdf"
        }
      ]
    }
  ];

  return (
    <section id="certifications" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <AnimatedTitle gradient>Certifications & Achievements</AnimatedTitle>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Professional certifications that validate my expertise across various technologies and domains
            </motion.p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((provider, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden">
                {/* Provider Logo */}
                <motion.div 
                  className="mb-4 relative w-16 h-16 rounded-full flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: provider.bgColor + '20' }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <img
                    src={provider.logo}
                    alt={`${provider.issuer} logo`}
                    className="w-12 h-12 object-contain"
                  />
                </motion.div>

                {/* Provider Name */}
                <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                  <Award className="w-4 h-4" />
                  {provider.issuer}
                </div>

                {/* Certificates DropdownMenu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="w-full text-left px-4 py-2 rounded-md hover:bg-primary/10 transition-colors flex items-center justify-between">
                      <span>View Certificates ({provider.certificates.length})</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-80">
                    {provider.certificates.map((cert, certIndex) => (
                      <DropdownMenuItem key={certIndex} className="flex flex-col items-start p-4">
                        {/* Certificate Title and Link */}
                        <div className="flex items-start justify-between w-full">
                          <h3 className="font-bold">
                            {cert.certificateUrl ? (
                              <button
                                onClick={() => window.open(cert.certificateUrl, '_blank')}
                                className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2 text-left"
                              >
                                {cert.title}
                                <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                              </button>
                            ) : (
                              cert.title
                            )}
                          </h3>
                          {cert.verified && (
                            <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                              <Shield className="w-3 h-3 text-green-400" />
                            </div>
                          )}
                        </div>

                        {/* Issue Date */}
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2">
                          <Calendar className="w-4 h-4" />
                          Issued: {cert.date}
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                          {cert.description}
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {cert.skills.map((skill) => (
                            <Badge 
                              key={skill} 
                              variant="secondary" 
                              className="bg-primary/10 text-primary border-primary/20 text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        {/* Credential ID */}
                        <div className="pt-2 mt-2 border-t border-primary/10 w-full">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              ID: {cert.credentialId}
                            </span>
                          </div>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </Card>
              </motion.div>
            ))}
          </div>

          {/* Achievement Stats */}
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              { number: "20+", text: "Total Certifications" },
              { number: "20+", text: "Major Tech Domains" },
              { number: "6+", text: "Industry Partners" },
              { number: "2025", text: "Latest Update" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.4 + (index * 0.1),
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.div 
                  className="text-3xl font-bold gradient-text mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-muted-foreground">{stat.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;