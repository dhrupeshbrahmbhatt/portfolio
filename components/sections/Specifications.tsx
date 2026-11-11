import Reveal from '@/components/Reveal';
import { education, skills } from '@/content/profile';

export default function Specifications() {
  return (
    <Reveal as="section" id="specifications" className="wrap section" aria-labelledby="spec-title">
      <div className="section-head">
        <span className="num">III</span>
        <h2 id="spec-title" className="display display-lg">
          Specifications.
        </h2>
        <p className="body-sm" style={{ maxWidth: '28ch' }}>
          What is fitted, by group. Primary: Node.js, TypeScript, PostgreSQL. Data: BigQuery, Looker, GCP.
        </p>
      </div>
      <div className="rule" />

      <div className="parts" style={{ borderTop: 0 }}>
        {skills.map((g) => (
          <div key={g.group}>
            <p className="caps caps-ink" style={{ paddingTop: 4 }}>
              {g.group}
            </p>
            <p className="body" style={{ maxWidth: 'none' }}>
              {g.items.join('  ·  ')}
            </p>
          </div>
        ))}
        <div>
          <p className="caps caps-ink" style={{ paddingTop: 4 }}>
            Education
          </p>
          <p className="body" style={{ maxWidth: 'none' }}>
            {education.degree}, {education.school}, {education.period}.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
