
import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Licence professionnelle en Securité informatique et Cybersécurité",
      institution: "Université de Kara",
      location: "Kara, Togo",
      period: "2024",
      description: "Spécialisation en sécurité offensive et défensive, cryptographie, analyse de malwares",
      highlights: ["Projet de fin d'études sur l'IA en cybersécurité"]
    },
    {
      degree: "Baccaloreat deuxième partie (BAC II)",
      institution: "Lycée Blitta Gare I",
      location: "Blitta, Togo", 
      period: "2019",
      description: "Formation complète en développement logiciel, réseaux et systèmes",
      highlights: ["Mention Passable"]
    }
  ];

  const certifications = [
    // { name: "CISSP", issuer: "ISC²", year: "2022" },
    // { name: "CEH", issuer: "EC-Council", year: "2021" },
    // { name: "CCNA", issuer: "Cisco", year: "2020" },
    // { name: "AWS Solutions Architect", issuer: "Amazon", year: "2022" }
  ];

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Parcours
            </span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formation */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <GraduationCap className="text-cyan-400" />
                Formation
              </h3>
              
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    className="group p-6 bg-slate-800/50 border border-cyan-500/20 rounded-xl hover:bg-slate-700/50 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-cyan-400 mb-2">{edu.degree}</h4>
                        <p className="text-lg text-white font-medium">{edu.institution}</p>
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{edu.description}</p>
                    
                    <div className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                          <span className="text-sm text-gray-400">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="text-cyan-400" />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <h4 className="font-bold text-white">{cert.name}</h4>
                    <p className="text-cyan-400 text-sm">{cert.issuer}</p>
                    <span className="text-xs text-gray-400">{cert.year}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-slate-800/30 border border-purple-500/20 rounded-xl">
                <h4 className="text-lg font-bold text-purple-400 mb-3">Formation Continue</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Toujours en quête de nouvelles compétences et certifications dans les domaines émergents.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['OSCP', 'Azure Security', 'Kubernetes'].map((future) => (
                    <span key={future} className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs">
                      En cours: {future}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
