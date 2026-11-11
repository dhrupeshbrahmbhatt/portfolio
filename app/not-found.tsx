import Arrow from '@/components/Arrow';
import { BASE_PATH } from '@/lib/site';

export const metadata = { title: 'Not found · Dhrupesh Brahmbhatt', robots: { index: false } };

export default function NotFound() {
  return (
    <main className="wrap" style={{ minHeight: '100vh', display: 'grid', alignContent: 'center', gap: 28 }}>
      <h1 className="display display-lg">
        No such reference. <em>Back to the index.</em>
      </h1>
      <div>
        <a className="act" href={`${BASE_PATH}/`}>
          Dhrupesh Brahmbhatt <Arrow />
        </a>
      </div>
    </main>
  );
}
