
import React from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gradient">Ivan Monma</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('habilidades')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Habilidades
            </button>
            <button 
              onClick={() => scrollToSection('experiencia')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Experiência
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://www.linkedin.com/in/ivanmonma/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/ivanmonma" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:ivan.monma@gmail.com">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left py-2 text-gray-700 hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('habilidades')}
                className="text-left py-2 text-gray-700 hover:text-primary transition-colors"
              >
                Habilidades
              </button>
              <button 
                onClick={() => scrollToSection('experiencia')}
                className="text-left py-2 text-gray-700 hover:text-primary transition-colors"
              >
                Experiência
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left py-2 text-gray-700 hover:text-primary transition-colors"
              >
                Contato
              </button>
              <div className="flex space-x-4 pt-2">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://www.linkedin.com/in/ivanmonma/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com/ivanmonma" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="mailto:ivan.monma@gmail.com">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
