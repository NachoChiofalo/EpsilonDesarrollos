import { useState } from 'react'
import './Contact.css'

const INITIAL = { name: '', email: '', phone: '', service: '', message: '' }

const SERVICES_OPTIONS = [
  'Desarrollo Web',
  'App Móvil',
  'Software a Medida',
  'Consultoría IT',
  'Cloud & DevOps',
  'Otro',
]

const CONTACT_INFO = [
  { icon: 'bi-envelope-fill',   label: 'Email',     value: 'hola@epsilondev.com',    href: 'mailto:hola@epsilondev.com' },
  { icon: 'bi-telephone-fill',  label: 'Teléfono',  value: '+54 11 1234-5678',        href: 'tel:+541112345678' },
  { icon: 'bi-geo-alt-fill',    label: 'Ubicación', value: 'Buenos Aires, Argentina', href: '#' },
  { icon: 'bi-clock-fill',      label: 'Respuesta', value: 'Menos de 24 hs',          href: '#' },
]

export default function Contact() {
  const [form, setForm]         = useState(INITIAL)
  const [errors, setErrors]     = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending]   = useState(false)

  /* ── Validation ── */
  function validate(data) {
    const e = {}
    if (!data.name.trim() || data.name.trim().length < 2)
      e.name = 'El nombre debe tener al menos 2 caracteres.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      e.email = 'Ingresá un email válido.'
    if (!data.message.trim() || data.message.trim().length < 20)
      e.message = 'El mensaje debe tener al menos 20 caracteres.'
    return e
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }

    setSending(true)
    /* Simula envío — reemplazá con tu lógica real (fetch / emailjs / etc.) */
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
      setForm(INITIAL)
    }, 1800)
  }

  return (
    <div className="contact-page">

      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero-bg" aria-hidden="true">
          <div className="page-hero-orb" />
        </div>
        <div className="container position-relative">
          <div className="page-hero-content">
            <div className="section-tag mx-auto mb-3">Contacto</div>
            <h1 className="section-title text-center">
              Hablemos de tu{' '}
              <span className="text-gradient">próximo proyecto</span>
            </h1>
            <p className="section-subtitle text-center mt-3">
              Completá el formulario y te contactamos en menos de 24 horas.
              Sin compromiso, sin spam.
            </p>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="contact-section">
        <div className="container">
          <div className="row gy-5">

            {/* ── Info Column ── */}
            <div className="col-12 col-lg-4">
              <div className="contact-info-card">
                <h3 className="contact-info-title">Información de contacto</h3>
                <p className="contact-info-sub">
                  Preferís el contacto directo? Encontranos en cualquiera de estos canales.
                </p>
                <div className="contact-info-list">
                  {CONTACT_INFO.map(({ icon, label, value, href }) => (
                    <a key={label} href={href} className="contact-info-item">
                      <div className="ci-icon-wrap">
                        <i className={`bi ${icon}`} />
                      </div>
                      <div>
                        <span className="ci-label">{label}</span>
                        <span className="ci-value">{value}</span>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="contact-socials">
                  {[
                    { icon: 'bi-linkedin',   href: '#' },
                    { icon: 'bi-github',     href: '#' },
                    { icon: 'bi-twitter-x', href: '#' },
                    { icon: 'bi-instagram',  href: '#' },
                  ].map(({ icon, href }) => (
                    <a key={icon} href={href} className="contact-social-btn">
                      <i className={`bi ${icon}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Form Column ── */}
            <div className="col-12 col-lg-8">

              {submitted ? (
                /* ── Success ── */
                <div className="contact-success">
                  <div className="success-icon">
                    <i className="bi bi-check-lg" />
                  </div>
                  <h3>¡Mensaje enviado!</h3>
                  <p>
                    Gracias por contactarnos. Te responderemos a la brevedad,
                    generalmente en menos de 24 horas.
                  </p>
                  <button
                    className="btn hero-btn-primary mt-2"
                    onClick={() => setSubmitted(false)}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                /* ── Form ── */
                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="row g-3">

                    {/* Name */}
                    <div className="col-12 col-sm-6">
                      <label htmlFor="name" className="cf-label">
                        Nombre completo <span className="cf-required">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Juan García"
                        className={`cf-input${errors.name ? ' cf-input--error' : ''}`}
                      />
                      {errors.name && (
                        <span className="cf-error">
                          <i className="bi bi-exclamation-circle-fill" /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="col-12 col-sm-6">
                      <label htmlFor="email" className="cf-label">
                        Email <span className="cf-required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="juan@empresa.com"
                        className={`cf-input${errors.email ? ' cf-input--error' : ''}`}
                      />
                      {errors.email && (
                        <span className="cf-error">
                          <i className="bi bi-exclamation-circle-fill" /> {errors.email}
                        </span>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="col-12 col-sm-6">
                      <label htmlFor="phone" className="cf-label">Teléfono</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+54 11 1234-5678"
                        className="cf-input"
                      />
                    </div>

                    {/* Service */}
                    <div className="col-12 col-sm-6">
                      <label htmlFor="service" className="cf-label">Tipo de proyecto</label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="cf-input cf-select"
                      >
                        <option value="">Seleccioná una opción</option>
                        {SERVICES_OPTIONS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <label htmlFor="message" className="cf-label">
                        Mensaje <span className="cf-required">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Contanos brevemente sobre tu proyecto, tecnologías preferidas, plazos, etc."
                        className={`cf-input cf-textarea${errors.message ? ' cf-input--error' : ''}`}
                      />
                      <div className="cf-char-count">
                        {form.message.length} caracteres
                        {form.message.length < 20 && form.message.length > 0 && (
                          <span> (mínimo 20)</span>
                        )}
                      </div>
                      {errors.message && (
                        <span className="cf-error">
                          <i className="bi bi-exclamation-circle-fill" /> {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit */}
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn hero-btn-primary w-100 cf-submit"
                        disabled={sending}
                      >
                        {sending ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send-fill" />
                            Enviar Mensaje
                          </>
                        )}
                      </button>
                      <p className="cf-disclaimer">
                        <i className="bi bi-shield-check" />
                        Tu información es confidencial y nunca la compartiremos con terceros.
                      </p>
                    </div>

                  </div>
                </form>
              )}

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
