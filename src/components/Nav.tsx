import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { useTheme } from '@/context/theme'

function ThemeToggle() {
  const { dark, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        position: 'relative',
        width: 48,
        height: 26,
        borderRadius: 999,
        border: '1px solid var(--border)',
        backgroundColor: dark ? 'var(--accent)' : 'var(--muted)',
        cursor: 'pointer',
        transition: 'background-color 0.25s ease',
        flexShrink: 0,
      }}
    >
      <span style={{
        position: 'absolute',
        top: 3,
        left: 3,
        width: 18,
        height: 18,
        borderRadius: '50%',
        backgroundColor: 'var(--background)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 10,
        transition: 'transform 0.25s ease',
        transform: dark ? 'translateX(22px)' : 'translateX(0)',
      }}>
        {dark ? '🌙' : '☀️'}
      </span>
    </button>
  )
}

export default function Nav() {
  const { dark } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
const isCase = location.pathname !== '/'

const pageTitles: Record<string, string> = {
  '/projects/focus-dock': 'Focus Dock',
  '/projects/lego-police-story': 'LEGO Police Story',
  '/projects/smart-pantry': 'Smart Pantry',
  '/projects/nouri': 'Nouri',
}

const pageTitle = pageTitles[location.pathname] ?? ''

  const links = [
    { href: '/', label: 'Home' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#about', label: 'About' },
    { href: '/#resume', label: 'Resume' },
    { href: '/#contact', label: 'Contact' },
  ]

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: dark ? 'rgba(11,11,11,0.88)' : 'rgba(248,246,242,0.88)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border)',
      transition: 'background-color 0.3s ease',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 40px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 32,
      }}>
        <Link to="/" style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.14em',
          color: 'var(--foreground)',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}>
          ITUNU OGUNFUYE
        </Link>

        {isCase ? (
  <nav
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: 'var(--muted-foreground)',
    }}
    className="desktop-nav"
  >
    <Link
      to="/"
      style={{
        color: 'var(--muted-foreground)',
        textDecoration: 'none',
      }}
    >
      Home
    </Link>

    <span style={{ opacity: 0.4 }}>/</span>

    <span
      style={{
        color: 'var(--foreground)',
        fontWeight: 500,
      }}
    >
      {pageTitle}
    </span>
  </nav>
) : (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="desktop-nav">
            {links.map(({ href, label }) => (
              <a key={label} href={href} style={{
                color: 'var(--muted-foreground)',
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--foreground)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted-foreground)')}
              >{label}</a>
            ))}
          </nav>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <ThemeToggle />
          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: 'block', width: 20, height: 1.5, backgroundColor: 'var(--foreground)', borderRadius: 2,
                transition: 'transform 0.25s, opacity 0.25s',
                transform: menuOpen && i === 0 ? 'rotate(45deg) translate(4.5px,4.5px)' : menuOpen && i === 2 ? 'rotate(-45deg) translate(4.5px,-4.5px)' : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      <div style={{ maxHeight: menuOpen ? 280 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease', borderTop: menuOpen ? '1px solid var(--border)' : 'none' }} className="mobile-menu">
        <nav style={{ display: 'flex', flexDirection: 'column', padding: '16px 24px 24px', gap: 16 }}>
          {links.map(({ href, label }) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)} style={{ color: 'var(--muted-foreground)', fontSize: 15, fontWeight: 500, textDecoration: 'none', padding: '4px 0' }}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
