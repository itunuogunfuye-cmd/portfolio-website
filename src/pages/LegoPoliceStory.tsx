import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'
import nouri from '@/assets/focus-dock/Nouri.jpg'
import trailer from '@/assets/lego-police-story/trailer.mp4'
import storyboard1 from '@/assets/lego-police-story/storyboard-01.png'
import storyboard2 from '@/assets/lego-police-story/storyboard-02.png'
import storyboard3 from '@/assets/lego-police-story/storyboard-03.png'
import storyboard4 from '@/assets/lego-police-story/storyboard-04.png'
import city01 from '@/assets/lego-police-story/city-01.png'
import city02 from '@/assets/lego-police-story/city-02.png'
import city03 from '@/assets/lego-police-story/city-03.png'
import city04 from '@/assets/lego-police-story/city-04.png'
import city05 from '@/assets/lego-police-story/city-05.png'
import camera01 from '@/assets/lego-police-story/camera-01.png'
import camera02 from '@/assets/lego-police-story/camera-02.png'
import anim01 from '@/assets/lego-police-story/anim-01.png'
import anim02 from '@/assets/lego-police-story/anim-02.png'
import prod01 from '@/assets/lego-police-story/prod-01.png'
import prod02 from '@/assets/lego-police-story/prod-02.png'
import render01 from '@/assets/lego-police-story/render-01.png'
import render02 from '@/assets/lego-police-story/render-02.png'
import render03 from '@/assets/lego-police-story/render-03.png'
import render04 from '@/assets/lego-police-story/render-04.png'
import render05 from '@/assets/lego-police-story/render-05.png'
import chaseGif from '@/assets/lego-police-story/chase.gif'
'@/assets/lego-police-story/drone.gif'
import finalFilm from '@/assets/lego-police-story/final-film.mp4'
import filmPoster from '@/assets/lego-police-story/poster.png' // optional


/* ─── Responsive style sheet ─── */
const responsiveStyles = `
  body { font-family: 'Inter', system-ui, sans-serif; }

  .lp-section        { padding: 120px 40px; }
  .lp-section-sm     { padding: 96px 40px; }
  .lp-section-lg     { padding: 140px 40px; }
  .lp-section-footer { padding: 28px 40px; }

  .lp-hero-inner  { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
  .lp-hero-image  { min-height: 540px; }

  .lp-two-col        { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; }
  .lp-two-col-md     { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
  .lp-two-col-tight  { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .lp-three-col      { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .lp-four-col       { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .lp-six-col        { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }

  .lp-next-card { display: grid; grid-template-columns: 1fr 1fr; }
  .lp-next-text { padding: 56px 48px; }
  .lp-next-img  { min-height: 320px; }

  .lp-footer-inner { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
  .lp-meta { display: flex; gap: 40px; padding-top: 4px; flex-wrap: wrap; }
  .lp-ctas { display: flex; gap: 12px; flex-wrap: wrap; }

  .lp-gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }

  .lp-reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .lp-reveal.visible { opacity: 1; transform: translateY(0); }

  .lp-img-zoom { overflow: hidden; }
  .lp-img-zoom img { transition: transform 0.6s ease; }
  .lp-img-zoom:hover img { transform: scale(1.04); }

  @media (max-width: 1024px) {
    .lp-section        { padding: 96px 32px; }
    .lp-section-sm     { padding: 72px 32px; }
    .lp-section-lg     { padding: 112px 32px; }
    .lp-section-footer { padding: 24px 32px; }

    .lp-hero-inner { grid-template-columns: 1fr; gap: 48px; }
    .lp-hero-image { min-height: 400px; }

    .lp-two-col    { grid-template-columns: 1fr; gap: 48px; }
    .lp-two-col-md { grid-template-columns: 1fr; gap: 32px; }

    .lp-four-col   { grid-template-columns: repeat(2, 1fr); gap: 20px; }
    .lp-six-col    { grid-template-columns: repeat(2, 1fr); gap: 16px; }
    .lp-gallery    { grid-template-columns: repeat(2, 1fr); }

    .lp-next-text  { padding: 40px 36px; }
  }

  @media (max-width: 640px) {
    .lp-section        { padding: 72px 20px; }
    .lp-section-sm     { padding: 56px 20px; }
    .lp-section-lg     { padding: 80px 20px; }
    .lp-section-footer { padding: 24px 20px; }

    .lp-hero-inner { grid-template-columns: 1fr; gap: 32px; }
    .lp-hero-image { min-height: 280px; }

    .lp-two-col       { grid-template-columns: 1fr; gap: 32px; }
    .lp-two-col-md    { grid-template-columns: 1fr; gap: 24px; }
    .lp-two-col-tight { grid-template-columns: 1fr; gap: 12px; }

    .lp-three-col  { grid-template-columns: 1fr; gap: 12px; }
    .lp-four-col   { grid-template-columns: 1fr; gap: 16px; }
    .lp-six-col    { grid-template-columns: 1fr 1fr; gap: 12px; }
    .lp-gallery    { grid-template-columns: 1fr; }

    .lp-next-card  { grid-template-columns: 1fr; }
    .lp-next-text  { padding: 36px 24px; }
    .lp-next-img   { min-height: 220px; }

    .lp-footer-inner { flex-direction: column; text-align: center; gap: 12px; }
    .lp-meta { gap: 24px; }
  }
`
const storyboards = [
  storyboard1,
  storyboard2,
  storyboard3,
  storyboard4,
]
const gallery = [
  { src: chaseGif, type: 'gif', aspect: '3/2' },
  { src: render01, type: 'image', aspect: '3/2' },
  { src: render02, type: 'image', aspect: '3/2' },
  { src: render03, type: 'image', aspect: '3/2' },
  { src: render04, type: 'image', aspect: '3/2' },
  { src: render05, type: 'image', aspect: '3/2' },
]

