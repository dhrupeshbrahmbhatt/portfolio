"use client";

import React from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';

const archiveProjects = [
  {
    year: '2020',
    title: 'OctoProfile',
    made_at: '',
    built_with: ['Next.js', 'Chart.js', 'GitHub API'],
    links: {
      github: 'https://github.com/bchiang7/octoprofile',
      external: 'https://octoprofile.now.sh',
    },
  },
  {
    year: '2019',
    title: 'Spotify Profile',
    made_at: '',
    built_with: ['React', 'Styled Components', 'Express', 'Spotify API'],
    links: {
      github: 'https://github.com/bchiang7/spotify-profile',
      external: 'https://spotify-profile.herokuapp.com',
    },
  },
  {
    year: '2019',
    title: 'Spotify Recommendation App',
    made_at: '',
    built_with: ['Recommend.me', 'Custom Spotify API', 'React'],
    links: {
      github: 'https://github.com/bchiang7/spotify-recommendation-app',
      external: '',
    },
  },
  {
    year: '2018',
    title: 'Halcyon Theme',
    made_at: '',
    built_with: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
    links: {
      github: 'https://github.com/bchiang7/halcyon-site',
      external: 'https://halcyon-theme.netlify.com',
    },
  },
  {
    year: '2018',
    title: 'Deployed Netlify Site',
    made_at: 'Upstatement',
    built_with: ['Netlify'],
    links: {
      external: 'http://deployednetlify.site',
    },
  },
  {
    year: '2017',
    title: 'Apple Music Embeddable Web Player Widget',
    made_at: 'Apple',
    built_with: ['MusicKit.js', 'JavaScript', 'CSS'],
    links: {
      external: 'https://tools.applemusic.com/en-us',
    },
  },
  {
    year: '2017',
    title: 'Apple Music Facebook Messenger Integration',
    made_at: 'Apple',
    built_with: ['Ember', 'JavaScript', 'SCSS'],
    links: {
      external: 'https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming',
    },
  },
];

const ArchivePage = () => {
  return (
    <>
      <Nav isHome={false} />
      <main className="px-0 pt-[100px] pb-[200px] w-full">
        <div className="max-w-[1000px] mx-auto px-6 md:px-[150px]">
          <header>
            <h1 className="text-lightest-slate text-6xl font-semibold">Archive</h1>
            <p className="text-slate mt-4 max-w-[700px]">
              A big list of things I've worked on
            </p>
          </header>

          <div className="mt-[80px]">
            <table className="w-full border-collapse">
              <thead className="text-left text-lightest-slate font-mono text-sm">
                <tr>
                  <th className="py-2.5 pr-5 border-b border-lightest-navy">Year</th>
                  <th className="py-2.5 pr-5 border-b border-lightest-navy">Title</th>
                  <th className="py-2.5 pr-5 border-b border-lightest-navy hidden md:table-cell">Made at</th>
                  <th className="py-2.5 pr-5 border-b border-lightest-navy hidden md:table-cell">Built with</th>
                  <th className="py-2.5 pr-5 border-b border-lightest-navy">Link</th>
                </tr>
              </thead>
              <tbody>
                {archiveProjects.map((project, i) => (
                  <tr key={i} className="hover:bg-light-navy/30 transition-colors">
                    <td className="py-4 pr-5 text-light-slate font-mono text-xs whitespace-nowrap">
                      {project.year}
                    </td>
                    <td className="py-4 pr-5 text-lightest-slate font-medium">
                      <span>{project.title}</span>
                    </td>
                    <td className="py-4 pr-5 text-slate font-mono text-xs hidden md:table-cell">
                      {project.made_at}
                    </td>
                    <td className="py-4 pr-5 hidden md:table-cell">
                      <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-light-slate font-mono">
                        {project.built_with.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-4 pr-5 whitespace-nowrap">
                      <div className="flex gap-3">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-lightest-slate hover:text-green"
                            aria-label="GitHub"
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
                            aria-label="External Link"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ArchivePage;
