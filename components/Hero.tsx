import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary-50">
      <div className="absolute inset-0 z-0">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-12 translate-x-20 opacity-50 hidden lg:block"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-secondary-200 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 bg-white border border-primary-200 rounded-full shadow-sm mb-2">
            <span className="text-primary-800 text-xs font-bold tracking-wider uppercase">Nutrição Clínica & Esportiva</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
            Redescubra o prazer de viver <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500 italic">saudável</span>.
          </h1>
          
          <p className="text-lg text-gray-600 md:max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Uma abordagem personalizada que une ciência e comportamento para transformar sua relação com a comida, sem dietas restritivas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-all shadow-lg shadow-primary-200 flex items-center justify-center gap-2"
            >
              Comece sua jornada <ArrowRight size={18} />
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-medium hover:border-primary-300 hover:text-primary-700 transition-all flex items-center justify-center"
            >
              Conheça meus métodos
            </a>
          </div>

          <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 opacity-80">
            <div>
              <p className="text-3xl font-bold text-gray-900">10+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Anos de Experiência</p>
            </div>
            <div className="w-px h-10 bg-gray-300"></div>
            <div>
              <p className="text-3xl font-bold text-gray-900">2k+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Pacientes Atendidos</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop" 
              alt="Alimentação Saudável e Nutritiva" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Decorative floating card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 max-w-xs hidden md:block">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <Leaf size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Plano 100% Personalizado</p>
                <p className="text-xs text-gray-500">Adequado à sua rotina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;