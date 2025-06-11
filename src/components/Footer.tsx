
import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="text-2xl font-bold text-white mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                KEMELA Essozolim Léonardo
              </span>
            </div>
            <p className="text-gray-400">Professionnel de l'Informatique</p>
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Développé par</span>
            <Code className="w-4 h-4 text-cyan-400" />
            <span>© 2024 KEMELA Essozolim Léonardo. Tous droits réservés.</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              Mentions légales
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              Plan du site
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
