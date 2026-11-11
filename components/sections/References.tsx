import Arrow from '@/components/Arrow';
import Reveal from '@/components/Reveal';
import { projects } from '@/content/profile';

export default function References() {
  return (
    <Reveal as="section" id="references" className="wrap section" aria-labelledby="ref-title">
      <div className="section-head">
        <span className="num">II</span>
        <h2 id="ref-title" className="display display-lg">
          References <em>of my own.</em>
        </h2>
        <p className="body-sm" style={{ maxWidth: '28ch' }}>
          Products built outside work, each with its problem, its build and its status.
        </p>
      </div>
      <div className="rule" />

      {projects.map((p) => {
        const open = p.status === 'IN TESTING';
        return (
          <article className="plate" key={p.id} id={`project-${p.id}`} aria-label={p.name} style={{ scrollMarginTop: 88 }}>
            <div>
              <p className="ref">
                {p.id} · {p.year}
              </p>
              <p className={`caps status${open ? ' open' : ''}`} style={{ marginTop: 10 }}>
                {open ? 'In testing' : 'Shipped'}
              </p>
            </div>
            <div>
              <h3 className="display display-md">
                {p.name}
              </h3>
              <p className="serif-it" style={{ marginTop: 14, color: 'var(--ink-2)' }}>
                {p.oneLine}
              </p>
              <div style={{ marginTop: 22 }}>
                {p.links.map((l) => (
                  <a key={l.href} className="act act-quiet" href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label} <Arrow />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="body" style={{ color: 'var(--ink)', fontWeight: 500 }}>
                {p.problem}
              </p>
              <p className="body" style={{ marginTop: 12 }}>
                {p.built}
              </p>
              <ul className="stack" aria-label="Stack">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </Reveal>
  );
}
