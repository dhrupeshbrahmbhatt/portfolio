import Arrow from '@/components/Arrow';
import Reveal from '@/components/Reveal';
import { profile } from '@/content/profile';
import { asset } from '@/lib/site';

export default function Correspondence() {
  return (
    <Reveal as="section" id="correspondence" className="on-dark" aria-labelledby="corr-title">
      <div className="wrap" style={{ paddingTop: 'clamp(72px, 9vw, 128px)', paddingBottom: 'clamp(56px, 7vw, 96px)', marginTop: 'clamp(72px, 9vw, 128px)' }}>
        <div className="section-head" style={{ paddingTop: 0 }}>
          <span className="num" style={{ color: 'var(--on-dark-muted)' }}>IV</span>
          <h2 id="corr-title" className="display display-lg">
            Correspondence.
          </h2>
        </div>
        <div className="hair" />
        <div className="grid12" style={{ paddingTop: 48, rowGap: 40 }}>
          <div className="col-span-12 lg:col-span-7">
            <p className="display display-md" style={{ maxWidth: '20em' }}>
              A workflow that lives in people&apos;s heads, or a product that needs building? <em>Write to me.</em>
            </p>
            <p className="lede" style={{ marginTop: 24 }}>
              {profile.availability}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <a className="act" href={`mailto:${profile.email}`}>
              {profile.email} <Arrow />
            </a>
            <a className="act act-quiet" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn <Arrow />
            </a>
            <a className="act act-quiet" href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub <Arrow />
            </a>
            <a className="act act-quiet" href={asset(profile.cv)} target="_blank" rel="noopener noreferrer">
              Curriculum vitae, PDF <Arrow />
            </a>
          </div>
        </div>
        <div className="hair" style={{ marginTop: 64 }} />
        <div className="colophon caps">
          <span>© {new Date().getFullYear()} {profile.name} · he/him · Ahmedabad</span>
          <span>Email and LinkedIn, nothing else</span>
        </div>
      </div>
    </Reveal>
  );
}
