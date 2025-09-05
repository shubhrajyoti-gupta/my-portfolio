import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Notepad Desktop App",
      description: "Java-based desktop application built with Swing and JavaFX, featuring an intuitive UI and efficient performance for creating, editing, and managing notes.",
      technologies: ["Java", "Swing", "JavaFX", "Desktop App"],
      github: "https://github.com/shubhrajyoti-gupta/Notepad-desktop-app",
      features: [
        "Create and edit text files",
        "File management operations",
        "User-friendly Swing interface",
        "Cross-platform compatibility"
      ]
    },
    {
      title: "Quiz Application",
      description: "Interactive Java desktop app developed using Swing and JavaFX, offering a responsive UI and efficient performance for creating, managing, and taking quizzes.",
      technologies: ["Java", "Swing", "JavaFX", "Desktop App"],
      github: "https://github.com/shubhrajyoti-gupta/Quiz-Application",
      features: [
        "Interactive quiz interface",
        "Score tracking and management",
        "Question bank management",
        "Responsive design"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development skills and technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="gradient-card card-glow border-glow hover-glow animate-slide-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <Code2 className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-accent">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-accent">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-background/50 hover:bg-background/70 transition-colors border-glow"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button
                    onClick={() => window.open(project.github, "_blank")}
                    className="w-full glow group-hover:animate-glow-pulse"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Card className="gradient-card card-glow border-glow max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">More Projects Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                I'm continuously working on new projects and exploring different technologies. 
                Stay tuned for more exciting developments in web development, mobile apps, and more Java applications.
              </p>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  onClick={() => window.open("https://github.com/shubhrajyoti-gupta", "_blank")}
                  className="border-glow"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View All Repositories
                </Button>
                <Button
                  onClick={() => window.open("https://www.leetcode.com/shubhrajyoti-gupta", "_blank")}
                  className="glow"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  LeetCode Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;