import React from 'react';
import { Award, BookOpen, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-2xl border-4 border-primary-50 group">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
                alt="Dra. Sofia Mendes" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-100 rounded-full -z-10"></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl"></div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Minha História</h2>
              <h3 className="font-serif text-3xl md:text-4xl text-gray-900 font-medium mb-6">
                Apaixonada por transformar vidas através da alimentação
              </h3>
            </div>

            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                Olá! Sou a Dra. Sofia Mendes. Minha jornada na nutrição começou quando percebi o poder transformador que os alimentos têm não apenas no nosso corpo, mas em nossa mente e emoções.
              </p>
              <p>
                Com mais de 10 anos de prática clínica, desenvolvi um método que foge das dietas restritivas tradicionais. Acredito na <strong>Nutrição Integrativa</strong>, onde olhamos para o paciente como um todo: rotina, preferências, histórico de saúde e objetivos pessoais.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary-50 p-2 rounded-lg text-primary-600 mt-1">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Especialista</h4>
                  <p className="text-sm text-gray-500">Pós-graduada em Nutrição Clínica e Esportiva pela USP.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary-50 p-2 rounded-lg text-primary-600 mt-1">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Empatia</h4>
                  <p className="text-sm text-gray-500">Atendimento humanizado focado nas suas necessidades reais.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary-50 p-2 rounded-lg text-primary-600 mt-1">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Ciência</h4>
                  <p className="text-sm text-gray-500">Protocolos baseados nas mais recentes evidências científicas.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex items-center gap-4 opacity-80">
              <div className="font-serif italic text-2xl text-primary-700">Sofia Mendes</div>
              <div className="h-px w-20 bg-primary-200"></div>
              <span className="text-xs text-gray-500 uppercase tracking-widest">CRN-3 12345</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;