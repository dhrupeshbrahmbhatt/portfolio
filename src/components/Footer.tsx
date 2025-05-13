"use client";

import React from 'react';
import { Github, Instagram, Linkedin, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center py-4 text-center h-auto min-h-[70px] px-6">
      <div className="flex space-x-5 mb-3 md:hidden">
        <a
          href="https://www.instagram.com/bchiang7"
          target="_blank"
          rel="noreferrer"
          className="text-light-slate hover:text-green transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </a>
        <a
          href="https://github.com/bchiang7"
          target="_blank"
          rel="noreferrer"
          className="text-light-slate hover:text-green transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/bchiang7"
          target="_blank"
          rel="noreferrer"
          className="text-light-slate hover:text-green transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
      </div>

      <div className="text-light-slate font-mono text-xs">
        <a
          href="https://github.com/bchiang7/v4"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green transition-colors flex items-center justify-center gap-2"
        >
          <span>Designed & Built by Brittany Chiang</span>
          <div className="flex items-center">
            <Star size={14} className="mr-1" />
            <span>7,799</span>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
