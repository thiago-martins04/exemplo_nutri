import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    name: "Mariana Costa",
    role: "Advogada",
    content: "A Dra. Sofia mudou minha vida! Perdi 12kg em 6 meses sem sofrimento. O plano alimentar se adaptou perfeitamente à minha rotina corrida de tribunal.",
    image: "https://picsum.photos/id/64/150/150"
  },
  {
    name: "Pedro Alves",
    role: "Triatleta Amador",
    content: "Minha performance na corrida melhorou absurdamente após ajustarmos a suplementação e o timing dos carboidratos. Profissional excelente!",
    image: "https://picsum.photos/id/91/150/150"
  },
  {
    name: "Carla & João",
    role: "Casal",
    content: "Aprendemos a cozinhar juntos e a fazer compras melhores. A reeducação alimentar uniu nossa família e trouxe muito mais saúde para dentro de casa.",
    image: "https://picsum.photos/id/338/150/150"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Histórias de Sucesso</h2>
          <h3 className="font-serif text-3xl md:text-4xl text-gray-900 font-medium">O que meus pacientes dizem</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative">
              <Quote className="absolute top-6 right-6 text-primary-100 rotate-180" size={48} />
              
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              
              <p className="text-gray-600 mb-8 italic leading-relaxed relative z-10">"{t.content}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary-100"
                />
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">{t.name}</h5>
                  <span className="text-xs text-primary-600 font-medium uppercase tracking-wide">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;