/* ─── Shared sub-components ─── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', color: 'var(--accent)', marginBottom: 16 }}>
      {children}
    </p>
  )
}

function H2({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <h2 style={{
      fontFamily: 'var(--font-serif)',
      fontSize: 'clamp(30px, 3.8vw, 52px)',
      fontWeight: 400,
      color: 'var(--foreground)',
      lineHeight: 1.12,
      textAlign: center ? 'center' : 'left',
    }}>
      {children}
    </h2>
  )
}

function StepDivider({ num, title }: { num: string; title: string }) {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 36 }}>
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 400, color: 'var(--foreground)', whiteSpace: 'nowrap' }}>
        {title}
      </h3>
      <span style={{ height: 1, flex: 1, backgroundColor: 'var(--border)' }} />
      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--accent)', whiteSpace: 'nowrap' }}>{num}</span>
    </div>
  )
}

/* Scroll-reveal hook */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect() } },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="lp-reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

/* Cinematic placeholder image */
function CinematicPlaceholder({
  src,
  alt,
  aspectRatio = '16/9',
  height,
}: {
  src: string
  alt: string
  aspectRatio?: string
  height?: number
}) {
  return (
    <div
      className="lp-img-zoom"
      style={{
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'var(--muted)',
        aspectRatio: height ? undefined : aspectRatio,
        height,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
  )
}

/* Play button overlay for video thumbnail */

/* ─── Dark / Light mode toggle (standalone, no context dependency) ─── */
function useDarkMode() {
  const [dark, setDark] = useState(true)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])
  return { dark, setDark }
}

/* ─── Image constants (Unsplash – cinematic / city / police) ─── */

