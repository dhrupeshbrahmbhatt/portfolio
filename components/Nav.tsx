import { profile } from '@/content/profile';

export const sections = [
  { n: 'I', id: 'work', label: 'Work' },
  { n: 'II', id: 'references', label: 'References' },
  { n: 'III', id: 'specifications', label: 'Specifications' },
  { n: 'IV', id: 'correspondence', label: 'Correspondence' },
];

// Hairline navigation. The phone menu is a <details>, so it works without JavaScript.
export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#top">
          {profile.name}
        </a>
        <ol aria-label="Sections">
          {sections.map((s) => (
            <li key={s.id}>
              <a className="caps caps-ink" href={`#${s.id}`}>
                <span className="n">{s.n}</span>
                {s.label}
              </a>
            </li>
          ))}
        </ol>
        <a className="caps write" href={`mailto:${profile.email}`}>
          Write to me
        </a>
        <details>
          <summary className="caps caps-ink">Menu</summary>
          <nav className="menu" aria-label="Sections">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="caps caps-ink">
                {s.label}
                <span className="n" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', textTransform: 'none', letterSpacing: 0, color: 'var(--muted)' }}>
                  {s.n}
                </span>
              </a>
            ))}
            <a href={`mailto:${profile.email}`} className="caps" style={{ color: 'var(--blue)' }}>
              Write to me
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
