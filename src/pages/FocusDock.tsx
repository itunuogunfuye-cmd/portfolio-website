import { Link } from 'react-router'
import { useTheme } from '@/context/theme'
import focusDockImg from '@/imports/Dockfinal.png'
import smartPantryImg from '@/imports/lego.png'
import cardboard01 from '@/assets/focus-dock/cardboard-01.jpg'
import cardboard02 from '@/assets/focus-dock/cardboard-02.jpg'
import cad01 from '@/assets/focus-dock/cad-01.png'
import cad02 from '@/assets/focus-dock/cad-02.png'
import electronics01 from '@/assets/focus-dock/electronics-01a.png'
import electronics02 from '@/assets/focus-dock/electronics-02a.png'
import electronics03 from '@/assets/focus-dock/electronics-03.jpg'
import electronics04 from '@/assets/focus-dock/electronics-04.jpeg'
import detail01 from '@/assets/focus-dock/detail-front.png'
import detail02 from '@/assets/focus-dock/Detail-back.png'
import screen01 from '@/assets/focus-dock/screen-01.jpg'
import screen02 from '@/assets/focus-dock/screen-02.jpg'
import screen03 from '@/assets/focus-dock/screen-03.jpg'
import sketch01 from '@/assets/focus-dock/sketch-01.png'
import sketch02 from '@/assets/focus-dock/sketch-02.png'
import research from '@/assets/focus-dock/research.png'
import fabrication01 from '@/assets/focus-dock/fabrication-01.png'
import fabrication02 from '@/assets/focus-dock/fabrication-02.png'


const responsiveStyles = `
  /* ── Section padding ── */
  .fd-section        { padding: 120px 40px; }
  .fd-section-sm     { padding: 96px 40px; }
  .fd-section-lg     { padding: 140px 40px; }
  .fd-section-footer { padding: 28px 40px; }

  /* ── Hero ── */
  .fd-hero-inner  { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
  .fd-hero-image  { min-height: 520px; }

  /* ── Generic two-column ── */
  .fd-two-col        { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; }
  .fd-two-col-md     { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
  .fd-two-col-tight  { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

  /* ── Electronics three-col ── */
  .fd-three-col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }

  /* ── App features four-col ── */
  .fd-four-col  { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }

  /* ── Final product features five-col ── */
  .fd-five-col  { display: grid; grid-template-columns: repeat(5, 1fr); gap: 28px; }

  /* ── Roadmap five-col ── */
  .fd-roadmap   { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }

  /* ── Up-next card ── */
  .fd-next-card { display: grid; grid-template-columns: 1fr 1fr; }
  .fd-next-text { padding: 56px 48px; }
  .fd-next-img  { min-height: 320px; }

  /* ── Footer ── */
  .fd-footer-inner { display: flex; align-items: center; justify-content: space-between; gap: 16px; }

  /* ── Phone mockups row ── */
  .fd-phones { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; margin-bottom: 72px; }
  .fd-phone-frame { width: 200px; height: 400px; flex-shrink: 0; }

  /* ── Meta row ── */
  .fd-meta { display: flex; gap: 40px; padding-top: 4px; flex-wrap: wrap; }

  /* ── CTA row ── */
  .fd-ctas { display: flex; gap: 12px; flex-wrap: wrap; }

  /* ════════════════ TABLET  ≤ 1024px ════════════════ */
  @media (max-width: 1024px) {
    .fd-section        { padding: 96px 32px; }
    .fd-section-sm     { padding: 72px 32px; }
    .fd-section-lg     { padding: 112px 32px; }
    .fd-section-footer { padding: 24px 32px; }

    .fd-hero-inner  { grid-template-columns: 1fr; gap: 48px; }
    .fd-hero-image  { min-height: 380px; }

    .fd-two-col     { grid-template-columns: 1fr; gap: 48px; }
    .fd-two-col-md  { grid-template-columns: 1fr; gap: 32px; }

    .fd-five-col    { grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .fd-roadmap     { grid-template-columns: repeat(3, 1fr); gap: 16px; }

    .fd-next-text   { padding: 40px 36px; }
  }

  /* ════════════════ MOBILE  ≤ 640px ════════════════ */
  @media (max-width: 640px) {
    .fd-section        { padding: 72px 20px; }
    .fd-section-sm     { padding: 56px 20px; }
    .fd-section-lg     { padding: 80px 20px; }
    .fd-section-footer { padding: 24px 20px; }

    .fd-hero-inner  { grid-template-columns: 1fr; gap: 36px; }
    .fd-hero-image  { min-height: 280px; }

    .fd-two-col        { grid-template-columns: 1fr; gap: 32px; }
    .fd-two-col-md     { grid-template-columns: 1fr; gap: 24px; }
    .fd-two-col-tight  { grid-template-columns: 1fr; gap: 12px; }

    .fd-three-col   { grid-template-columns: 1fr; gap: 12px; }
    .fd-four-col    { grid-template-columns: 1fr 1fr; gap: 16px; }
    .fd-five-col    { grid-template-columns: 1fr 1fr; gap: 16px; }
    .fd-roadmap     { grid-template-columns: 1fr 1fr; gap: 12px; }

    .fd-next-card   { grid-template-columns: 1fr; }
    .fd-next-text   { padding: 36px 24px; }
    .fd-next-img    { min-height: 220px; }

    .fd-footer-inner { flex-direction: column; text-align: center; gap: 12px; }

    .fd-phones      { gap: 24px; }
    .fd-phone-frame { width: 160px; height: 320px; }

    .fd-meta        { gap: 24px; }
  }
`

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
      fontSize: 'clamp(32px, 4vw, 56px)',
      fontWeight: 400,
      color: 'var(--foreground)',
      lineHeight: 1.12,
      textAlign: center ? 'center' : 'left',
    }}>{children}</h2>
  )
}

