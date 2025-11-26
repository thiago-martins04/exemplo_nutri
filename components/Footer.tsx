import React from 'react';
import { Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="text-primary-500">
              <Leaf size={24} />
            </div>
            <span className="font-serif text-xl font-semibold text-white">
              Dra. Sofia Mendes
            </span>
          </div>

          <div className="text-sm">
            &copy; {new Date().getFullYear()} NutriLife. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;