/* ══════════════════════════════════════════════════════
   Main Component
══════════════════════════════════════════════════════ */
export default function App() {
  const { dark } = useDarkMode()
  const [, setNavScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  return (
    <div style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', minHeight: '100vh' }}>
      <style>{responsiveStyles}</style>



      {/* ── HERO ── */}
      <section style={{ paddingTop: 56, minHeight: '100vh', display: 'flex', alignItems: 'stretch' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', width: '100%',
          padding: 'clamp(40px, 6vw, 96px) clamp(20px, 5vw, 40px)',
        }}>
          <div className="lp-hero-inner">

            {/* Left */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['PROJECT', '3D', 'CINEMATICS', '#02'].map((tag) => (
                  <span key={tag} style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--muted-foreground)',
                    padding: '4px 10px', borderRadius: 999, border: '1px solid var(--border)', backgroundColor: 'var(--muted)',
                  }}>{tag}</span>
                ))}
              </div>

              <h1 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(52px, 7vw, 96px)',
                fontWeight: 400,
                lineHeight: 0.96,
                letterSpacing: '-0.02em',
                color: 'var(--foreground)',
              }}>
                LEGO<br />Police<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Story</em>
              </h1>

              <p style={{ fontSize: 'clamp(15px, 1.6vw, 17px)', color: 'var(--muted-foreground)', lineHeight: 1.75, maxWidth: 400 }}>
                Designing a cinematic police chase using Unity, Cinemachine, and environmental storytelling.
              </p>

              <div className="lp-meta">
                {[
                  { label: 'Role', value: 'Creative Director' },
                  { label: 'Duration', value: '6 Weeks' },
                  { label: 'Tools', value: 'Unity · Cinemachine · Blender' },
                  { label: 'Year', value: '2026' },
                ].map((m) => (
                  <div key={m.label}>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.13em', color: 'var(--muted-foreground)', marginBottom: 5 }}>{m.label.toUpperCase()}</p>
                    <p style={{ fontSize: 13, color: 'var(--foreground)', fontWeight: 500 }}>{m.value}</p>
                  </div>
                ))}
              </div>

              <div className="lp-ctas">
                <button style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 22px',
                  borderRadius: 8, backgroundColor: 'var(--foreground)', color: 'var(--background)',
                  fontSize: 13, fontWeight: 500, border: 'none', cursor: 'pointer',
                  transition: 'opacity 0.2s, transform 0.2s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none'; }}
                  onClick={() => document.getElementById('film')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  ▶ Watch Film
                </button>
                <button style={{
                  display: 'inline-flex', alignItems: 'center', padding: '11px 22px',
                  borderRadius: 8, backgroundColor: 'transparent', color: 'var(--foreground)',
                  border: '1px solid var(--border)', fontSize: 13, fontWeight: 500, cursor: 'pointer',
                  transition: 'background-color 0.2s, transform 0.2s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--muted)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'none'; }}
                  onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Process
                </button>
              </div>
            </div>

            {/* Right — cinematic video thumbnail */}
            <div className="lp-hero-image">
              <div
                style={{
                  borderRadius: 16,
                  overflow: 'hidden',
                  backgroundColor: '#000',
                  aspectRatio: '16 / 9',
                  boxShadow: '0 30px 80px rgba(0,0,0,.25)',
                }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}

                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                >
                  <source src={trailer} type="video/mp4" />
                </video>
              </div>
              <div style={{
                marginTop: 12, alignItems: 'center', gap: 8,
                padding: '7px 14px', borderRadius: 999,
                backgroundColor: dark ? 'rgba(20,20,20,0.72)' : 'rgba(248,246,242,0.82)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid var(--border)',
                fontSize: 11, color: 'var(--muted-foreground)', fontWeight: 500,
                display: 'inline-flex',
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'inline-block' }} />
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    backgroundColor: '#E53935',
                    display: 'inline-block',
                    animation: 'pulse 1.8s infinite',
                  }}
                />

                Trailer • 0:32
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECT BRIEF ── */}
      <section className="lp-section" id="process" style={{ borderTop: '1px solid var(--border)', backgroundColor: dark ? 'var(--card)' : 'var(--secondary)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <div className="lp-two-col">
              <div>
                <Label>PROJECT BRIEF</Label>
                <H2>A cinematic experiment in<em style={{ fontStyle: 'italic', color: 'var(--accent)' }}> storytelling.</em></H2>
              </div>
              <div>
                <p style={{ fontSize: 17, color: 'var(--muted-foreground)', lineHeight: 1.85, marginBottom: 28 }}>
                  The goal was to create a short cinematic sequence that captured the excitement of a LEGO police chase while exploring camera language, pacing, and environmental storytelling inside Unity.
                </p>
                <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.8 }}>
                  This project was never about building a game. Every creative decision, from road layout to camera composition, was made to support the story. The challenge became finding ways to make a LEGO city feel dynamic, believable, and cinematic.
                </p>
                <div style={{ marginTop: 32, padding: '24px 28px', borderRadius: 10, border: '1px solid var(--border)', backgroundColor: dark ? 'var(--background)' : 'var(--card)' }}>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 400, fontStyle: 'italic', color: 'var(--foreground)', lineHeight: 1.6 }}>
                    "The strongest scenes weren't created by adding more assets, but by carefully choosing where the camera should be."
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── STORYBOARDS ── */}
      <section className="lp-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <div style={{ maxWidth: 560, marginBottom: 64 }}>
              <Label>STORYBOARDS</Label>
              <H2>The story before the scene.</H2>
              <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.8, marginTop: 20 }}>
                Before opening Unity, the chase was planned through quick storyboard sketches. Each panel explored camera placement, pacing, and scene progression, creating a clear visual roadmap before production began. These early boards defined the emotional arc of the chase.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <StepDivider num="01" title="Scene Planning" />
            <div className="lp-four-col" style={{ marginBottom: 24 }}>
              {storyboards.map((src, i) => (
                <CinematicPlaceholder
                  key={i}
                  src={src}
                  alt={`Storyboard ${i + 1}`}
                  aspectRatio="4/3"
                />
              ))}
            </div>
            <p style={{ fontSize: 14, color: 'var(--muted-foreground)', lineHeight: 1.75, maxWidth: 640 }}>
              Storyboarding helped shape the pacing of the film before any animation began. Each panel defined the next camera angle, making it easier to translate the sequence into Unity while keeping the narrative clear.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── BUILDING THE CITY ── */}
      <section className="lp-section" style={{ borderTop: '1px solid var(--border)', backgroundColor: dark ? 'var(--card)' : 'var(--secondary)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <div style={{ maxWidth: 560, marginBottom: 64 }}>
              <Label>BUILDING THE CITY</Label>
              <H2>Building a believable world.</H2>
              <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.8, marginTop: 20 }}>
                Rather than modelling every building from scratch, I assembled the city using individual LEGO assets from Mecabricks. Buildings, roads, and landmarks were arranged in Blender to create a believable urban layout that supported the pacing and composition of the police chase. I refined materials, created custom appearances for the police and thief characters, adjusted UV mapping where needed, and prepared the complete scene for Unity.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <StepDivider num="02" title="Building the World" />
            <div className="lp-two-col-md" style={{ marginBottom: 24 }}>
              <CinematicPlaceholder
                src={city01}
                alt="City overview"
                aspectRatio="3/2"
              />

              <CinematicPlaceholder
                src={city02}
                alt="Main street"
                aspectRatio="3/2"
              />
            </div>

            <div className="lp-three-col" style={{ marginBottom: 24 }}>
              <CinematicPlaceholder
                src={city03}
                alt="Police station"
                aspectRatio="3/2"
              />

              <CinematicPlaceholder
                src={city04}
                alt="Downtown intersection"
                aspectRatio="3/2"
              />

              <CinematicPlaceholder
                src={city05}
                alt="Unity editor overview"
                aspectRatio="3/2"
              />
            </div>
            <p style={{ fontSize: 14, color: 'var(--muted-foreground)', lineHeight: 1.75, maxWidth: 700 }}>
              Individual LEGO assets were combined into a cohesive city designed specifically for the film. Roads and intersections were planned to naturally guide the chase, while landmarks helped establish a clear sense of place. Once inside Unity, I focused on lighting, scene composition, and camera framing to reinforce the atmosphere and support the story.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CAMERA DIRECTION ── */}
      <section className="lp-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <div style={{ maxWidth: 560, marginBottom: 64 }}>
              <Label>CAMERA DIRECTION</Label>
              <H2>Speaking the language<em style={{ fontStyle: 'italic', color: 'var(--accent)' }}> of cinema.</em></H2>
              <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.8, marginTop: 20 }}>
                Instead of relying on default Unity cameras, I used Cinemachine to choreograph each shot with a specific purpose. Every camera movement was planned to establish location, introduce characters, and maintain momentum throughout the police chase.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <StepDivider num="03" title="Cinemachine Setup" />
          </Reveal>

          <Reveal delay={150}>
            <div className="lp-two-col" style={{ marginBottom: 56, alignItems: 'center' }}>
              <CinematicPlaceholder
                src={camera01}
                alt="Establishing shot over the LEGO city"
                aspectRatio="16/10"
              />
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--muted-foreground)', marginBottom: 12 }}>ESTABLISHING SHOT</p>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 400, color: 'var(--foreground)', marginBottom: 16, lineHeight: 1.25 }}>
                  Introducing the city.
                </h3>
                <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.8 }}>
                  The film opens with a wide aerial view of the LEGO city before gradually moving toward street level. This opening establishes the environment, introduces the scale of the world, and prepares the audience for the chase that follows.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="lp-two-col" style={{ marginBottom: 56, alignItems: 'center' }}>
              <div style={{ order: 2 }}>
                <CinematicPlaceholder
                  src={camera02}
                  alt="Tracking shot following the chase"
                  aspectRatio="16/10"
                />
              </div>
              <div style={{ order: 1 }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--muted-foreground)', marginBottom: 12 }}>TRACKING SHOT</p>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 400, color: 'var(--foreground)', marginBottom: 16, lineHeight: 1.25 }}>
                  Following the pursuit.
                </h3>
                <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.8 }}>
                  Once the chase begins, the camera shifts into a tracking movement that follows the police vehicle through the streets. Keeping the camera close to the action helps maintain momentum while allowing the environment to remain an active part of the story.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <div className="lp-three-col">
              {[
                { label: 'Close-Up', desc: 'Close shots were used to introduce important characters, making the police officer and thief immediately recognizable before the action escalated.' },
                { label: 'Aerial', desc: 'High-angle views revealed the layout of the city and helped connect different parts of the chase into one continuous sequence.' },
                { label: 'CAMERA TRANSITIONS', desc: 'Smooth transitions between Cinemachine virtual cameras allowed each scene to flow naturally while keeping the audience oriented throughout the film.' },
              ].map((shot, i) => (
                <div key={i} style={{ paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 10 }}>{shot.label.toUpperCase()}</p>
                  <p style={{ fontSize: 14, color: 'var(--muted-foreground)', lineHeight: 1.7 }}>{shot.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ANIMATION PROCESS ── */}
      <section className="lp-section" style={{ borderTop: '1px solid var(--border)', backgroundColor: dark ? 'var(--card)' : 'var(--secondary)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <div style={{ maxWidth: 560, marginBottom: 64 }}>
              <Label>ANIMATION PROCESS</Label>
              <H2>From static to cinematic.</H2>
              <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.8, marginTop: 20 }}>
               Unity's Timeline became the backbone of production, bringing together vehicle movement, character animation, camera changes, lighting, and audio into a single sequence. By coordinating every element on one timeline, each shot flowed naturally into the next, creating a cohesive cinematic experience.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <StepDivider num="04" title="Timeline & Sequencing" />
            <div className="lp-two-col-tight" style={{ marginBottom: 24 }}>
              <CinematicPlaceholder src={anim01} alt="Timeline editor" aspectRatio="16/9" />
              <CinematicPlaceholder src={anim02} alt="Vehicle animation" aspectRatio="16/9" />
            </div>
            <div className="lp-three-col">
              {[
                { num: '01', title: 'Vehicle Animation', desc: 'Police vehicles, the tow truck, and supporting objects were animated with keyframes to create consistent movement throughout the chase. Motion was adjusted repeatedly until the pacing felt believable within the LEGO environment.' },
                { num: '02', title: 'Camera Sequencing', desc: 'Each camera transition was timed directly inside Timeline, allowing scenes to cut smoothly between wide establishing shots, close-ups, and tracking cameras without interrupting the flow of the story.' },
                { num: '03', title: 'Final Assembly', desc: 'The complete sequence brought together animation, Cinemachine cameras, lighting, and sound into one editable timeline, making it easier to refine pacing and produce the final short film.' },
              ].map((s) => (
                <div key={s.num} style={{ paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--accent)', display: 'block', marginBottom: 10 }}>{s.num}</span>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)', marginBottom: 8 }}>{s.title}</p>
                  <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PRODUCTION ── */}
      <section className="lp-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <div style={{ maxWidth: 560, marginBottom: 64 }}>
              <Label>PRODUCTION</Label>
              <H2>Inside the workflow.</H2>
              <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.8, marginTop: 20 }}>
                The production pipeline combined modelling in Mecabricks and Blender with scene assembly in Unity. Lighting and rendering decisions were made iteratively — each pass revealing new opportunities to strengthen the atmosphere.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <StepDivider num="05" title="Unity Editor & Rendering" />
            <div className="lp-two-col" style={{ marginBottom: 24, alignItems: 'start' }}>
              <CinematicPlaceholder src={prod01} alt="Unity editor" aspectRatio="16/9" />
              <div>
                <CinematicPlaceholder src={prod02} alt="Scene hierarchy" aspectRatio="16/9" />
              </div>
            </div>

            <div className="lp-four-col">
              {[
                { icon: '🏙️', title: 'Asset Preparation', desc: 'LEGO buildings and props were sourced from Mecabricks before being assembled into a complete city inside Blender. Materials were refined, custom police and thief textures were created, and UV mapping was adjusted where needed before export.' },
                { icon: '💡', title: 'Scene Assembly', desc: 'The finished environment was imported into Unity, where streets, vehicles, characters, and props were organised into the final production scene ready for animation.' },
                { icon: '🎬', title: 'Cinematic Lighting', desc: 'Lighting was adjusted to reinforce the atmosphere of the chase. Shadows, composition, and colour helped guide attention while giving the LEGO environment a more cinematic appearance.' },
                { icon: '🖥️', title: 'Rendering', desc: 'Once animation and camera work were complete, the film was rendered from Unity using URP with post-processing to produce the final short film.' },
              ].map((f) => (
                <div key={f.title} style={{ paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                  <span style={{ fontSize: 22, display: 'block', marginBottom: 12 }}>{f.icon}</span>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)', marginBottom: 8 }}>{f.title}</p>
                  <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FINAL FILM ── */}
      <section className="lp-section-lg" id="film" style={{ borderTop: '1px solid var(--border)', backgroundColor: '#0B0B0B' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <Label>FINAL FILM</Label>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(32px, 4vw, 58px)',
                fontWeight: 400,
                color: '#F0EFEC',
                lineHeight: 1.1,
              }}>
                LEGO Police Story.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div
  style={{
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#000',
    boxShadow: '0 24px 60px rgba(0,0,0,.35)',
  }}
>
  <video
    controls
    preload="metadata"
    poster={filmPoster}
    style={{
      width: '100%',
      display: 'block',
      aspectRatio: '16 / 9',
      backgroundColor: '#000',
    }}
  >
    <source src={finalFilm} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
          </Reveal>

          <Reveal delay={200}>
            <div className="lp-four-col" style={{ marginTop: 56 }}>
              {[
                { label: 'High-Speed Chase', desc: 'A fast-paced pursuit through the LEGO city, designed to maintain momentum while showcasing the environment.' },
                { label: 'Camera Direction', desc: 'A combination of establishing shots, tracking cameras, and close-ups guides the viewer through each stage of the story.' },
                { label: 'Environmental Storytelling', desc: 'The city acts as more than a backdrop. Streets, landmarks, and lighting all help shape the narrative.' },
                { label: 'Police Interception', desc: 'The final confrontation concludes the chase with a clear visual payoff and completes the story arc.' },
              ].map((h) => (
                <div key={h.label} style={{ paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <p style={{ fontSize: 12, fontWeight: 600, color: '#3A9C6A', marginBottom: 8 }}>{h.label}</p>
                  <p style={{ fontSize: 13, color: 'rgba(240,239,236,0.6)', lineHeight: 1.65 }}>{h.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── BEAUTY RENDERS ── */}
      <section className="lp-section" id="renders" style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <div style={{ maxWidth: 560, marginBottom: 64 }}>
              <Label>BEAUTY RENDERS</Label>
              <H2>Composition & atmosphere.</H2>
              <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.8, marginTop: 20 }}>
               A selection of still frames captured from the final render, highlighting composition, lighting, and the visual language developed throughout the project.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
           <div className="lp-gallery" style={{ gap: 10 }}>
  {gallery.map((item, i) => (
    <div
      key={i}
      style={{
        borderRadius: 14,
        overflow: 'hidden',
        aspectRatio: item.aspect,
      }}
    >
      {item.type === 'gif' ? (
        <img
          src={item.src}
          alt={`Animation ${i + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      ) : (
        <img
          src={item.src}
          alt={`Render ${i + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      )}
    </div>
  ))}
</div>
          </Reveal>
        </div>
      </section>

      {/* ── LOOKING BACK ── */}
      <section className="lp-section" style={{ borderTop: '1px solid var(--border)', backgroundColor: dark ? 'var(--card)' : 'var(--secondary)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <Label>LOOKING BACK</Label>
            <H2 center>What this project taught me.</H2>
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 20px)', color: 'var(--muted-foreground)', lineHeight: 1.9, marginTop: 36 }}>
              This project taught me that cinematic storytelling depends on thoughtful planning rather than simply adding more assets. As production progressed, I spent more time refining camera placement, pacing, and composition than creating new content. Small adjustments to framing, movement, and timing often had a greater impact than introducing additional models or effects.

Working across Mecabricks, Blender, and Unity also strengthened my understanding of how different tools fit into a single production workflow. More importantly, it reinforced the value of iteration. Revisiting scenes repeatedly was what transformed a technical exercise into a more engaging cinematic experience.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── IF I CONTINUED ── */}
      <section style={{ padding: '120px 40px', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <div style={{ maxWidth: 560, marginBottom: 64 }}>
              <Label>IF I CONTINUED</Label>
              <H2>Future iterations</H2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="lp-six-col">
              {[
                { title: 'Improve character animation', desc: 'Create more expressive character movement and interactions to make each scene feel more alive.' },
                { title: 'Expand the story', desc: 'Develop a longer narrative with additional locations, supporting characters, and more varied chase sequences.' },
                { title: 'Refine cinematic lighting', desc: 'Experiment with more advanced lighting techniques and post-processing to strengthen mood and atmosphere.' },
                { title: 'Explore advanced camera work', desc: 'Use more complex Cinemachine setups, smoother transitions, and dynamic camera movements to elevate the storytelling.' },
              
              ].map((r, i) => (
               <div key={r.title} style={{ padding: '28px 24px', borderRadius: 12, backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--accent)', display: 'block', marginBottom: 12 }}>0{i + 1}</span>
                <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--foreground)', marginBottom: 10 }}>{r.title}</p>
                <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.65 }}>{r.desc}</p>
              </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── UP NEXT ── */}
      <section
        style={{
          padding: '96px 40px',
          borderTop: '1px solid var(--border)',
          backgroundColor: dark ? 'var(--card)' : 'var(--secondary)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.18em',
              color: 'var(--muted-foreground)',
              marginBottom: 24,
              textAlign: 'center',
            }}
          >
            UP NEXT
          </p>

          <Link
            to="/projects/nouri"
            style={{ display: 'block', textDecoration: 'none' }}
          >
            <div
              className="lp-next-card"
              style={{
                borderRadius: 16,
                overflow: 'hidden',
                border: '1px solid var(--border)',
                backgroundColor: dark ? 'var(--background)' : 'var(--card)',
                transition: 'box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.12)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = 'none')
              }
            >
              <div
                className="lp-next-text"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    color: 'var(--accent)',
                    marginBottom: 16,
                  }}
                >
                  BRANDING • PACKAGING
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(28px, 3vw, 42px)',
                    fontWeight: 400,
                    color: 'var(--foreground)',
                    lineHeight: 1.2,
                    marginBottom: 16,
                  }}
                >
                  Nouri
                </h3>

                <p
                  style={{
                    fontSize: 15,
                    color: 'var(--muted-foreground)',
                    lineHeight: 1.7,
                    marginBottom: 32,
                    maxWidth: 460,
                  }}
                >
                  Building a healthy frozen dessert brand through strategy,
                  visual identity, packaging, and customer experience.
                </p>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: 14,
                    fontWeight: 600,
                    color: 'var(--accent)',
                  }}
                >
                  View Next Project →
                </span>
              </div>

              <div
                className="lp-next-img"
                style={{
                  overflow: 'hidden',
                  backgroundColor: 'var(--muted)',
                }}
              >
                <img
                  src={nouri}
                  alt="Nouri project preview"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="lp-section-footer" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="lp-footer-inner" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <a href="/" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--muted-foreground)', textDecoration: 'none' }}>ITUNU OGUNFUYE</a>
          <span style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>© 2026 Itunu Ogunfuye. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tunu?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
              { label: 'Behance', href: 'https://www.behance.net/feranmiireyemi' },
              { label: 'GitHub', href: 'https://github.com/itunuogunfuye-cmd' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 12, fontWeight: 500, color: 'var(--muted-foreground)', textDecoration: 'none', opacity: 0.65, transition: 'opacity 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.65' }}
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
