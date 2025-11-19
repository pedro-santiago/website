import { Customer, Education, Job, ShowCase, Skill, SkillSet, Stage, State } from './data_types';

/********
 * State *
 ********/

export const state = new State();

/*********
 * Header *
 *********/

export const myName = 'Pedro Oliveira Santiago';
export const profession = 'Senior Full Stack Developer | CTO as a Service';
export const street = 'Brazil 🇧🇷';
export const postalCode = '';
export const city = 'Belo Horizonte - Remote';
export const emails: string[] = ['pedro@pedrosantiago.com.br'];
export const socialNetworks: { [key: string]: string } = {
  github: 'https://github.com/pedro-santiago',
  linkedin: 'https://www.linkedin.com/in/santiagopedro/',
  website: 'https://pedrosantiago.com.br',
};

export const careerStartYear = 2009;
export const yearsOfExperience = new Date().getFullYear() - careerStartYear;

export const contact = {
  email: 'pedro@pedrosantiago.com.br',
  github: 'https://github.com/pedro-santiago',
  linkedin: 'https://www.linkedin.com/in/santiagopedro/',
  website: 'https://pedrosantiago.com.br'
};

export const languages = {
  Portuguese: 'Native',
  English: 'Professional',
  German: 'B2',
  Spanish: 'Intermediate',
  PHP: 'Fluent ❤️'
};

export const passions = {
  credit_analysis: 'Building smart credit scoring systems',
  risk_assessment: 'Automating financial risk evaluation',
  new_tech: 'Always excited about the next innovation',
  clean_code: 'Crafting elegant solutions to complex problems'
};

/*********
 * Skills *
 *********/

// AWS
// AWS / Compute
export const beanstalk: Skill = { level: 0.9, name: 'Beanstalk' };
export const ec2: Skill = { level: 0.9, name: 'EC2' };
export const ecs: Skill = { level: 0.9, name: 'ECS' };
export const fargate: Skill = { level: 0.7, name: 'Fargate' };
export const lambda: Skill = { level: 1.0, name: 'Lambda' };

// AWS / Data
export const aurora: Skill = { level: 1.0, name: 'RDS Aurora' };
export const dynamodb: Skill = { level: 0.8, name: 'DynamoDB' };
export const rds: Skill = { level: 1.0, name: 'DB Service' };
export const s3: Skill = { level: 1.0, name: 'S3' };

// AWS / Flow
export const apigateway: Skill = { level: 0.9, name: 'API Gateway' };
export const cloudfront: Skill = { level: 1.0, name: 'CloudFront' };
export const r53: Skill = { level: 1.0, name: 'Route 53' };
export const sns: Skill = { level: 0.9, name: 'SNS' };

// AWS / Management
export const cloudformation: Skill = { level: 0.9, name: 'CloudFormation' };
export const cloudtrail: Skill = { level: 0.8, name: 'CloudTrail' };
export const cloudwatch: Skill = { level: 1.0, name: 'CloudWatch' };
export const iam: Skill = { level: 0.9, name: 'IAM' };

// Backend
// Backend / CI
export const circleCI: Skill = { level: 0.8, name: 'CircleCI' };
export const jasmine: Skill = { level: 0.9, name: 'Jasmine' };
export const jenkins: Skill = { level: 0.9, name: 'Jenkins' };
export const jest: Skill = { level: 1.0, name: 'Jest' };
export const mocha: Skill = { level: 1.0, name: 'Mocha' };
export const rspec: Skill = { level: 1.0, name: 'RSpec' };
export const travis: Skill = { level: 0.9, name: 'Travis CI' };

// Backend / Code
export const asp: Skill = { level: 0.8, name: 'ASP.net' };
export const coffeescript: Skill = { level: 0.9, name: 'CoffeeScript' };
export const meteor: Skill = { level: 1.0, name: 'Meteor' };
export const nodejs: Skill = { level: 1.0, name: 'Node.js' };
export const rails: Skill = { level: 1.0, name: 'Ruby on Rails' };
export const ruby: Skill = { level: 1.0, name: 'Ruby' };
export const typescript: Skill = { level: 1.0, name: 'TypeScript' };

