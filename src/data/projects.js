/**
 * projects.js
 * Agrega o modifica proyectos editando este array.
 * Cada objeto sigue la misma estructura para que ProjectCard lo renderice correctamente.
 */

export const projects = [
  {
    id: 1,
    title: 'ERP CloudSync',
    description:
      'Sistema ERP en la nube para gestión empresarial integral con módulos de inventario, RRHH y finanzas en tiempo real.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #0a1628 50%, #0d2137 100%)',
    category: 'Enterprise',
    link: '#',
  },
  {
    id: 2,
    title: 'MediTrack',
    description:
      'Plataforma de gestión médica para clínicas y hospitales con historial clínico digital y agendamiento online.',
    technologies: ['Vue.js', 'Python', 'MongoDB', 'Docker'],
    gradient: 'linear-gradient(135deg, #0d3b2e 0%, #051a13 50%, #092d22 100%)',
    category: 'HealthTech',
    link: '#',
  },
  {
    id: 3,
    title: 'RetailPOS',
    description:
      'Sistema de punto de venta para retail con analíticas en tiempo real, gestión de stock e integración con e-commerce.',
    technologies: ['React Native', 'Firebase', 'Redux'],
    gradient: 'linear-gradient(135deg, #3b1e5f 0%, #1a0a28 50%, #2d1237 100%)',
    category: 'Retail',
    link: '#',
  },
  {
    id: 4,
    title: 'LogistiQ',
    description:
      'Software de logística y seguimiento de flotas en tiempo real con IA predictiva para optimizar rutas y reducir costos.',
    technologies: ['Angular', 'Java', 'MySQL', 'Docker'],
    gradient: 'linear-gradient(135deg, #1f3a1e 0%, #0d1f0c 50%, #162e14 100%)',
    category: 'Logistics',
    link: '#',
  },
  {
    id: 5,
    title: 'FinanceBot',
    description:
      'Chatbot financiero con IA para asesoramiento de inversiones, análisis de portafolios y alertas de mercado.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    gradient: 'linear-gradient(135deg, #1f1e0a 0%, #120f02 50%, #1e1a05 100%)',
    category: 'FinTech',
    link: '#',
  },
  {
    id: 6,
    title: 'EduConnect',
    description:
      'Plataforma LMS para instituciones educativas con gamificación, videoclases en vivo y seguimiento de progreso individual.',
    technologies: ['React', 'Django', 'Redis', 'AWS'],
    gradient: 'linear-gradient(135deg, #1e0a3b 0%, #0c0518 50%, #170930 100%)',
    category: 'EdTech',
    link: '#',
  },
]

/**
 * Todas las tecnologías únicas usadas en los proyectos, para el filtro.
 */
export const allTechnologies = [
  ...new Set(projects.flatMap((p) => p.technologies)),
].sort()
