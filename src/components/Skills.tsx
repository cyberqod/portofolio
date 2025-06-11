
import React from 'react';
import { Shield, Network, Code, Database, Globe, Lock } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cybersécurité',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      borderColor: 'border-red-500/30',
      bgColor: 'bg-red-500/10',
      skills: [
        'Audit sécurité',
        'Analyse de vulnérabilités',
        'SIEM & SOC',
        'Sécurité réseau'
      ]
    },
    {
      title: 'Systèmes & Réseaux',
      icon: Network,
      color: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-500/30',
      bgColor: 'bg-green-500/10',
      skills: [
        'Administration Linux/Windows',
        'Virtualisation (VirtualBox, VMware, Docker)',
        'Configuration réseau',
        'Monitoring & supervision'
      ]
    },
    {
      title: 'Développement Web',
      icon: Code,
      color: 'from-blue-500 to-purple-500',
      borderColor: 'border-blue-500/30',
      bgColor: 'bg-blue-500/10',
      skills: [
        'React, Vue.js',
        'Node.js, Python, PHP',
        'Bases de données (SQL)',
        'CI/CD & Git'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Compétences
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`group p-6 rounded-2xl border ${category.borderColor} ${category.bgColor} backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors duration-300"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-600">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Niveau d'expertise</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 
                              ? `bg-gradient-to-r ${category.color}` 
                              : 'bg-gray-600'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
