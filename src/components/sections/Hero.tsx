"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1 className="text-green font-mono mb-5 text-sm">Hi, my name is</h1>;
  const two = <h2 className="big-heading text-lightest-slate mb-1 mt-2 font-semibold">Dhrupesh Brahmbhatt.</h2>;
  const three = <h3 className="big-heading text-slate font-semibold">I build things for the web.</h3>;
  const four = (
    <p className="mt-5 max-w-[540px] text-slate">
     I don't just build software — I engineer digital experiences that move people and businesses forward. With expertise across web, AI, and blockchain, I turn complex problems into powerful, human-centered solutions. Right now, I'm focused on building what's next — and doing it better than anyone else.
      {/* <a
        className="text-green hover:after:w-full transition-all relative inline-block"
        href="https://upstatement.com/"
        target="_blank"
        rel="noreferrer"
      >
        Upstatement
      </a>. */}
    </p>
  );
  const five = (
    <Link
      className="inline-block mt-12 px-7 py-5 bg-transparent border border-green text-green rounded font-mono text-sm
      hover:bg-green/10 transition-all cursor-pointer"
      href="/#projects"
    >
      Check out my work!
    </Link>
  );

  const items = [one, two, three, four, five];

  return (
    <section className="flex flex-col justify-center items-start min-h-screen px-6 md:px-[150px] pt-28">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          className="w-full"
        >
          {item}
        </motion.div>
      ))}
    </section>
  );
};

export default Hero;
