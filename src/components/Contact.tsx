import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone, FileText } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shubhrajyotigupta2005@gmail.com",
      href: "mailto:shubhrajyotigupta2005@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 74399 10244",
      href: "tel:+917439910244",
      color: "text-accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kolkata, India",
      href: "#",
      color: "text-emerald-400"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shubhrajyoti-gupta",
      description: "Professional networking and career updates"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/shubhrajyoti-gupta",
      description: "Code repositories and open source contributions"
    },
    {
      icon: FileText,
      label: "Medium",
      href: "https://medium.com/@shubhrajyotigupta2005",
      description: "Technical articles and content writing"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a conversation about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <Card className="gradient-card card-glow border-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className={`p-3 rounded-lg bg-background/50 group-hover:glow transition-all duration-300`}>
                      <contact.icon className={`w-6 h-6 ${contact.color}`} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{contact.label}</p>
                      <a
                        href={contact.href}
                        className={`${contact.color} hover:underline transition-colors`}
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="gradient-card card-glow border-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Why Connect With Me?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p><strong className="text-foreground">Collaboration:</strong> Open to working on interesting projects and contributing to open source.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <p><strong className="text-foreground">Learning:</strong> Always eager to learn new technologies and share knowledge.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                    <p><strong className="text-foreground">Opportunities:</strong> Seeking internships and entry-level positions in software development.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Links & Quick Actions */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="gradient-card card-glow border-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Connect on Social Platforms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link, index) => (
                  <div key={index} className="group">
                    <Button
                      variant="outline"
                      className="w-full justify-start h-auto p-4 border-glow hover-glow"
                      onClick={() => window.open(link.href, "_blank")}
                    >
                      <link.icon className="w-6 h-6 mr-4 text-primary" />
                      <div className="text-left">
                        <p className="font-semibold">{link.label}</p>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="gradient-card card-glow border-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className="w-full glow text-lg py-6"
                  onClick={() => window.open("mailto:shubhrajyotigupta2005@gmail.com", "_blank")}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="border-glow"
                    onClick={() => window.open("https://www.linkedin.com/in/shubhrajyoti-gupta", "_blank")}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    className="border-glow"
                    onClick={() => window.open("https://github.com/shubhrajyoti-gupta", "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Resume/CV Section */}
            <Card className="gradient-card card-glow border-glow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3 text-primary">Interested in my full profile?</h3>
                <p className="text-muted-foreground mb-4">
                  Download my resume for detailed information about my experience, skills, and achievements.
                </p>
                <Button 
                  variant="outline" 
                  className="border-glow"
                  onClick={() => window.open("https://drive.google.com/file/d/1fmUdUHBOqJUlT3iDCHSsDz89mTeEwSed/view?usp=drive_link", "_blank")}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Card className="gradient-card card-glow border-glow max-w-2xl mx-auto">
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." 
                <br />
                <span className="text-primary">- Patrick McKenzie</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;