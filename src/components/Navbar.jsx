import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  { path: '/',           label: 'Inicio' },
  { path: '/proyectos',  label: 'Proyectos' },
  { path: '/contacto',   label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Cierra el menú al navegar */
  useEffect(() => setMenuOpen(false), [location.pathname])

  return (
    <nav className={`epsilon-navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        {/* ── Brand ── */}
        <Link to="/" className="epsilon-brand">
          <span className="brand-epsilon">ε</span>
          <span className="brand-name">
            Epsilon <span className="brand-accent">Desarrollos</span>
          </span>
        </Link>

        {/* ── Desktop Links ── */}
        <ul className="epsilon-nav-list d-none d-lg-flex">
          {NAV_LINKS.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`epsilon-nav-link${location.pathname === path ? ' active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contacto" className="epsilon-cta-btn">
              Trabajemos juntos
            </Link>
          </li>
        </ul>

        {/* ── Hamburger ── */}
        <button
          className={`epsilon-hamburger d-lg-none${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      <div className={`epsilon-mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul>
          {NAV_LINKS.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`epsilon-nav-link${location.pathname === path ? ' active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contacto" className="epsilon-cta-btn d-block text-center mt-2">
              Trabajemos juntos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
