
import React from 'react';
import { Code, Shield, Network } from 'lucide-react';
import id from "@/assets/imgs/pp.png";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background tech pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 border border-green-400 rounded-lg rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-purple-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 py-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Left content */}
          <div className="lg:w-1/2 text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  KEMELA
                </span>
                <br />
                <span className="text-white">Essozolim Léonardo</span>
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-cyan-300 font-light">
                Professionnel de l'Informatique
              </h2>
              
              <div className="flex flex-wrap gap-4 text-sm lg:text-base">
                <span className="flex items-center gap-2 bg-cyan-500/20 px-4 py-2 rounded-full border border-cyan-500/30">
                  <Shield className="w-4 h-4" />
                  Cybersécurité
                </span>
                <span className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full border border-green-500/30">
                  <Network className="w-4 h-4" />
                  Systèmes & Réseaux
                </span>
                <span className="flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30">
                  <Code className="w-4 h-4" />
                  Développement Web
                </span>
              </div>
            </div>

            <p className="text-2xl lg:text-3xl font-light text-gray-300 leading-relaxed">
              "Je développe, je déploie, Je sécurise."
            </p>

            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Voir mes projets
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Me contacter
              </button>
            </div>
          </div>

          {/* Right content - Profile image placeholder */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-16 lg:mt-0 animate-fade-in delay-500">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full flex items-center justify-center border border-cyan-400/30">
                <div className="w-72 h-72 lg:w-88 lg:h-88 bg-gradient-to-br from-slate-800 to-slate-700 rounded-full flex items-center justify-center">
                  <img className='w-full rounded-full object-cover' src={id} alt="image"/>
                  {/* <span className="text-6xl lg:text-8xl text-cyan-400">👨‍💻</span> */}
                </div>
              </div>
              {/* Floating icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center animate-bounce">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center animate-bounce delay-300">
                <Code className="w-8 h-8 text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




