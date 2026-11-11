import { signature } from '@/content/signature';

// The opening signature. Pure CSS animation over inline SVG: no JavaScript is needed
// to play it or to remove it, so it can never trap the page. It plays on every load,
// as the owner asked, and is gone at about 2.95 s; a click or key press skips it, and
// CSS skips it for people who prefer reduced motion.
//
// Timing: one easing curve governs the whole signature. The pen lands already moving
// (no slow start on the long first stroke of the D), glides through every letter, and
// eases off only at the end. Within a letter the stroke is linear (no per-letter
// braking); letters overlap by a hair so the hand never pauses between them.
// The first stroke waits a beat so it does not compete with page start-up work.
const DRAW_START = 0.14; // s
const DRAW_TOTAL = 1.8; // s from first touch to last letter: slow enough to watch
const OVERLAP = 0.05; // s each letter keeps drawing into the next

// Position along the signature over time: a blend of linear and easeOutSine.
// Speed at the start is about 1.3x average and settles to 0.4x at the end.
const ease = (x: number) => 0.4 * x + 0.6 * Math.sin((Math.PI * x) / 2);
// Invert by bisection: the time at which the pen reaches a share of the outline.
const timeAt = (progress: number) => {
  const target = Math.min(1, Math.max(0, progress));
  let lo = 0;
  let hi = 1;
  for (let i = 0; i < 30; i++) {
    const mid = (lo + hi) / 2;
    if (ease(mid) < target) lo = mid;
    else hi = mid;
  }
  return DRAW_TOTAL * ((lo + hi) / 2);
};

// Computed once at module load: start time and duration for every letter.
const glyphs = signature.glyphs.reduce<{ d: string; start: number; dur: number; cursor: number }[]>((acc, g) => {
  const from = acc.length ? acc[acc.length - 1].cursor : 0;
  const to = from + g.len / signature.total;
  const t0 = timeAt(from);
  const t1 = timeAt(to);
  acc.push({ d: g.d, start: DRAW_START + t0, dur: Math.max(0.04, t1 - t0 + OVERLAP), cursor: to });
  return acc;
}, []);
const drawEnd = DRAW_START + DRAW_TOTAL;

export default function SignatureIntro() {
  return (
    <div className="sig" aria-hidden="true">
      <svg className="sig-svg" viewBox={signature.viewBox} preserveAspectRatio="xMidYMid meet" focusable="false">
        {glyphs.map((g, i) => (
          <path
            key={i}
            d={g.d}
            pathLength={1}
            className="sig-glyph"
            style={{
              ['--s' as string]: `${g.start.toFixed(3)}s`,
              ['--t' as string]: `${g.dur.toFixed(3)}s`,
              ['--f' as string]: `${(g.start + g.dur * 0.55).toFixed(3)}s`,
            }}
          />
        ))}
        <path d={signature.flourish} pathLength={1} className="sig-flourish" style={{ ['--s' as string]: `${(drawEnd - 0.1).toFixed(2)}s` }} />
      </svg>
    </div>
  );
}