// Backend / Data
export const api: Skill = { level: 1.0, name: 'API' };
export const apollo: Skill = { level: 1.0, name: 'Apollo GraphQL' };
export const elasticsearch: Skill = { level: 0.7, name: 'elasticsearch' };
export const gql: Skill = { level: 1.0, name: 'GraphQL' };
export const mariadb: Skill = { level: 0.8, name: 'MariaDB' };
export const mysql: Skill = { level: 0.8, name: 'MySQL' };
export const mongodb: Skill = { level: 0.9, name: 'MongoDB' };
export const mssql: Skill = { level: 0.9, name: 'Microsoft SQL' };
export const psql: Skill = { level: 1.0, name: 'PostgreSQL' };
export const redis: Skill = { level: 0.8, name: 'Redis' };

// Backend / Deploy
export const android: Skill = { level: 0.8, name: 'Android' };
export const cordova: Skill = { level: 0.9, name: 'Apache Cordova' };
export const docker: Skill = { level: 0.9, name: 'Docker' };
export const git: Skill = { level: 1.0, name: 'Git' };
export const heroku: Skill = { level: 0.9, name: 'Heroku' };
export const ios: Skill = { level: 0.9, name: 'iOS' };

// Frontend
// Frontend / Logic
export const backbone: Skill = { level: 0.7, name: 'Backbone.js' };
export const browserify: Skill = { level: 0.8, name: 'Browserify' };
export const jquery: Skill = { level: 1.0, name: 'jQuery' };
export const js: Skill = { level: 1.0, name: 'JavaScript' };
export const websockets: Skill = { level: 0.8, name: 'WebSockets' };

// PHP Frameworks
export const laravel: Skill = { level: 1.0, name: 'Laravel' };
export const phalcon: Skill = { level: 0.9, name: 'Phalcon' };
export const codeigniter: Skill = { level: 0.9, name: 'CodeIgniter' };
export const zendframework: Skill = { level: 0.8, name: 'ZendFramework' };
export const slim: Skill = { level: 0.9, name: 'Slim' };

// Frontend / Markup
export const haml: Skill = { level: 0.9, name: 'Haml' };
export const handlebars: Skill = { level: 1.0, name: 'Handlebars' };
export const html: Skill = { level: 1.0, name: 'HTML' };
export const php: Skill = { level: 1.0, name: 'PHP' };
export const markdown: Skill = { level: 0.9, name: 'Markdown' };
export const react: Skill = { level: 1.0, name: 'React' };
export const vuejs: Skill = { level: 1.0, name: 'Vue.js' };

// Frontend / Style
export const css: Skill = { level: 1.0, name: 'CSS' };
export const less: Skill = { level: 0.7, name: 'less' };
export const scss: Skill = { level: 1.0, name: 'Scss' };
export const stylus: Skill = { level: 0.8, name: 'Stylus' };
export const svg: Skill = { level: 1.0, name: 'SVG (Animations)' };

// Frontend / Design
export const afterEffects: Skill = { level: 0.3, name: 'After Effects' };
export const blender: Skill = { level: 0.5, name: 'Blender' };
export const sketch: Skill = { level: 0.8, name: 'Sketch' };
export const ui: Skill = { level: 0.7, name: 'User Interface' };
export const ux: Skill = { level: 0.6, name: 'User Experience' };

// SaaS & Architecture
export const saasDesign: Skill = { level: 1.0, name: 'SaaS Design' };
export const etl: Skill = { level: 0.9, name: 'ETL (Pentaho)' };
export const pentaho: Skill = { level: 0.9, name: 'Pentaho' };
export const systemsArchitecture: Skill = { level: 1.0, name: 'Systems Architecture' };
export const platformEngineering: Skill = { level: 1.0, name: 'Platform Engineering' };

