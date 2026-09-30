import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { useTheme } from '@/context/theme'
import nouriWordmarkPng from '@/assets/nouri/Asset 2.png'
import bothcolorwaysPng from '@/assets/nouri/Asset.png'
import logoVariation01Png from '@/assets/nouri/Asset 4.png'
import logoVariation02Png from '@/assets/nouri/Asset 5.png'
import logoVariation03Png from '@/assets/nouri/Asset 6.png'
import logoVariation04Png from '@/assets/nouri/Asset 7.png'
import backPanelImg from '@/assets/nouri/nouri-10.png'
import darkBackPanelImg from '@/assets/nouri/nouri-dark.png'
import flatLabelPng from '@/assets/nouri/flat label.png'
import Hero from '@/assets/nouri/hero.png'
import ingredient1 from '@/assets/nouri/mango.png'
import brief from '@/assets/nouri/cocoa dream.png'
import packaging1 from '@/assets/nouri/berry.png'
import packaging2 from '@/assets/nouri/mango bliss 2.png'
import lids from '@/assets/nouri/lids.png'
import fullrange from '@/assets/nouri/full range.png'
import product1 from '@/assets/nouri/strawberry enviroment.png'
import product2 from '@/assets/nouri/product.png'
import texture1 from '@/assets/nouri/mango texture.png'
import texture2 from '@/assets/nouri/strawberry texture.png'
import ingredient2 from '@/assets/nouri/strawberry ingredient.png'
import display from '@/assets/nouri/display.png'
import campaign from '@/assets/nouri/campaign.png'
import fullrange2 from '@/assets/nouri/pyramid full range.png'
import smartpantry from '@/assets/smart pantry.png'



const IMG = {
    hero: Hero,
    brief: brief,
    texture1: texture1,
    texture2: texture2,
    ingredient1: ingredient1,
    ingredient2: ingredient2,
    packaging1: packaging1,
    packaging2: packaging2,
    lids: lids,
    full: fullrange,
    fullrange2: fullrange2,
    scoops: flatLabelPng,
    product1: product1,
    product2: product2,
    display: display,
    campaign: campaign,
    smartpantry: smartpantry,
}

/* --- Responsive styles --- */
const responsiveStyles = `
  .nr-section, .nr-section-sm, .nr-section-lg {
    background-color: var(--nouri-section-background);
  }

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
  .nr-reflections { display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; text-align: left; }
  .nr-reflection  { border-top: 1px solid var(--border); padding-top: 20px; }

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
    .nr-reflections { grid-template-columns: repeat(2, 1fr); gap: 40px 32px; }
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
    .nr-reflections { grid-template-columns: 1fr; gap: 40px; }

    .nr-next-card   { grid-template-columns: 1fr; }
    .nr-next-text   { padding: 36px 24px; }
    .nr-next-img    { min-height: 220px; }

    .nr-footer-inner { flex-direction: column; text-align: center; gap: 12px; }
    .nr-meta        { gap: 24px; }
  }
`

/* --- Neutral core --- */
const NEUTRAL_CORE = [
    { name: 'Oat', hex: '#E3D9C8', role: 'The brand field. Every pack is mostly this.' },
    { name: 'Ivory', hex: '#F7F1E2', role: 'Reversed type on Ink and on the three dark flavour fields.' },
    { name: 'Oat Light', hex: '#EFE7DA', role: 'Cards, lifts, anything that needs to sit off the oat.' },
    { name: 'Oat Deep', hex: '#DED2BC', role: 'Nutrition panels and supporting information blocks.' },
    { name: 'Ink', hex: '#241C15', role: 'All type, all rules. Warm black, never pure black.' },
]

