"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';

const featuredProjects = [
  {
    title: 'Think-tank: Dynamic 3D Portfolio',
    description: 'Transforms GitHub and LinkedIn profiles into interactive 3D web portfolios, featuring real-time in-browser editing capabilities.',
    techs: ['3D Web Graphics', 'API Integration', 'Frontend Development'], // Inferred techs
    links: {
      // Add your links here if available
      github: 'https://github.com/dhrupeshbrahmbhatt/Think-Tank',
      external: 'YOUR_EXTERNAL_LINK'
    },
    image: '' // Add your image URL here if available
  },
  {
    title: 'WebChat',
    description: 'A highly secure web chat integrating blockchain technology for enhanced privacy, featuring End-to-End Encryption (E2EE) and post-quantum cryptography.',
    techs: ['Blockchain', 'E2EE', 'Post-Quantum Cryptography', 'WebSockets'], // Inferred techs
    links: {
      // Add your links here if available
      github: 'https://github.com/dhrupeshbrahmbhatt/Webchat',
      external: 'YOUR_EXTERNAL_LINK'
    },
    image: '' // Add your image URL here if available
  },
  {
    title: 'Elevate OS: Career Building Platform',
    description: 'A comprehensive web platform offering tools and resources for career development, including interview preparation and CV/resume building.',
    techs: ['Web Application', 'Career Development Tools', 'Resource Management'], // Inferred techs
    links: {
      // Add your links here if available
      github: 'YOUR_GITHUB_LINK',
      external: 'YOUR_EXTERNAL_LINK'
    },
    image: '' // Add your image URL here if available
  }
];

const otherProjects = [
  {
    title: 'Hello Haven Cafe Website',
    description: 'Created a professional website for Hello Haven Cafe.',
    techs: ['Web Design', 'Frontend Development'], // Inferred techs
    links: {
      // Add your links here if available
      github: 'YOUR_GITHUB_LINK',
      external: 'YOUR_EXTERNAL_LINK'
    }
  },
  {
    title: 'CampusConnect',
    description: 'Platform connecting students and alumni for mentorship and support, featuring chat functionality and a LinkedIn-style posting system for job search and opportunities.',
    techs: ['Community Platform', 'Messaging', 'Social Features'], // Inferred techs
    links: {
      // Add your links here if available
      github: 'YOUR_GITHUB_LINK',
      external: 'YOUR_EXTERNAL_LINK'
    }
  },
  {
    title: 'Local Lab Attendance System',
    description: 'A web application designed for local network deployment to simplify the laboratory attendance tracking process.',
    techs: ['Local Deployment', 'Web Application', 'Database'], // Inferred techs
    links: {
      // Add your links here if available
      github: 'YOUR_GITHUB_LINK',
      external: 'YOUR_EXTERNAL_LINK'
    }
  },
  {
    title: 'Piano Tales Clone',
    description: 'A web-based clone replicating the interactive musical experience of the Piano Tales application.',
    techs: ['Music Application', 'Web Development', 'Interactive Audio'], // Inferred techs
    links: {
      // Add your links here if available
      github: 'YOUR_GITHUB_LINK',
      external: 'YOUR_EXTERNAL_LINK'
    }
  }
];
const Projects: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      id="projects"
      ref={ref}
      className="max-w-[1000px] mx-auto px-6 md:px-[150px]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="numbered-heading">Some Things I've Built</h2>

      <ul className="list-none p-0 m-0">
        {featuredProjects.map((project, i) => {
          const isEven = i % 2 === 0;

          return (
            <li key={i} className="relative grid grid-cols-12 gap-2 items-center mb-24">
              {/* Project Image */}
              <div className={`relative row-start-1 shadow-lg rounded-md overflow-hidden col-span-12
              ${isEven ? 'md:col-start-6 md:col-span-7' : 'md:col-span-7'}`}>
                <a
                  href={project.links.external || project.links.github || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full h-full"
                >
                  <div className="absolute inset-0 bg-navy/75 z-[1] hover:bg-transparent transition-all duration-300"></div>
                  <div className="relative w-full aspect-video bg-light-navy">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 700px"
                    />
                  </div>
                </a>
              </div>

              {/* Project Content */}
              <div className={`relative z-[2] row-start-1 col-span-12 text-left py-6
              ${isEven ? 'md:col-span-7 md:text-right' : 'md:col-start-6 md:col-span-7 md:text-right'}`}>
                <p className="text-green font-mono text-sm m-0 mb-1">Featured Project</p>
                <h3 className="text-lightest-slate text-2xl font-semibold">
                  <a
                    href={project.links.external || project.links.github || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-green"
                  >
                    {project.title}
                  </a>
                </h3>

                <div className="relative z-[1] p-6 rounded-md bg-light-navy shadow-xl my-5 text-light-slate">
                  <p>{project.description}</p>
                </div>

                <ul className={`flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-light-slate
                ${isEven ? 'md:justify-end' : 'md:justify-end'}`}>
                  {project.techs.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>

                <div className={`flex gap-4 mt-2 items-center ${isEven ? 'md:justify-end' : 'md:justify-end'}`}>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lightest-slate hover:text-green"
                      aria-label={`GitHub link for ${project.title}`}
                    >
                      <Github size={22} />
                    </a>
                  )}
                  {project.links.external && (
                    <a
                      href={project.links.external}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lightest-slate hover:text-green"
                      aria-label={`External link for ${project.title}`}
                    >
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <h2 className="mb-10 text-center font-semibold text-lightest-slate text-2xl">Other Noteworthy Projects</h2>
      <Link href="/archive" className="flex justify-center mb-10">
        <button className="font-mono px-4 py-3 bg-transparent border border-green text-green rounded text-sm hover:bg-green/10 transition-all">
          view the archive
        </button>
      </Link>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherProjects.map((project, i) => (
          <li
            key={i}
            className="relative bg-light-navy rounded-md p-6 flex flex-col justify-between
            hover:-translate-y-1 transition-all shadow-md hover:shadow-xl"
          >
            <header className="flex justify-between items-start mb-7">
              <div className="text-green">
                <FolderOpen size={40} />
              </div>
              <div className="flex gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lightest-slate hover:text-green"
                    aria-label={`GitHub link for ${project.title}`}
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.links.external && (
                  <a
                    href={project.links.external}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lightest-slate hover:text-green"
                    aria-label={`External link for ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </header>

            <h3 className="text-lightest-slate text-xl font-semibold mb-2">
              <a
                href={project.links.external || project.links.github || '#'}
                target="_blank"
                rel="noreferrer"
                className="hover:text-green"
              >
                {project.title}
              </a>
            </h3>

            <p className="text-light-slate mb-5">{project.description}</p>

            <footer>
              <ul className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-mono text-light-slate">
                {project.techs.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </footer>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Projects;
