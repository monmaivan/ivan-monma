
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Simplified Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/84f2ba39-df84-408e-810d-f99aeecbf7b8.png" 
                alt="Ivan Monma" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Olá, eu sou <span className="text-yellow-300">Ivan Monma</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
              Especialista em Gestão de Projetos e Transformação Digital
            </p>
            <div className="text-lg text-white/80 mb-8 max-w-4xl mx-auto space-y-3">
              <p>Transformo ideias em entregas concretas com agilidade, estratégia e foco em resultado.</p>
              <p>Conecto áreas técnicas e funcionais usando ferramentas como Jira e Confluence para organizar, simplificar e acelerar projetos que fazem sentido.</p>
            </div>
            
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3"
                onClick={() => scrollToSection('contato')}
              >
                Entre em Contato
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('contato')}
              className="text-white hover:bg-white/10"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
