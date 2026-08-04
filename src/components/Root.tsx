import { Outlet, ScrollRestoration } from 'react-router'
import { ThemeProvider } from '@/context/theme'
import Nav from '@/components/Nav'

const globalStyles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background-color: var(--background);
    color: var(--foreground);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  ::-webkit-scrollbar { width: 0; }
  html:hover::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
  a { text-decoration: none; }

  @media (max-width: 768px) {
    .desktop-nav { display: none !important; }
    .hamburger { display: flex !important; }
    .hero-grid { grid-template-columns: 1fr !important; }
    .hero-product { order: -1; }
    .projects-grid { grid-template-columns: 1fr !important; }
    .about-grid { grid-template-columns: 1fr !important; }
    .footer-inner { flex-direction: column !important; text-align: center; gap: 12px !important; }
    .section-pad { padding: 64px 24px !important; }
    .hero-pad { padding: 100px 24px 64px !important; }
    .case-two-col { grid-template-columns: 1fr !important; }
    .case-meta { flex-direction: column !important; gap: 24px !important; }
    .feature-cards { grid-template-columns: 1fr !important; }
    .roadmap-grid { grid-template-columns: 1fr 1fr !important; }
  }
  @media (min-width: 769px) and (max-width: 1100px) {
    .hero-grid { grid-template-columns: 1fr 1fr !important; }
    .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
  }
`

export default function Root() {
  return (
    <ThemeProvider>
      <style>{globalStyles}</style>
      <Nav />
      <Outlet />
      <ScrollRestoration />
    </ThemeProvider>
  )
}
