import Nav from '@/components/Nav';
import SignatureIntro from '@/components/SignatureIntro';
import Hero from '@/components/sections/Hero';
import Work from '@/components/sections/Work';
import References from '@/components/sections/References';
import Specifications from '@/components/sections/Specifications';
import Correspondence from '@/components/sections/Correspondence';

export default function Home() {
  return (
    <>
      <SignatureIntro />
      <Nav />
      <main>
        <Hero />
        <Work />
        <References />
        <Specifications />
      </main>
      <Correspondence />
    </>
  );
}
