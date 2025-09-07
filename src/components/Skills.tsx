import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Wrench,
  BookOpen,
  Languages
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["C", "C++", "Java"],
      color: "text-primary"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL"],
      color: "text-accent"
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      skills: ["Swing", "JUnit", "Mockito", "Git", "IntelliJ IDEA", "Eclipse", "PyCharm", "VS Code"],
      color: "text-emerald-400"
    },
    {
      title: "Analytical Skills",
      icon: BookOpen,
      skills: ["DSA", "OOPS", "Problem Solving", "Software Testing", "Agile", "Waterfall", "SDLC"],
      color: "text-orange-400"
    },
    {
      title: "Design & Content Writing",
      icon: BookOpen,
      skills: ["Canva", "Figma", "Adobe XD", "UI/UX Design", "Medium", "Blog Writing"],
      color: "text-purple-400"
    },
    {
      title: "Languages",
      icon: Languages,
      skills: ["English", "Hindi", "Bengali"],
      color: "text-pink-400"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="gradient-card card-glow border-glow hover-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-background/50 mb-4 mx-auto glow`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-background/50 hover:bg-background/70 transition-colors duration-300 border-glow"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <Card className="gradient-card card-glow border-glow max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Soft Skills</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {["Teamwork", "Collaboration", "Vibe Coding", "Effective Communication", "Adaptability", "Time Management"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-background/50 hover:bg-background/70 transition-colors duration-300 border-glow text-lg px-4 py-2"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;