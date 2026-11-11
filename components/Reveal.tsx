'use client';

import { useEffect, useRef, type ReactNode } from 'react';

// Marks a sheet data-in="true" once it scrolls into view so its stamps can impress.
// Without JavaScript the attribute is never "pending", so everything is simply visible.
export default function Reveal({ children, as: Tag = 'section', ...rest }: { children: ReactNode; as?: 'section' | 'div'; id?: string; className?: string; 'aria-labelledby'?: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.dataset.in = 'true';
      return;
    }
    el.dataset.in = 'pending';
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.dataset.in = 'true';
            io.disconnect();
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // @ts-expect-error ref type varies with the tag
  return <Tag ref={ref} {...rest}>{children}</Tag>;
}
