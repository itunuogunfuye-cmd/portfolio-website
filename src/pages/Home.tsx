import { useState } from 'react'
import { Link } from 'react-router'
import { useTheme } from '@/context/theme'
import focusDockImg from '@/imports/Dockfinal.png'
import legoImg from '@/imports/lego.png'
import smartPantryImg from '@/imports/lego.png'
import Detail01 from '@/assets/focus-dock/detail-front.png'

function CurrentlyItem({ icon, text }: { icon: string; text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ fontSize: 15 }}>{icon}</span>
      <span style={{ fontSize: 13, color: 'var(--muted-foreground)' }}>{text}</span>
    </div>
  )
}

function ProjectCard({ title, category, desc, year, img, to }: {
  title: string; category: string; desc: string; year: string; img: string; to?: string
}) {
  const [hovered, setHovered] = useState(false)

  const inner = (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border)',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 16px 40px rgba(0,0,0,0.1)' : '0 0 0 rgba(0,0,0,0)',
        height: '100%',
      }}
    >
      <div style={{ height: 220, overflow: 'hidden', backgroundColor: 'var(--muted)' }}>
        <img
          src={img}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            display: 'block',
          }}
        />
      </div>
      <div style={{ padding: '24px 24px 28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', color: 'var(--accent)' }}>{category}</span>
          <span style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>{year}</span>
        </div>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 400, color: 'var(--foreground)', marginBottom: 10, lineHeight: 1.25 }}>{title}</h3>
        <p style={{ fontSize: 14, color: 'var(--muted-foreground)', lineHeight: 1.7 }}>{desc}</p>
        <div style={{ marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 500, color: 'var(--accent)' }}>
          Explore Project <span style={{ transition: 'transform 0.2s', transform: hovered ? 'translateX(4px)' : 'none' }}>→</span>
        </div>
      </div>
    </article>
  )

  if (to) return <Link to={to} style={{ textDecoration: 'none', display: 'block' }}>{inner}</Link>
  return inner
}

