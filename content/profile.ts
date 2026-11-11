// Single source of truth for everything the page says. Edit here, not in components.
// Every figure below comes from the CV (Oct 2026) or LinkedIn profile; do not round up.

export const profile = {
  name: 'Dhrupesh Brahmbhatt',
  role: 'Backend engineer, forward deployed',
  station: 'Ahmedabad, India',
  since: 'Jun 2025',
  email: 'dhrupesh840@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dhrupesh-brahmbhatt',
  github: 'https://github.com/dhrupeshbrahmbhatt',
  cv: '/Dhrupesh_Brahmbhatt_CV.pdf',
  gaId: 'G-W12B3ZEG2C',
  summary:
    'I sit with the people who run the operation, map what they actually do, then build and run the service that does it. Aviation operations by day, products of my own at night.',
  availability: 'Open to backend and software engineer roles, and to freelance builds for small businesses.',
};

export type LogEntry = {
  id: string;
  date: string;
  defect: string;
  action: string;
  result: string;
  stack: string[];
  status: 'CLOSED' | 'OPEN' | 'DEFERRED';
};

export const experience = [
  {
    company: 'DnT Infotech LLP',
    location: 'Ahmedabad, India',
    role: 'Software Developer',
    period: 'Dec 2025 to present',
    domain: 'Aviation operations: AMOS/MM data, aircraft ground events, MEL processes',
    entries: [
      {
        id: 'DB-26-01',
        date: '2026',
        defect: 'Operations dashboard on Qlik took 2 to 3 minutes to load. A WizLib writeback connector sat between the crew and their own data.',
        action: 'Rebuilt the application, frontend and backend. Queried the Parquet sources directly instead of going through the BI layer. Profiled and restructured the analytical queries over millions of operational records.',
        result: '2 to 3 seconds per load. Best recorded response under 100 ms.',
        stack: ['Node.js', 'TypeScript', 'Express', 'TypeORM', 'Parquet', 'React', 'GCP'],
        status: 'CLOSED',
      },
      {
        id: 'DB-26-02',
        date: '2026',
        defect: '60+ legacy SSRS reports wired into .NET code. Deadline 1.5 months. A backend team that had never built a data warehouse.',
        action: 'Built the BigQuery warehouse on a medallion architecture (bronze, silver, gold) with fact and dimension tables and scheduled Dataform pipelines on GCP. Wrote a Claude skill that traces each report’s table and view dependencies and generates the missing layers. A second skill rebuilt every SSRS report as a Looker dashboard with the same columns, filters and layout.',
        result: 'All gold tables and views finished in 2 weeks. 60+ dashboards rebuilt inside the deadline.',
        stack: ['BigQuery', 'Looker', 'Dataform', 'GCP', 'SQL', 'Claude skills'],
        status: 'CLOSED',
      },
      {
        id: 'DB-26-03',
        date: '2025 to 2026',
        defect: 'Ticket to shippable code was slow: context lost between Jira, branch, implementation, PR and QA.',
        action: 'Built an AI-assisted delivery workflow: ticket, discovery, isolated git worktree, implementation, validation with captured evidence, PR. Rules define the standards, skills define the reusable steps, agent files define the role. Harness independent, so swapping models costs nothing.',
        result: 'In daily use for over 6 months, turning each ticket into a consistent, reviewable PR.',
        stack: ['Claude Code', 'Git worktrees', 'Jira', 'GitHub'],
        status: 'CLOSED',
      },
      {
        id: 'DB-26-04',
        date: '2026',
        defect: 'Security advisories and an end-of-life Node.js version across 50+ repositories. 10+ legacy scheduled jobs failing silently.',
        action: 'Applied the security fixes and Node.js upgrades repository by repository and shipped each to production. Migrated the scheduled jobs to Node.js cron services with failure recovery and visibility.',
        result: '50+ repositories upgraded with zero breaking changes. 10+ jobs on reliable schedules.',
        stack: ['Node.js', 'Docker', 'CI/CD', 'Cron'],
        status: 'CLOSED',
      },
      {
        id: 'DB-26-05',
        date: '2025 to 2026',
        defect: 'Operations teams needed services that matched how work really flows: ground events, MEL deferrals, maintenance data.',
        action: 'Worked forward deployed with the aviation operations teams. Gathered requirements in their language, designed the REST APIs with JWT authentication and authorisation, maintained unit tests with every change, deployed containerised services to GCP, and iterated on their feedback after release.',
        result: '5+ production services in the aviation domain, owned from requirements through post-release support.',
        stack: ['Node.js', 'Express', 'TypeORM', 'PostgreSQL', 'JWT', 'Docker', 'GCP'],
        status: 'CLOSED',
      },
    ] as LogEntry[],
  },
  {
    company: 'DnT Infotech LLP',
    location: 'Ahmedabad, India',
    role: 'Associate Software Developer (internship)',
    period: 'Jun 2025 to Nov 2025',
    domain: 'Aviation operations documentation and backend delivery',
    entries: [
      {
        id: 'DB-25-01',
        date: '2025',
        defect: 'End-to-end aviation operations existed only in people’s heads. No system map for onboarding or design.',
        action: 'Partnered with a senior engineer to document the operation: 300+ technical and data-flow diagrams in 3 months, including one master diagram of the complete operational and data flow. Designed reusable AI prompt templates in Eraser so every diagram kept the same structure.',
        result: 'The master diagram is still the onboarding reference. The templates became the company standard for client-facing projects.',
        stack: ['Eraser', 'Node.js', 'TypeScript', 'PostgreSQL'],
        status: 'CLOSED',
      },
      {
        id: 'DB-25-02',
        date: '2025',
        defect: 'A backend project with no owner.',
        action: 'Took it from requirements through delivery with Node.js, TypeScript, Express and PostgreSQL.',
        result: 'Delivered.',
        stack: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL'],
        status: 'CLOSED',
      },
    ] as LogEntry[],
  },
  {
    company: 'Cognifyz Technologies',
    location: 'Nagpur, India (remote)',
    role: 'Web Development Intern',
    period: 'Aug 2024',
    domain: 'Full-stack web',
    entries: [
      {
        id: 'CG-24-01',
        date: '2024',
        defect: 'Food going to waste for lack of a way to route surplus to people who need it.',
        action: 'Led the build of Sure-Supply, a food waste management platform with real-time tracking and notifications.',
        result: 'Shipped as a secure full-stack application.',
        stack: ['React', 'Node.js', 'MongoDB'],
        status: 'CLOSED',
      },
    ] as LogEntry[],
  },
];

