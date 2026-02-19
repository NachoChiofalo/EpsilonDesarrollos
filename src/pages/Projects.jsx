import { useState, useMemo } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects, allTechnologies } from '../data/projects'
import './Projects.css'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Todos')

  const filters = ['Todos', ...allTechnologies]

  const filtered = useMemo(() => {
    if (activeFilter === 'Todos') return projects
    return projects.filter((p) => p.technologies.includes(activeFilter))
  }, [activeFilter])

  return (
    <div className="projects-page">

      {/* ── Page Header ── */}
      <section className="page-hero">
        <div className="page-hero-bg" aria-hidden="true">
          <div className="page-hero-orb" />
        </div>
        <div className="container position-relative">
          <div className="page-hero-content">
            <div className="section-tag mx-auto mb-3">Portfolio</div>
            <h1 className="section-title text-center">
              Nuestros <span className="text-gradient">Proyectos</span>
            </h1>
            <p className="section-subtitle text-center mt-3">
              Cada proyecto es una historia de desafíos superados y resultados
              entregados. Aquí algunos de nuestros trabajos más destacados.
            </p>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="projects-gallery">
        <div className="container">

          {/* Filters */}
          <div className="projects-filters">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`filter-btn${activeFilter === f ? ' active' : ''}`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="projects-count">
            Mostrando{' '}
            <span className="projects-count-num">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'proyecto' : 'proyectos'}
            {activeFilter !== 'Todos' && (
              <> con <em>{activeFilter}</em></>
            )}
          </p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="row gy-4">
              {filtered.map((project) => (
                <div key={project.id} className="col-12 col-md-6 col-xl-4">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <i className="bi bi-search" />
              <p>No hay proyectos con la tecnología seleccionada.</p>
              <button
                className="filter-btn active"
                onClick={() => setActiveFilter('Todos')}
              >
                Ver todos
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ── CTA Footer ── */}
      <section className="projects-cta">
        <div className="container">
          <div className="projects-cta-inner">
            <h2 className="projects-cta-title">
              ¿Tu proyecto podría ser el{' '}
              <span className="text-gradient">próximo</span>?
            </h2>
            <p className="projects-cta-sub">
              Hablemos y empecemos a construir algo juntos.
            </p>
            <a href="/contacto" className="btn hero-btn-primary">
              Contactarnos
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