// Frontend Tools
export const inertiajs: Skill = { level: 1.0, name: 'Inertia.js' };
export const compositionApi: Skill = { level: 1.0, name: 'Vue Composition API' };
export const angularjs: Skill = { level: 0.8, name: 'AngularJS (v1)' };

// Misc
export const teamlead: Skill = { level: 1.0, name: 'Team Lead' };
export const ctoService: Skill = { level: 1.0, name: 'CTO as a Service' };
export const consulting: Skill = { level: 1.0, name: 'Technical Consulting' };
export const security: Skill = { level: 0.9, name: 'Security' };

// Study
export const logic: Skill = { level: 0.9, name: 'Logic' };
export const distributedSys: Skill = { level: 0.7, name: 'Distrib. Sys.' };
export const imageProcessing: Skill = { level: 0.7, name: 'Image Proces.' };
export const math: Skill = { level: 0.8, name: 'Math' };
export const neuronalNetwork: Skill = { level: 0.7, name: 'Neuronal Netw.' };
export const numeric: Skill = { level: 0.7, name: 'Numeric' };
export const parallelExec: Skill = { level: 0.7, name: 'Parallel Exec.' };

export const skills: SkillSet[] = [
  {
    title: 'Backend & PHP',
    data: [
      {
        title: 'PHP Frameworks',
        data: { php, laravel, phalcon, slim, codeigniter, zendframework },
      },
      {
        title: 'Backend Languages',
        data: { nodejs, typescript, ruby },
      },
      {
        title: 'Data & Storage',
        data: { mysql, mongodb, redis, psql, elasticsearch },
      },
    ],
  },
  {
    title: 'Frontend',
    data: [
      {
        title: 'Modern Frameworks',
        data: { vuejs, react, compositionApi, inertiajs },
      },
      {
        title: 'Classic & Markup',
        data: { jquery, angularjs, html, css, js },
      },
      {
        title: 'Style & Design',
        data: { scss, less, stylus, svg },
      },
    ],
  },
  {
    title: 'AWS & Infrastructure',
    data: [
      {
        title: 'Compute',
        data: { ec2, lambda, beanstalk },
      },
      {
        title: 'Storage & Data',
        data: { s3, rds, dynamodb },
      },
      {
        title: 'Network & Services',
        data: { r53, cloudfront, sns, apigateway },
      },
    ],
  },
  {
    title: 'SaaS & Architecture',
    data: [
      {
        title: 'Platform Design',
        data: { saasDesign, systemsArchitecture, platformEngineering },
      },
      {
        title: 'Data Engineering',
        data: { etl, pentaho, api },
      },
      {
        title: 'DevOps & Tools',
        data: { docker, git, jenkins, travis },
      },
    ],
  },
  {
    title: 'Leadership & Consulting',
    data: {
      teamlead,
      ctoService,
      consulting,
      security,
    },
  },
];

/***********
 * About Me *
 ***********/

export const about = `
  I bridge the gap between technology and finance, specializing in building robust fintech platforms
  that transform how financial institutions operate. With over ${yearsOfExperience} years architecting systems for
  receivables platforms, digital wallets, payment processing, and investment funds, I understand both
  the technical complexity and regulatory demands of financial software.

  My expertise lies in translating financial business requirements into scalable technical solutions—
  from integrating banking APIs and tokenization systems to designing SaaS architectures that support
  complex licensing models and real-time transaction processing.

  I'm particularly passionate about credit-related fintechs, where technology can democratize access
  to financial services and create smarter, fairer lending decisions through data and automation.

  What drives me? The excitement of solving complex problems with elegant code and seeing technology
  transform traditional financial services into something more accessible and efficient.
`;

/**********************
 * Backend Development *
 **********************/

export const backendStack = {
  php: ['Laravel', 'Symfony', 'Lumen', 'PHP 8.3+'],
  architecture: ['Microservices', 'Multi-tenant SaaS', 'Event-Driven', 'DDD'],
  databases: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB'],
  messaging: ['RabbitMQ', 'Kafka', 'SQS'],
  apis: ['REST', 'GraphQL', 'gRPC', 'Webhook Systems'],
  best_practices: ['SOLID', 'TDD', 'Clean Architecture', 'Design Patterns']
};

