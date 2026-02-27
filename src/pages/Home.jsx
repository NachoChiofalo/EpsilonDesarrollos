import { Link } from 'react-router-dom'
import './Home.css'

/* ── Static Data ── */
const SERVICES = [
  {
    icon: 'bi-laptop-fill',
    title: 'Desarrollo Web',
    description:
      'Aplicaciones web modernas, rápidas y escalables construidas con las últimas tecnologías del mercado.',
    color: '#7c3aed',
  },
  /*{
    icon: 'bi-phone-fill',
    title: 'Apps Móviles',
    description:
      'Experiencias nativas e híbridas para iOS y Android que tus usuarios adoptarán desde el primer uso.',
    color: '#06b6d4',
  },*/
  
  /*{
    icon: 'bi-cloud-arrow-up-fill',
    title: 'Cloud & DevOps',
    description:
      'Infraestructura escalable en la nube con CI/CD, contenedores y monitoreo en tiempo real.',
    color: '#10b981',
  },*/
  {
    icon: 'bi-gear-wide-connected',
    title: 'Software a Medida',
    description:
      'Sistemas empresariales y automatizaciones customizadas que se adaptan a los procesos únicos de tu negocio.',
    color: '#f59e0b',
  },
{
  icon: 'bi-robot',
  title: 'Automatización Inteligente',
  description:
    'Optimizamos tus costos y tiempos eliminando tareas repetitivas mediante scripts y procesos automáticos.',
  color: '#10b981', // Verde éxito/eficiencia
},
{
  icon: 'bi-diagram-3-fill',
  title: 'Integración de Sistemas',
  description:
    'Conectamos tus herramientas actuales (CRMs, ERPs, Pasarelas de pago) para centralizar tu operación en un solo lugar.',
  color: '#ec4899', // Un rosa/fucsia para contrastar
},

]


const STATS = [
  { value: '50+', label: 'Proyectos Entregados', icon: 'bi-check2-circle' },
  { value: '30+', label: 'Clientes Satisfechos',  icon: 'bi-people-fill'  },
  { value: '5+',  label: 'Años de Experiencia',   icon: 'bi-calendar3'    },
  { value: '99%', label: 'Satisfacción',           icon: 'bi-star-fill'    },
]

const TECH_STACK = ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL']