function StepDivider({ num, title }: { num: string; title: string }) {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 36 }}>
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 400, color: 'var(--foreground)', whiteSpace: 'nowrap' }}>
        {title}
      </h3>
      <span style={{ height: 1, flex: 1, backgroundColor: 'var(--border)' }} />
      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--accent)', whiteSpace: 'nowrap' }}>
        {num}
      </span>
    </div>
  )
}

function PhoneMockup({ src, label }: { src: string; label: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <div
        className="fd-phone-frame"
        style={{
          borderRadius: 32,
          overflow: 'hidden',
          border: '6px solid var(--border)',
          backgroundColor: 'var(--card)',
          boxShadow: '0 24px 60px rgba(0,0,0,0.12)',
        }}
      >
        <img src={src} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--muted-foreground)', letterSpacing: '0.06em' }}>{label}</span>
    </div>
  )
}

export default function FocusDock() {
  const { dark } = useTheme()

  return (
    <div style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <style>{responsiveStyles}</style>

      {/* ── HERO ── */}
      <section style={{ paddingTop: 64, minHeight: '100vh', display: 'flex', alignItems: 'stretch' }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            width: '100%',
            padding: 'clamp(32px, 5vw, 80px) clamp(20px, 5vw, 40px)',
          }}
        >
          <div className="fd-hero-inner">

            {/* Left */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {/* Tags */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['PROJECT', 'HARDWARE', 'IoT', '#01'].map((tag) => (
                  <span key={tag} style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--muted-foreground)', padding: '4px 10px', borderRadius: 999, border: '1px solid var(--border)', backgroundColor: 'var(--muted)' }}>
                    {tag}
                  </span>
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
                Focus<br />Dock
              </h1>

              <p style={{ fontSize: 'clamp(15px, 1.8vw, 17px)', color: 'var(--muted-foreground)', lineHeight: 1.75, maxWidth: 400 }}>
                A smart productivity dock that helps stop distracted by combining physical interaction with a connected mobile experience.
              </p>

              {/* Meta row */}
              <div className="fd-meta">
                {[
                  { label: 'Role', value: 'Product Designer' },
                  { label: 'Duration', value: 'Mar-Jun 2026' },
                  { label: 'DISCIPLINES', value: 'Hardware • Mobile App • IoT' },
                ].map((m) => (
                  <div key={m.label}>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.13em', color: 'var(--muted-foreground)', marginBottom: 5 }}>{m.label.toUpperCase()}</p>
                    <p style={{ fontSize: 13, color: 'var(--foreground)', fontWeight: 500 }}>{m.value}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="fd-ctas">
                <a
                  href="https://youtube.com/shorts/JVHsqTB-SqU"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '11px 22px',
                    borderRadius: 8,
                    backgroundColor: 'var(--foreground)',
                    color: 'var(--background)',
                    fontSize: 13,
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'opacity 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none'; }}
                >
                  Watch Product Demo ↗
                </a>
                <a
                  href="https://github.com/itunuogunfuye-cmd/focus-dock"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '11px 22px',
                    borderRadius: 8,
                    backgroundColor: 'transparent',
                    color: 'var(--foreground)',
                    border: '1px solid var(--border)',
                    fontSize: 13,
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'background-color 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--muted)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'none'; }}
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            {/* Right — product image */}
            <div
              className="fd-hero-image"
              style={{ borderRadius: 16, overflow: 'hidden', backgroundColor: 'var(--card)' }}
            >
              <img
                src={focusDockImg}
                alt="Focus Dock product"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM + SOLUTION ── */}
      <section className="fd-section" style={{ borderTop: '1px solid var(--border)', backgroundColor: dark ? 'var(--card)' : 'var(--secondary)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="fd-two-col">

            {/* Problem */}
            <div>
              <Label>THE PROBLEM</Label>
              <H2>Distractions are always one tap away.</H2>
              <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.8, marginTop: 24, marginBottom: 32 }}>
                Smartphones are one of the biggest sources of distraction while studying.
                Existing focus apps rely on willpower alone, making it easy to ignore reminders
                and return to distractions.
              </p>
              <div style={{ padding: '28px 32px', borderRadius: 12, border: '1px solid var(--border)', backgroundColor: dark ? 'var(--background)' : 'var(--card)' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 400, fontStyle: 'italic', color: 'var(--foreground)', lineHeight: 1.5 }}>
                  "How might we encourage focus without taking the phone away?"
                </p>
              </div>
            </div>

            {/* Solution */}
            <div>
              <Label>THE SOLUTION</Label>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 400, color: 'var(--foreground)', lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: 24 }}>
                Focus Dock.
              </h2>
              <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.8, marginBottom: 32 }}>
                A physical dock paired with a mobile app that helps you start a focus session, step away from the screen, and reclaim your attention.
              </p>
              <div className="fd-two-col-tight">
                {[detail01, detail02].map((src, i) => (
                  <div key={i} style={{ borderRadius: 8, overflow: 'hidden', backgroundColor: 'var(--muted)' }}>
                    <img src={src} alt={`Focus Dock detail ${i + 1}`} style={{ width: '100%', aspectRatio: '3/3', objectFit: 'cover', display: 'block' }} />
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 24 }}>
                {['Physical Dock', 'Ambient LED', 'Mobile App', 'Voice Feedback'].map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--muted-foreground)' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'inline-block' }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESIGN JOURNEY ── */}
      <section className="fd-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ maxWidth: 640, marginBottom: 80 }}>
            <Label>DESIGN JOURNEY</Label>
            <H2>From idea to functional product.</H2>
          </div>

          {/* RESEARCH */}
          <div style={{ marginBottom: 96 }}>
            <StepDivider num="01" title="Research" />
            <div className="fd-two-col-md" style={{ alignItems: 'start' }}>
              <div style={{ borderRadius: 12, overflow: 'hidden', backgroundColor: 'var(--card)' }}>
                <img src={research} alt="Research" style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover', display: 'block' }} />
              </div>
              <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.8, paddingTop: 8 }}>
                Research focused on understanding why phones become a constant source of distraction during study sessions. Rather than competing for attention with another app, the goal became designing a physical interaction that naturally supports focused work.
              </p>
            </div>
          </div>

          {/* SKETCHES */}
          <div style={{ marginBottom: 96, paddingTop: 64, borderTop: '1px solid var(--border)' }}>
            <StepDivider num="02" title="Early Concept Exploration" />
            <div className="fd-two-col-tight" style={{ marginBottom: 24 }}>
              <div style={{ borderRadius: 12, overflow: 'hidden', backgroundColor: 'var(--card)' }}>
                <img src={sketch02} alt="Sketch A" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ borderRadius: 12, overflow: 'hidden', backgroundColor: 'var(--card)' }}>
                <img src={sketch01} alt="Sketch B" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
            <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.8, maxWidth: 640 }}>
              Early sketches explored different approaches to phone placement, interaction, and enclosure design. Several concepts, including a sliding mechanism, an integrated timer, NFC interaction, and adjustable phone support, were evaluated before simplifying the product into its final form.
            </p>
          </div>

          {/* CARDBOARD */}
          <div style={{ marginBottom: 96, paddingTop: 64, borderTop: '1px solid var(--border)' }}>
            <StepDivider num="03" title="Cardboard Prototype" />
            <div className="fd-two-col-tight" style={{ marginBottom: 24 }}>
              <div style={{ borderRadius: 12, overflow: 'hidden', backgroundColor: 'var(--card)' }}>
                <img src={cardboard01} alt="Cardboard A" style={{ width: '100%', aspectRatio: '3/3', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ borderRadius: 12, overflow: 'hidden', backgroundColor: 'var(--card)' }}>
                <img src={cardboard02} alt="Cardboard B" style={{ width: '100%', aspectRatio: '3/3', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
            <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.8, maxWidth: 640 }}>
              A quick cardboard prototype was used to validate the product's overall form, phone placement, and interaction flow before investing time in CAD modelling and laser-cut fabrication.
            </p>
          </div>

          {/* CAD */}
          <div style={{ paddingTop: 64, borderTop: '1px solid var(--border)' }}>
            <StepDivider num="04" title="Designing the Enclosure" />
            <div className="fd-two-col-tight" style={{ marginBottom: 24 }}>
              <div style={{ borderRadius: 12, overflow: 'hidden', backgroundColor: 'var(--card)' }}>
                <img src={cad01} alt="CAD A" style={{ width: '100%', aspectRatio: '3/3', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ borderRadius: 12, overflow: 'hidden', backgroundColor: 'var(--card)' }}>
                <img src={cad02} alt="CAD B" style={{ width: '100%', aspectRatio: '3/3', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
            <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.8, maxWidth: 640 }}>
              The enclosure evolved through multiple CAD iterations, balancing manufacturability, ergonomics, and a clean desktop presence. The final design uses laser-cut MDF panels with a subtle rearward tilt that improves visibility, encourages interaction, and provides space for the internal electronics.
            </p>
          </div>
        </div>
      </section>

      {/* ── ELECTRONICS ── */}
      <section className="fd-section" style={{ borderTop: '1px solid var(--border)', backgroundColor: dark ? 'var(--card)' : 'var(--secondary)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="fd-two-col" style={{ alignItems: 'center', marginBottom: 48 }}>
            <div>
              <Label>ELECTRONICS</Label>
              <H2>Technology behind the experience.</H2>
              <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.8, marginTop: 24, marginBottom: 32 }}>
                Every electronic component was selected to support the experience rather than become the focus.
                An Arduino coordinates the hardware, reading the force sensor beneath the phone tray, controlling ambient lighting,
                triggering audio feedback, and communicating with the companion app over Bluetooth—all hidden inside the enclosure.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Arduino Nano', 'Bluetooth LE', 'LED Strip', 'FSR Sensor', 'Rotary Encoder', 'Voice Module'].map((tag) => (
                  <span key={tag} style={{ padding: '6px 14px', borderRadius: 999, border: '1px solid var(--border)', fontSize: 12, fontWeight: 500, color: 'var(--foreground)', backgroundColor: dark ? 'var(--background)' : 'var(--card)' }}>{tag}</span>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: 12, overflow: 'hidden', backgroundColor: 'var(--card)' }}>
              <img src={electronics04} alt="Electronics internals" style={{ width: '100%', aspectRatio: '3/3', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
          <div className="fd-three-col">
            {[electronics02, electronics01, electronics03].map((src, i) => (
              <div key={i} style={{ borderRadius: 10, overflow: 'hidden', backgroundColor: 'var(--card)' }}>
                <img src={src} alt={`Electronics ${i + 1}`} style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FABRICATION ── */}
      <section className="fd-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ maxWidth: 560, marginBottom: 64 }}>
            <Label>FABRICATION</Label>
            <H2>Made by hand.</H2>
            <p style={{ fontSize: 17, color: 'var(--muted-foreground)', lineHeight: 1.8, marginTop: 24 }}>
              Fabrication combined digital design with physical making. Laser-cut MDF panels formed the enclosure, while each component was assembled and integrated by hand to create the final working prototype.
            </p>
          </div>
          <div className="fd-two-col-tight">
            <div style={{ borderRadius: 12, overflow: 'hidden', backgroundColor: 'var(--card)' }}>
              <img src={fabrication01} alt="Laser cutting" style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ borderRadius: 12, overflow: 'hidden', backgroundColor: 'var(--card)' }}>
              <img src={fabrication02} alt="Assembly" style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPANION APP ── */}
      <section className="fd-section" style={{ borderTop: '1px solid var(--border)', backgroundColor: dark ? 'var(--card)' : 'var(--secondary)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ maxWidth: 560, marginBottom: 72 }}>
            <Label>COMPANION APP</Label>
            <H2>A Digital Companion</H2>
            <p style={{ fontSize: 17, color: 'var(--muted-foreground)', lineHeight: 1.8, marginTop: 24 }}>
              The app complements the physical dock rather than competing with it.
              It provides essential session information, and progress tracking,
              while keeping the experience calm and distraction-free.
            </p>
          </div>
          <div className="fd-phones">
            <PhoneMockup src={screen01} label="Focus Session" />
            <PhoneMockup src={screen02} label="Overview" />
            <PhoneMockup src={screen03} label="History" />
          </div>
          <div className="fd-four-col">
            {[
              { icon: '📡', title: 'Seamless Pairing', desc: 'Connects wirelessly to the dock and automatically reconnects for future sessions.' },
              { icon: '⏱', title: 'Focused Sessions', desc: 'Start a focus session with a custom duration or the built-in Pomodoro timer.' },
              { icon: '📈', title: 'Track Progress', desc: 'Review completed focus sessions and track your consistency over time.' },
              { icon: '⚙️', title: 'Personalisation', desc: 'Personalise the dock with adjustable lighting, audio feedback, and session preferences.' },
            ].map((f) => (
              <div key={f.title} style={{ paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                <span style={{ fontSize: 22, display: 'block', marginBottom: 12 }}>{f.icon}</span>
                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)', marginBottom: 8 }}>{f.title}</p>
                <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL PRODUCT ── */}
      <section className="fd-section-lg" style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <Label>FINAL PRODUCT</Label>
            <H2 center>Built to help you focus, simply.</H2>
          </div>

          <div style={{ background: '#0D0D0D', borderRadius: 28, padding: 'clamp(32px, 6vw, 80px)', overflow: 'hidden', marginBottom: 72 }}>
            <img
              src={focusDockImg}
              alt="Focus Dock final"
              style={{ width: '100%', maxWidth: 900, display: 'block', margin: '0 auto', objectFit: 'contain', userSelect: 'none' }}
            />
          </div>

          <div className="fd-five-col">
            {[
              { icon: '⚡', title: 'Wireless Charging', description: 'Qi-compatible charging keeps your phone powered during every focus session.' },
              { icon: '📡', title: 'Bluetooth', description: 'Instant connection with the companion app for seamless control.' },
              { icon: '🌿', title: 'Ambient LED', description: 'Soft green lighting provides calm visual feedback without distraction.' },
              { icon: '🤚', title: 'Physical Interaction', description: 'Placing the phone becomes a deliberate gesture to begin deep work.' },
              { icon: '🔊', title: 'Voice Feedback', description: 'Optional audio cues confirm the start and end of every session.' },
            ].map((feature) => (
              <div key={feature.title} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 26, marginBottom: 18 }}>{feature.icon}</div>
                <h4 style={{ fontSize: 15, fontWeight: 600, color: 'var(--foreground)', marginBottom: 10 }}>{feature.title}</h4>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--muted-foreground)' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOOKING BACK ── */}
      <section className="fd-section" style={{ borderTop: '1px solid var(--border)', backgroundColor: dark ? 'var(--card)' : 'var(--secondary)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <Label>LOOKING BACK</Label>
          <H2 center>What the process taught me.</H2>
          <p style={{ fontSize: 'clamp(16px, 1.8vw, 20px)', color: 'var(--muted-foreground)', lineHeight: 1.9, marginTop: 36 }}>
            Focus Dock taught me that successful product design isn't about building the perfect
            solution on the first attempt. The strongest ideas emerged through rapid prototyping,
            testing, and simplifying. What began as a complex concept evolved into a cleaner
            experience by focusing on user behaviour rather than unnecessary features.
          </p>
        </div>
      </section>

      {/* ── IF I CONTINUED ── */}
      <section className="fd-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ maxWidth: 560, marginBottom: 64 }}>
            <Label>IF I CONTINUED</Label>
            <H2>Future iterations</H2>
          </div>
          <div className="fd-roadmap">
            {[
              { title: 'Custom PCB', desc: 'Replace the dev-board with a purpose-built circuit for a slimmer enclosure.' },
              { title: 'Premium Enclosure', desc: 'Explore walnut, aluminium, and recycled materials for a retail-grade finish.' },
              { title: 'Native Notifications', desc: 'OS integration for smarter, context-aware focus nudges.' },
              { title: 'NFC Automation', desc: 'Tap-to-dock triggers shortcuts and focus modes automatically.' },
              { title: 'Enhanced Insights', desc: 'Expand productivity analytics while adding new lighting themes and audio options.' },
            ].map((r, i) => (
              <div key={r.title} style={{ padding: '28px 24px', borderRadius: 12, backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--accent)', display: 'block', marginBottom: 12 }}>0{i + 1}</span>
                <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--foreground)', marginBottom: 10 }}>{r.title}</p>
                <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.65 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UP NEXT ── */}
      <section className="fd-section-sm" style={{ borderTop: '1px solid var(--border)', backgroundColor: dark ? 'var(--card)' : 'var(--secondary)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', color: 'var(--muted-foreground)', marginBottom: 24, textAlign: 'center' }}>UP NEXT</p>
          <Link to="/" style={{ display: 'block', textDecoration: 'none' }}>
            <div
              className="fd-next-card"
              style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border)', backgroundColor: dark ? 'var(--background)' : 'var(--card)', transition: 'box-shadow 0.3s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
              <div className="fd-next-text" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--accent)', marginBottom: 16 }}>BRANDING • PACKAGING</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 400, color: 'var(--foreground)', marginBottom: 16, lineHeight: 1.2 }}>Nouri</h3>
                <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.7, marginBottom: 32 }}>
                  Building a healthy frozen dessert brand from strategy and visual identity to packaging and customer experience.
                </p>
                <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>View Next Project →</span>
              </div>
              <div className="fd-next-img" style={{ overflow: 'hidden', backgroundColor: 'var(--muted)' }}>
                <img src={smartPantryImg} alt="Next project" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="fd-section-footer" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="fd-footer-inner" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Link to="/" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--muted-foreground)', textDecoration: 'none' }}>ITUNU OGUNFUYE</Link>
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
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.65'; }}
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
