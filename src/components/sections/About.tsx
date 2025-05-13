"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React.js',
    'Node.js',
    'Python (ML & AI)',
    'Solidity (Smart Contracts)',
    'MongoDB',
    'Express.js',
  ];

  return (
    <motion.section
      id="about"
      ref={ref}
      className="max-w-[900px] mx-auto px-6 md:px-[150px]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="numbered-heading">About Me</h2>

      <div className="flex flex-wrap md:flex-nowrap md:gap-12">
        <div className="text-slate">
          <div>
            <p>
              Hello! My name is Dhrupesh Brahmbhatt, and I love creating powerful digital solutions that live on the internet — and beyond. My interest in technology sparked early when I started building small websites and experimenting with Python projects &mdash; those first experiments taught me the magic of turning ideas into reality through code.
            </p>

            <p className="my-4">
              Fast-forward to today, I've had the opportunity to work on exciting web development projects, participate in{' '}
              <a className="text-green hover:after:w-full after:transition-all after:duration-200 transition-all inline-block relative" href="https://devpost.com/hackathons" target="_blank" rel="noreferrer">
                hackathons
              </a>
              , intern at{' '}
              <a className="text-green hover:after:w-full after:transition-all after:duration-200 transition-all inline-block relative" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                tech companies
              </a>
              , and dive deep into{' '}
              <a className="text-green hover:after:w-full after:transition-all after:duration-200 transition-all inline-block relative" href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank" rel="noreferrer">
                machine learning
              </a>{' '}
              and{' '}
              <a className="text-green hover:after:w-full after:transition-all after:duration-200 transition-all inline-block relative" href="https://ethereum.org/en/developers/docs/smart-contracts/" target="_blank" rel="noreferrer">
                blockchain development
              </a>
              .
              My current focus is on building innovative, human-centered applications that are accessible, scalable, and future-proof.
            </p>

            <p>
              I'm also working on personal projects that blend web3, AI, and modern web technologies — pushing the boundaries of what’s possible in today's digital space.
            </p>

            <p className="mt-4">Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="grid grid-cols-2 gap-x-2 gap-y-2 mt-5 font-mono text-sm max-w-[500px]">
            {skills.map((skill, i) => (
              <li key={i} className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-green">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative w-[300px] h-[300px] mt-12 md:mt-0 mx-auto md:mx-0">
          <div className="relative w-full h-full rounded border-2 border-green group">
            <div className="absolute inset-0 bg-green/20 hover:bg-transparent transition-all duration-300 z-[1] rounded"></div>
            <Image
              src="https://ext.same-assets.com/3521928399/1948850838.jpg" // Replace with your own image URL if you want
              alt="Dhrupesh's Headshot"
              className="rounded grayscale hover:grayscale-0 transition-all duration-300 mix-blend-multiply hover:mix-blend-normal"
              fill
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
