
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              À propos
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Passionné par la technologie depuis toujours, j'ai développé une expertise polyvalente 
                couvrant trois domaines clés de l'informatique moderne.
              </p>
              
              <p>
                Ma vision ? Créer un écosystème numérique sécurisé où la performance, 
                la robustesse et l'innovation se rejoignent. Chaque projet est une opportunité 
                d'explorer de nouvelles technologies et de repousser les limites du possible.
              </p>

              <p>
                Animé par la curiosité et l'amélioration continue, j'aime relever des défis 
                techniques complexes et partager mes connaissances avec la communauté.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['Innovation', 'Sécurité', 'Performance', 'Qualité'].map((trait) => (
                  <span 
                    key={trait}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-8 rounded-2xl border border-cyan-500/20">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-cyan-400 font-semibold">Toujours en apprentissage</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300"></div>
                    <span className="text-green-400 font-semibold">Orienté solutions</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                    <span className="text-purple-400 font-semibold">Esprit d'équipe</span>
                  </div>

                  <div className="pt-4 border-t border-gray-600">
                    <p className="text-gray-400 italic">
                      "La technologie au service de l'humain"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
