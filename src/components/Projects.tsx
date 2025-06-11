
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    // {
    //   title: 'SecureAuth Platform',
    //   category: 'Cybersécurité',
    //   description: 'Plateforme d\'authentification sécurisée avec 2FA et détection d\'intrusion en temps réel.',
    //   image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop',
    //   tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
    //   links: {
    //     demo: '#',
    //     github: '#'
    //   },
    //   color: 'from-red-500/20 to-orange-500/20',
    //   borderColor: 'border-red-500/30'
    // },
    // {
    //   title: 'Network Monitor Pro',
    //   category: 'Systèmes & Réseaux',
    //   description: 'Solution de monitoring réseau avec alertes intelligentes et visualisation des performances.',
    //   image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
    //   tech: ['React.js', 'TypeScript', 'shadcn-ui', 'TailwindCSS'],
    //   links: {
    //     demo: '#',
    //     github: '#'
    //   },
    //   color: 'from-green-500/20 to-emerald-500/20',
    //   borderColor: 'border-green-500/30'
    // },
    // {
    //   title: 'Site de Trading',
    //   category: 'Développement Web',
    //   description: 'Site web vitrine pour un professionnelle dans le domaine du trading.',
    //   image: 'https://bagoudjaretrading3-0.vercel.app',
    //   tech: ['React.js', 'TypeScript', 'shadcn-ui', 'TailwindCSS'],
    //   links: {
    //     demo: 'https://bagoudjaretrading3-0.vercel.app',
    //     github: '#'
    //   },
    //   color: 'from-blue-500/20 to-purple-500/20',
    //   borderColor: 'border-blue-500/30'
    // },
    // {
    //   title: 'Cloud Infrastructure Automation',
    //   category: 'Systèmes & Réseaux',
    //   description: 'Scripts d\'automatisation pour déploiement d\'infrastructure cloud sécurisée.',
    //   image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop',
    //   tech: ['Terraform', 'Ansible', 'AWS', 'Kubernetes'],
    //   links: {
    //     demo: '#',
    //     github: '#'
    //   },
    //   color: 'from-purple-500/20 to-pink-500/20',
    //   borderColor: 'border-purple-500/30'
    // }
  ];

  const filters = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'Cybersécurité', label: 'Cybersécurité' },
    { id: 'Systèmes & Réseaux', label: 'Systèmes & Réseaux' },
    { id: 'Développement Web', label: 'Développement Web' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Projets Réalisés
            </span>
          </h2>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group bg-gradient-to-br ${project.color} p-6 rounded-2xl border ${project.borderColor} backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-slate-900/80 text-cyan-400 text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-900/50 text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.links.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Démo
                    </a>
                    <a
                      href={project.links.github}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-500 text-gray-300 text-sm font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
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

export default Projects;
