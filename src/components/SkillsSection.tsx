
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js", level: 80 }
      ],
      color: "bg-blue-500"
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 75 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "REST APIs", level: 90 }
      ],
      color: "bg-green-500"
    },
    {
      title: "Ferramentas & DevOps",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "Jest", level: 80 },
        { name: "Webpack", level: 70 }
      ],
      color: "bg-purple-500"
    }
  ];

  const technologies = [
    "React", "Node.js", "TypeScript", "JavaScript", "Python", "PostgreSQL", 
    "MongoDB", "Express.js", "Next.js", "Tailwind CSS", "Docker", "AWS", 
    "Git", "REST APIs", "GraphQL", "Jest", "React Testing Library", "Webpack",
    "Vite", "Prisma", "Supabase", "Vercel", "Netlify"
  ];

  return (
    <section id="habilidades" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Habilidades Técnicas
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conjunto de tecnologias e ferramentas que domino para criar soluções completas e eficientes
          </p>
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Tecnologias que trabalho
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-3 py-1 text-sm hover:bg-primary hover:text-white transition-colors duration-200 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
