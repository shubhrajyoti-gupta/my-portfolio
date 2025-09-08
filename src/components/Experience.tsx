import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, Award, Eye, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Java Developer Intern",
      company: "Pinnacle Labs Pvt Ltd",
      duration: "07/2025 - 08/2025",
      description: "Designed and implemented 3+ Java-based applications using Swing and core Java concepts, utilizing JavaFX for unit testing, ensuring code quality and performance.",
      certificate: "https://drive.google.com/file/d/1oq6QB_P3TZVgH9V8eXDMdCS7hI5_iWSu/view?usp=drive_link"
    },
    {
      title: "Java Developer Intern",
      company: "CodTech IT Solutions",
      duration: "08/2025 - 09/2025",
      description: "Developed Java-based applications and enhanced programming skills through hands-on projects, focusing on core Java concepts, object-oriented programming, and software development best practices.",
      certificate: "https://drive.google.com/file/d/1eaM_2aMaVJRFgF29vJ3FERpS5JmrQGZd/view?usp=drive_link"
    }
  ];

  const otherCertifications = [
    {
      title: "Salesforce Trainee Virtual Internship",
      issuer: "Salesforce Trailhead",
      certificate: "https://drive.google.com/file/d/1YgjLMnfTT95ANSF-od5-w9Ktv9lmJ_yu/view?usp=drive_link"
    },
    {
      title: "Metro Railways Training",
      issuer: "Metro Railways",
      certificate: "https://drive.google.com/file/d/1gYowBYw6jX_Q7mo_nzublpj6QLztfjX6/view?usp=drive_link"
    },
    {
      title: "Java Courses Certificate",
      issuer: "Professional Training",
      certificate: "https://drive.google.com/file/d/1CQ_5bI7vWBuX1SwoOLw_abj8myrKamt4/view?usp=drive_link"
    },
    {
      title: "Java Basic Certificate",
      issuer: "HackerRank",
      certificate: "https://drive.google.com/file/d/1axSiAOadh4DTYhPGDZ0AghHCdlNN_Ley/view?usp=drive_link"
    },
    {
      title: "Communication Certificate",
      issuer: "TestDome",
      certificate: "https://drive.google.com/file/d/1mjEhe3vSs8P3xGT9C69nr7Lv6jNDnfjf/view?usp=drive_link"
    },
    {
      title: "Accenture Software Development Certificate",
      issuer: "Accenture",
      certificate: "https://drive.google.com/file/d/1ch4U2X_tIrMMzqcKLnX2tBxFCSNJQqn3/view?usp=drive_link"
    }
  ];

  const accomplishments = [
    {
      title: "Earth5R Content Writing Internship Selection",
      description: "Selected for content writing internship program",
      certificate: "https://drive.google.com/file/d/1m0-w6MMjtvNgp2oUSF0K8URTod4pY2D-/view?usp=drive_link"
    },
    {
      title: "InAmigos Blog Writing Internship Selection",
      description: "Selected for blog writing internship program",
      certificate: "https://drive.google.com/file/d/1GaH2uXRLxUz4RDq24Zp5qU_9wm6IoZpT/view?usp=drive_link"
    },
    {
      title: "Marpu Foundations Content Writing Certificate",
      description: "Completed content writing program",
      certificate: "https://drive.google.com/file/d/1f--Ahk_ATdgA7sgk691yBI00i3mbD3hw/view?usp=drive_link"
    }
  ];

  const hackathons = [
    {
      title: "Smart India Hackathon (SIH) 2023",
      description: "Participated in national-level hackathon",
      certificate: "https://drive.google.com/file/d/1V719muvPki82-CN2kEFLBAY89I9vRLpm/view?usp=drive_link"
    },
    {
      title: "Bharatiya Antarishkh Hackathon",
      description: "Space technology hackathon participant",
      certificate: "https://drive.google.com/file/d/1SSnwVQ6GJ5ReL6KKk93T0MetjcBuVnD1/view?usp=drive_link"
    },
    {
      title: "UI/UX Design Contest",
      description: "Design competition participant",
      certificate: "https://drive.google.com/file/d/1HH396LmifjZQsmC4S8leKopsT8TqGpSD/view?usp=drive_link"
    },
    {
      title: "Open Source Contest",
      description: "Open source development competition",
      certificate: "https://drive.google.com/file/d/1rgiwm1Z581AJdJm1dXO1soAWuWo7UD2e/view?usp=drive_link"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional experience, certifications, and accomplishments in my journey
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Professional Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="gradient-card card-glow border-glow hover-glow animate-slide-up">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <p className="text-accent font-medium">{exp.company}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full border-glow">
                        <Eye className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>{exp.title} - Certificate</DialogTitle>
                      </DialogHeader>
                      <div className="text-center space-y-4">
                        <p className="text-muted-foreground">Certificate from {exp.company}</p>
                        <Button
                          onClick={() => window.open(exp.certificate, "_blank")}
                          className="glow"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Open Certificate
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Professional Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {otherCertifications.map((cert, index) => (
              <Card key={index} className="gradient-card card-glow border-glow hover-glow animate-slide-up">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-glow"
                      onClick={() => window.open(cert.certificate, "_blank")}
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Accomplishments */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Certificates of Accomplishment</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {accomplishments.map((acc, index) => (
              <Card key={index} className="gradient-card card-glow border-glow hover-glow animate-slide-up">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-3 bg-accent/20 text-accent">Content Writing</Badge>
                    <h4 className="font-semibold mb-2">{acc.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{acc.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-glow"
                      onClick={() => window.open(acc.certificate, "_blank")}
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Hackathons */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Hackathons & Competitions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hackathons.map((hack, index) => (
              <Card key={index} className="gradient-card card-glow border-glow hover-glow animate-slide-up">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-3 bg-primary/20 text-primary">Hackathon</Badge>
                    <h4 className="font-semibold mb-2">{hack.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{hack.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-glow"
                      onClick={() => window.open(hack.certificate, "_blank")}
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