export default function Home() {
  return (
    <div className="home-page">

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="hero-section">

        {/* Animated background */}
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-grid" />
          <div className="hero-orb orb-violet" />
          <div className="hero-orb orb-cyan" />
          <div className="hero-orb orb-mid" />
        </div>

        {/* Floating geometric shapes */}
        <div className="hero-shapes" aria-hidden="true">
          <div className="hshape s1" />
          <div className="hshape s2" />
          <div className="hshape s3" />
          <div className="hshape s4" />
        </div>

        <div className="container position-relative">
          <div className="row align-items-center hero-row">

            {/* ── Left: Text ── */}
            <div className="col-12 col-lg-6">
              <div className="hero-badge animate-fadeInUp">
                <span className="hero-badge-dot" />
                Disponibles para nuevos proyectos
              </div>

              <h1 className="hero-title animate-fadeInUp delay-1">
                Soluciones tecnológicas{' '}
                <span className="hero-title-gradient">a medida</span>
              </h1>

              <p className="hero-subtitle animate-fadeInUp delay-2">
                Transformamos tus ideas en productos digitales de alto impacto.
                Desde startups hasta grandes empresas — construimos el software
                que tu negocio necesita.
              </p>

              <div className="hero-actions animate-fadeInUp delay-3">
                <Link to="/proyectos" className="btn hero-btn-primary">
                  <i className="bi bi-grid-3x3-gap-fill" />
                  Ver Proyectos
                </Link>
                <Link to="/contacto" className="btn hero-btn-secondary">
                  Hablemos
                  <i className="bi bi-arrow-right" />
                </Link>
              </div>

              <div className="hero-stack animate-fadeInUp delay-4">
                <span className="hero-stack-label">Stack:</span>
                {TECH_STACK.map((t) => (
                  <span key={t} className="hero-stack-pill">{t}</span>
                ))}
              </div>
            </div>

            {/* ── Right: Code Window ── */}
            <div className="col-lg-6 d-none d-lg-flex justify-content-center">
              <div className="hero-code-window animate-scaleIn delay-2">
                <div className="cw-header">
                  <span className="cw-dot red" />
                  <span className="cw-dot yellow" />
                  <span className="cw-dot green" />
                  <span className="cw-title">epsilon.solution.js</span>
                </div>
                <div className="cw-body">
                  <div className="cw-line"><span className="ck">const</span> <span className="cv">solution</span> <span className="co">=</span> {'{'}</div>
                  <div className="cw-line indent"><span className="cp">quality</span><span className="co">:</span> <span className="cs">"premium"</span><span className="co">,</span></div>
                  <div className="cw-line indent"><span className="cp">speed</span><span className="co">:</span> <span className="cs">"⚡ lightning"</span><span className="co">,</span></div>
                  <div className="cw-line indent"><span className="cp">support</span><span className="co">:</span> <span className="cs">"24/7"</span><span className="co">,</span></div>
                  <div className="cw-line indent"><span className="cp">scalable</span><span className="co">:</span> <span className="cn">true</span><span className="co">,</span></div>
                  <div className="cw-line indent"><span className="cp">client</span><span className="co">:</span> <span className="cs">"you 🚀"</span><span className="co">,</span></div>
                  <div className="cw-line">{'}'}</div>
                  <div className="cw-line">&nbsp;</div>
                  <div className="cw-line"><span className="ck">export default</span> <span className="cf">Epsilon</span></div>
                  <div className="cw-cursor" aria-hidden="true" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll" aria-hidden="true">
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ══════════════════════════════
          ABOUT
      ══════════════════════════════ */}
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center gy-5">

            {/* Visual */}
            <div className="col-12 col-lg-5">
              <div className="about-visual">
                {[
                  { icon: 'bi-stars',            label: 'Innovación'  },
                  { icon: 'bi-shield-fill-check', label: 'Calidad'/*,  featured: true */},
                  { icon: 'bi-rocket-takeoff-fill',label: 'Performance' },
                  { icon: 'bi-people-fill',        label: 'Equipo'   },
                ].map(({ icon, label, featured }) => (
                  <div key={label} className={`about-mini-card${featured ? ' featured' : ''}`}>
                    <i className={`bi ${icon}`} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Text */}
            <div className="col-12 col-lg-6 offset-lg-1">
              <div className="section-tag mb-3">¿Quiénes somos?</div>
              <h2 className="section-title mb-4">
                Somos más que una{' '}
                <span className="text-gradient">dev shop</span>
              </h2>
              <p className="section-text mb-3">
                En Epsilon Desarrollos somos un equipo apasionado de ingenieros
                y estrategas digitales comprometidos a entregar software
                que no solo funciona —{' '}
                <strong style={{ color: 'var(--text-primary)' }}>sino que transforma negocios.</strong>
              </p>
              <p className="section-text mb-5">
                Trabajamos con metodologías ágiles, código limpio y una comunicación
                transparente que nos distingue.
              </p>
              <Link to="/proyectos" className="epsilon-outline-btn">
                Conocé nuestro trabajo
                <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SERVICES
      ══════════════════════════════ */}
      <section className="services-section">
        <div className="services-bg-gradient" aria-hidden="true" />
        <div className="container position-relative">
          <div className="text-center mb-5">
            <div className="section-tag mx-auto mb-3">Lo que hacemos</div>
            <h2 className="section-title">
              Nuestros <span className="text-gradient">Servicios</span>
            </h2>
            <p className="section-subtitle mt-3">
              Cubrimos todo el ciclo de vida del software, desde la idea hasta
              el lanzamiento y más allá.
            </p>
          </div>

          <div className="row gy-4 justify-content-center">
            {SERVICES.map((s, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-3">
                <div className="service-card" style={{ '--svc-color': s.color }}>
                  <div className="svc-icon-wrap">
                    <i className={`bi ${s.icon}`} />
                  </div>
                  <h3 className="svc-title">{s.title}</h3>
                  <p className="svc-desc">{s.description}</p>
                  <div className="svc-arrow">
                    <i className="bi bi-arrow-right" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          STATS
      ══════════════════════════════ */}

      {/*<section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {STATS.map((s, i) => (
              <div key={i} className="stat-item">
                <i className={`bi ${s.icon} stat-icon`} />
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* ══════════════════════════════
          CTA
      ══════════════════════════════ */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-wrapper">
            <div className="cta-glow" aria-hidden="true" />
            <div className="row align-items-center gy-4 position-relative">
              <div className="col-12 col-lg-8">
                <h2 className="cta-title">
                  ¿Listo para construir algo{' '}
                  <span className="text-gradient">increíble</span>?
                </h2>
                <p className="cta-subtitle">
                  Cuéntanos tu proyecto y te respondemos en menos de 24 horas.
                </p>
              </div>
              <div className="col-12 col-lg-4 text-lg-end">
                <Link to="/contacto" className="btn hero-btn-primary btn-lg">
                  Iniciar Proyecto
                  <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
