import { education, experience, profile, projects, skills } from '@/content/profile';
import { SITE_URL } from '@/lib/site';
import { UPDATED } from '@/lib/jsonld';

// Plain-text versions of the page for AI agents and answer engines (llmstxt.org).
// Built from the same content file as the page, so they never drift.

export function llmsTxt(): string {
  return `# ${profile.name}

> Backend engineer in Ahmedabad, India, working forward deployed with aviation operations teams at DnT Infotech LLP. Node.js, TypeScript, PostgreSQL, BigQuery and Looker on GCP. Open to backend and software engineer roles and to freelance builds.

Key facts:
- Rebuilt an operations-critical aviation dashboard that ran on Qlik: load time from 2 to 3 minutes down to 2 to 3 seconds, best response under 100 ms.
- Migrated 60+ legacy SSRS reports to Google BigQuery and Looker in 1.5 months (medallion architecture, Dataform on GCP), using Claude skills he built to generate the warehouse layers and rebuild the dashboards.
- Delivered 5+ production services in the aviation domain; upgraded 50+ repositories with zero breaking changes.
- Builds AI-assisted delivery workflows (ticket, isolated worktree, implementation, validation, PR).
- Built Know Your Buy, a portable used-laptop health check (C#, .NET 8): ${projects[0].links[0].href}

Contact: ${profile.email} · LinkedIn ${profile.linkedin} · GitHub ${profile.github}

## Pages
- [Portfolio](${SITE_URL}/): work, projects, skills and contact in one page
- [Full text for agents](${SITE_URL}/llms-full.txt): every entry on the page as plain text
- [CV (PDF)](${SITE_URL}${profile.cv})

## Projects
${projects.map((p) => `- [${p.name}](${p.links[0].href}) (${p.year}): ${p.oneLine}`).join('\n')}

Last updated ${UPDATED}.
`;
}

export function llmsFullTxt(): string {
  const work = experience
    .map(
      (job) =>
        `### ${job.company}: ${job.role} (${job.period})\n${job.location}. ${job.domain}.\n\n` +
        job.entries
          .map((e) => `#### ${e.id} (${e.date})\n- Problem: ${e.defect}\n- Action: ${e.action}\n- Result: ${e.result}\n- Stack: ${e.stack.join(', ')}`)
          .join('\n\n'),
    )
    .join('\n\n');

  const builds = projects
    .map(
      (p) =>
        `### ${p.name} (${p.year}, ${p.status === 'IN TESTING' ? 'in testing' : 'shipped'})\n${p.oneLine}\n\n- Problem: ${p.problem}\n- Built: ${p.built}\n- Stack: ${p.stack.join(', ')}\n- Link: ${p.links[0].href}`,
    )
    .join('\n\n');

  const parts = skills.map((g) => `- ${g.group}: ${g.items.join(', ')}`).join('\n');

  return `# ${profile.name}: full profile

> ${profile.role}. ${profile.station}. ${profile.summary}

${profile.availability}

Contact: ${profile.email} · ${profile.linkedin} · ${profile.github} · CV ${SITE_URL}${profile.cv}
Languages: English, Hindi, Gujarati.

## Work
${work}

## Projects
${builds}

## Skills
${parts}

## Education
- ${education.degree}, ${education.school}, ${education.period}

Source: ${SITE_URL}/ · Last updated ${UPDATED}.
`;
}