/***********************
 * Frontend Development *
 ***********************/

export const frontendStack = {
  frameworks: ['Vue.js 3', 'Nuxt.js', 'React', 'Next.js'],
  ui_libraries: ['Tailwind CSS', 'Vuetify', 'Element Plus', 'shadcn/ui'],
  tools: ['Vite', 'Webpack', 'TypeScript', 'Pinia/Vuex'],
  approaches: ['SPA', 'SSR', 'SSG', 'PWA']
};

/*********************
 * Cloud Architecture *
 *********************/

export const cloudArchitecture = {
  cloud: {
    AWS: ['EC2', 'RDS', 'Lambda', 'S3', 'CloudFront', 'SQS']
  },
  devops: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Terraform'],
  monitoring: ['New Relic', 'Datadog', 'CloudWatch', 'Sentry', 'Laravel Telescope'],
  patterns: ['SOLID', 'Clean Architecture', 'CQRS', 'Repository Pattern'],
  philosophy: 'Simple solutions for complex problems'
};

/***********************
 * Credit & Fintech Expertise *
 ***********************/

export const creditScoringSystem = {
  data_sources: ['Credit bureaus', 'Open Banking', 'Alternative data'],
  algorithms: ['Machine Learning models', 'Rule-based engines', 'Hybrid approaches'],
  compliance: ['Fair lending', 'LGPD/GDPR', 'Explainable AI'],
  real_impact: 'Helping thousands access fair credit through technology'
};

export const bankingAPIs = {
  integrations: ['Stark Bank', 'Open Banking APIs', 'PIX', 'TED/DOC'],
  compliance: ['PCI DSS', 'LGPD', 'KYC/AML', 'BACEN Regulations'],
  features: ['Digital Wallets', 'Card Issuance', 'Payment Processing', 'Tokenization'],
  expertise: 'Deep understanding of Brazilian financial ecosystem'
};

export const saasArchitecture = {
  multi_tenancy: ['Database per tenant', 'Shared database with RLS'],
  billing: ['Subscription models', 'Usage-based pricing', 'License management'],
  scalability: ['Horizontal scaling', 'Load balancing', 'Caching strategies'],
  features: ['White-label solutions', 'API rate limiting', 'Audit trails'],
  approach: 'Build for scale from day one, optimize as you grow'
};

/*******************
 * Current Projects *
 *******************/

export const currentProjects = {
  receivables_platform: {
    description: 'Building tokenized receivables trading platform',
    stack: ['Laravel 11', 'Vue 3', 'PostgreSQL', 'AWS'],
    excitement: 'Revolutionizing how SMBs access working capital'
  },
  credit_scoring_engine: {
    description: 'ML-powered credit analysis for instant decisions',
    tech: ['Python ML models', 'Laravel API', 'Real-time processing'],
    impact: 'Reducing credit decision time from days to seconds'
  }
};

/********************
 * Currently Exploring *
 ********************/

export const currentlyExploring = {
  'AI/ML in credit': 'Exploring GPT models for financial analysis',
  'Blockchain': 'Smart contracts for receivables tokenization',
  'Real-time systems': 'Building ultra-low latency financial systems',
  'New Laravel features': 'Always excited about what Taylor is cooking up next'
};

/***************
 * Core Values *
 ***************/

export const coreValues = {
  passion: 'Genuine excitement for solving complex problems',
  quality: 'Writing code that\'s maintainable and scalable',
  innovation: 'Always exploring better ways to build things',
  collaboration: 'Sharing knowledge and learning from others',
  results: 'Delivering solutions that make real business impact'
};

/*************
 * Experience *
 *************/

