import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { useTheme } from '@/context/theme'
import nouriWordmarkPng from '@/assets/nouri/Asset 2.png'
import bothcolorwaysPng from '@/assets/nouri/Asset 2.png'
import logoVariation01Png from '@/assets/nouri/Asset 4.png'
import logoVariation02Png from '@/assets/nouri/Asset 5.png'
import logoVariation03Png from '@/assets/nouri/Asset 6.png'
import logoVariation04Png from '@/assets/nouri/Asset 7.png'
import backPanelImg from '@/assets/nouri/Nouri-10.png'
import darkBackPanelImg from '@/assets/nouri/Nouri-dark.png'
import flatLabelPng from '@/assets/nouri/flat label.png'


/* ─── Unsplash placeholder images ─── */
const IMG = {
    hero: 'https://images.unsplash.com/photo-1629385744299-74b9cf013f52?w=1200&h=900&fit=crop&auto=format',
    brief: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=900&h=700&fit=crop&auto=format',
    texture1: 'https://images.unsplash.com/photo-1775582324875-f70695d963e9?w=1200&h=800&fit=crop&auto=format',
    texture2: 'https://images.unsplash.com/photo-1766739347473-0036db7a8828?w=900&h=700&fit=crop&auto=format',
    ingredient1: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=600&h=900&fit=crop&auto=format',
    ingredient2: 'https://images.unsplash.com/photo-1438907046657-4ae137eb8c5e?w=600&h=900&fit=crop&auto=format',
    ingredient3: 'https://images.unsplash.com/photo-1549007953-2f2dc0b24019?w=600&h=900&fit=crop&auto=format',
    packaging1: 'https://images.unsplash.com/photo-1629385742818-32909d7b45a2?w=900&h=700&fit=crop&auto=format',
    packaging2: 'https://images.unsplash.com/photo-1717853411695-c9f844e1df46?w=900&h=700&fit=crop&auto=format',
    cone: 'https://images.unsplash.com/photo-1563589173312-476d8c36b242?w=900&h=700&fit=crop&auto=format',
    scoops: flatLabelPng,
    nextProject: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=900&h=600&fit=crop&auto=format',
}

/* ─── Responsive styles ─── */
const responsiveStyles = `
  .nr-section        { padding: 120px 40px; }
  .nr-section-sm     { padding: 96px 40px; }
  .nr-section-lg     { padding: 160px 40px; }
  .nr-section-footer { padding: 28px 40px; }

  .nr-hero-inner  { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
  .nr-hero-image  { min-height: 560px; }

  .nr-two-col        { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; }
  .nr-two-col-md     { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
  .nr-two-col-tight  { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .nr-three-col      { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .nr-four-col       { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .nr-five-col       { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
  .nr-six-col        { display: grid; grid-template-columns: repeat(6, 1fr); gap: 20px; }
  .nr-roadmap        { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
  .nr-ds-grid        { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }

  .nr-next-card { display: grid; grid-template-columns: 1fr 1fr; }
  .nr-next-text { padding: 56px 48px; }
  .nr-next-img  { min-height: 320px; }

  .nr-footer-inner { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
  .nr-meta { display: flex; gap: 40px; padding-top: 4px; flex-wrap: wrap; }
  .nr-ctas { display: flex; gap: 12px; flex-wrap: wrap; }

  .nr-reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.75s ease, transform 0.75s ease; }
  .nr-reveal.visible { opacity: 1; transform: translateY(0); }

  .nr-img-zoom { overflow: hidden; }
  .nr-img-zoom img { transition: transform 0.6s ease; }
  .nr-img-zoom:hover img { transform: scale(1.04); }

  @media (max-width: 1024px) {
    .nr-section        { padding: 96px 32px; }
    .nr-section-sm     { padding: 72px 32px; }
    .nr-section-lg     { padding: 112px 32px; }
    .nr-section-footer { padding: 24px 32px; }

    .nr-hero-inner  { grid-template-columns: 1fr; gap: 48px; }
    .nr-hero-image  { min-height: 400px; }

    .nr-two-col     { grid-template-columns: 1fr; gap: 48px; }
    .nr-two-col-md  { grid-template-columns: 1fr; gap: 32px; }

    .nr-six-col     { grid-template-columns: repeat(3, 1fr); gap: 16px; }
    .nr-roadmap     { grid-template-columns: repeat(2, 1fr); gap: 16px; }
    .nr-four-col    { grid-template-columns: repeat(2, 1fr); gap: 20px; }
    .nr-five-col    { grid-template-columns: repeat(3, 1fr); gap: 16px; }
    .nr-ds-grid     { grid-template-columns: 1fr; gap: 24px; }
    .nr-next-text   { padding: 40px 36px; }
  }

  @media (max-width: 640px) {
    .nr-section        { padding: 72px 20px; }
    .nr-section-sm     { padding: 56px 20px; }
    .nr-section-lg     { padding: 80px 20px; }
    .nr-section-footer { padding: 24px 20px; }

    .nr-hero-inner  { grid-template-columns: 1fr; gap: 36px; }
    .nr-hero-image  { min-height: 280px; }

    .nr-two-col        { grid-template-columns: 1fr; gap: 32px; }
    .nr-two-col-md     { grid-template-columns: 1fr; gap: 24px; }
    .nr-two-col-tight  { grid-template-columns: 1fr; gap: 12px; }

    .nr-three-col   { grid-template-columns: 1fr; gap: 16px; }
    .nr-four-col    { grid-template-columns: 1fr; gap: 16px; }
    .nr-five-col    { grid-template-columns: repeat(2, 1fr); gap: 12px; }
    .nr-six-col     { grid-template-columns: repeat(2, 1fr); gap: 12px; }
    .nr-roadmap     { grid-template-columns: 1fr; gap: 12px; }
    .nr-ds-grid     { grid-template-columns: 1fr; gap: 20px; }

    .nr-next-card   { grid-template-columns: 1fr; }
    .nr-next-text   { padding: 36px 24px; }
    .nr-next-img    { min-height: 220px; }

    .nr-footer-inner { flex-direction: column; text-align: center; gap: 12px; }
    .nr-meta        { gap: 24px; }
  }
`

/* ─── Neutral core ─── */
const NEUTRAL_CORE = [
    { name: 'Oat', hex: '#E3D9C8', role: 'The brand field. Every pack is mostly this.' },
    { name: 'Ivory', hex: '#F7F1E2', role: 'Reversed type on Ink and on the three dark flavour fields.' },
    { name: 'Oat Light', hex: '#EFE7DA', role: 'Cards, lifts, anything that needs to sit off the oat.' },
    { name: 'Oat Deep', hex: '#DED2BC', role: 'Nutrition panels and supporting information blocks.' },
    { name: 'Ink', hex: '#241C15', role: 'All type, all rules. Warm black, never pure black.' },
]

/* ─── Flavour system ─── */
const FLAVOURS = [
    { name: 'Mango Bliss', field: '#D38906', deep: '#8B4500', tint: '#F7E4A8', typeOnField: 'Ink' },
    { name: 'Strawberry Delight', field: '#C41360', deep: '#7A0B3C', tint: '#F9C4D8', typeOnField: 'Ivory' },
    { name: 'Berry Burst', field: '#6040A8', deep: '#3A2478', tint: '#D4C8F0', typeOnField: 'Ivory' },
    { name: 'Cocoa Dream', field: '#5A2C1C', deep: '#3A180C', tint: '#E8D4BC', typeOnField: 'Ivory' },
    { name: 'Banana Cinnamon', field: '#C49010', deep: '#7A5010', tint: '#F4E0A8', typeOnField: 'Ink' },
    { name: 'Coconut Vanilla', field: '#EDE0C8', deep: '#8A7050', tint: '#F5F2E8', typeOnField: 'Ink' },
]

/* ─── Sub-components ─── */
function Label({ children }: { children: React.ReactNode }) {
    return (
        <p style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.18em',
            color: 'var(--accent)',
            marginBottom: 16,
        }}>
            {children}
        </p>
    )
}

function H2({ children, center }: { children: React.ReactNode; center?: boolean }) {
    return (
        <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 4vw, 52px)',
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
            <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(16px, 2vw, 22px)',
                fontWeight: 400,
                color: 'var(--foreground)',
                whiteSpace: 'nowrap',
            }}>
                {title}
            </h3>
            <span style={{ height: 1, flex: 1, backgroundColor: 'var(--border)' }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--accent)', whiteSpace: 'nowrap' }}>
                {num}
            </span>
        </div>
    )
}