export default function Home() {
  const { dark } = useTheme()

  return (
    <div style={{ backgroundColor: 'var(--background)', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section className="hero-pad" style={{ paddingTop: 120, paddingBottom: 96, paddingLeft: 40, paddingRight: 40 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <h1 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(40px, 5.5vw, 78px)',
                fontWeight: 400,
                lineHeight: 1.07,
                letterSpacing: '-0.01em',
                color: 'var(--foreground)',
              }}>
                Designing thoughtful{' '}
                <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>products</em>{' '}
                that blend technology, interaction, and visual design.
              </h1>

              <p style={{ fontSize: 18, lineHeight: 1.75, color: 'var(--muted-foreground)', maxWidth: 480 }}>
                I create digital and physical experiences—from interactive hardware to
                intuitive interfaces—with a focus on solving real-world problems.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <a href="#projects" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px',
                  borderRadius: 8, backgroundColor: 'var(--foreground)', color: 'var(--background)',
                  fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'opacity 0.2s, transform 0.2s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >View Projects →</a>
                <a href="#resume" style={{
                  display: 'inline-flex', alignItems: 'center', padding: '13px 26px',
                  borderRadius: 8, backgroundColor: 'transparent', color: 'var(--foreground)',
                  border: '1px solid var(--border)', fontSize: 14, fontWeight: 500, textDecoration: 'none',
                  transition: 'background-color 0.2s, transform 0.2s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--muted)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >Resume</a>
              </div>

              <div style={{ paddingTop: 8 }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', color: 'var(--muted-foreground)', marginBottom: 16 }}>CURRENTLY</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingLeft: 16, borderLeft: '2px solid var(--accent)' }}>
                  <CurrentlyItem icon="📍" text="Antwerp, Belgium" />
                  <CurrentlyItem icon="🎓" text="Multimedia & Creative Technology @ KdG" />
                  <CurrentlyItem icon="💼" text="Seeking Product Design & UX Internship" />
                </div>
              </div>
            </div>

            {/* Product image */}
            <div className="hero-product" style={{ position: 'relative' }}>
              <div style={{ borderRadius: 16, overflow: 'hidden', backgroundColor: 'var(--card)', aspectRatio: '4 / 5', width: '100%' }}>
                <img
                  src={focusDockImg}
                  alt="Focus Dock — a handcrafted wooden hardware device with integrated LED lighting"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{
                position: 'absolute', top: 20, left: 20,
                display: 'flex', alignItems: 'center', gap: 8, padding: '7px 14px',
                borderRadius: 999, backgroundColor: dark ? 'rgba(11,11,11,0.72)' : 'rgba(248,246,242,0.82)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid var(--border)', fontSize: 12, color: 'var(--muted-foreground)', fontWeight: 500,
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'inline-block' }} />
                Focus Dock — v1.0
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="section-pad" style={{ padding: '96px 40px', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56 }}>
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', color: 'var(--accent)', marginBottom: 10 }}>SELECTED WORK</p>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 400, color: 'var(--foreground)', lineHeight: 1.15 }}>Projects with purpose.</h2>
            </div>
            <a href="#" style={{ fontSize: 13, fontWeight: 500, color: 'var(--muted-foreground)', textDecoration: 'none' }}>All projects →</a>
          </div>

          <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            <ProjectCard
              to="/projects/focus-dock"
              title="Focus Dock"
              category="PRODUCT DESIGN • IoT"
              desc="A handcrafted productivity dock that reduces phone distraction through physical interaction design."
              year="2026"
              img={Detail01}
            />
            <ProjectCard
              to="/projects/lego-police-story"
              title="LEGO Police Story"
              category="3D • CINEMATICS"
              desc="A short cinematic animation showcasing storytelling, environment design, and dynamic camera work using Unity and Cinemachine."
              year="2026"
              img={legoImg}
            />
            <ProjectCard
              title="Smart Pantry"
              category="PRODUCT DESIGN • UX/UI"
              desc="Designing a connected kitchen experience that helps people organize homemade meals with smart labeling and inventory tracking."
              year="2025"
              img={smartPantryImg}
            />
            <ProjectCard
              title="Nouri"
              category="BRANDING • PACKAGING"
              desc="Building a healthy frozen dessert brand from strategy and visual identity to packaging and customer experience."
              year="2025"
              img="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop&auto=format"
            />
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="section-pad" style={{ padding: '96px 40px', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', color: 'var(--accent)', marginBottom: 12 }}>ABOUT</p>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 3.2vw, 44px)', fontWeight: 400, color: 'var(--foreground)', lineHeight: 1.2, marginBottom: 28 }}>
                I believe the best products feel{' '}
                <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>inevitable</em>.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--muted-foreground)' }}>
                  I'm Itunu Ogunfuye, a Multimedia & Creative Technology student at Karel de Grote University in Antwerp. My work sits at the intersection of physical interaction, interface design, and technology.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--muted-foreground)' }}>
                  From hardware prototypes to polished digital products, I approach every problem with curiosity and rigor. I ask why before deciding how.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 36 }}>
                {[
                  { label: 'Discipline', value: 'Product Design & UX' },
                  { label: 'Location', value: 'Antwerp, Belgium' },
                  { label: 'Availability', value: 'Open to internships' },
                  { label: 'Education', value: 'KdG (2022–2027)' },
                ].map((item) => (
                  <div key={item.label}>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--muted-foreground)', marginBottom: 6 }}>{item.label.toUpperCase()}</p>
                    <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--foreground)' }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ padding: 28, borderRadius: 12, backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--muted-foreground)', marginBottom: 18 }}>SKILLS & TOOLS</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['Figma', 'Prototyping', 'User Research', 'Arduino', 'Interaction Design', 'Unity', 'Design Systems', 'Usability Testing', 'Branding', 'Motion Design'].map((skill) => (
                    <span key={skill} style={{ padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 500, backgroundColor: 'var(--muted)', color: 'var(--foreground)', border: '1px solid var(--border)' }}>{skill}</span>
                  ))}
                </div>
              </div>
              <div style={{ padding: 28, borderRadius: 12, backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--muted-foreground)', marginBottom: 12 }}>LOOKING FOR</p>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--foreground)' }}>
                  Seeking a Product Design or UX internship where I can contribute to thoughtful digital products while continuing to grow through collaboration and hands-on product development.
                </p>
                <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500, color: 'var(--accent)' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'inline-block' }} />
                  Available immediately.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section-pad" style={{ padding: '96px 40px', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', color: 'var(--accent)', marginBottom: 20 }}>GET IN TOUCH</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4.5vw, 58px)', fontWeight: 400, color: 'var(--foreground)', lineHeight: 1.15, marginBottom: 20 }}>
            Let's build something{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>thoughtful</em>{' '}
            together.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--muted-foreground)', marginBottom: 40 }}>
            Looking for a product design intern, a creative collaborator, or someone who loves turning ideas into thoughtful experiences? I'd love to hear from you.
          </p>
          <a href="mailto:o.itunu14@gmail.com" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px',
            borderRadius: 8, backgroundColor: 'var(--foreground)', color: 'var(--background)',
            fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'opacity 0.2s, transform 0.2s',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >Get in Touch →</a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '28px 40px' }}>
        <div className="footer-inner" style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <Link to="/" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--muted-foreground)', textDecoration: 'none' }}>ITUNU OGUNFUYE</Link>
          <span style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>© 2026 Itunu Ogunfuye. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {[
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/tunu?utm_source=share_via&utm_content=profile&utm_medium=member_android',
              },
              {
                label: 'Behance',
                href: 'https://www.behance.net/feranmiireyemi',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/itunuogunfuye-cmd',
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: 'var(--muted-foreground)',
                  textDecoration: 'none',
                  opacity: 0.65,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.65';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
