/**
 * projects.js
 * Agrega o modifica proyectos editando este array.
 * Cada objeto sigue la misma estructura para que ProjectCard lo renderice correctamente.
 */

import electoralImg from '../assets/images/electoral.png'
import logisticsImg from '../assets/images/transporte.png'
import museoImg from '../assets/images/cenma.png'
import ypfManagerImg from '../assets/images/ypf-manager.png'

export const projects = [
  {
    id: 1,
    title: 'Sistema de Gestion Electoral',
    description:
      'Sistema electoral basado en arquitectura de microservicios para la gestión de padrón, autenticación de usuarios y visualización de resultados electorales',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #0a1628 50%, #0d2137 100%)',
    category: 'GovTech',
    link: '#',
    image: electoralImg
  },
  {
    id: 2,
    title: "Sistema de Logística de Transporte de Contenedores",
    description:
      "Backend desarrollado con arquitectura de microservicios para gestionar solicitudes, flotas, rutas, precios y localizaciones. Incluye API Gateway, autenticación/autorización con Keycloak (JWT), persistencia en PostgreSQL y migraciones con Flyway. Preparado para ejecución local y despliegue con Docker.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Keycloak",
      "Docker"
    ],
    category: "Backend / Microservicios",
    link: "#",
    image: logisticsImg
  },
  {
    id: 3, 
    title: 'Museo Virtual para escuela CENMA N°61',
    description: 'Museo virtual interactivo con galería cronológica para preservar y exhibir la historia y las promociones de graduados de la institución',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    gradient: 'linear-gradient(135deg, #2c3e50 0%, #1a252f 50%, #151e27 100%)',
    category: 'EdTech',
    link: '#',
    image: museoImg 
  },
  {
    id: 4,
    title: 'Sistema de Gestión YPF',
    description:
      'Aplicación de escritorio para la administración integral de estaciones de servicio, cubriendo logística de camiones, control de tanques, gestión de personal y reportes estadísticos.',
    technologies: ['C#', '.NET Framework', 'Windows Forms', 'SQL Server'],
    gradient: 'linear-gradient(135deg, #005aab 0%, #003366 50%, #001a33 100%)',
    category: 'Enterprise Software',
    link: '',
    image: ypfManagerImg
  },
  
]

/**
 * Todas las tecnologías únicas usadas en los proyectos, para el filtro.
 */
export const allTechnologies = [
  ...new Set(projects.flatMap((p) => p.technologies)),
].sort()