/* --- Flavour system --- */
const FLAVOURS = [
    { name: 'Mango Bliss', field: '#D38906', deep: '#8B4500', tint: '#F7E4A8', typeOnField: 'Ink' },
    { name: 'Strawberry Blush', field: '#C41360', deep: '#7A0B3C', tint: '#F9C4D8', typeOnField: 'Ivory' },
    { name: 'Berry Burst', field: '#6040A8', deep: '#3A2478', tint: '#D4C8F0', typeOnField: 'Ivory' },
    { name: 'Cocoa Dream', field: '#5A2C1C', deep: '#3A180C', tint: '#E8D4BC', typeOnField: 'Ivory' },
    { name: 'Banana Spice', field: '#C49010', deep: '#7A5010', tint: '#F4E0A8', typeOnField: 'Ink' },
    { name: 'Coconut Vanilla', field: '#EDE0C8', deep: '#8A7050', tint: '#F5F2E8', typeOnField: 'Ink' },
]

/* --- Sub-components --- */
function Label({ children }: { children: React.ReactNode }) {
    return (
        <p style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.18em',
            color: 'var(--nouri-accent)',
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
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--nouri-accent)', whiteSpace: 'nowrap' }}>
                {num}
            </span>
        </div>
    )
}

/* --- Scroll reveal --- */
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

