import Arrow from '@/components/Arrow';
import Reveal from '@/components/Reveal';
import { profile } from '@/content/profile';

const figures = [
  { ref: '01', subject: 'Operations dashboard, Qlik replaced by a service', before: '2 to 3 min', after: '2 to 3 s', note: '2026 · best under 100 ms' },
  { ref: '02', subject: 'Legacy SSRS reports rebuilt on BigQuery and Looker', before: '', after: '60+', note: '2026 · in 1.5 months' },
  { ref: '03', subject: 'Production services, aviation domain', before: '', after: '5+', note: '2025 to 2026 · requirements to release' },
  { ref: '04', subject: 'Repositories upgraded with zero breaking changes', before: '', after: '50+', note: '2026 · security fixes, Node.js' },
];

export default function Hero() {
  return (
    <Reveal as="section" id="top" className="wrap" aria-labelledby="hero-title">
      <div className="grid12" style={{ paddingTop: 'clamp(44px, 6vw, 80px)', paddingBottom: 'clamp(40px, 5vw, 72px)', rowGap: 48 }}>
        <div className="lg:col-span-7 col-span-12">
          <h1 id="hero-title" className="display display-xl rise" style={{ ['--d' as string]: '120ms' }}>
            Backend engineering, <em>forward deployed.</em>
          </h1>
          <p className="lede rise" style={{ ['--d' as string]: '240ms', marginTop: 32 }}>
            {profile.summary} Based in {profile.station}.
          </p>
          <div className="rise" style={{ ['--d' as string]: '360ms', display: 'flex', flexWrap: 'wrap', gap: '8px 40px', marginTop: 40 }}>
            <a className="act" href={`mailto:${profile.email}`}>
              Write to me <Arrow />
            </a>
            <a className="act act-quiet" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn <Arrow />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 col-span-12 lg:pt-3 rise" style={{ ['--d' as string]: '300ms' }}>
          <ol className="spec" aria-label="Selected figures">
            {figures.map((f) => (
              <li key={f.ref}>
                <span className="ref">{f.ref}</span>
                <span className="body subject" style={{ maxWidth: 'none', color: 'var(--ink)' }}>
                  {f.subject}
                </span>
                <span className="fig">
                  <span className="display-fig">
                    {f.before && (
                      <>
                        <span style={{ color: 'var(--muted)' }}>{f.before}</span>
                        <span aria-hidden="true" style={{ margin: '0 10px', color: 'var(--hair-strong)' }}>
                          →
                        </span>
                        <span className="sr-only">to</span>
                      </>
                    )}
                    {f.after.endsWith('+') ? (<>{f.after.slice(0, -1)}<span className="plus">+</span></>) : f.after}
                  </span>
                  <small>{f.note}</small>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="rule" />
    </Reveal>
  );
}
