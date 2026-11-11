import Reveal from '@/components/Reveal';
import { experience } from '@/content/profile';

export default function Work() {
  return (
    <Reveal as="section" id="work" className="wrap section" aria-labelledby="work-title">
      <div className="section-head">
        <span className="num">I</span>
        <h2 id="work-title" className="display display-lg">
          Work, <em>by reference.</em>
        </h2>
        <p className="body-sm" style={{ maxWidth: '28ch' }}>
          Each entry: the problem as the operation stated it, what was done, the measured result.
        </p>
      </div>
      <div className="rule" />

      {experience.map((job) => (
        <div key={`${job.company}-${job.period}`} style={{ paddingTop: 40 }}>
          <div className="grid12" style={{ rowGap: 8, paddingBottom: 8 }}>
            <div className="col-span-12 md:col-span-4">
              <p className="display display-md">{job.company}</p>
              <p className="body-sm" style={{ marginTop: 6 }}>
                {job.role}
              </p>
            </div>
            <div className="col-span-6 md:col-span-3">
              <p className="caps">Period</p>
              <p className="body" style={{ marginTop: 6 }}>
                {job.period}
              </p>
            </div>
            <div className="col-span-6 md:col-span-5">
              <p className="caps">Domain</p>
              <p className="body" style={{ marginTop: 6 }}>
                {job.domain}
              </p>
            </div>
          </div>

          {job.entries.map((e) => (
            <article className="entry" key={e.id} aria-label={e.id}>
              <div>
                <p className="ref">{e.id}</p>
                <p className="body-sm" style={{ marginTop: 4 }}>
                  {e.date}
                </p>
              </div>
              <div>
                <p className="body" style={{ color: 'var(--ink)', fontWeight: 500 }}>
                  {e.defect}
                </p>
                <p className="body" style={{ marginTop: 12 }}>
                  {e.action}
                </p>
                <ul className="stack" aria-label="Stack">
                  {e.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="caps">Result</p>
                <p className="serif-it" style={{ marginTop: 8 }}>
                  {e.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      ))}
    </Reveal>
  );
}
