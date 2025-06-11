
import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, Shield, Network, Code } from 'lucide-react';

const Experience = () => {
  const experiences = [
    // {
    //   title: "Expert en Cybersécurité Senior",
    //   company: "SecureTech Solutions",
    //   location: "Paris, France",
    //   period: "2022 - Présent",
    //   type: "CDI",
    //   category: "cybersecurity",
    //   description: "Responsable de la sécurité informatique pour des clients grands comptes. Direction d'équipes de pentesting et mise en place de stratégies de sécurité.",
    //   achievements: [
    //     "Réduction de 85% des incidents de sécurité chez nos clients",
    //     "Mise en place d'un SOC 24/7 pour 15 entreprises",
    //     "Formation de 25+ professionnels en cybersécurité",
    //     "Développement d'outils d'audit automatisés"
    //   ],
    //   technologies: ["SIEM", "Metasploit", "Burp Suite", "Nessus", "Wireshark", "Python"]
    // },
    // {
    //   title: "Ingénieur DevOps & Infrastructure",
    //   company: "CloudFirst Corp",
    //   location: "Lyon, France", 
    //   period: "2020 - 2022",
    //   type: "CDI",
    //   category: "systems",
    //   description: "Conception et déploiement d'infrastructures cloud scalables. Automatisation des processus CI/CD et administration des environnements de production.",
    //   achievements: [
    //     "Migration de 50+ applications vers AWS",
    //     "Réduction de 60% du temps de déploiement",
    //     "Mise en place de monitoring avancé (99.9% uptime)",
    //     "Optimisation des coûts cloud (-40%)"
    //   ],
    //   technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Ansible"]
    // },
    // {
    //   title: "Développeur Full-Stack",
    //   company: "InnovWeb Agency",
    //   location: "Marseille, France",
    //   period: "2018 - 2020", 
    //   type: "CDI",
    //   category: "development",
    //   description: "Développement d'applications web modernes pour des startups et PME. Création d'API robustes et d'interfaces utilisateur réactives.",
    //   achievements: [
    //     "Livraison de 20+ projets web complets",
    //     "Développement d'une plateforme e-commerce (10k+ utilisateurs)",
    //     "Amélioration des performances (temps de chargement -70%)",
    //     "Encadrement de 3 développeurs juniors"
    //   ],
    //   technologies: ["React", "Node.js", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
    // },
    // {
    //   title: "Consultant IT Junior",
    //   company: "TechConseil SARL",
    //   location: "Nice, France",
    //   period: "2017 - 2018",
    //   type: "Stage puis CDI",
    //   category: "systems",
    //   description: "Support technique et conseil en infrastructure IT pour PME. Installation et maintenance de réseaux d'entreprise.",
    //   achievements: [
    //     "Support de 30+ clients PME",
    //     "Déploiement de 10 infrastructures réseau",
    //     "Réduction de 50% des pannes système",
    //     "Formation utilisateurs et documentation"
    //   ],
    //   technologies: ["Windows Server", "VMware", "Cisco", "Active Directory", "Office 365"]
    // }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'cybersecurity': return Shield;
      case 'systems': return Network;
      case 'development': return Code;
      default: return Briefcase;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'cybersecurity': return 'from-red-500 to-orange-500';
      case 'systems': return 'from-green-500 to-emerald-500';
      case 'development': return 'from-blue-500 to-purple-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryBorder = (category: string) => {
    switch (category) {
      case 'cybersecurity': return 'border-red-500/30';
      case 'systems': return 'border-green-500/30';
      case 'development': return 'border-blue-500/30';
      default: return 'border-gray-500/30';
    }
  };

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Expériences
            </span>
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const CategoryIcon = getCategoryIcon(exp.category);
              
              return (
                <div
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="p-6 bg-slate-900/50 border ${getCategoryBorder(exp.category)} rounded-xl hover:bg-slate-700/50 transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(exp.category)}`}>
                            <CategoryIcon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        </div>
                        <p className="text-lg text-cyan-400 font-medium">{exp.company}</p>
                        <span className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs mt-2">
                          {exp.type}
                        </span>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Réalisations clés :</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getCategoryColor(exp.category)} mt-2`}></div>
                            <span className="text-sm text-gray-400">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Technologies utilisées :</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-800 border border-gray-600 rounded-full text-gray-300 text-xs hover:border-cyan-500/50 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Collaborons ensemble</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Fort de mes expériences variées, je suis prêt à relever de nouveaux défis 
                et à apporter mon expertise à votre projet.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Contactez-moi
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
