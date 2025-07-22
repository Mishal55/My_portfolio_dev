import { Code2, Lightbulb, Zap, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Frontend Development",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5", "CSS3"]
    },
    {
      category: "AI & Chatbots", 
      technologies: ["OpenAI API", "LangChain", "Conversational AI", "Natural Language Processing"]
    },
    {
      category: "Tools & Design",
      technologies: ["Figma to Code", "Git", "Responsive Design", "API Integration", "Free APIs"]
    }
  ];

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code Advocate",
      description: "I believe in writing maintainable, scalable code that stands the test of time."
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Creative thinking meets technical expertise to solve complex challenges."
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Building fast, efficient applications with optimal user experiences."
    },
    {
      icon: Heart,
      title: "Continuous Learner",
      description: "Always exploring new technologies and pushing the boundaries of what's possible."
    }
  ];

  return (
    <section id="about" className="py-20 section-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="text-gradient-accent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate developer who loves bringing ideas to life through code
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a web developer with a passion for creating innovative solutions that bridge 
                the gap between creativity and functionality. My journey began with curiosity about 
                how websites work, which evolved into a deep love for crafting digital experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in React development with Tailwind CSS, AI chatbot integration, 
                and transforming beautiful Figma designs into pixel-perfect, responsive websites. 
                My approach focuses on cost-effective solutions, leveraging free APIs and modern 
                development practices to deliver exceptional results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What drives me is the endless possibility to learn and experiment. Whether it's 
                cloning popular websites to understand their architecture or building AI-powered 
                applications, I'm always pushing myself to grow and innovate.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="card-elegant p-6">
                    <h4 className="text-lg font-semibold text-primary mb-3">
                      {skill.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-background-secondary text-foreground text-sm rounded-full border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-center mb-12">What Drives Me</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="card-elegant p-6 text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon size={32} className="text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;