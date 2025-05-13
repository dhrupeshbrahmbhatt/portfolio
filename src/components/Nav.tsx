"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Logo from './Logo';

type NavProps = {
  isHome: boolean;
};

const Nav: React.FC<NavProps> = ({ isHome }) => {
  const [scrollDirection, setScrollDirection] = useState('none');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const pathname = usePathname();

  const handleScroll = () => {
    const fromTop = window.scrollY;

    // Set scroll direction
    const DELTA = 5;
    const currentScrollPos = window.pageYOffset;
    const prevScrollPos = currentScrollPos - DELTA;
    const nextScrollPos = currentScrollPos + DELTA;

    // Set isScrolledToTop
    setScrolledToTop(fromTop < 50);

    // Set scrollDirection
    if (fromTop > prevScrollPos && fromTop > 100) {
      setScrollDirection('down');
    } else if (fromTop < nextScrollPos) {
      setScrollDirection('up');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', url: '/#about' },
    { name: 'Experience', url: '/#jobs' },
    { name: 'Work', url: '/#projects' },
    { name: 'Contact', url: '/#contact' },
  ];

  const navHeight = 100;
  const navScrollHeight = 70;

  return (
    <header className={`
      fixed
      w-full
      h-[${scrolledToTop ? navHeight : navScrollHeight}px]
      flex
      mt-5
      items-center
      bg-background
      px-6 md:px-[50px]
      z-10
      transition-all
      duration-300
      ${scrollDirection === 'down' ? '-translate-y-[${navScrollHeight}px]' : ''}
      ${scrollDirection === 'up' ? 'shadow-md' : ''}
      ${scrolledToTop ? '' : 'shadow-md'}
    `}>
      <nav className="flex justify-between items-center w-full relative z-10">
        <div className="flex items-center">
          <Link href="/" aria-label="home">
            <Logo />
          </Link>
        </div>

        <div className="flex items-center">
          <ol className="hidden md:flex">
            {navLinks.map(({ url, name }, i) => (
              <motion.li
                key={i}
                className="mx-4 text-lightest-slate"
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: i * 0.1 + 0.1 }}
              >
                <Link
                  href={url}
                  className="text-light-slate hover:text-green transition-colors font-mono text-sm"
                >
                  <span className="text-green">0{i + 1}.</span> {name}
                </Link>
              </motion.li>
            ))}
          </ol>

          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: navLinks.length * 0.1 + 0.1 }}
          >
            <a
              className="ml-4 px-4 py-2 border border-green text-green rounded font-mono text-sm hover:bg-opacity-10 hover:bg-green transition-all"
              href="/Dhrupesh_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </motion.div>

          {/* Mobile Menu Button - Implement hamburger */}
          <div className="md:hidden">
            <button
              className="w-[30px] h-[30px] relative z-10 text-green"
              aria-label="Menu"
            >
              <div className="hamburger">
                <div className="ham-box">
                  <div className="ham-box-inner" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
