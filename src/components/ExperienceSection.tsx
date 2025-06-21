
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Desenvolvedor Full-Stack Senior",
      company: "Tech Solutions Inc.",
      period: "Jan 2022 - Presente",
      location: "São Paulo, SP",
      description: [
        "Desenvolvimento de aplicações web complexas usando React, Node.js e TypeScript",
        "Liderança técnica de equipe de 5 desenvolvedores em projetos estratégicos",
        "Implementação de arquiteturas escaláveis e otimização de performance",
        "Mentoria de desenvolvedores júnior e estabelecimento de boas práticas"
      ],
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker"]
    },
    {
      title: "Desenvolvedor Full-Stack",
      company: "Digital Innovation Labs",
      period: "Mar 2020 - Dez 2021",
      location: "São Paulo, SP",
      description: [
        "Desenvolvimento de aplicações web responsivas e progressive web apps",
        "Integração com APIs REST e GraphQL para sistemas corporativos",
        "Colaboração em metodologias ágeis (Scrum) com times multidisciplinares",
        "Implementação de testes automatizados e CI/CD pipelines"
      ],
      technologies: ["React", "Express.js", "MongoDB", "GraphQL", "Jest", "GitLab CI"]
    },
    {
      title: "Desenvolvedor Frontend",
      company: "StartUp Ventures",
      period: "Jun 2018 - Feb 2020",
      location: "São Paulo, SP",
      description: [
        "Criação de interfaces modernas e intuitivas para aplicações web",
        "Desenvolvimento de componentes reutilizáveis e bibliotecas internas",
        "Otimização de performance e implementação de SEO técnico",
        "Colaboração direta com designers UX/UI para implementação pixel-perfect"
      ],
      technologies: ["React", "JavaScript", "SASS", "Webpack", "Figma", "Adobe XD"]
    }
  ];

  const education = [
    {
      title: "Bacharelado em Ciência da Computação",
      institution: "Universidade de São Paulo",
      period: "2014 - 2018",
      description: "Formação sólida em fundamentos da computação, algoritmos e estruturas de dados"
    },
    {
      title: "Especialização em Desenvolvimento Web",
      institution: "Digital House",
      period: "2019 - 2020",
      description: "Especialização em tecnologias modernas de desenvolvimento web full-stack"
    }
  ];

  return (
    <section id="experiencia" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experiência Profissional
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
            <Building className="mr-3 h-6 w-6 text-primary" />
            Experiência Profissional
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-2">{exp.title}</CardTitle>
                      <div className="flex items-center text-primary font-medium mb-2">
                        <Building className="mr-2 h-4 w-4" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar className="mr-2 h-4 w-4" />
                        {exp.period}
                      </div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Formação Acadêmica
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{edu.title}</h4>
                  <div className="text-primary font-medium mb-2">{edu.institution}</div>
                  <div className="text-sm text-gray-600 mb-3">{edu.period}</div>
                  <p className="text-gray-600 text-sm">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
