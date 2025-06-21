
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre Mim
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Minha Abordagem</h3>
              <p className="text-gray-600 leading-relaxed">
                Acredito que a gestão de projetos vai além de ferramentas e metodologias. 
                É sobre conectar pessoas, alinhar expectativas e transformar complexidade em simplicidade.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Meu Foco</h3>
              <p className="text-gray-600 leading-relaxed">
                Especializo-me em bridging entre áreas técnicas e de negócio, 
                garantindo que projetos entreguem valor real e façam sentido para todos os envolvidos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
