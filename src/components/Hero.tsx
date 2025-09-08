import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/shubhrajyoti-gupta",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/shubhrajyoti-gupta",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:shubhrajyotigupta2005@gmail.com",
      label: "Email",
    },
    {
      icon: FileText,
      href: "https://medium.com/@shubhrajyotigupta2005",
      label: "Medium",
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black stardust-bg relative overflow-hidden">
      {/* Stardust background */}
      <div className="absolute inset-0">
        <div className="stardust-particle stardust-1"></div>
        <div className="stardust-particle stardust-2"></div>
        <div className="stardust-particle stardust-3"></div>
        <div className="stardust-particle stardust-4"></div>
        <div className="stardust-particle stardust-5"></div>
        <div className="stardust-particle stardust-6"></div>
        <div className="stardust-particle stardust-7"></div>
        <div className="stardust-particle stardust-8"></div>
        <div className="stardust-particle stardust-9"></div>
        <div className="stardust-particle stardust-10"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-6 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent animate-glow-pulse"></div>
              <img
                src={profilePhoto}
                alt="Shubhrajyoti Gupta"
                className="relative z-10 w-full h-full rounded-full object-cover border-4 border-background"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-primary">Shubhrajyoti</span>{" "}
            <span className="text-primary">Gupta</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Electronics & Communication Engineer
          </p>
          
          <p className="text-lg md:text-xl text-accent mb-8">
            Java Developer | Full Stack Java Developer | Content Writer
          </p>
          
          <div className="mb-8">
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              B.Tech ECE student with strong Java skills, experience in Swing-based desktop apps, 
              JUnit testing, and database management. Passionate about software development and content writing.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="lg"
                className="hover-glow border-glow"
                onClick={() => window.open(link.href, "_blank")}
              >
                <link.icon className="w-5 h-5 mr-2" />
                {link.label}
              </Button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="space-x-4">
            <Button
              size="lg"
              className="glow text-lg px-8 py-3"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-glow text-lg px-8 py-3"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;