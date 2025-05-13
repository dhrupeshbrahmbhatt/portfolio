"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin } from 'lucide-react';

export const Social = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <motion.div
        className="hidden md:flex fixed bottom-0 left-10 right-auto z-10 text-light-slate flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isMounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col items-center m-0 p-0 after:content-[''] after:block after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-light-slate">
          <li className="mb-5">
            <a
              href="https://github.com/dhrupeshbrahmbhatt"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 text-light-slate hover:text-green hover:-translate-y-1 transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </li>
          <li className="mb-5">
            <a
              href="https://instagram.com/dhrupesh_brahmbhatt"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 text-light-slate hover:text-green hover:-translate-y-1 transition-all"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </li>
          <li className="mb-5">
            <a
              href="https://linkedin.com/in/dhrupesh-brahmbhatt-a45656237/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 text-light-slate hover:text-green hover:-translate-y-1 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="hidden md:flex fixed bottom-0 left-auto right-10 z-10 text-light-slate flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isMounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center m-0 p-0 after:content-[''] after:block after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-light-slate">
          <a
            href="mailto:brittany.chiang@gmail.com"
            className="my-5 mx-auto p-2.5 font-mono text-sm tracking-widest text-light-slate hover:text-green hover:-translate-y-1 transition-all [writing-mode:vertical-rl]"
          >
            dhrupesh840@gmail.com
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Social;