export const experience: Job[] = [
  {
    company: 'CTO as a Service',
    description: `
      I advise non-tech companies on SaaS strategy, product architecture, and scaling operations.
      Built investment fund platform for receivables, managed ETL migration from Pentaho to AWS,
      and integrated with Stark Bank for wallet, tokenization, and digital cards. Created SaaS tiers
      with bundled licenses and embedded work hours.
    `,
    startsAt: new Date('2024-06-01'),
    endsAt: undefined,
    remote: true,
    position: 'CTO as a Service & Consultant',
    skills: {
      saasDesign,
      systemsArchitecture,
      laravel,
      php,
      nodejs,
      pentaho,
      etl,
      s3,
      ec2,
      mysql,
      redis,
      consulting,
    },
  },

  {
    company: 'idez Digital',
    description: `
      Founded and scaled a digital solutions company, leading technology strategy and execution.
      Directed systems architecture, platform engineering, and team growth. Oversaw delivery of
      large-scale financial and digital products. Supported product strategy, partnerships, and
      client acquisition. Successfully sold the company in June 2024.
    `,
    startsAt: new Date('2018-01-01'),
    endsAt: new Date('2024-06-01'),
    remote: false,
    position: ['Founder', 'CTO'],
    skills: {
      teamlead,
      systemsArchitecture,
      platformEngineering,
      laravel,
      php,
      vuejs,
      mysql,
      redis,
      s3,
      ec2,
      api,
      saasDesign,
    },
  },

  {
    company: 'madewithlove BvBA',
    description: `
      Delivered high-quality full stack solutions for international clients.
      Main tech stack included Laravel, React, Slim, and framework-agnostic applications.
      Worked with a diverse range of European clients building scalable web applications.
    `,
    startsAt: new Date('2017-01-01'),
    endsAt: new Date('2018-01-01'),
    remote: false,
    position: 'Software Engineer',
    skills: {
      laravel,
      php,
      react,
      slim,
      mysql,
      api,
      js,
    },
  },

  {
    company: 'Plista GmbH',
    description: `
      Improved large-scale programmatic advertising platform serving millions of requests.
      Tech stack included REST APIs, Docker, Mesos, MySQL, MongoDB, Redis, and Phalcon.
      Focused on performance optimization and system scalability.
    `,
    startsAt: new Date('2016-01-01'),
    endsAt: new Date('2017-01-01'),
    remote: false,
    position: 'Senior PHP Developer',
    skills: {
      php,
      phalcon,
      mysql,
      mongodb,
      redis,
      docker,
      api,
    },
  },

  {
    company: 'Learncafe',
    description: `
      Platform optimization and automation for e-learning platform.
      Tech stack included ZendFramework, MySQL, and jQuery.
      Focused on improving platform performance and user experience.
    `,
    startsAt: new Date('2015-01-01'),
    endsAt: new Date('2015-12-31'),
    remote: false,
    position: 'Senior PHP Developer',
    skills: {
      php,
      zendframework,
      mysql,
      jquery,
    },
  },

  {
    company: 'Yoozon',
    description: `
      Co-founded startup operating across multiple markets (Brazil, São Paulo, Santiago, Wisconsin).
      Tech stack included Laravel, Node.js, Redis, MySQL, BeanstalkD, AWS, jQuery, and socket.io.
      Led technical development and international expansion efforts.
    `,
    startsAt: new Date('2014-01-01'),
    endsAt: new Date('2015-01-01'),
    remote: false,
    position: ['CTO', 'Co-Founder'],
    skills: {
      laravel,
      php,
      nodejs,
      mysql,
      redis,
      s3,
      jquery,
      teamlead,
    },
  },

  {
    company: 'CDZ Tecnologia',
    description: `
      Lead platform developer responsible for core system development.
      Tech stack included CodeIgniter framework for building scalable web applications.
    `,
    startsAt: new Date('2014-01-01'),
    endsAt: new Date('2014-12-31'),
    remote: false,
    position: 'Senior PHP Developer',
    skills: {
      php,
      codeigniter,
      mysql,
    },
  },

  {
    company: 'Lab28 Software',
    description: `
      Founded and led software studio building custom solutions for clients.
      Tech stack included PHP, MySQL, JavaScript, and AWS.
      Managed client relationships and technical delivery.
    `,
    startsAt: new Date('2012-01-01'),
    endsAt: new Date('2013-12-31'),
    remote: false,
    position: 'Founder',
    skills: {
      php,
      mysql,
      js,
      s3,
      teamlead,
    },
  },

  {
    company: 'Lallum Comunicação',
    description: `
      Managed workforce and digital campaigns. Website development with HTML and PHP.
      Responsible for digital marketing strategy and web development projects.
    `,
    startsAt: new Date('2011-01-01'),
    endsAt: new Date('2011-12-31'),
    remote: false,
    position: 'Digital Marketing Manager',
    skills: {
      php,
      html,
      mysql,
    },
  },

  {
    company: 'Next Interactive Marketing',
    description: `
      Built interactive applications and totem management tools for marketing campaigns.
      Tech stack included PHP, MySQL, and ActionScript (Flash) for rich interactive experiences.
    `,
    startsAt: new Date('2010-01-01'),
    endsAt: new Date('2011-01-01'),
    remote: false,
    position: 'PHP Developer',
    skills: {
      php,
      mysql,
      js,
    },
  },

  {
    company: 'MIND Digital Marketing',
    description: `
      Developed websites, SEO strategies, and CRM tools for digital marketing clients.
      Tech stack included PHP, HTML, and SEO optimization techniques.
    `,
    startsAt: new Date('2010-01-01'),
    endsAt: new Date('2010-12-31'),
    remote: false,
    position: 'PHP Developer',
    skills: {
      php,
      html,
      mysql,
    },
  },
];

