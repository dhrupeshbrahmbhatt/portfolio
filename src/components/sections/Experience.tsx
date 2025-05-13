"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const jobsData = [
  {
    title: 'Internship Trainee',
    company: 'Cognifyz Technologies',
    url: 'https://cognifyz.com/',
    range: '2024',
    duties: [
      'Led the development of Sure-Supply, a food waste management platform using React.js, Node.js, and MongoDB.',
      'Gained hands-on experience in building and deploying secure full-stack web applications.',
      'Collaborated closely with cross-functional teams to implement real-time tracking and notification systems.',
    ],
  },
  {
    title: 'Project Expo Winner',
    company: 'Shree Swaminarayan Institute of Technology',
    url: 'https://ssit.co.in/',
    range: '2023',
    duties: [
      'Built Campus Connect, a platform bridging students and alumni across universities with job listings and donation support.',
      'Won 1st place at the college project expo by demonstrating innovation, real-world impact, and technical excellence.',
      'Designed secure authentication systems and scalable database architecture for seamless platform usage.',
    ],
  },
  {
    title: 'Hackathon Participant',
    company: 'Multiple Hackathons',
    url: 'https://devpost.com/',
    range: '2022 - 2025',
    duties: [
      'Participated in high-stakes national and college-level hackathons, delivering projects under intense deadlines.',
      'Specialized in full-stack development using MERN, and rapidly prototyped functional MVPs.',
      'Gained recognition for creative problem solving, team leadership, and technical presentations.',
    ],
  },
  {
    title: 'Independent Projects',
    company: 'Personal Development',
    url: 'https://dhrupeshbrahmbhatt.github.io/portfolio/',
    range: '2022 - Present',
    duties: [
      'Developed WebChat, a decentralized chat app promoting privacy and positive user behavior.',
      'Built Sure-Supply and Campus-Connect, real-world applications focusing on community engagement and efficient resource management.',
      'Integrated blockchain, smart contracts, and real-time web technologies to create next-generation digital experiences.',
    ],
  },
];


const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      id="jobs"
      ref={ref}
      className=" mx-auto px-6 md:px-[150px]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="numbered-heading">Where I've Worked</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Tabs */}
        <div className="relative flex md:block overflow-x-auto md:overflow-x-visible">
          <div className="flex md:flex-col">
            {jobsData.map((job, i) => (
              <button
                key={i}
                className={`
                  px-5 py-3 font-mono text-sm text-center md:text-left border-b-2 md:border-b-0 md:border-l-2
                  flex items-center md:w-[160px] md:h-[50px]
                  ${activeTabId === i ? 'text-green border-green bg-light-navy/40' : 'text-slate border-lightest-navy bg-transparent hover:bg-light-navy/20 hover:text-green'}
                  whitespace-normal transition-all
                `}
                style={{ marginBottom: '20px' }}
                onClick={() => setActiveTabId(i)}
              >
                {job.company}
              </button>
            ))}
            <div
              className="hidden md:block absolute left-0 z-10 h-9 w-0.5 bg-green transition-all duration-200"
              style={{
                transform: `translateY(calc(${activeTabId} * (50px + 20px)))`,
                top: '20px',
              }}
            />
          </div>
        </div>

        {/* Tab content */}
        <div className="relative w-full">
          {jobsData.map((job, i) => (
            <div
              key={i}
              className={`${activeTabId === i ? 'block' : 'hidden'}`}
            >
              <h3 className="text-xl text-lightest-slate">
                <span>{job.title}</span>
                <span className="text-green"> @ </span>
                <a
                  href={job.url}
                  className="inline-link text-green hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {job.company}
                </a>
              </h3>

              <p className="mb-6 font-mono text-xs text-light-slate">
                {job.range}
              </p>

              <ul>
                {job.duties.map((duty, i) => (
                  <li
                    key={i}
                    className="relative pl-7 mb-3 before:content-['▹'] before:absolute before:left-0 before:text-green"
                  >
                    {duty}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
