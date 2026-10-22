export const profile = {
  name: "Kemela Essozolim Léonardo",
  initials: "KL",
  taglineRoles: ["Systèmes & Réseaux", "Cybersécurité", "Développement Web"],
  location: "Togo",
  email: "kemelaeleonardo@gmail.com",
  phoneDisplay: "+228 91 65 99 82",
  whatsappLink: "https://wa.me/22891659982",
  cvUrl: "/CV-Kemela-Essozolim-Leonardo.pdf",
  // TODO: remplace par tes vrais liens quand tu les as
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  bio:
    "Professionnel IT orienté systèmes, réseaux et cybersécurité. J'administre et sécurise des infrastructures, je diagnostique les incidents pour garantir la continuité des services, et je conçois des sites web pour des clients.",
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  place: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    period: "Juil. – Nov. 2025",
    role: "Technicien Systèmes & Réseau",
    company: "Creative Web",
    place: "Kara, Togo",
    points: [
      "Administration et configuration d'un serveur : mise à jour du système, déploiement local d'une application de gestion hôtelière.",
      "Mise en réseau du serveur et configuration des postes et tablettes pour l'accès à l'application en réseau local.",
      "Assistance aux utilisateurs, gestion des comptes, résolution des problèmes de connectivité, remplacement d'équipements défectueux.",
      "Configuration et déploiement d'un VPN pour l'accès distant à l'application locale depuis une autre agence.",
    ],
  },
  {
    period: "Mai 2024",
    role: "Technicien réseau informatique",
    company: "Sécurité 360°",
    place: "Lomé, Togo",
    points: [
      "Installation de l'infrastructure réseau d'une agence de COECEPT à Kara : installation, câblage et configuration des équipements réseau.",
    ],
  },
  {
    period: "Oct. – Déc. 2023",
    role: "Stagiaire Cybersécurité",
    company: "ASECNA",
    place: "Lomé, Togo",
    points: [
      "Analyse de la surface d'attaque du réseau et identification des points d'exposition.",
      "Identification des vulnérabilités potentielles et évaluation des risques liés à la sécurité du réseau.",
      "Recommandations techniques pour le durcissement de l'infrastructure, présentées dans des rapports techniques.",
    ],
  },
  {
    period: "Août – Oct. 2023",
    role: "Stagiaire Systèmes & Réseaux",
    company: "Sécurité 360°",
    place: "Lomé, Togo",
    points: [
      "Participation à l'installation complète de l'infrastructure réseau d'un bâtiment de la GIZ.",
      "Câblage réseau : tirage des câbles Ethernet, pose de goulottes, sertissage RJ45, raccordement au panneau de brassage.",
      "Montage du coffret informatique et connexion des switches.",
      "Maintenance des réseaux des agences COECEPT et certification des câbles avec un testeur Fluke.",
    ],
  },
  {
    period: "Oct. – Déc. 2021",
    role: "Stagiaire Administration Système",
    company: "Université de Kara",
    place: "Kara, Togo",
    points: [
      "Installation et administration de serveurs Linux.",
      "Configuration des services réseau : DNS, DHCP, FTP, LDAP et Samba.",
      "Mise en œuvre d'Active Directory Domain Services (AD DS).",
    ],
  },
];

export const education = {
  year: "2024",
  degree: "Licence professionnelle en Sécurité informatique et Cybersécurité",
  school: "Université de Kara, Togo",
};

export type SkillGroup = { title: string; accent: "accent" | "accent-2"; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Cybersécurité",
    accent: "accent-2",
    items: ["Surface d'attaque", "Analyse de vulnérabilités", "Évaluation des risques", "Durcissement", "Nmap", "Wireshark", "Nessus", "OpenVAS"],
  },
  {
    title: "Administration systèmes",
    accent: "accent-2",
    items: ["Linux", "Windows Server", "Services réseau", "Environnements serveurs"],
  },
  {
    title: "Infrastructure réseau",
    accent: "accent-2",
    items: ["Adressage IP", "DHCP", "DNS", "VLAN", "Switches", "Routage", "Câblage & brassage", "Testeur Fluke"],
  },
  {
    title: "Développement web",
    accent: "accent",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML / CSS", "Vercel"],
  },
  {
    title: "VPN & accès distant",
    accent: "accent-2",
    items: ["SoftEther VPN", "Connexions clientes", "Accès aux ressources distantes"],
  },
  {
    title: "Support & maintenance",
    accent: "accent-2",
    items: ["Diagnostic d'incidents", "Déploiement d'applications métiers", "Gestion des comptes", "Maintenance d'équipements"],
  },
];

export const tools = {
  Systèmes: ["Ubuntu", "Debian", "Windows"],
  "Supervision & sécurité": ["Nagios", "Wazuh", "Suricata", "Nessus", "OpenVAS"],
  Virtualisation: ["VirtualBox", "VMware"],
  Automatisation: ["Bash (bases)", "Python (bases)"],
  Collaboration: ["GitHub", "GitLab", "Word", "Excel", "PowerPoint"],
} as Record<string, string[]>;

export const languages = [
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Intermédiaire" },
];

export const interests = ["Course à pied", "Football"];

export type Project = {
  slug: string;
  name: string;
  client: string;
  description: string;
  role: string;
  stack: string[];
  url: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "milles-services-togo",
    name: "Milles Services Togo",
    client: "Milles Services Togo",
    description:
      "Site vitrine pour une société togolaise de sécurité privée basée à Lomé : gardiennage, vidéosurveillance, sécurité incendie et formation, disponible 24h/24. Conçu pour présenter clairement les services et faciliter la prise de contact.",
    role: "Conception et développement du site",
    // TODO: ajuste la stack exacte si besoin
    stack: ["Développement web", "Design responsive"],
    url: "https://milleservicestg.com/",
    year: "2026",
  },
  {
    slug: "bagoudjare-trading",
    name: "Bagoudjare Trading 3.0",
    client: "Bagoudjare E. Bahamlong",
    description:
      "Site personnel pour un trader indépendant spécialisé en forex et crypto-monnaies : présentation de ses formations, ses indicateurs et son accompagnement personnalisé.",
    role: "Conception et développement du site",
    // TODO: ajuste la stack exacte si besoin
    stack: ["Développement web", "Déploiement Vercel"],
    url: "https://bagoudjaretrading3-0.vercel.app/",
    year: "2026",
  },
];

export const nav = [
  { label: "À propos", href: "#about" },
  { label: "Expérience", href: "#experience" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "#contact" },
];