/*************
 * Customers *
 *************/

export const customers: Customer[] = [
  {
    client: 'Investment Fund Platform',
    project: 'Receivables Trading Platform',
    description: `
      Architected and built a complete investment fund platform for trading receivables.
      Implemented secure transaction processing, investor dashboards, and regulatory compliance features.
      Integrated with financial institutions for automated settlement and reconciliation.
    `,
    startsAt: new Date('2024-06'),
    endsAt: undefined,
    skills: {
      laravel,
      php,
      mysql,
      redis,
      s3,
      ec2,
      api,
      saasDesign,
      systemsArchitecture,
    },
  },
  {
    client: 'Stark Bank',
    project: 'Digital Wallet & Card Issuance Integration',
    description: `
      Integrated Stark Bank APIs for digital wallet functionality, tokenization services, and
      digital card issuance. Implemented secure payment processing, card management, and
      real-time transaction monitoring for fintech platform.
    `,
    startsAt: new Date('2024-03'),
    endsAt: new Date('2024-11'),
    skills: {
      laravel,
      php,
      api,
      redis,
      mysql,
      security,
    },
  },
  {
    client: 'Data Engineering Platform',
    project: 'ETL Migration from Pentaho to AWS',
    description: `
      Migrated complex ETL pipelines from on-premise Pentaho to AWS cloud infrastructure.
      Redesigned data workflows for improved performance and scalability, implementing
      automated data validation and error handling for financial data processing.
    `,
    startsAt: new Date('2024-01'),
    endsAt: new Date('2024-06'),
    skills: {
      pentaho,
      etl,
      s3,
      ec2,
      lambda,
      nodejs,
      systemsArchitecture,
    },
  },
];

/**********************
 * Academic Background *
 **********************/

export const academicBackground: Education[] = [
  {
    university: 'PUC Minas',
    description: `
      Bachelor in Computer Science focusing on software engineering, algorithms, and system design.
      Built strong foundation in programming, data structures, and software architecture.
    `,
    startsAt: new Date('2011'),
    endsAt: new Date('2014'),
    graduiation: 'Bachelor in Computer Science',
    skills: {
      logic,
      math,
      systemsArchitecture,
    },
  },

  {
    university: 'Ibmec',
    description: `
      Started Bachelor in Business Administration to complement technical skills with business acumen.
      Completed one year before focusing entirely on technical career.
    `,
    startsAt: new Date('2012'),
    endsAt: new Date('2013'),
    graduiation: 'Business Administration (incomplete)',
    skills: {
      consulting,
    },
  },
];
