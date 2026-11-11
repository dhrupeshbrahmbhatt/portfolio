import { education, experience, profile, projects, skills } from '@/content/profile';
import { SITE_URL } from '@/lib/site';

// One linked graph for search engines and answer engines: the page, the site,
// the person, where he works and studied, and what he has built.
const url = `${SITE_URL}/`;
const id = (frag: string) => `${url}#${frag}`;

export const UPDATED = '2026-11-11';

export function jsonLdGraph() {
  const person = {
    '@type': 'Person',
    '@id': id('person'),
    name: profile.name,
    givenName: 'Dhrupesh',
    familyName: 'Brahmbhatt',
    url,
    email: `mailto:${profile.email}`,
    image: `${SITE_URL}/og.png`,
    jobTitle: 'Software Developer',
    description:
      'Backend engineer working forward deployed with aviation operations teams at DnT Infotech LLP, Ahmedabad. Builds Node.js and TypeScript services on PostgreSQL and GCP, and BigQuery and Looker reporting; builds AI-assisted delivery workflows.',
    worksFor: { '@id': id('employer') },
    alumniOf: { '@id': id('school') },
    address: { '@type': 'PostalAddress', addressLocality: 'Ahmedabad', addressRegion: 'Gujarat', addressCountry: 'IN' },
    knowsLanguage: ['English', 'Hindi', 'Gujarati'],
    knowsAbout: Array.from(new Set(skills.flatMap((g) => g.items))),
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Backend engineer, forward deployed',
      occupationLocation: { '@type': 'City', name: 'Ahmedabad' },
      skills: skills.find((g) => g.group === 'Backend')?.items.join(', '),
    },
    sameAs: [profile.linkedin, profile.github, 'https://knowyourbuy.com'],
  };

  const employer = {
    '@type': 'Organization',
    '@id': id('employer'),
    name: 'DnT Infotech LLP',
    address: { '@type': 'PostalAddress', addressLocality: 'Ahmedabad', addressCountry: 'IN' },
  };

  const school = {
    '@type': 'CollegeOrUniversity',
    '@id': id('school'),
    name: education.school.split(',')[0],
  };

  const work = {
    '@type': 'ItemList',
    '@id': id('work'),
    name: 'Selected work at DnT Infotech LLP',
    itemListElement: experience
      .flatMap((job) => job.entries.map((e) => ({ e, job })))
      .map(({ e, job }, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CreativeWork',
          name: e.id,
          description: `${e.defect} ${e.action} Result: ${e.result}`,
          creator: { '@id': id('person') },
          sourceOrganization: { '@type': 'Organization', name: job.company },
          keywords: e.stack.join(', '),
        },
      })),
  };

  const builds = {
    '@type': 'ItemList',
    '@id': id('projects'),
    name: 'Products and projects built by Dhrupesh Brahmbhatt',
    itemListElement: projects.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item:
        p.id === 'KYB'
          ? {
              '@type': 'SoftwareApplication',
              name: p.name,
              description: `${p.oneLine} ${p.built}`,
              applicationCategory: 'UtilitiesApplication',
              operatingSystem: 'Windows, macOS',
              url: p.links[0].href,
              author: { '@id': id('person') },
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
            }
          : {
              '@type': 'SoftwareSourceCode',
              name: p.name,
              description: `${p.oneLine} ${p.built}`,
              codeRepository: p.links[0].href,
              programmingLanguage: p.stack.slice(0, 3).join(', '),
              author: { '@id': id('person') },
              dateCreated: p.year,
            },
    })),
  };

  const website = {
    '@type': 'WebSite',
    '@id': id('website'),
    url,
    name: profile.name,
    inLanguage: 'en',
    publisher: { '@id': id('person') },
  };

  const page = {
    '@type': 'ProfilePage',
    '@id': id('page'),
    url,
    name: `${profile.name}, backend engineer, forward deployed`,
    isPartOf: { '@id': id('website') },
    mainEntity: { '@id': id('person') },
    about: { '@id': id('person') },
    dateModified: UPDATED,
    hasPart: [{ '@id': id('work') }, { '@id': id('projects') }],
    inLanguage: 'en',
  };

  return { '@context': 'https://schema.org', '@graph': [page, website, person, employer, school, work, builds] };
}