/* --- Image with placeholder label --- */
function ImgZoom({
    src,
    alt,
    placeholder,
    aspect,
    height,
    radius = 12,
    objectPosition = 'center',
    objectFit,
}: {
    src: string
    alt: string
    placeholder?: string
    aspect?: string
    height?: number | string
    radius?: number
    objectPosition?: string
    objectFit?: 'cover' | 'contain'
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
                        objectFit: objectFit ?? 'cover',
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
 * NouriWordmark crops the two-halves PNG to the correct colourway.
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

/* -----------------------------------------------
   Main component
----------------------------------------------- */
export default function Nouri() {
    const { dark } = useTheme()

    return (
        <div style={{
            ['--nouri-accent' as any]: dark ? '#EFE7DA' : '#e08a1e',
            ['--nouri-section-background' as any]: dark ? '#141414' : '#F0EDE8',
            backgroundColor: 'var(--background)',
            color: 'var(--foreground)',
        }}>
            <style>{responsiveStyles}</style>

            {/* -------- 01 · PROJECT -------- */}
            <section style={{ paddingTop: 64, paddingBottom: 60 }}>
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
                                A frozen dessert brand designed from product to identity.
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

                        {/* Right - hero image */}
                        <div
                            className="nr-hero-image nr-img-zoom"
                            style={{
                                borderRadius: 16,
                                overflow: 'hidden',
                                backgroundColor: 'var(--card)',
                                position: 'relative',
                                aspectRatio: '4 / 3',
                                minHeight: 0,
                            }}
                        >
                            <img
                                src={IMG.hero}
                                alt="Nouri frozen dessert flavour range"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    display: 'block',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ---- Project overview strip ---- */}
            <section
                className="nr-section"
                style={{ borderTop: '1px solid var(--border)' }}
            >
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <Reveal>
                        <div className="nr-two-col">
                            <div>
                                <Label>PROJECT OVERVIEW</Label>
                                <H2>Rethinking what frozen dessert can feel like.</H2>
                                <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.85, marginTop: 28, marginBottom: 32 }}>
                                    Frozen dessert often sits between two extremes: indulgent but guilt-driven, or better-for-you but stripped of pleasure. Nouri explores a third position, combining appetite appeal, considered design and honest communication.
                                </p>
                                <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.85, marginBottom: 32 }}>
                                    The challenge was balancing warmth with restraint. Too playful and the brand loses its premium character; too minimal and it becomes cold. Typography, colour, packaging and photography were developed together to create an identity that feels both inviting and refined.
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
                                />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* -------- 02 · BRAND STRATEGY -------- */}
            <section className="nr-section" style={{ backgroundColor: 'var(--background)', borderTop: '1px solid var(--border)' }}>
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
                                body: 'Nouri treats pleasure and nourishment as complementary rather than competing ideas. The product should feel desirable first, with its nutritional qualities supporting the experience rather than defining it.',
                            },
                            {
                                num: '02',
                                label: 'Positioning',
                                title: 'Premium frozen dessert for people who think about what they eat without making it a performance.',
                                body: ' Nouri sits between everyday supermarket ice cream and highly artisanal dessert brands: elevated and intentional, without becoming precious.',
                            },
                            {
                                num: '03',
                                label: 'Brand Promise',
                                title: '"Delicious first. Nourishing always."',
                                body: 'Pleasure leads the experience. Nutrition provides the proof. The brand never needs health language to make the product desirable.',
                            },
                            {
                                num: '04',
                                label: 'Brand Personality',
                                title: 'Warm without being playful. Premium without being austere. Honest without being clinical.',
                                body: '',
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
                                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--nouri-accent)', paddingTop: 4 }}>{item.num}</span>
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
                                        {item.body && (
                                            <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.8, maxWidth: 640 }}>{item.body}</p>
                                        )}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

              {/* -------- 04 · PRODUCT DEVELOPMENT -------- */}
            <section className="nr-section" style={{ borderTop: '1px solid var(--border)' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <Reveal>
                        <div style={{ maxWidth: 680, marginBottom: 80 }}>
                            <Label>PRODUCT DEVELOPMENT</Label>
                            <H2>The product informed the brand.</H2>
                            <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.8, marginTop: 24 }}>
                                Nouri was developed beyond its visual identity. A concept formulation for Mango Bliss helped ground decisions around positioning, packaging hierarchy and communication in an actual product rather than hypothetical claims.
                            </p>
                            <p style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--muted-foreground)', marginTop: 20, letterSpacing: '0.06em', opacity: 0.7 }}>
                                CONCEPT FORMULATION · Requires laboratory verification before commercial production
                            </p>
                        </div>
                    </Reveal>

                    {/* Formulation overview + nutrition side-by-side */}
                    <Reveal delay={60}>
                        <StepDivider num="FORMULATION V2.1" title="Mango Bliss lead flavour" />
                        <div className="nr-two-col" style={{ marginBottom: 72 }}>
                            {/* Left: formulation */}
                            <div>
                                <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.85, marginBottom: 28 }}>
                                    Mango Bliss was developed as the lead flavour, using mango purée as the primary flavour and colour source. The formulation balances fruit, dairy protein, cream, fibre and sweetness to create a dessert concept that still prioritises taste and texture.

                                    This product thinking helped define what Nouri could credibly communicate on pack, rather than designing claims first and building the product around them.
                                </p>
                                <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.85, marginBottom: 40 }}>
                                    The recipe keeps the finish clean and scoopable, with enough protein to feel purposeful and enough sweetness to stay indulgent. It feels like a premium dessert first, and a better-for-you option second.
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                                    {[
                                        { pct: '28.0%', name: 'Mango purée, unsweetened', note: 'Primary source of flavour, colour and fruit character.' },
                                        { pct: '7.0%', name: 'Dairy protein', note: 'Supports the product structure while increasing its protein content.' },
                                        { pct: '6.0%', name: 'Cream', note: 'Adds richness and aroma without becoming the main structural base.' },
                                        { pct: '3.5%', name: 'Soluble fibre', note: 'Supports body and contributes to the nutritional profile.' },
                                    ].map((r, i, arr) => (
                                        <div key={r.name} style={{
                                            display: 'grid',
                                            gridTemplateColumns: '52px 1fr',
                                            gap: 16,
                                            padding: '20px 0',
                                            borderTop: '1px solid var(--border)',
                                            borderBottom: i === arr.length - 1 ? '1px solid var(--border)' : 'none',
                                            alignItems: 'start',
                                        }}>
                                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--nouri-accent)', paddingTop: 2 }}>{r.pct}</span>
                                            <div>
                                                <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--foreground)', marginBottom: 3 }}>{r.name}</p>
                                                <p style={{ fontSize: 12, color: 'var(--muted-foreground)', lineHeight: 1.55 }}>{r.note}</p>
                                            </div>
                                        </div>
                                    ))}
                                   
                                </div>

                               
                            </div>

                            {/* Right: nutrition */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                <ImgZoom
                                    src={IMG.ingredient1}
                                    alt="Mango ingredient"
                                    aspect="16/9"
                                    radius={12}
                                />

                                <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)' }}>
                                    <div style={{
                                        backgroundColor: dark ? 'var(--card)' : 'var(--secondary)',
                                        padding: '14px 20px',
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 96px 96px',
                                        gap: 8,
                                    }}>
                                        <span style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: 9,
                                            fontWeight: 700,
                                            letterSpacing: '0.14em',
                                            color: 'var(--muted-foreground)',
                                        }}>
                                            NUTRITION INFORMATION
                                        </span>

                                        <span style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: 9,
                                            color: 'var(--muted-foreground)',
                                            textAlign: 'right',
                                        }}>
                                            per 100 g
                                        </span>

                                        <span style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: 9,
                                            color: 'var(--muted-foreground)',
                                            textAlign: 'right',
                                        }}>
                                            per tub (365 g)
                                        </span>
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
                                    <div style={{
                                        padding: '12px 20px',
                                        backgroundColor: dark ? 'var(--card)' : 'var(--secondary)',
                                        borderTop: '1px solid var(--border)',
                                    }}>
                                        <p style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: 9,
                                            color: 'var(--muted-foreground)',
                                            lineHeight: 1.65,
                                            letterSpacing: '0.04em',
                                        }}>
                                           Concept formulation. Estimated values based on ingredient data. Laboratory verification required before commercial production.
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
                                    Nouri’s nutritional messaging was developed from the formulation rather than added as a marketing layer. Protein contributes to structure, fibre supports body, and sweetness was balanced with texture and flavour in mind.
                                </p>
                                <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.85, marginBottom: 24 }}>
                                    This gave the brand a credible foundation for communicating nutritional benefits without allowing them to define the product.
                                </p>
                                <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.85 }}>
                                    The claims are proof, not the pitch.
                                </p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                {[
                                    { claim: '"High protein"', status: 'available', note: '27.8% of energy from protein. Available and defensible - held across V2 and V2.1.' },
                                    { claim: '"Low fat"', status: 'available', note: '2.5 g per 100 g, with 0.5 g margin above the 3 g threshold.' },
                                    { claim: '"Source of fibre"', status: 'available', note: '3.6 g vs. 3 g threshold - now a real margin, not a marginal one. Use AOAC 2001.03 for analysis.' },
                                    { claim: '"No added sugar"', status: 'not available', note: 'Sucrose is added. "Reduced sugar" qualifies; "no added sugar" does not.' },
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
                                    Product claims are intentionally presented as a clear consumer story, not a legal or regulatory assessment.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* -------- 03 · VISUAL IDENTITY -------- */}
            <section
                id="identity"
                className="nr-section-lg"
                style={{ backgroundColor: 'var(--background)', borderTop: '1px solid var(--border)' }}
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
                            backgroundColor: dark ? 'var(--card)' : 'var(--background)',
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
                                alt="nouri wordmark both colourways"
                                style={{ width: '100%', maxWidth: 600, borderRadius: 10, display: 'block' }}
                            />
                            <p style={{ fontSize: 12, color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', lineHeight: 1.6 }}>
                                Custom-drawn serif wordmark · Lowercase · Custom angled tittle<br />
                                PRIMARY:   Oat on Ink · REVERSED: Ink on Oat
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
                                    use: 'Used for flavour names, headlines and pull quotes. Its expressive serif character brings warmth and appetite appeal while remaining confident at packaging scale.',
                                    sampleStyle: { fontFamily: 'var(--font-nouri)', fontWeight: 500, fontSize: 'clamp(26px, 3.5vw, 42px)' as string | number },
                                    subStyle: { fontFamily: 'var(--font-nouri)', fontWeight: 400, fontSize: 17 as string | number },
                                },
                                {
                                    role: 'TEXT · 300 / 400 / 500',
                                    family: 'Hanken Grotesk',
                                    sample: 'Coconut cream, real vanilla, nothing sharp.',
                                    sub: null,
                                    use: 'Used for body copy, ingredients and interface text. Its clarity balances the more expressive display typography.',
                                    sampleStyle: { fontFamily: 'var(--font-nouri-body)', fontWeight: 400, fontSize: 'clamp(16px, 2vw, 20px)' as string | number, lineHeight: 1.45 as string | number },
                                    subStyle: null,
                                },
                                {
                                    role: 'DATA · 400 / 500',
                                    family: 'IBM Plex Mono',
                                    sample: '30g protein\n480ml · 6 × 80ml\nBest before 09 / 2027',
                                    sub: null,
                                    use: 'Used for nutrition, weights, dates and supporting product information, giving technical content a distinct visual voice.',
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
                                        <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--nouri-accent)' }}>{t.role}</p>
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

                                {[
                                    {
                                        name: 'THE WRAP',
                                        desc: 'A flavour-coloured band and side column frame the composition while leaving the oat base dominant. The device gives each variant immediate recognition without overwhelming the pack.',
                                    },
                                    {
                                        name: 'THE ACCENT TICK',
                                        desc: 'Derived from the custom detail in the Nouri wordmark, the Accent Tick becomes a recurring bullet, separator and end mark across the identity.',
                                    },
                                ].map((d) => (
                                    <div key={d.name} style={{ marginBottom: 28, paddingLeft: 20, borderLeft: '2px solid var(--nouri-accent)' }}>
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
                                    aspectRatio: '16/8',
                                    position: 'relative',
                                    backgroundColor: '#E3D9C8',
                                    display: 'flex',
                                }}>
                                    <div style={{ width: '20%', backgroundColor: '#e08a1e', flexShrink: 0 }} />
                                    <div style={{ flex: 1, position: 'relative' }}>
                                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '16%', backgroundColor: '#e08a1e' }} />
                                        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '28% 16px 16px' }}>
                                            <div style={{ fontFamily: 'var(--font-nouri)', fontSize: 20, color: '#241C15', lineHeight: 1.1 }}>Mango<br />Bliss</div>
                                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: '#241C15', marginTop: 10, opacity: 0.65, letterSpacing: '0.1em' }}>480ml · 6 × 80ml</div>
                                        </div>
                                    </div>
                                    <p style={{ position: 'absolute', bottom: 10, right: 12, fontSize: 9, letterSpacing: '0.16em', fontWeight: 700, color: 'rgba(36,28,21,0.4)' }}>THE WRAP</p>
                                </div>
                                {/* Accent tick examples */}
                                <div style={{
                                    padding: '22px 24px',
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

              {/* -------- 06 · FLAVOUR SYSTEM -------- */}
            <section className="nr-section" style={{ borderTop: '1px solid var(--border)' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <Reveal>
                        <div style={{ maxWidth: 640, marginBottom: 80 }}>
                            <Label>FLAVOUR SYSTEM</Label>
                            <H2>Colour makes every flavour recognizable.</H2>
                            <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.8, marginTop: 24 }}>
                                Each of Nouri's six flavours has a dedicated colour identity built from three tones: <strong style={{ color: 'var(--foreground)', fontWeight: 500 }}>Field</strong> , <strong style={{ color: 'var(--foreground)', fontWeight: 500 }}>Deep</strong> and <strong style={{ color: 'var(--foreground)', fontWeight: 500 }}>Tint</strong>. A shared neutral core holds the system together across all flavours.
                            </p>
                        </div>
                    </Reveal>

                    {/* Neutral core */}
                    <Reveal delay={60}>
                        <StepDivider num="CORE" title="Neutral core" />
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
                            Each flavour uses a Field, Deep and Tint tone, while a shared neutral core keeps the range visually connected.
                        </p>
                    </Reveal>
                </div>
            </section>

          

            {/* -------- 05 · PACKAGING -------- */}
            <section
                id="packaging"
                className="nr-section-lg"
                style={{ borderTop: '1px solid var(--border)' }}
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
                            <ImgZoom src={IMG.packaging1} alt="Nouri tub - front face" aspect="4/3" />
                            <ImgZoom src={IMG.packaging2} alt="Nouri tub - detail" aspect="4/3" />
                        </div>
                        <div className="nr-two-col-tight" style={{ marginBottom: 48 }}>
                            <ImgZoom src={IMG.lids} alt="Nouri lid detail" aspect="16/9" />
                            <ImgZoom src={IMG.full} alt="Full Nouri flavour range" aspect="16/9" />
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
                                    desc: 'Anchors the front face and establishes recognition at freezer distance.',
                                },
                                {
                                    tier: '02',
                                    name: 'Flavour name',
                                    desc: 'Large display typography and flavour colour create immediate variant recognition.',
                                },
                                {
                                    tier: '03',
                                    name: 'Ingredient cue',
                                    desc: 'Short sensory copy builds appetite appeal without competing with required information.',
                                },
                                {
                                    tier: '04',
                                    name: 'Back panel',
                                    desc: 'Ingredients, nutrition and supporting information are structured for clarity rather than visual dominance.',
                                },
                            ].map((h) => (
                                <div key={h.tier} style={{ paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--nouri-accent)', display: 'block', marginBottom: 12 }}>{h.tier}</span>
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
                                    The back panel carries the information the front deliberately leaves quiet.
                                </p>
                                <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.85, marginBottom: 24 }}>
                                    Ingredients, nutrition, storage and product details are organised into a clear hierarchy, with IBM Plex Mono separating data from supporting copy.
                                </p>
                                <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.85 }}>
                                    “Good dessert does good too.” closes the panel after the functional information has been delivered.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Flat wrap */}
                    <Reveal delay={120}>
                        <StepDivider num="04" title="Flat wrap" />

                        <div
                            style={{
                                borderRadius: 14,
                                overflow: 'hidden',
                                position: 'relative',
                                backgroundColor: 'var(--card)',
                            }}
                        >
                            <ImgZoom
                                src={IMG.scoops}
                                alt="Nouri flat wrap artwork"
                                aspect="16/9"
                                radius={14}
                                objectFit="contain"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

          

            {/* -------- 07 · ART DIRECTION -------- */}
            <section
                className="nr-section"
                style={{ borderTop: '1px solid var(--border)' }}
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
                                alt="Texture macro - frozen dessert surface"
                                aspect="21/9"
                                radius={16}
                            />
                        </div>
                    </Reveal>

                    {/* Three modes */}
                    <Reveal delay={100}>
                        <StepDivider num="DIRECTION" title="Three photography modes" />
                        <div className="nr-three-col" style={{ marginBottom: 56 }}>
                            <div>
                                <ImgZoom src={IMG.texture2} alt="Texture macro" aspect="3/4" radius={10} />
                                <div style={{ paddingTop: 20 }}>
                                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--nouri-accent)', marginBottom: 8 }}>TEXTURE MACRO</p>
                                    <p style={{ fontSize: 14, color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
                                        Close views of the dessert surface communicate richness and quality before the customer reads a word.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <ImgZoom src={IMG.ingredient2} alt="Ingredient still" aspect="3/4" radius={10} objectPosition="top" />
                                <div style={{ paddingTop: 20 }}>
                                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--nouri-accent)', marginBottom: 8 }}>INGREDIENT STILLS</p>
                                    <p style={{ fontSize: 14, color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
                                        Single ingredients on clean backgrounds communicate what is inside with minimal decoration.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <ImgZoom src={IMG.product1} alt="Product in context" aspect="3/4" radius={10} />
                                <div style={{ paddingTop: 20 }}>
                                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--nouri-accent)', marginBottom: 8 }}>PRODUCT IN CONTEXT</p>
                                    <p style={{ fontSize: 14, color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
                                        The product appears in environments that feel premium but unpretentious, prioritising surface, light and proportion over excessive styling.
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
                                        { title: 'Asymmetric crops', desc: 'Off-centre compositions and deliberate negative space keep the imagery editorial rather than catalogue-like.' },
                                        { title: 'Natural directional light', desc: 'Single-direction lighting creates depth, warmth and tactile contrast.' },
                                        { title: 'Tactile surfaces', desc: 'Stone, wood and linen give the imagery a tactile, grounded quality.' },
                                        { title: 'Appetite first', desc: 'The product should look desirable before any nutritional message enters the conversation.' },
                                    ].map((p) => (
                                        <div key={p.title}>
                                            <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--foreground)', marginBottom: 15 }}>{p.title}</p>
                                            <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 2 }}>{p.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <ImgZoom src={IMG.product2} alt="Ingredient photography" aspect="2/2" radius={12} />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* -------- 08 · APPLICATIONS -------- */}
            <section className="nr-section" style={{ borderTop: '1px solid var(--border)' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <Reveal>
                        <div style={{ maxWidth: 600, marginBottom: 72 }}>
                            <Label>APPLICATIONS</Label>
                            <H2>Designed to live beyond the tub.</H2>
                            <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.8, marginTop: 24 }}>
                                The identity extends across packaging, digital touchpoints and campaign imagery while maintaining the same typography, colour and photographic principles.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={60}>
                        <div className="nr-two-col-md" style={{ marginBottom: 48 }}>
                            <ImgZoom
                                src={IMG.display}
                                alt="Packaging system"
                                aspect="4/3"
                                radius={12}
                            />
                            <ImgZoom
                                src={IMG.campaign}
                                alt="Retail presence"
                                aspect="4/3"
                                radius={12}
                            />
                        </div>
                    </Reveal>

                    <Reveal delay={80}>
                        <div className="nr-three-col">
                            {[
                                { num: '01', title: 'Packaging system', desc: 'Six flavour families built around one consistent packaging hierarchy.' },
                                { num: '02', title: 'Retail presence', desc: 'Shelf applications test how the range holds together alongside competing products.' },
                                { num: '03', title: 'Campaign compositions', desc: 'Product photography, ingredient imagery and typography extend the identity into launch and promotional content.' },
                            ].map((a) => (
                                <div key={a.num} style={{ paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--nouri-accent)', display: 'block', marginBottom: 12 }}>{a.num}</span>
                                    <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)', marginBottom: 8 }}>{a.title}</p>
                                    <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.65 }}>{a.desc}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal delay={100}>
                        <div style={{ marginTop: 48 }}>
                            <ImgZoom
                                src={IMG.fullrange2}
                                alt="Nouri full flavour campaign composition"
                                aspect="3/2"
                                radius={14}
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* -------- 09 · DESIGN SYSTEM -------- */}
            <section
                className="nr-section"
                style={{ borderTop: '1px solid var(--border)' }}
            >
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <Reveal>
                        <div style={{ maxWidth: 600, marginBottom: 72 }}>
                            <Label>DESIGN SYSTEM</Label>
                            <H2>A system designed to stay recognizable.</H2>
                            <p style={{ fontSize: 16, color: 'var(--muted-foreground)', lineHeight: 1.8, marginTop: 24 }}>
                                Nouri was designed as a scalable system. The same core rules can support new flavours, formats and applications without losing the brand's identity.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={80}>
                        <div className="nr-ds-grid">
                            {/* Rules */}
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {[
                                    { element: 'Colour', rule: 'One flavour family per variant, supported by a shared neutral core and defined type contrast.' },
                                    { element: 'Typography', rule: 'Vollkorn creates character, Hanken Grotesk handles supporting copy, and IBM Plex Mono separates product data.' },
                                    { element: 'Graphic', rule: 'Wrap and Accent Tick provide a consistent visual structure across packaging and brand applications.' },
                                    { element: 'Wordmark', rule: 'Used primarily in Ink on light backgrounds and reversed in Ivory on dark backgrounds.' },
                                    { element: 'Neutral core', rule: 'Oat, Ivory and Ink anchor the identity while supporting tones create hierarchy across layouts.' },
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
                                        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--nouri-accent)', paddingTop: 2 }}>{r.element.toUpperCase()}</p>
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
                                        A new flavour enters the system through a Field, Deep and Tint palette, a defined type contrast, and the established packaging structure. The identity can expand without changing its core rules.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* -------- 10 · REFLECTION -------- */}
            <section className="nr-section" style={{ borderTop: '1px solid var(--border)' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
                    <Reveal>
                        <div style={{ maxWidth: 800, margin: '0 auto' }}>
                            <Label>REFLECTION</Label>
                            <H2 center>Designing the system, not just the package.</H2>
                        </div>
                        <div className="nr-reflections" style={{ marginTop: 64 }}>
                            {[
                                {
                                    number: '01',
                                    heading: 'Identity as a system',
                                    body: 'Nouri changed how I think about brand identity. Typography, colour, photography and packaging became more meaningful when I stopped treating them as separate assets and started designing the relationships between them.',
                                },
                                {
                                    number: '02',
                                    heading: 'Designing at real scale',
                                    body: 'Working on the packaging changed how I think about hierarchy. What reads clearly on a screen does not automatically work on a tub or from a distance. Designing at real scale forced me to decide which elements deserved attention and which could be removed.',
                                },
                                {
                                    number: '03',
                                    heading: 'Balancing appetite and restraint',
                                    body: 'The hardest part was making Nouri feel warm without becoming playful and premium without becoming cold. No single design choice solved that tension. The result came from getting typography, imagery, colour, whitespace and tone to reinforce one another.',
                                },
                            ].map((r) => (
                                <article key={r.number} className="nr-reflection">
                                    <p style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--muted-foreground)', letterSpacing: '0.08em', marginBottom: 20 }}>{r.number}</p>
                                    <h3 style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--nouri-accent)', marginBottom: 16 }}>{r.heading.toUpperCase()}</h3>
                                    <p style={{ fontSize: 'clamp(15px, 1.6vw, 18px)', color: 'var(--muted-foreground)', lineHeight: 1.85, fontFamily: 'var(--font-nouri-body)' }}>
                                        {r.body}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* -------- NEXT PROJECT -------- */}
            <section
                className="nr-section-sm"
                style={{ borderTop: '1px solid var(--border)' }}
            >
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', color: 'var(--muted-foreground)', marginBottom: 24, textAlign: 'center' }}>UP NEXT</p>
                    <Link to="/projects/kitrah" style={{ display: 'block', textDecoration: 'none' }}>
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
                                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'var(--nouri-accent)', marginBottom: 16 }}>PRODUCT DESIGN · UX/UI</span>
                                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, color: 'var(--foreground)', marginBottom: 16, lineHeight: 1.2 }}>
                                    Kitrah
                                </h3>
                                <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.7, marginBottom: 32, maxWidth: 460 }}>
                                    A connected kitchen experience that helps people organise homemade meals with smart labelling and inventory tracking.
                                </p>
                                <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--nouri-accent)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                    View Next Project →
                                </span>
                            </div>
                            <div className="nr-next-img" style={{ overflow: 'hidden', backgroundColor: 'var(--muted)' }}>
                                <img
                                    src={IMG.smartpantry}
                                    alt="Smart Pantry next project"
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

            {/* -------- FOOTER -------- */}
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
