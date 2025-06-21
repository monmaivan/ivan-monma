
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve!",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ivan.monma@gmail.com",
      href: "mailto:ivan.monma@gmail.com"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (11) 99999-9999",
      href: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, SP - Brasil",
      href: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/ivanmonma",
      href: "https://www.linkedin.com/in/ivanmonma/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/ivanmonma",
      href: "https://github.com/ivanmonma"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interessado em trabalhar juntos? Vamos conversar sobre seu próximo projeto ou oportunidade de colaboração.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-gray-900">
                <Send className="mr-2 h-5 w-5" />
                Envie uma Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Assunto da mensagem"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Sua mensagem..."
                    rows={5}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              <p className="text-gray-600 mb-8">
                Estou sempre aberto a discutir novas oportunidades, projetos interessantes 
                ou simplesmente para trocar ideias sobre tecnologia e desenvolvimento.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4">
                    <a 
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center space-x-4 hover:text-primary transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{info.label}</div>
                        <div className="text-gray-600">{info.value}</div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="gradient-bg text-white">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold mb-3">Vamos trabalhar juntos!</h4>
                <p className="mb-4">
                  Estou disponível para novos projetos e oportunidades de colaboração.
                </p>
                <Button 
                  variant="secondary" 
                  asChild
                  className="bg-white text-gray-900 hover:bg-gray-100"
                >
                  <a href="https://www.linkedin.com/in/ivanmonma/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Conectar no LinkedIn
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
