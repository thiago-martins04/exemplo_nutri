import React from 'react';
import { Mail, MapPin, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-5/12 space-y-8">
            <div>
              <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Localização & Contato</h2>
              <h3 className="font-serif text-3xl md:text-4xl text-gray-900 font-medium mb-4">Venha fazer uma visita</h3>
              <p className="text-gray-600">Agende sua consulta pelos nossos canais de atendimento ou venha conhecer nosso espaço preparado para acolher você.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Consultório</h4>
                  <p className="text-gray-600">Av. Paulista, 1234 - Sala 501<br/>Bela Vista, São Paulo - SP</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600">contato@drasofiamendes.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">WhatsApp</h4>
                  <p className="text-gray-600">(11) 99999-8888</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <h5 className="font-bold text-gray-900 mb-4">Me siga nas redes</h5>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-800 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 min-h-[400px] lg:min-h-full">
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-lg border-4 border-gray-50 bg-gray-100 relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197586022396!2d-46.6565!3d-23.5635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1684422000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{border:0, minHeight: '400px'}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de localização do consultório"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;