export type Project = {
  id: string;
  name: string;
  year: string;
  oneLine: string;
  problem: string;
  built: string;
  stack: string[];
  links: { label: string; href: string }[];
  status: 'LIVE' | 'IN TESTING' | 'SHIPPED';
};

export const projects: Project[] = [
  {
    id: 'KYB',
    name: 'Know Your Buy',
    year: '2026',
    oneLine: 'Should I buy this used laptop? A portable health check that answers in under 10 minutes, offline.',
    problem: 'Buying second-hand you get maybe 15 minutes with the seller. You cannot tell if the battery is dying, the SSD is on its last legs, or whether that i7 is really an i3.',
    built: 'Single portable .exe, no install, no account, no internet. Reads real battery wear against the firmware claim, SMART data plus a gentle read/write test, CPU, GPU, RAM and model, per-core and GPU temperatures, fan status. Gives a Buy, Negotiate or Walk Away verdict, exports a PDF, then deletes every file it created. Marketing site on Cloudflare Pages.',
    stack: ['C#', '.NET 8', 'WPF', 'Native AOT', 'Next.js', 'Cloudflare Pages'],
    links: [{ label: 'knowyourbuy.com', href: 'https://knowyourbuy.com' }],
    status: 'IN TESTING',
  },
  {
    id: 'TT',
    name: 'ThinkTank',
    year: '2025',
    oneLine: 'AI portfolio generator: GitHub and LinkedIn in, a publish-ready portfolio out.',
    problem: 'Developers have the proof of their work scattered across repositories and profiles, and no time to write it up.',
    built: 'ETL pipeline over GitHub and LinkedIn profile data, generation through the OpenAI API, TypeScript and Node.js backend with MongoDB, deployed on AWS EC2 and S3.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'GitHub API', 'OpenAI API', 'AWS'],
    links: [{ label: 'GitHub · ThinkTank', href: 'https://github.com/dhrupeshbrahmbhatt/ThinkTank' }],
    status: 'SHIPPED',
  },
  {
    id: 'CC',
    name: 'CampusConnect',
    year: '2023',
    oneLine: 'Mentorship platform connecting alumni with first-year students. 1st place, college project expo.',
    problem: 'First-year students had no route to the alumni who could help them, and alumni had no way to offer it.',
    built: 'Real-time chat on Socket.io, JWT-authenticated REST APIs, MongoDB-backed profiles with role-based access control. React and Tailwind frontend on Vercel, backend on Railway.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
    links: [{ label: 'GitHub · CampusConnect', href: 'https://github.com/dhrupeshbrahmbhatt/campusconnect' }],
    status: 'SHIPPED',
  },
  {
    id: 'WC',
    name: 'WebChat',
    year: '2024',
    oneLine: 'Chat with end-to-end encryption and post-quantum cryptography, keys anchored on chain.',
    problem: 'Most chat apps ask you to trust the server. This one does not.',
    built: 'End-to-end encrypted messaging over WebSockets with post-quantum key exchange and blockchain-anchored identity.',
    stack: ['JavaScript', 'WebSockets', 'E2EE', 'Post-quantum crypto', 'Blockchain'],
    links: [{ label: 'GitHub · WebChat', href: 'https://github.com/dhrupeshbrahmbhatt/Webchat' }],
    status: 'SHIPPED',
  },
];

export const skills = [
  { group: 'Backend', items: ['Node.js', 'TypeScript', 'Express', 'TypeORM', 'REST API design', 'JWT auth', 'Socket.io', 'Cron services', 'Unit testing'] },
  { group: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'BigQuery', 'Looker', 'Dataform', 'Apache Parquet', 'Query optimisation'] },
  { group: 'Cloud and delivery', items: ['GCP', 'AWS (EC2, S3)', 'Docker', 'CI/CD', 'Linux', 'Vercel', 'Railway', 'Cloudflare Pages'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'WPF (.NET)'] },
  { group: 'Forward deployed', items: ['Requirement gathering', 'Workflow and data-flow mapping', 'Client-facing delivery', 'Technical documentation', 'Eraser', 'LucidChart'] },
  { group: 'AI in the process', items: ['Claude Code', 'Skills and agent definitions', 'Prompt templates', 'OpenAI API', 'GitHub API', 'Workflow automation'] },
];

export const education = {
  degree: 'B.E. Computer Engineering',
  school: 'Shree Swaminarayan Institute of Technology, Ahmedabad',
  period: '2022 to 2026',
};