/* ─── Scroll reveal ─── */
function useReveal() {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('visible')
                    observer.disconnect()
                }
            },
            { threshold: 0.1 },
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])
    return ref
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useReveal()
    return (
        <div ref={ref} className="nr-reveal" style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    )
}

/* ─── Image with placeholder label ─── */
function ImgZoom({
    src,
    alt,
    placeholder,
    aspect,
    height,
    radius = 12,
    objectPosition = 'center',
}: {
    src: string
    alt: string
    placeholder?: string
    aspect?: string
    height?: number | string
    radius?: number
    objectPosition?: string
}) {
    return (
        <div style={{ position: 'relative' }}>
            <div
                className="nr-img-zoom"
                style={{
                    borderRadius: radius,
                    overflow: 'hidden',
                    backgroundColor: 'var(--muted)',
                    aspectRatio: aspect,
                    height,
                }}
            >
                <img
                    src={src}
                    alt={alt}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition,
                        display: 'block',
                    }}
                />
            </div>
            {placeholder && (
                <p style={{
                    fontSize: 10,
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--muted-foreground)',
                    letterSpacing: '0.08em',
                    marginTop: 8,
                    opacity: 0.7,
                }}>
                    {placeholder}
                </p>
            )}
        </div>
    )
}

/*
 * NouriWordmark — crops the two-halves PNG to the correct colourway.
 * Top half: Ivory on Ink (dark mode). Bottom half: Ink on Oat Light (light mode).
 */
function NouriWordmark({ size = 72 }: { size?: number }) {
    const { dark } = useTheme()
    return (
        <div style={{ height: size, overflow: 'hidden', display: 'inline-block', flexShrink: 0 }}>
            <img
                src={nouriWordmarkPng}
                alt="nouri"
                style={{
                    height: size * 2,
                    width: 'auto',
                    display: 'block',
                    transform: dark ? 'translateY(0)' : 'translateY(-50%)',
                    transition: 'transform 0.25s ease',
                }}
            />
        </div>
    )
}

