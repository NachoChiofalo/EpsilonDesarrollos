/**
 * projects.js
 * Agrega o modifica proyectos editando este array.
 * Cada objeto sigue la misma estructura para que ProjectCard lo renderice correctamente.
 */

export const projects = [
  {
    id: 1,
    title: 'Sistema de Gestion Electoral',
    description:
      'Sistema electoral basado en arquitectura de microservicios para la gestión de padrón, autenticación de usuarios y visualización de resultados electorales.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #0a1628 50%, #0d2137 100%)',
    category: 'GovTech',
    link: '#',
    image: 'src/assets/images/image.jpeg'
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
    link: "#"
  },
  
]

/**
 * Todas las tecnologías únicas usadas en los proyectos, para el filtro.
 */
export const allTechnologies = [
  ...new Set(projects.flatMap((p) => p.technologies)),
].sort()
