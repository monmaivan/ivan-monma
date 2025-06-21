
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Desenvolvimento Full-Stack",
      description: "Experiência completa em frontend e backend com tecnologias modernas"
    },
    {
      icon: Lightbulb,
      title: "Soluções Inovadoras",
      description: "Criação de soluções criativas para problemas complexos"
    },
    {
      icon: Users,
      title: "Trabalho em Equipe",
      description: "Colaboração efetiva em projetos multi-disciplinares"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Foco em otimização e entrega de aplicações de alta performance"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Desenvolvedor apaixonado por tecnologia e inovação
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Sou um desenvolvedor full-stack com sólida experiência em React, Node.js e tecnologias modernas. 
              Tenho paixão por criar soluções digitais que fazem a diferença, sempre buscando as melhores 
              práticas e mantendo-me atualizado com as últimas tendências do mercado.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Minha jornada profissional é marcada pela busca constante por aprendizado e pela satisfação 
              em transformar ideias complexas em interfaces intuitivas e funcionais. Acredito que a 
              tecnologia deve servir às pessoas, e por isso coloco sempre o usuário no centro das soluções que desenvolvo.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Quando não estou codando, gosto de me manter atualizado sobre as últimas tendências em 
              desenvolvimento, contribuir para projetos open source e compartilhar conhecimento com a comunidade.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
