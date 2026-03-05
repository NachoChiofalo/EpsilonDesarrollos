import './ProjectCard.css'

/* Colores por tecnología */
const TECH_COLORS = {
  React:         { bg: 'rgba(97, 218, 251, 0.1)',  color: '#61dafb', border: 'rgba(97,218,251,0.25)' },
  'React Native':{ bg: 'rgba(97, 218, 251, 0.1)',  color: '#61dafb', border: 'rgba(97,218,251,0.25)' },
  'Vue.js':      { bg: 'rgba(79, 192, 141, 0.1)',  color: '#4fc08d', border: 'rgba(79,192,141,0.25)' },
  Angular:       { bg: 'rgba(221, 0, 49, 0.1)',    color: '#f05260', border: 'rgba(221,0,49,0.25)'   },
  'Node.js':     { bg: 'rgba(104, 160, 99, 0.1)',  color: '#68a063', border: 'rgba(104,160,99,0.25)' },
  Python:        { bg: 'rgba(55, 118, 171, 0.1)',  color: '#4b9cd3', border: 'rgba(55,118,171,0.25)' },
  Java:          { bg: 'rgba(248, 152, 32, 0.1)',  color: '#f89820', border: 'rgba(248,152,32,0.25)' },
  MongoDB:       { bg: 'rgba(77, 179, 61, 0.1)',   color: '#4db33d', border: 'rgba(77,179,61,0.25)'  },
  PostgreSQL:    { bg: 'rgba(51, 103, 145, 0.1)',  color: '#5e9fd2', border: 'rgba(51,103,145,0.25)' },
  MySQL:         { bg: 'rgba(0, 117, 143, 0.1)',   color: '#00a8c7', border: 'rgba(0,117,143,0.25)'  },
  Firebase:      { bg: 'rgba(255, 202, 40, 0.1)',  color: '#ffca28', border: 'rgba(255,202,40,0.25)' },
  AWS:           { bg: 'rgba(255, 153, 0, 0.1)',   color: '#ff9900', border: 'rgba(255,153,0,0.25)'  },
  Docker:        { bg: 'rgba(36, 150, 237, 0.1)',  color: '#2496ed', border: 'rgba(36,150,237,0.25)' },
  Redux:         { bg: 'rgba(118, 74, 188, 0.1)',  color: '#9b72d0', border: 'rgba(118,74,188,0.25)' },
  FastAPI:       { bg: 'rgba(0, 150, 136, 0.1)',   color: '#00bfa5', border: 'rgba(0,150,136,0.25)'  },
  Django:        { bg: 'rgba(9, 46, 32, 0.2)',     color: '#44b78b', border: 'rgba(44,183,139,0.25)' },
  Redis:         { bg: 'rgba(220, 56, 45, 0.1)',   color: '#dc382d', border: 'rgba(220,56,45,0.25)'  },
  TensorFlow:    { bg: 'rgba(255, 111, 0, 0.1)',   color: '#ff8c42', border: 'rgba(255,111,0,0.25)'  },
  default:       { bg: 'rgba(124, 58, 237, 0.1)',  color: '#a78bfa', border: 'rgba(124,58,237,0.25)' },
}

export default function ProjectCard({ project }) {
  const { title, description, technologies = [], gradient, link, category, image } = project

  return (
    <div className="project-card">
      {/* ── Gradient Image Area ── */}
      <div className="project-card-image" style={{ background: gradient }}>
        {image && <img src={image} alt={title} className="project-card-img" />}
        <div className="project-card-image-overlay">
          {/* ACA SE PUEDE AGREGAR UN ICONO O BOTON PARA VER EL PROYECTO
          <a  
            href={link || '#'}
            className="project-view-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-arrow-up-right" />
            <span>Ver Proyecto</span>
          </a> */}
        </div>
        <span className="project-category">{category}</span>
      </div>

      {/* ── Body ── */}
      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-desc">{description}</p>

        {/* Tech Badges */}
        <div className="project-card-techs">
          {technologies.map((tech) => {
            const c = TECH_COLORS[tech] || TECH_COLORS.default
            return (
              <span
                key={tech}
                className="project-tech-badge"
                style={{ background: c.bg, color: c.color, borderColor: c.border }}
              >
                {tech}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
