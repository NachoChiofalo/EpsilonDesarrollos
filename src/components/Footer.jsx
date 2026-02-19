import { Link } from 'react-router-dom'
import './Footer.css'

const QUICK_LINKS = [
  { path: '/',           label: 'Inicio' },
  { path: '/proyectos',  label: 'Proyectos' },
  { path: '/contacto',   label: 'Contacto' },
]

const SERVICES = [
  'Desarrollo Web',
  'Apps Móviles',
  'Software a Medida',
  'Consultoría IT',
  'Cloud & DevOps',
]

const SOCIALS = [
  { icon: 'bi-linkedin',   href: '#', label: 'LinkedIn' },
  { icon: 'bi-github',     href: '#', label: 'GitHub' },
  { icon: 'bi-twitter-x', href: '#', label: 'Twitter / X' },
  { icon: 'bi-instagram',  href: '#', label: 'Instagram' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="epsilon-footer">
      {/* Decorative top glow */}
      <div className="footer-top-glow" aria-hidden="true" />

      <div className="container">
        <div className="row gy-5 py-5">

          {/* ── Col 1: Brand ── */}
          <div className="col-12 col-md-5 col-lg-4">
            <div className="footer-brand mb-3">
              <span className="footer-epsilon">ε</span>
              <span className="footer-brand-name">
                Epsilon <span className="footer-brand-accent">Desarrollos</span>
              </span>
            </div>
            <p className="footer-tagline">
              Transformamos ideas en productos digitales de alto impacto.
              Tu visión, nuestro código.
            </p>
            <div className="footer-socials mt-4">
              {SOCIALS.map(({ icon, href, label }) => (
                <a key={icon} href={href} className="footer-social" aria-label={label}>
                  <i className={`bi ${icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Links ── */}
          <div className="col-6 col-md-3 col-lg-2 offset-lg-1">
            <h6 className="footer-heading">Navegación</h6>
            <ul className="footer-link-list">
              {QUICK_LINKS.map(({ path, label }) => (
                <li key={path}>
                  <Link to={path} className="footer-link">
                    <i className="bi bi-chevron-right" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Services ── */}
          <div className="col-6 col-md-4 col-lg-2">
            <h6 className="footer-heading">Servicios</h6>
            <ul className="footer-link-list">
              {SERVICES.map((s) => (
                <li key={s}>
                  <span className="footer-link static">
                    <i className="bi bi-chevron-right" />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact ── */}
          <div className="col-12 col-lg-3">
            <h6 className="footer-heading">Contacto</h6>
            <div className="footer-contact-list">
              <a href="mailto:hola@epsilondev.com" className="footer-contact-item">
                <i className="bi bi-envelope-fill" />
                hola@epsilondev.com
              </a>
              <a href="tel:+541112345678" className="footer-contact-item">
                <i className="bi bi-telephone-fill" />
                +54 11 1234-5678
              </a>
              <span className="footer-contact-item">
                <i className="bi bi-geo-alt-fill" />
                Buenos Aires, Argentina
              </span>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} Epsilon Desarrollos. Todos los derechos reservados.
          </p>
          <p className="footer-made">
            Hecho con <i className="bi bi-heart-fill" style={{ color: '#f43f5e' }} /> y mucho café ☕
          </p>
        </div>
      </div>
    </footer>
  )
}
