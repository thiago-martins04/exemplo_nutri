import React from 'react';
import { Apple, Activity, Heart, Brain, Baby, Users } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Reeducação Alimentar",
    description: "Aprenda a fazer escolhas saudáveis e sustentáveis sem abrir mão do prazer de comer.",
    icon: "apple"
  },
  {
    title: "Nutrição Esportiva",
    description: "Planos otimizados para performance, ganho de massa muscular ou definição, alinhados aos seus treinos.",
    icon: "activity"
  },
  {
    title: "Emagrecimento Saudável",
    description: "Estratégias científicas para perda de peso consistente, focando na manutenção a longo prazo.",
    icon: "heart"
  },
  {
    title: "Nutrição Comportamental",
    description: "Trabalhamos a relação emocional com a comida, ansiedade e compulsão alimentar.",
    icon: "brain"
  },
  {
    title: "Saúde da Mulher",
    description: "Acompanhamento especializado para SOP, endometriose, menopausa e gestantes.",
    icon: "baby"
  },
  {
    title: "Atendimento Familiar",
    description: "Orientações para organizar a alimentação de toda a casa, desde crianças até idosos.",
    icon: "users"
  }
];

const IconMap: Record<string, React.FC<any>> = {
  apple: Apple,
  activity: Activity,
  heart: Heart,
  brain: Brain,
  baby: Baby,
  users: Users
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Minhas Especialidades</h2>
          <h3 className="font-serif text-3xl md:text-4xl text-gray-900 font-medium mb-6">Como posso ajudar você a atingir seus objetivos</h3>
          <p className="text-gray-600">Cada corpo é único. Por isso, ofereço um acompanhamento detalhado e exclusivo, respeitando sua individualidade biológica e estilo de vida.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = IconMap[service.icon];
            return (
              <div 
                key={index} 
                className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 font-serif">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;