/* ═══════════════════════════════════════════════
   Main component
═══════════════════════════════════════════════ */
export default function Nouri() {
    const { dark } = useTheme()

    const nouriTheme = {
        ['--background' as any]: dark ? '#2d241e' : '#F7F1E2',
        ['--foreground' as any]: dark ? '#F7F1E2' : '#261D17',
        ['--card' as any]: dark ? '#241c15' : '#E3D9C8',
        ['--card-foreground' as any]: dark ? '#F7F1E2' : '#241C15',
        ['--primary' as any]: dark ? '#F7F1E2' : '#241C15',
        ['--primary-foreground' as any]: dark ? '#241C15' : '#F7F1E2',
        ['--secondary' as any]: dark ? '#332A26' : '#EFE7DA',
        ['--secondary-foreground' as any]: dark ? '#E3D9C8' : '#44505f',
        ['--muted' as any]: dark ? '#3B2F2A' : '#F2ECE3',
        ['--muted-foreground' as any]: dark ? '#D8C4AE' : '#4f506b',
        ['--accent' as any]: dark ? '#E3D9C8' : '#C9682A',
        ['--accent-foreground' as any]: dark ? '#241c15' : '#F7F1E2',
        ['--border' as any]: dark ? '#5A4B3F' : '#DED2BC',
        ['--ring' as any]: dark ? '#E3D9C8' : '#C9682A',
    }

    return (
        <div style={{ ...nouriTheme, backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
            <style>{responsiveStyles}</style>

            {/* ════════ 01 · PROJECT ════════ */}
            <section style={{ paddingTop: 64, minHeight: '100vh', display: 'flex', alignItems: 'stretch' }}>
                <div style={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    width: '100%',
                    padding: 'clamp(40px, 6vw, 96px) clamp(20px, 5vw, 40px)',
                }}>
                    <div className="nr-hero-inner">

                        {/* Left */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                {['BRANDING', 'PACKAGING', '#03', '2026'].map((tag) => (
                                    <span key={tag} style={{
                                        fontSize: 10,
                                        fontWeight: 700,
                                        letterSpacing: '0.14em',
                                        color: 'var(--muted-foreground)',
                                        padding: '4px 10px',
                                        borderRadius: 999,
                                        border: '1px solid var(--border)',
                                        backgroundColor: 'var(--muted)',
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h1 aria-label="nouri">
                                <NouriWordmark size={96} />
                            </h1>

                            <p style={{
                                fontSize: 'clamp(16px, 1.8vw, 19px)',
                                fontFamily: 'var(--font-nouri-body)',
                                color: 'var(--muted-foreground)',
                                lineHeight: 1.7,
                                maxWidth: 400,
                            }}>
                                Rethinking what frozen dessert can feel like — from ingredients to identity.
                            </p>

                            <div className="nr-meta">
                                {[
                                    { label: 'ROLE', value: 'Brand & Product Designer' },
                                    { label: 'YEAR', value: '2026' },
                                    { label: 'TOOLS', value: 'Figma · Illustrator · Photoshop' },
                                ].map((m) => (
                                    <div key={m.label}>
                                        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.13em', color: 'var(--muted-foreground)', marginBottom: 5 }}>{m.label}</p>
                                        <p style={{ fontSize: 13, color: 'var(--foreground)', fontWeight: 500 }}>{m.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="nr-ctas">
                                <button
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
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'opacity 0.2s, transform 0.2s',
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none'; }}
                                    onClick={() => document.getElementById('identity')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    View Identity
                                </button>
                                <button
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        padding: '11px 22px',
                                        borderRadius: 8,
                                        backgroundColor: 'transparent',
                                        color: 'var(--foreground)',
                                        border: '1px solid var(--border)',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        cursor: 'pointer',
                                        transition: 'background-color 0.2s, transform 0.2s',
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--muted)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'none'; }}
                                    onClick={() => document.getElementById('packaging')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    View Packaging
                                </button>
                            </div>
                        </div>

                        {/* Right — hero image */}
                        <div
                            className="nr-hero-image nr-img-zoom"
                            style={{
                                borderRadius: 16,
                                overflow: 'hidden',
                                backgroundColor: 'var(--card)',
                                position: 'relative',
                            }}
                        >
                            <img
                                src={IMG.hero}
                                alt="Nouri frozen dessert"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 16,
                                left: 16,
                                padding: '6px 14px',
                                borderRadius: 999,
                                backgroundColor: 'rgba(11,11,11,0.55)',
                                backdropFilter: 'blur(10px)',
                                fontSize: 10,
                                fontFamily: 'var(--font-mono)',
                                letterSpacing: '0.1em',
                                color: 'rgba(240,239,236,0.7)',
                            }}>
                                [HERO TUB PHOTOGRAPHY]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════ Project overview strip ════ */}
            <section
                className="nr-section"
                style={{ borderTop: '1px solid var(--border)', backgroundColor: dark ? 'var(--card)' : 'var(--secondary)' }}
            >
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <Reveal>
                        <div className="nr-two-col">
                            <div>
                                <Label>PROJECT OVERVIEW</Label>
                                <H2>Rethinking what frozen dessert can feel like.</H2>
                                <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.85, marginTop: 28, marginBottom: 32 }}>
                                    Frozen dessert occupies an uncomfortable position: indulgent but guilty, or virtuous but joyless. Nouri was built around a third path — where premium ingredients, considered design and honest communication could make indulgence feel genuinely thoughtful rather than defended.
                                </p>
                                <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.85, marginBottom: 32 }}>
                                    The design challenge was holding tension between appetite appeal and premium restraint. Too warm and the brand reads as playful; too minimal and it feels cold. The project explored how typography, colour, packaging structure and photography could together produce something confident and considered.
                                </p>
                                <div style={{
                                    padding: '28px 32px',
                                    borderRadius: 12,
                                    border: '1px solid var(--border)',
                                    backgroundColor: dark ? 'var(--background)' : 'var(--card)',
                                }}>
                                    <p style={{
                                        fontFamily: 'var(--font-nouri)',
                                        fontSize: 19,
                                        fontWeight: 400,
                                        fontStyle: 'italic',
                                        color: 'var(--foreground)',
                                        lineHeight: 1.55,
                                    }}>
                                        "How do you make indulgence feel like a considered choice rather than a guilty one?"
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                <ImgZoom
                                    src={IMG.brief}
                                    alt="Nouri product photography"
                                    aspect="3/2"
                                    placeholder="[PRODUCT IN CONTEXT — HERO MOMENT]"
                                />
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                    {['Premium ingredients', 'Better-for-you positioning', 'Appetite appeal', 'Honest communication', 'Visual restraint', 'Flavour identity'].map((p) => (
                                        <span key={p} style={{
                                            padding: '5px 12px',
                                            borderRadius: 999,
                                            border: '1px solid var(--border)',
                                            fontSize: 11,
                                            fontWeight: 500,
                                            color: 'var(--foreground)',
                                            backgroundColor: dark ? 'var(--background)' : 'var(--card)',
                                        }}>
                                            {p}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ════════ 02 · BRAND STRATEGY ════════ */}
            <section className="nr-section" style={{ borderTop: '1px solid var(--border)' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <Reveal>
                        <div style={{ maxWidth: 600, marginBottom: 80 }}>
                            <Label>BRAND STRATEGY</Label>
                            <H2>A brand built around thoughtful indulgence.</H2>
                        </div>
                    </Reveal>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                        {[
                            {
                                num: '01',
                                label: 'Brand Idea',
                                title: 'Indulgence, reconsidered.',
                                body: "Nouri's central idea is that treating yourself well and treating yourself to something delicious aren't separate things. The brand doesn't ask you to compromise — it reframes the question entirely.",
                            },
                            {
                                num: '02',
                                label: 'Positioning',
                                title: 'Premium frozen dessert for people who think about what they eat — without making it a performance.',
                                body: "Nouri sits above mass-market ice cream and beneath artisan gelato theatre. It's the brand you reach for when you want something genuinely good, without needing to justify it.",
                            },
                            {
                                num: '03',
                                label: 'Brand Promise',
                                title: '"Delicious first. Nourishing always."',
                                body: 'The tagline is the hierarchy made explicit. Nouri leads with pleasure — then earns trust through the quality of what goes into each tub. The brand never leads with health and never obscures it.',
                            },
                            {
                                num: '04',
                                label: 'Brand Personality',
                                title: 'Warm without being playful. Premium without being austere. Honest without being clinical.',
                                body: 'Nouri speaks like a knowledgeable friend. Direct, considered, never over-designed. The identity reflects that — restrained where possible, confident where it counts.',
                            },
                        ].map((item, i, arr) => (
                            <Reveal key={item.num} delay={i * 60}>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '80px 1fr',
                                    gap: 40,
                                    paddingTop: 48,
                                    paddingBottom: 48,
                                    borderTop: '1px solid var(--border)',
                                    borderBottom: i === arr.length - 1 ? '1px solid var(--border)' : 'none',
                                    alignItems: 'start',
                                }}>
                                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--accent)', paddingTop: 4 }}>{item.num}</span>
                                    <div>
                                        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--muted-foreground)', marginBottom: 12 }}>{item.label.toUpperCase()}</p>
                                        <h3 style={{
                                            fontFamily: 'var(--font-serif)',
                                            fontSize: 'clamp(17px, 2vw, 24px)',
                                            fontWeight: 400,
                                            color: 'var(--foreground)',
                                            lineHeight: 1.3,
                                            marginBottom: 16,
                                        }}>
                                            {item.title}
                                        </h3>
                                        <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.8, maxWidth: 640 }}>{item.body}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════ 03 · VISUAL IDENTITY ════════ */}
            <section
                id="identity"
                className="nr-section-lg"
                style={{ borderTop: '1px solid var(--border)', backgroundColor: dark ? 'var(--card)' : 'var(--secondary)' }}
            >
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <Reveal>
                        <div style={{ marginBottom: 80 }}>
                            <Label>VISUAL IDENTITY</Label>
                            <H2>Softness with a point of view.</H2>
                        </div>
                    </Reveal>

                    {/* Custom wordmark */}
                    <Reveal delay={60}>
                        <StepDivider num="WORDMARK" title="Custom-drawn" />
                        <div style={{
                            padding: 'clamp(48px, 8vw, 100px) clamp(32px, 6vw, 80px)',
                            borderRadius: 16,
                            border: '1px solid var(--border)',
                            backgroundColor: dark ? 'var(--background)' : 'var(--card)',
                            marginBottom: 64,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: 24,
                            overflow: 'hidden',
                        }}>
                            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', color: 'var(--muted-foreground)' }}>BOTH COLOURWAYS</p>
                            <img
                                src={bothcolorwaysPng}
                                alt="nouri wordmark — both colourways"
                                style={{ width: '100%', maxWidth: 600, borderRadius: 10, display: 'block' }}
                            />
                            <p style={{ fontSize: 12, color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', lineHeight: 1.6 }}>
                                Custom-drawn serif wordmark · Lowercase · Angled "í" tittle<br />
                                PRIMARY: Ink on Oat Light · REVERSED: Ivory on Ink
                            </p>
                        </div>
                    </Reveal>

                    {/* Logo variations */}
                    <Reveal delay={80}>
                        <StepDivider num="LOGO" title="Four variations" />
                        <div className="nr-four-col" style={{ marginBottom: 64 }}>
                            {[
                                { num: '01', name: 'Primary', img: logoVariation04Png, alt: 'nouri primary wordmark', desc: 'Main brand signature. Used across packaging, website and primary communications.' },
                                { num: '02', name: 'Tagline lockup', img: logoVariation02Png, alt: 'nouri tagline lockup', desc: 'For campaign moments and print where the brand promise accompanies the wordmark.' },
                                { num: '03', name: 'Reversed', img: logoVariation03Png, alt: 'nouri reversed wordmark', desc: 'For dark backgrounds, photography overlays and selected flavour field applications.' },
                                { num: '04', name: 'Brand mark', img: logoVariation01Png, alt: 'nouri brand mark variations', desc: 'Compact expression for favicons, app icons, lids and small-format applications.' },
                            ].map((v) => (
                                <div key={v.num}>
                                    <div style={{
                                        borderRadius: 10,
                                        overflow: 'hidden',
                                        marginBottom: 16,
                                        aspectRatio: '1 / 1',
                                    }}>
                                        <img
                                            src={v.img}
                                            alt={v.alt}
                                            style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <p style={{ fontSize: 10, fontWeight: 700, color: 'var(--muted-foreground)', marginBottom: 6, letterSpacing: '0.12em' }}>{v.num} · {v.name.toUpperCase()}</p>
                                    <p style={{ fontSize: 12, color: 'var(--muted-foreground)', lineHeight: 1.65 }}>{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    {/* Typography */}
                    <Reveal delay={100}>
                        <StepDivider num="TYPOGRAPHY" title="Character for desire. Clarity for information." />
                        <div className="nr-three-col" style={{ marginBottom: 64 }}>
                            {[
                                {
                                    role: 'DISPLAY · 400 / 500 / 600',
                                    family: 'Vollkorn',
                                    sample: 'Mango Bliss',
                                    sub: 'Ripe enough to taste the sun.',
                                    use: 'Flavour names, headlines, pull quotes. Carries the same wedge serifs and generous x-height as the custom wordmark without imitating it. Holds up at the large sizes pack layouts require.',
                                    sampleStyle: { fontFamily: 'var(--font-nouri)', fontWeight: 500, fontSize: 'clamp(26px, 3.5vw, 42px)' as string | number },
                                    subStyle: { fontFamily: 'var(--font-nouri)', fontWeight: 400, fontSize: 17 as string | number },
                                },
                                {
                                    role: 'TEXT · 300 / 400 / 500',
                                    family: 'Hanken Grotesk',
                                    sample: 'Coconut cream, real vanilla, nothing sharp.',
                                    sub: null,
                                    use: 'Body copy, ingredients, web interface — anything a person reads rather than notices. Never below 14px on screen or 8pt in print. Never all-caps at body size.',
                                    sampleStyle: { fontFamily: 'var(--font-nouri-body)', fontWeight: 400, fontSize: 'clamp(16px, 2vw, 20px)' as string | number, lineHeight: 1.45 as string | number },
                                    subStyle: null,
                                },
                                {
                                    role: 'DATA · 400 / 500',
                                    family: 'IBM Plex Mono',
                                    sample: '14g protein\n480ml · 6 × 80ml\nBest before 09 / 2027',
                                    sub: null,
                                    use: 'Nutrition, weights, dates, batch codes and captions. Always uppercase, always tracked 0.08–0.16em. Never used for a sentence.',
                                    sampleStyle: { fontFamily: 'var(--font-mono)', fontWeight: 400, fontSize: 14 as string | number, lineHeight: 1.7 as string | number, whiteSpace: 'pre-line' as React.CSSProperties['whiteSpace'] },
                                    subStyle: null,
                                },
                            ].map((t) => (
                                <div key={t.role} style={{
                                    padding: '32px 28px',
                                    borderRadius: 12,
                                    border: '1px solid var(--border)',
                                    backgroundColor: dark ? 'var(--background)' : 'var(--card)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 16,
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
                                        <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--foreground)' }}>{t.family}</p>
                                        <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--accent)' }}>{t.role}</p>
                                    </div>
                                    <div>
                                        <div style={{ ...t.sampleStyle, color: 'var(--foreground)', marginBottom: t.sub ? 8 : 0 }}>{t.sample}</div>
                                        {t.sub && t.subStyle && <div style={{ ...t.subStyle, color: 'var(--foreground)' }}>{t.sub}</div>}
                                    </div>
                                    <p style={{ fontSize: 12, color: 'var(--muted-foreground)', lineHeight: 1.65, marginTop: 'auto' }}>{t.use}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    {/* Graphic language */}
                    <Reveal delay={120}>
                        <StepDivider num="GRAPHIC LANGUAGE" title="Two devices. Nothing else." />
                        <div className="nr-two-col-md">
                            <div>
                                <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.8, marginBottom: 32 }}>
                                    The Nouri graphic language is built from exactly two structural devices. Every application uses both. Nothing else is permitted.
                                </p>
                                {[
                                    {
                                        name: 'THE WRAP',
                                        desc: 'A 16% band at the top of the pack and a 26% column on the left, both in the flavour field colour. Oat holds the remaining 60%. The wrap is never decorative — it identifies. It never fills.',
                                    },
                                    {
                                        name: 'THE ACCENT TICK',
                                        desc: 'The acute accent from the "í" in the wordmark, extracted and used independently as a bullet, separator and end mark. Always Ink on light fields; always Ivory on dark flavour fields. Never rotated, never scaled below 8pt.',
                                    },
                                ].map((d) => (
                                    <div key={d.name} style={{ marginBottom: 28, paddingLeft: 20, borderLeft: '2px solid var(--accent)' }}>
                                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--foreground)', marginBottom: 8 }}>{d.name}</p>
                                        <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.7 }}>{d.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                {/* Wrap diagram */}
                                <div style={{
                                    borderRadius: 12,
                                    overflow: 'hidden',
                                    border: '1px solid var(--border)',
                                    aspectRatio: '4/3',
                                    position: 'relative',
                                    backgroundColor: '#E3D9C8',
                                    display: 'flex',
                                }}>
                                    <div style={{ width: '26%', backgroundColor: '#D38906', flexShrink: 0 }} />
                                    <div style={{ flex: 1, position: 'relative' }}>
                                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '16%', backgroundColor: '#D38906' }} />
                                        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '28% 16px 16px' }}>
                                            <div style={{ fontFamily: 'var(--font-nouri)', fontSize: 20, color: '#241C15', lineHeight: 1.1 }}>Mango<br />Bliss</div>
                                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: '#241C15', marginTop: 10, opacity: 0.65, letterSpacing: '0.1em' }}>480ml · 6 × 80ml</div>
                                        </div>
                                    </div>
                                    <p style={{ position: 'absolute', bottom: 10, right: 12, fontSize: 9, letterSpacing: '0.16em', fontWeight: 700, color: 'rgba(36,28,21,0.4)' }}>THE WRAP</p>
                                </div>
                                {/* Accent tick examples */}
                                <div style={{
                                    padding: '28px 24px',
                                    borderRadius: 12,
                                    border: '1px solid var(--border)',
                                    backgroundColor: dark ? 'var(--background)' : 'var(--card)',
                                }}>
                                    <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.18em', color: 'var(--muted-foreground)', marginBottom: 16 }}>THE ACCENT TICK · THREE USES</p>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                        {[
                                            { text: '· Coconut cream, real vanilla', label: 'As bullet' },
                                            { text: 'Mango Bliss · 480ml', label: 'As separator' },
                                            { text: 'Best before 09 / 2027 ·', label: 'As end mark' },
                                        ].map((r) => (
                                            <div key={r.label} style={{ display: 'flex', alignItems: 'baseline', gap: 16, justifyContent: 'space-between' }}>
                                                <span style={{ fontFamily: 'var(--font-nouri-body)', fontSize: 13, color: 'var(--foreground)' }}>{r.text}</span>
                                                <span style={{ fontSize: 9, color: 'var(--muted-foreground)', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>{r.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ════════ 04 · PRODUCT DEVELOPMENT ════════ */}
            <section className="nr-section" style={{ borderTop: '1px solid var(--border)' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <Reveal>
                        <div style={{ maxWidth: 680, marginBottom: 80 }}>
                            <Label>PRODUCT DEVELOPMENT</Label>
                            <H2>Good dessert does good too.</H2>
                            <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.8, marginTop: 24 }}>
                                Nouri's identity was developed alongside a real product — a 480 ml frozen dessert with 28% real mango purée, cream for aroma, and dairy protein for structure. The formulation reached "high protein" and "low fat" simultaneously without losing the eating quality a premium frozen dessert requires. The numbers improved because the formulation got smarter, not because the dessert got leaner.
                            </p>
                            <p style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--muted-foreground)', marginTop: 20, letterSpacing: '0.06em', opacity: 0.7 }}>
                                FORMULATION V2.1 · Concept stage · Calculated from category-average ingredient data · Requires laboratory verification before any commercial use
                            </p>
                        </div>
                    </Reveal>

                    {/* Formulation overview + nutrition side-by-side */}
                    <Reveal delay={60}>
                        <StepDivider num="FORMULATION V2.1" title="Mango Bliss — lead flavour" />
                        <div className="nr-two-col" style={{ marginBottom: 72 }}>
                            {/* Left: formulation */}
                            <div>
                                <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.85, marginBottom: 28 }}>
                                    Mango Bliss is built around 28% unsweetened mango purée — Alphonso-led, single-strength, not concentrate. Below about 20%, mango stops tasting like fruit and starts tasting like a mango-flavoured thing. No flavour house closes that gap. The lemon concentrate keeps it bright and prevents 28% purée from reading as jammy. Cream is present for aroma release rather than body.
                                </p>
                                <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.85, marginBottom: 32 }}>
                                    The protein comes from milk protein concentrate and whey isolate — dairy was a deliberate decision. The honest ceiling for a pea or fava protein system at premium eating quality is around 6 g per 100 g. Reaching 8.5 g without dairy is not possible without a texture cost the product can't absorb.
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                                    {[
                                        { pct: '28.0%', name: 'Mango purée, unsweetened', note: 'Alphonso-led with Totapuri. The flavour, most of the colour, and all the fruit credibility.' },
                                        { pct: '7.0%', name: 'Sucrose', note: 'Clean sweetness and freezing-point depression. What keeps the tub scoopable at −18 °C.' },
                                        { pct: '6.0%', name: 'Cream, 38% fat', note: 'Aroma release, not bulk. The fat figure is low because cream is doing flavour work, not structural work.' },
                                        { pct: '6.0%', name: 'Milk protein concentrate 85', note: 'The structural backbone. Delivers most of the protein and holds water through freeze-thaw cycles.' },
                                        { pct: '3.5%', name: 'Soluble corn fibre', note: '85% fibre grade. Better tolerated than inulin, and raises fibre to a real margin above the 3 g threshold.' },
                                        { pct: '3.5%', name: 'Skimmed milk powder', note: 'Lactose for mild sweetness and body; milk solids for texture and foam stability.' },
                                    ].map((r, i, arr) => (
                                        <div key={r.name} style={{
                                            display: 'grid',
                                            gridTemplateColumns: '52px 1fr',
                                            gap: 16,
                                            padding: '16px 0',
                                            borderTop: '1px solid var(--border)',
                                            borderBottom: i === arr.length - 1 ? '1px solid var(--border)' : 'none',
                                            alignItems: 'start',
                                        }}>
                                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', paddingTop: 2 }}>{r.pct}</span>
                                            <div>
                                                <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--foreground)', marginBottom: 3 }}>{r.name}</p>
                                                <p style={{ fontSize: 12, color: 'var(--muted-foreground)', lineHeight: 1.55 }}>{r.note}</p>
                                            </div>
                                        </div>
                                    ))}
                                    <p style={{ fontSize: 11, color: 'var(--muted-foreground)', marginTop: 12, fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', opacity: 0.65, lineHeight: 1.6 }}>
                                        + whey protein isolate (2%), erythritol (1%), glycerol E422 (1%), lemon juice concentrate, natural vanilla flavouring, tripotassium citrate, locust bean gum, sea salt
                                    </p>
                                </div>

                                {/* Ingredient list as declared */}
                                <div style={{
                                    marginTop: 28,
                                    padding: '20px 24px',
                                    borderRadius: 10,
                                    backgroundColor: dark ? 'var(--card)' : 'var(--secondary)',
                                    border: '1px solid var(--border)',
                                }}>
                                    <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--muted-foreground)', marginBottom: 10 }}>INGREDIENTS AS DECLARED</p>
                                    <p style={{ fontFamily: 'var(--font-nouri-body)', fontSize: 12, color: 'var(--muted-foreground)', lineHeight: 1.75 }}>
                                        Water, mango purée (28%), sugar, cream <em>(milk)</em>, milk protein concentrate <em>(milk)</em>, soluble corn fibre, skimmed milk powder, whey protein isolate <em>(milk)</em>, erythritol, glycerol, lemon juice concentrate, natural vanilla flavouring, potassium citrate, locust bean gum, sea salt.
                                    </p>
                                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--muted-foreground)', marginTop: 10, opacity: 0.6, letterSpacing: '0.04em' }}>
                                        15 ingredients · 14 nameable · Contains milk · NOURI Foods BV, Antwerp, Belgium
                                    </p>
                                </div>
                            </div>

                            {/* Right: nutrition */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                <ImgZoom
                                    src={IMG.ingredient1}
                                    alt="Mango ingredient"
                                    aspect="16/9"
                                    radius={12}
                                    placeholder="[INGREDIENT STILL — MANGO BLISS]"
                                />

                                <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)' }}>
                                    <div style={{
                                        backgroundColor: '#241C15',
                                        padding: '14px 20px',
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 96px 96px',
                                        gap: 8,
                                    }}>
                                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', color: '#F7F1E2', opacity: 0.5 }}>NUTRITION INFORMATION</span>
                                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#F7F1E2', opacity: 0.5, textAlign: 'right' }}>per 100 g</span>
                                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#F7F1E2', opacity: 0.5, textAlign: 'right' }}>per tub (365 g)</span>
                                    </div>
                                    {[
                                        { label: 'Energy', per100g: '518 kJ / 124 kcal', perTub: '1,891 kJ / 452 kcal', indent: false, bold: true },
                                        { label: 'Fat', per100g: '2.5 g', perTub: '9.0 g', indent: false, bold: false },
                                        { label: 'of which saturates', per100g: '1.6 g', perTub: '5.7 g', indent: true, bold: false },
                                        { label: 'Carbohydrate', per100g: '15.9 g', perTub: '47.1 g', indent: false, bold: false },
                                        { label: 'of which sugars', per100g: '12.9 g', perTub: '39.4 g', indent: true, bold: false },
                                        { label: 'Protein', per100g: '8.5 g', perTub: '30 g', indent: false, bold: false },
                                        { label: 'Fibre', per100g: '3.6 g', perTub: '13.1 g', indent: false, bold: false },
                                    ].map((row, i) => (
                                        <div key={row.label} style={{
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 96px 96px',
                                            gap: 8,
                                            padding: '10px 20px',
                                            backgroundColor: i % 2 === 0
                                                ? (dark ? 'var(--background)' : 'var(--card)')
                                                : (dark ? 'var(--card)' : 'var(--secondary)'),
                                            borderBottom: i < 6 ? '1px solid var(--border)' : 'none',
                                            alignItems: 'center',
                                        }}>
                                            <span style={{
                                                fontFamily: 'var(--font-mono)',
                                                fontSize: 11,
                                                color: row.bold ? 'var(--foreground)' : 'var(--muted-foreground)',
                                                fontWeight: row.bold ? 600 : 400,
                                                paddingLeft: row.indent ? 14 : 0,
                                            }}>{row.label}</span>
                                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--foreground)', fontWeight: row.bold ? 600 : 400, textAlign: 'right' }}>{row.per100g}</span>
                                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted-foreground)', textAlign: 'right' }}>{row.perTub}</span>
                                        </div>
                                    ))}
                                    <div style={{ padding: '12px 20px', backgroundColor: '#DED2BC' }}>
                                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#241C15', opacity: 0.65, lineHeight: 1.65, letterSpacing: '0.04em' }}>
                                            480 ml / 365 g net · 45% overrun · V2.1 concept stage · Calculated from category-average data · Requires laboratory analysis before any label is printed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Claims */}
                    <Reveal delay={80}>
                        <StepDivider num="CLAIMS" title="What the formulation supports" />
                        <div className="nr-two-col-md" style={{ marginBottom: 0 }}>
                            <div>
                                <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.85, marginBottom: 24 }}>
                                    The hierarchy on the pack is delicious, then flavour, then brand, then proof. The formulation is built the same way. Nothing has been added for the label: the protein is doing structural work, the fibre is doing creaminess and bulk work, and the sugar reduction is capped at the point where texture would start to suffer.
                                </p>
                                <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.85, marginBottom: 24 }}>
                                    What the product can honestly say: about 44% lower in energy and over 80% lower in fat than a premium dairy ice cream, 30 g of protein per tub, 13 g of fibre — made from 15 ingredients, 14 of them nameable. A real difference, arrived at without a single claim the formulation can't support.
                                </p>
                                <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.85 }}>
                                    "High protein" and "low fat" are both available simultaneously — an unusual position for a scoopable frozen dessert. Neither of them leads on pack. They're proof, not the pitch.
                                </p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                {[
                                    { claim: '"High protein"', status: 'available', note: '27.8% of energy from protein. Available and defensible — held across V2 and V2.1.' },
                                    { claim: '"Low fat"', status: 'available', note: '2.5 g per 100 g, with 0.5 g margin above the 3 g threshold.' },
                                    { claim: '"Reduced energy"', status: 'available', note: 'About 44% below a stated comparator at 124 kcal per 100 g. Comparison must appear on pack.' },
                                    { claim: '"Source of fibre"', status: 'available', note: '3.6 g vs. 3 g threshold — now a real margin, not a marginal one. Use AOAC 2001.03 for analysis.' },
                                    { claim: '"Reduced sugar"', status: 'available', note: '39% below a 21 g comparator. Gained in V2.1. Requires comparison stated on pack.' },
                                    { claim: '"30g protein per tub"', status: 'available', note: 'Factual, not a nutrition claim. Declare as 30 g — protein varies by lot.' },
                                    { claim: '"High fibre"', status: 'not available', note: 'Requires 6 g per 100 g. Reachable but the digestive load per tub becomes unreasonable.' },
                                    { claim: '"No added sugar"', status: 'not available', note: 'Sucrose is added. "Reduced sugar" qualifies; "no added sugar" does not.' },
                                    { claim: '"Plant-based", "vegan"', status: 'not available', note: 'Contains milk. No route to 8.5 g protein at this eating quality without dairy.' },
                                    { claim: '"Guilt-free", "naturally healthy"', status: 'avoid', note: 'Not permitted health claims. They also contradict the brand\'s own voice.' },
                                ].map((r) => {
                                    const colour = r.status === 'available' ? '#3A9C6A' : r.status === 'avoid' ? '#C41360' : 'var(--muted-foreground)'
                                    return (
                                        <div key={r.claim} style={{
                                            padding: '12px 16px',
                                            borderRadius: 8,
                                            backgroundColor: dark ? 'var(--background)' : 'var(--card)',
                                            border: '1px solid var(--border)',
                                        }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 4 }}>
                                                <span style={{ fontFamily: 'var(--font-nouri-body)', fontSize: 12, fontWeight: 500, color: 'var(--foreground)' }}>{r.claim}</span>
                                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', color: colour, whiteSpace: 'nowrap', textTransform: 'uppercase' }}>{r.status}</span>
                                            </div>
                                            <p style={{ fontSize: 11, color: 'var(--muted-foreground)', lineHeight: 1.5 }}>{r.note}</p>
                                        </div>
                                    )
                                })}
                                <p style={{ fontSize: 10, color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', marginTop: 4, opacity: 0.6, lineHeight: 1.6 }}>
                                    Not a regulatory assessment. All claims require confirmation against Regulation (EC) 1924/2006 by a qualified adviser using analysis of real production samples.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ════════ 05 · PACKAGING ════════ */}
            <section
                id="packaging"
                className="nr-section-lg"
                style={{ borderTop: '1px solid var(--border)', backgroundColor: dark ? 'var(--card)' : 'var(--secondary)' }}
            >
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <Reveal>
                        <div style={{ maxWidth: 600, marginBottom: 80 }}>
                            <Label>PACKAGING</Label>
                            <H2>The identity becomes tangible.</H2>
                            <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.8, marginTop: 24 }}>
                                The tub is where every identity decision faces physical reality. Packaging must work in a freezer cabinet at distance, in hand at close range, and on a phone screen in a product listing. The hierarchy was designed to resolve clearly at every scale.
                            </p>
                        </div>
                    </Reveal>

                    {/* Primary packaging images */}
                    <Reveal delay={60}>
                        <StepDivider num="01" title="Tub packaging" />
                        <div className="nr-two-col-md" style={{ marginBottom: 16 }}>
                            <ImgZoom src={IMG.packaging1} alt="Nouri tub — front face" aspect="4/3" placeholder="[PACKAGING MOCKUP — TUB FRONT]" />
                            <ImgZoom src={IMG.packaging2} alt="Nouri tub — detail" aspect="4/3" placeholder="[PACKAGING MOCKUP — TUB DETAIL]" />
                        </div>
                        <div className="nr-two-col-tight" style={{ marginBottom: 48 }}>
                            <ImgZoom src={IMG.cone} alt="Nouri lid detail" aspect="16/9" placeholder="[PACKAGING MOCKUP — LID]" />
                            <ImgZoom src={IMG.hero} alt="Full Nouri flavour range" aspect="16/9" placeholder="[FULL FLAVOUR RANGE — ALL 6 TUBS]" />
                        </div>
                    </Reveal>

                    {/* Information hierarchy */}
                    <Reveal delay={100}>
                        <StepDivider num="02" title="Information hierarchy" />
                        <div className="nr-four-col" style={{ marginBottom: 48 }}>
                            {[
                                {
                                    tier: '01',
                                    name: 'Wordmark',
                                    desc: 'The custom-drawn "nouri" wordmark anchors the front face. Large enough to read instantly at freezer distance while remaining elegant rather than loud.',
                                },
                                {
                                    tier: '02',
                                    name: 'Flavour name',
                                    desc: "The flavour name in Vollkorn Display, set large. It functions as a colour signal from a distance before the customer reaches the freezer.",
                                },
                                {
                                    tier: '03',
                                    name: 'Ingredient cue',
                                    desc: 'A short taste description in Hanken Grotesk. Communicates character — not a declaration. Appetite appeal, not a label.',
                                },
                                {
                                    tier: '04',
                                    name: 'Back panel',
                                    desc: 'Full ingredient list, nutrition facts, and supporting copy. Structured with IBM Plex Mono for data and Hanken Grotesk for copy. Honest, not clinical.',
                                },
                            ].map((h) => (
                                <div key={h.tier} style={{ paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--accent)', display: 'block', marginBottom: 12 }}>{h.tier}</span>
                                    <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)', marginBottom: 8 }}>{h.name}</p>
                                    <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.65 }}>{h.desc}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    {/* Back panel */}
                    <Reveal delay={100}>
                        <StepDivider num="03" title="Back panel" />
                        <div className="nr-two-col" style={{ marginBottom: 64, alignItems: 'start' }}>
                            <div style={{ borderRadius: 14, overflow: 'hidden' }}>
                                <img
                                    src={dark ? darkBackPanelImg : backPanelImg}
                                    alt="Nouri Mango Bliss back panel"
                                    style={{ width: '100%', display: 'block', borderRadius: 14 }}
                                />
                            </div>
                            <div>
                                <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.85, marginBottom: 24 }}>
                                    The back panel is designed last and read first. It carries every legal obligation the front face deliberately avoids — full ingredient list, allergen callouts, nutrition table, storage and preparation instructions, net weight, and producer details — without becoming a wall of information.
                                </p>
                                <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.85, marginBottom: 24 }}>
                                    The Oat Deep field creates a recessive zone that the eye reads as technical, not decorative. Type sits in the IBM Plex Mono data hierarchy at 6 pt minimum with ample leading. Allergens appear in bold within the continuous ingredient list, not isolated into a secondary box, which gives more space to what matters: ingredient transparency.
                                </p>
                                <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.85 }}>
                                    "Good dessert does good too." runs as the closing line — the brand's promise stated plainly after all the proof has been given.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Flat wrap */}
                    <Reveal delay={120}>
                        <StepDivider num="04" title="Flat wrap" />
                        <div style={{ borderRadius: 14, overflow: 'hidden', position: 'relative' }}>
                            <ImgZoom
                                src={IMG.scoops}
                                alt="Nouri flat wrap artwork"
                                aspect="21/9"
                                radius={14}
                                placeholder="[FLAT WRAP / ARTWORK — FULL RANGE]"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ════════ 06 · FLAVOUR SYSTEM ════════ */}
            <section className="nr-section" style={{ borderTop: '1px solid var(--border)' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <Reveal>
                        <div style={{ maxWidth: 640, marginBottom: 80 }}>
                            <Label>FLAVOUR SYSTEM</Label>
                            <H2>Colour makes every flavour recognizable.</H2>
                            <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.8, marginTop: 24 }}>
                                Each of Nouri's six flavours has a dedicated colour identity built from three tones: <strong style={{ color: 'var(--foreground)', fontWeight: 500 }}>Field</strong> (the primary expression on pack), <strong style={{ color: 'var(--foreground)', fontWeight: 500 }}>Deep</strong> (for type and structure), and <strong style={{ color: 'var(--foreground)', fontWeight: 500 }}>Tint</strong> (for supporting applications). A shared neutral core holds the system together across all flavours.
                            </p>
                        </div>
                    </Reveal>

                    {/* Neutral core */}
                    <Reveal delay={60}>
                        <StepDivider num="NEUTRAL CORE" title="Five-colour foundation" />
                        <div className="nr-five-col" style={{ marginBottom: 64 }}>
                            {NEUTRAL_CORE.map((c) => (
                                <div key={c.name}>
                                    <div style={{
                                        height: 120,
                                        borderRadius: 10,
                                        backgroundColor: c.hex,
                                        marginBottom: 16,
                                        border: c.name !== 'Ink' ? '1px solid rgba(0,0,0,0.08)' : 'none',
                                    }} />
                                    <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--foreground)', marginBottom: 4 }}>{c.name}</p>
                                    <p style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--muted-foreground)', marginBottom: 6 }}>{c.hex}</p>
                                    <p style={{ fontSize: 11, color: 'var(--muted-foreground)', lineHeight: 1.5 }}>{c.role}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    {/* Six flavour families */}
                    <Reveal delay={80}>
                        <StepDivider num="FLAVOURS" title="Six families" />
                        <div className="nr-six-col" style={{ marginBottom: 24 }}>
                            {FLAVOURS.map((f) => (
                                <div key={f.name}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 3, marginBottom: 14 }}>
                                        <div style={{
                                            height: 72,
                                            borderRadius: '8px 8px 0 0',
                                            backgroundColor: f.field,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            <span style={{
                                                fontFamily: 'var(--font-mono)',
                                                fontSize: 8,
                                                fontWeight: 600,
                                                letterSpacing: '0.1em',
                                                color: f.typeOnField === 'Ink' ? '#241C15' : '#F7F1E2',
                                                opacity: 0.7,
                                            }}>
                                                {f.typeOnField.toUpperCase()}
                                            </span>
                                        </div>
                                        <div style={{ height: 28, backgroundColor: f.deep }} />
                                        <div style={{ height: 28, borderRadius: '0 0 8px 8px', backgroundColor: f.tint, border: '1px solid var(--border)' }} />
                                    </div>
                                    <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--foreground)', marginBottom: 6, lineHeight: 1.3 }}>{f.name}</p>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                        <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--muted-foreground)' }}>F {f.field}</p>
                                        <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--muted-foreground)' }}>D {f.deep}</p>
                                        <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--muted-foreground)' }}>T {f.tint}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.8, maxWidth: 640 }}>
                            Each colour was calibrated to feel edible rather than arbitrary — leaning toward the actual ingredient. Field appears on pack and in bold brand moments. Deep anchors type. Tint provides breathing room in supporting applications. The type colour on the field (shown above) follows a fixed rule: Ink on Mango, Banana, Coconut; Ivory on Strawberry, Berry, Cocoa.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* ════════ 07 · ART DIRECTION ════════ */}
            <section
                className="nr-section"
                style={{ borderTop: '1px solid var(--border)', backgroundColor: dark ? 'var(--card)' : 'var(--secondary)' }}
            >
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <Reveal>
                        <div style={{ maxWidth: 600, marginBottom: 80 }}>
                            <Label>ART DIRECTION</Label>
                            <H2>Photography carries the appetite appeal.</H2>
                            <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.8, marginTop: 24 }}>
                                The photography direction was built around three modes: texture macro, ingredient stills and product in context. Each has a specific role. Together they carry warmth and appetite appeal in ways that typography and colour cannot do alone.
                            </p>
                        </div>
                    </Reveal>

                    {/* Hero full-width */}
                    <Reveal delay={60}>
                        <div style={{ marginBottom: 48, position: 'relative' }}>
                            <ImgZoom
                                src={IMG.texture1}
                                alt="Texture macro — frozen dessert surface"
                                aspect="21/9"
                                radius={16}
                                placeholder="[TEXTURE MACRO — MANGO BLISS]"
                            />
                        </div>
                    </Reveal>

                    {/* Three modes */}
                    <Reveal delay={100}>
                        <StepDivider num="DIRECTION" title="Three photography modes" />
                        <div className="nr-three-col" style={{ marginBottom: 56 }}>
                            <div>
                                <ImgZoom src={IMG.texture2} alt="Texture macro" aspect="3/4" radius={10} placeholder="[TEXTURE MACRO — DETAIL]" />
                                <div style={{ paddingTop: 20 }}>
                                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 8 }}>TEXTURE MACRO</p>
                                    <p style={{ fontSize: 14, color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
                                        Close-in shots of the dessert surface. These images communicate richness and quality before the customer has read a word.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <ImgZoom src={IMG.ingredient1} alt="Ingredient still" aspect="3/4" radius={10} objectPosition="top" placeholder="[INGREDIENT STILL — MANGO]" />
                                <div style={{ paddingTop: 20 }}>
                                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 8 }}>INGREDIENT STILLS</p>
                                    <p style={{ fontSize: 14, color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
                                        Single-ingredient photography on clean grounds. Honest and direct — these tell you exactly what's inside without decoration.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <ImgZoom src={IMG.ingredient2} alt="Product in context" aspect="3/4" radius={10} placeholder="[PRODUCT IN CONTEXT]" />
                                <div style={{ paddingTop: 20 }}>
                                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 8 }}>PRODUCT IN CONTEXT</p>
                                    <p style={{ fontSize: 14, color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
                                        The product placed in environments that feel premium but unpretentious. Surface, light and proportion over styling.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Photography principles */}
                    <Reveal delay={140}>
                        <div className="nr-two-col-md" style={{ paddingTop: 56, borderTop: '1px solid var(--border)', alignItems: 'center' }}>
                            <div>
                                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--muted-foreground)', marginBottom: 20 }}>PHOTOGRAPHY PRINCIPLES</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                                    {[
                                        { title: 'Asymmetric crops', desc: 'Images are never centred symmetrically. Off-axis compositions and deliberate negative space keep the aesthetic editorial rather than catalogue.' },
                                        { title: 'Natural, directional light', desc: 'Hard fill light and visible product styling are avoided. Light from a single direction creates depth and warmth.' },
                                        { title: 'Tactile surfaces', desc: 'Props and surfaces chosen for texture — stone, wood, linen — reinforce the brand\'s premium and grounded character.' },
                                        { title: 'Appetite first', desc: 'Every image leads with the visual pleasure of the product. Nutrition is a back-panel argument, not a photography brief.' },
                                    ].map((p) => (
                                        <div key={p.title}>
                                            <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--foreground)', marginBottom: 5 }}>{p.title}</p>
                                            <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.7 }}>{p.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <ImgZoom src={IMG.ingredient3} alt="Ingredient photography" aspect="3/4" radius={12} placeholder="[INGREDIENT STILL — SECONDARY]" />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ════════ 08 · APPLICATIONS ════════ */}
            <section className="nr-section" style={{ borderTop: '1px solid var(--border)' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <Reveal>
                        <div style={{ maxWidth: 600, marginBottom: 72 }}>
                            <Label>APPLICATIONS</Label>
                            <H2>Designed to live beyond the tub.</H2>
                            <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.8, marginTop: 24 }}>
                                The identity was designed as a system rather than a single artefact. A small number of strong applications demonstrate how the visual language extends without breaking.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={60}>
                        <div className="nr-two-col-md" style={{ marginBottom: 48 }}>
                            <ImgZoom
                                src={IMG.packaging1}
                                alt="Packaging system"
                                aspect="4/3"
                                radius={12}
                                placeholder="[PACKAGING SYSTEM — FULL RANGE]"
                            />
                            <ImgZoom
                                src={IMG.cone}
                                alt="Digital touchpoints"
                                aspect="4/3"
                                radius={12}
                                placeholder="[DIGITAL APPLICATION — SOCIAL FORMAT]"
                            />
                        </div>
                    </Reveal>

                    <Reveal delay={80}>
                        <div className="nr-four-col">
                            {[
                                { num: '01', title: 'Packaging system', desc: 'All six flavour families in the full tub format. Consistent hierarchy throughout — only the flavour field colour changes.' },
                                { num: '02', title: 'Digital touchpoints', desc: 'Social templates and product launch visuals built on the same typographic and photographic language as the packaging.' },
                                { num: '03', title: 'Supporting materials', desc: 'Point-of-sale, stickers and brand collateral applying the graphic language at reduced sizes and on different substrates.' },
                                { num: '04', title: 'Campaign compositions', desc: 'Art-directed product imagery combining hero tub photography with ingredient stills in editorial layouts. Placeholder image areas are sized and cropped for final asset drop-in.' },
                            ].map((a) => (
                                <div key={a.num} style={{ paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--accent)', display: 'block', marginBottom: 12 }}>{a.num}</span>
                                    <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)', marginBottom: 8 }}>{a.title}</p>
                                    <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.65 }}>{a.desc}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal delay={100}>
                        <div style={{ marginTop: 48 }}>
                            <ImgZoom
                                src={IMG.packaging2}
                                alt="Campaign composition"
                                aspect="21/9"
                                radius={14}
                                placeholder="[CAMPAIGN COMPOSITION — EDITORIAL]"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ════════ 09 · DESIGN SYSTEM ════════ */}
            <section
                className="nr-section"
                style={{ borderTop: '1px solid var(--border)', backgroundColor: dark ? 'var(--card)' : 'var(--secondary)' }}
            >
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <Reveal>
                        <div style={{ maxWidth: 600, marginBottom: 72 }}>
                            <Label>DESIGN SYSTEM</Label>
                            <H2>A system designed to stay recognizable.</H2>
                            <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.8, marginTop: 24 }}>
                                Nouri's identity is built as a rule-based system rather than a fixed set of executions. New flavours, new formats and new contexts should be able to extend the system without requiring a designer to approve every decision.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={80}>
                        <div className="nr-ds-grid">
                            {/* Rules */}
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {[
                                    { element: 'Colour', rule: 'One flavour colour per pack — never mix flavour colours. Type on the field follows a fixed rule: Ink on Mango, Banana, Coconut; Ivory on Strawberry, Berry, Cocoa.' },
                                    { element: 'Typography', rule: 'Vollkorn Display → Hanken Grotesk Text → IBM Plex Mono Data. Never mix Display and Mono at the same hierarchy level. Mono always uppercase, tracked 0.08–0.16em.' },
                                    { element: 'Graphic', rule: 'The Wrap and the Accent Tick are the only two graphic devices. Both appear on every pack. Nothing else is added.' },
                                    { element: 'Wordmark', rule: 'Primary on Oat. Reversed on Ink. Never placed on a flavour field. Minimum 24mm in print, 120px on screen. Clear space equal to cap-height on all sides.' },
                                    { element: 'Neutral core', rule: 'Oat is the brand field. Ivory for reversed type. Oat Light for cards and lifts. Oat Deep for nutrition panels and supporting information blocks. Ink for all type and all rules — never pure black.' },
                                ].map((r, i, arr) => (
                                    <div key={r.element} style={{
                                        padding: '24px 0',
                                        borderTop: '1px solid var(--border)',
                                        borderBottom: i === arr.length - 1 ? '1px solid var(--border)' : 'none',
                                        display: 'grid',
                                        gridTemplateColumns: '100px 1fr',
                                        gap: 20,
                                        alignItems: 'start',
                                    }}>
                                        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--accent)', paddingTop: 2 }}>{r.element.toUpperCase()}</p>
                                        <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.7 }}>{r.rule}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Visual summary */}
                            <div style={{
                                padding: '36px 32px',
                                borderRadius: 14,
                                border: '1px solid var(--border)',
                                backgroundColor: dark ? 'var(--background)' : 'var(--card)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 24,
                            }}>
                                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.18em', color: 'var(--muted-foreground)' }}>SYSTEM AT A GLANCE</p>

                                <div>
                                    <NouriWordmark size={34} />
                                    <p style={{ fontSize: 10, color: 'var(--muted-foreground)', marginTop: 8, fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>Custom-drawn wordmark · Vollkorn Display</p>
                                </div>

                                <div style={{ height: 1, backgroundColor: 'var(--border)' }} />

                                <div>
                                    <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--muted-foreground)', marginBottom: 12 }}>6 FLAVOUR FIELDS</p>
                                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                                        {FLAVOURS.map((f) => (
                                            <div key={f.name} style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: f.field }} title={f.name} />
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--muted-foreground)', marginBottom: 12 }}>NEUTRAL CORE</p>
                                    <div style={{ display: 'flex', gap: 6 }}>
                                        {NEUTRAL_CORE.map((c) => (
                                            <div key={c.name} style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: c.hex, border: c.name !== 'Ink' ? '1px solid rgba(0,0,0,0.1)' : 'none' }} title={c.name} />
                                        ))}
                                    </div>
                                </div>

                                <div style={{ height: 1, backgroundColor: 'var(--border)' }} />

                                <div>
                                    <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--muted-foreground)', marginBottom: 12 }}>BRAND PROMISE</p>
                                    <p style={{ fontFamily: 'var(--font-nouri)', fontSize: 17, color: 'var(--foreground)', lineHeight: 1.4 }}>
                                        Delicious first.<br />Nourishing always.
                                    </p>
                                </div>

                                <div style={{ height: 1, backgroundColor: 'var(--border)' }} />

                                <div>
                                    <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--muted-foreground)', marginBottom: 12 }}>EXTENDING TO NEW FLAVOURS</p>
                                    <p style={{ fontSize: 12, color: 'var(--muted-foreground)', lineHeight: 1.65 }}>
                                        A new flavour enters the system by selecting a Field, Deep and Tint tone, establishing a type-on-field rule, and applying The Wrap at the defined proportions. No other decisions are required.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ════════ 10 · REFLECTION ════════ */}
            <section className="nr-section" style={{ borderTop: '1px solid var(--border)' }}>
                <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
                    <Reveal>
                        <Label>REFLECTION</Label>
                        <H2 center>Designing the system, not just the package.</H2>
                        <div style={{ marginTop: 48, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 40 }}>
                            {[
                                {
                                    heading: 'Identity as a system, not a set of assets',
                                    body: "Nouri taught me that brand identity is fundamentally a systems problem. Every decision about typography, colour and photography only holds meaning in relation to the others — and those relationships have to survive being applied by people who aren't thinking about the system.",
                                },
                                {
                                    heading: 'What packaging taught me about hierarchy and scale',
                                    body: "Working through the tub layout changed how I think about hierarchy. What reads clearly in Figma doesn't automatically read clearly in a freezer cabinet at two metres. Scale forces you to commit. Every element either earns its place or gets cut.",
                                },
                                {
                                    heading: 'Balancing appetite appeal and premium restraint',
                                    body: "The central tension in the project — warm without being playful, premium without being cold — isn't resolved by a single decision. It's a combination of typeface, image, whitespace, and copy tone. Each one contributes a small amount. Getting all of them pointing in the same direction takes longer than it looks.",
                                },
                            ].map((r) => (
                                <div key={r.heading} style={{ textAlign: 'left' }}>
                                    <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 12 }}>{r.heading.toUpperCase()}</p>
                                    <p style={{ fontSize: 'clamp(15px, 1.6vw, 18px)', color: 'var(--muted-foreground)', lineHeight: 1.85, fontFamily: 'var(--font-nouri-body)' }}>
                                        {r.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ════════ 11 · FUTURE DEVELOPMENT ════════ */}
            <section
                className="nr-section"
                style={{ borderTop: '1px solid var(--border)', backgroundColor: dark ? 'var(--card)' : 'var(--secondary)' }}
            >
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <Reveal>
                        <div style={{ maxWidth: 560, marginBottom: 64 }}>
                            <Label>FUTURE DEVELOPMENT</Label>
                            <H2>Realistic next steps.</H2>
                            <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.8, marginTop: 20 }}>
                                These are extensions the system is designed to support — not missing work.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={80}>
                        <div className="nr-roadmap">
                            {[
                                {
                                    num: '01',
                                    title: 'Motion identity',
                                    desc: 'Define how the wordmark and flavour colours behave in motion — transitions, social templates, and digital-first brand moments.',
                                },
                                {
                                    num: '02',
                                    title: 'Additional formats',
                                    desc: 'Extend the packaging system to multipacks, larger tub sizes, seasonal editions, and on-the-go single-serve formats.',
                                },
                                {
                                    num: '03',
                                    title: 'Retail environment',
                                    desc: 'Explore how the Nouri identity translates into freezer displays, shelf presence and point-of-sale at retail scale.',
                                },
                                {
                                    num: '04',
                                    title: 'Formal brand guidelines',
                                    desc: 'Produce a complete brand guidelines document for use by a future designer or production team, without requiring interpretation.',
                                },
                            ].map((r) => (
                                <div key={r.num} style={{
                                    paddingTop: 28,
                                    borderTop: '1px solid var(--border)',
                                }}>
                                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--accent)', display: 'block', marginBottom: 16 }}>{r.num}</span>
                                    <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--foreground)', marginBottom: 10 }}>{r.title}</p>
                                    <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.65 }}>{r.desc}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ════════ NEXT PROJECT ════════ */}
            <section
                className="nr-section-sm"
                style={{ borderTop: '1px solid var(--border)' }}
            >
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', color: 'var(--muted-foreground)', marginBottom: 24, textAlign: 'center' }}>UP NEXT</p>
                    <Link to="/" style={{ display: 'block', textDecoration: 'none' }}>
                        <div
                            className="nr-next-card"
                            style={{
                                borderRadius: 16,
                                overflow: 'hidden',
                                border: '1px solid var(--border)',
                                backgroundColor: dark ? 'var(--card)' : 'var(--secondary)',
                                transition: 'box-shadow 0.3s ease',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.1)')}
                            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
                        >
                            <div className="nr-next-text" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--accent)', marginBottom: 16 }}>PRODUCT DESIGN · UX/UI</span>
                                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, color: 'var(--foreground)', marginBottom: 16, lineHeight: 1.2 }}>
                                    Smart Pantry
                                </h3>
                                <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.7, marginBottom: 32, maxWidth: 460 }}>
                                    A connected kitchen experience that helps people organise homemade meals with smart labelling and inventory tracking.
                                </p>
                                <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                    View Next Project →
                                </span>
                            </div>
                            <div className="nr-next-img" style={{ overflow: 'hidden', backgroundColor: 'var(--muted)' }}>
                                <img
                                    src={IMG.nextProject}
                                    alt="Smart Pantry — next project"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
                                />
                            </div>
                        </div>
                    </Link>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
                        <Link
                            to="/projects/lego-police-story"
                            style={{
                                fontSize: 13,
                                fontWeight: 500,
                                color: 'var(--muted-foreground)',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                                transition: 'color 0.2s',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--foreground)')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted-foreground)')}
                        >
                            ← Previous: LEGO Police Story
                        </Link>
                    </div>
                </div>
            </section>

            {/* ════════ FOOTER ════════ */}
            <footer className="nr-section-footer" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="nr-footer-inner" style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <Link to="/" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--muted-foreground)', textDecoration: 'none' }}>
                        ITUNU OGUNFUYE
                    </Link>
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
                                style={{
                                    fontSize: 12,
                                    color: 'var(--muted-foreground)',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--foreground)')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted-foreground)')}
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
