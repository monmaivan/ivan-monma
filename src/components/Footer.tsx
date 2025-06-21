
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo/Name */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-2">Ivan Monma</h3>
            <p className="text-gray-400">
              Desenvolvedor Full-Stack apaixonado por criar soluções inovadoras
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => document.getElementById('habilidades')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Habilidades
              </button>
              <button 
                onClick={() => document.getElementById('experiencia')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Experiência
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            <Button variant="ghost" size="sm" asChild className="text-gray-400 hover:text-white">
              <a href="https://www.linkedin.com/in/ivanmonma/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="text-gray-400 hover:text-white">
              <a href="https://github.com/ivanmonma" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="text-gray-400 hover:text-white">
              <a href="mailto:ivan.monma@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="text-center text-gray-400">
          <p className="flex items-center justify-center">
            Feito com <Heart className="h-4 w-4 mx-1 text-red-500" /> por Ivan Monma © {new Date().getFullYear()}
          </p>
          <p className="mt-2 text-sm">
            Desenvolvido com React, TypeScript e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
