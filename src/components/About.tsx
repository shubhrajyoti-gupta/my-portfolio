import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a strong foundation in Java and web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <Card className="gradient-card card-glow border-glow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-primary">Bachelor of Technology</h4>
                    <p className="text-muted-foreground">Electronics and Communication Engineering</p>
                    <p className="text-sm text-muted-foreground">Ministry of Technology (2022-2026)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">Senior Secondary</h4>
                    <p className="text-muted-foreground">Vivekananda Academy</p>
                    <p className="text-sm text-muted-foreground">Percentage: 78%</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">Secondary</h4>
                    <p className="text-muted-foreground">Aditya Birla Vani Bharati</p>
                    <p className="text-sm text-muted-foreground">Percentage: 87.85%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card card-glow border-glow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Location</h3>
                </div>
                <p className="text-muted-foreground">Kolkata, India</p>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="gradient-card card-glow border-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a dedicated Electronics and Communication Engineering student with a passion for 
                    software development. My journey in programming began with Java, where I've developed 
                    strong skills in building desktop applications and working with databases.
                  </p>
                  <p>
                    Through internships and projects, I've gained hands-on experience in software development, 
                    including Swing-based applications, JUnit testing, and database management. I'm also 
                    passionate about content writing and have completed several writing internships.
                  </p>
                  <p>
                    I actively participate in hackathons and coding competitions to enhance my problem-solving 
                    skills and stay updated with the latest technologies. My goal is to become a skilled 
                    full-stack developer while continuing to contribute to the tech community through content creation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;