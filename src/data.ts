import { Education, Job, ShowCase, Skill, SkillSet, Stage, State } from './data_types';

/********
 * State *
 ********/

export const state = new State();

/*********
 * Header *
 *********/

export const myName = 'Pedro Oliveira';
export const profession = 'CTO as a Service & PHP Specialist';
export const street = 'Brazil';
export const postalCode = '';
export const city = 'Remote';
export const emails: string[] = ['pedro@pedrosantiago.com.br'];
export const socialNetworks: { [key: string]: string } = {
  github: 'https://github.com/pedro-santiago',
  linkedin: 'https://www.linkedin.com/in/pedro-oliveira-santiago',
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
export const jquery: Skill = { level: 1.0, name: 'jQuery' };
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

/*******************
 * Curriculum Vitae *
 *******************/

export const curriculumVitae: (Job | Education)[] = [
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

/**************
 * Experiments *
 **************/

export const experiments: ShowCase[] = [
  {
    name: 'Hamburder Icon Animations',
    description: `
      I created a couple of different hamburger menu icon animations to open
      and close a menu. All icons are planned with sketch. The base svgs are all
      hand written with basic svg path commands. The icons are previewed on
      dribbble and the code is available Open Source at CodePen.
    `,
    startsAt: new Date('2014-08-05'),
    endsAt: new Date('2018-08-06'),
    urls: [
      'https://dribbble.com/shots/4921561-Hamburger-Menu-Animation',
      'https://dribbble.com/shots/3539398--version-3',
      'https://dribbble.com/shots/3529235--version-2',
      'https://dribbble.com/shots/1674602-Menu-open-back',
      'https://dribbble.com/shots/1671182--version-1',
    ],
    media: [],
    skills: {
      svg,
      ui,
      ux,
      css,
      stylus,
      html,
      js,
      sketch,
    },
  },

  {
    name: 'Button Animations',
    description: `
      I created a couple of different Buttons which are planned to be the main
      call to action buttons on a website. All buttons are previewed on dribbble
      and the code is available Open Source at CodePen.
    `,
    startsAt: new Date('2014-08-05'),
    endsAt: new Date('2017-07-02'),
    urls: [
      'https://dribbble.com/shots/3545734-Liquid-button-v2',
      'https://dribbble.com/shots/2629106-Button-Group',
      'https://dribbble.com/shots/1673204-Submit-Button',
    ],
    media: [],
    skills: {
      svg,
      ui,
      ux,
      css,
      stylus,
      html,
      js,
      sketch,
    },
  },

  {
    name: 'Particle Effects',
    description: `
      I experimented a lot to find a the best way to create performant three
      dimensional particle effects on a 2d canvas before WebGL was available at
      Browsers.
    `,
    startsAt: new Date('2014-08-05'),
    endsAt: new Date('2017-07-02'),
    urls: ['https://dribbble.com/shots/2649284-Dusty-Particle-Sphere'],
    media: [],
    skills: {
      html,
      js,
    },
  },

  {
    name: 'Icon Animations',
    description: `
      I created a couple of different icon transitions which are based on
      svg paths. All icons are planned with sketch. The base svgs are all
      hand written with basic svg path commands. The icons are previewed on
      dribbble and the code is available Open Source at CodePen.
    `,
    startsAt: new Date('2014-08-15'),
    endsAt: new Date('2016-04-15'),
    urls: [
      'https://dribbble.com/shots/2654081-Download-icon-progress',
      'https://dribbble.com/shots/1989179-Animated-search-progress-icon',
      'https://dribbble.com/shots/1685755-Anited-sort-button',
      'https://dribbble.com/shots/1684424-SVG-Path-Animation-Experiment',
    ],
    media: [],
    skills: {
      svg,
      ui,
      ux,
      css,
      stylus,
      html,
      js,
      sketch,
    },
  },

  {
    name: 'After Effects/Blender Render',
    description: `
      Some of my dribbble shots are rendered with Blender and After Effects.
    `,
    startsAt: new Date('2014-05-30'),
    endsAt: new Date('2017-07-01'),
    urls: [
      'https://dribbble.com/shots/3536783-Rendered-cubes-landsape',
      'https://dribbble.com/shots/1625077-fluid-5',
      'https://dribbble.com/shots/1599550-Liquid-Germany',
      'https://dribbble.com/shots/1588162-Shop-Admin-Wireframe-WIP',
      'https://dribbble.com/shots/1581191-Cloud-Upload',
      'https://dribbble.com/shots/1575639-hello-dribbble',
    ],
    media: [],
    skills: {
      afterEffects,
      blender,
    },
  },
];

/***********
 * Projects *
 ***********/

export const projects: ShowCase[] = [
  {
    name: 'Hashflag Gallery',
    description: `
      I created the website hashflaggallery.com together with Andreas Storm.
      This site collects all static and animated Hashflags from Twitter and
      displayes them in a unique library. I'm responsibe for the whole
      Teach-Stack and Coding. Andreas is responsible for Design & Marketing.
    `,
    startsAt: new Date('2020-09-01'),
    endsAt: undefined,
    urls: [
      'https://hashflaggallery.com',
      'https://codepen.io/collection/DoJqWO',
      'https://twitter.com/HashflagGallery',
    ],
    media: [],
    skills: {
      beanstalk,
      redis,
      nodejs,
      react,
      scss,
    },
  },

  {
    name: 'Check it done',
    description: `
      As a developer I created a lot of To-Do Apps (basically whenever i tried
      a new technology). I'm not completely happy with any To-Do app i tested
      and finally during Covid I started this project together with Andreas,
      Martin and Aaron. Andreas and Martin are the most talented designers i
      know and Aaron is a genius in user interaction and animation design.
      I'm responsible for the complete Tech-Stack including the UI basics.
    `,
    startsAt: new Date('2020-08-01'),
    endsAt: undefined,
    urls: ['https://usecheck.com', 'https://twitter.com/joincheck'],
    media: [],
    skills: {
      beanstalk,
      redis,
      nodejs,
      react,
      scss,
    },
  },

  {
    name: 'GitHub Commit Vizualization',
    description: `
      I build a lambda function wich regulary checks my GitHub account for new
      commits and display them at [contributions.tamino.dev]. The data fetching
      and the UI are both open source available at GitHub
    `,
    startsAt: new Date('2017'),
    endsAt: undefined,
    urls: [
      'https://contributions.tamino.dev/',
      'https://dribbble.com/shots/4884965-GitHub-Contribution-Visualization',
      'https://github.com/tamino-martinius/contributions.taminomartinius.de',
      'https://github.com/tamino-martinius/lambda-get-all-github-contributions',
    ],
    media: [],
    skills: {
      s3,
      cloudfront,
      nodejs,
      lambda,
      typescript,
      stylus,
      html,
      vuejs,
      git,
    },
  },

  {
    name: 'Squoint',
    description: `
      Squoint is a puzzle game which is optimized for mobile devices and touch
      gestures. The game is currently in closed beta and will be launched soon.
    `,
    startsAt: new Date('2017'),
    endsAt: undefined,
    urls: ['https://squoint.com'],
    media: [],
    skills: {
      s3,
      cloudfront,
      nodejs,
      ec2,
      lambda,
      typescript,
      stylus,
      html,
      vuejs,
    },
  },

  {
    name: 'Colourcode',
    description: `
      Colourcode was created to make my life easier to create Websites for my
      customers. With colourcode i was able to find quickly new color schemes
      which match to the corporate identity of my clients.
    `,
    startsAt: new Date('2013'),
    endsAt: undefined,
    urls: ['https://colourco.de/', 'https://github.com/tamino-martinius/colourco.de'],
    media: [],
    skills: {
      s3,
      cloudfront,
      typescript,
      coffeescript,
      nodejs,
      stylus,
      html,
      handlebars,
      vuejs,
    },
  },

  {
    name: 'NextParticle',
    description: `
      NextParticle is the evolution of ParticleSlider. It's a complete rewrite
      of the code to improve the performance and make it easier to customize for
      the customers. The markup based initialization made it easier to create
      a wordpress plugin.
    `,
    startsAt: new Date('2017'),
    endsAt: undefined,
    urls: ['https://nextparticle.nextco.de/'],
    media: [],
    skills: {
      s3,
      cloudfront,
      lambda,
      nodejs,
      psql,
      typescript,
      html,
      stylus,
      vuejs,
    },
  },

  {
    name: 'GetShares',
    description: `
      GetShares is created to track you social media counts on all common
      social networks around the globe. It is also possible to create a unified
      look of all social media buttons.
    `,
    startsAt: new Date('2014'),
    endsAt: new Date('2017'),
    urls: [
      'http://www.getshar.es/',
      'https://github.com/tamino-martinius/www.getshar.es',
      'https://github.com/tamino-martinius/api.getshar.es',
    ],
    media: [],
    skills: {
      s3,
      cloudfront,
      nodejs,
      js,
      html,
      stylus,
      handlebars,
    },
  },

  {
    name: 'ParticleSlider',
    description: `
      ParticleSlider is created based on my research of Particle effect
      rendering on a 2d canvas. It's possible to create amazing Particle
      Effects based on simple png images. ParticleSlider is discontinued
      since NextParticle is now available. All customers of ParticleSlider
      a version of NextParticle for free.
    `,
    startsAt: new Date('2014'),
    endsAt: new Date('2017'),
    urls: ['https://nextparticle.nextco.de/', 'http://particleslider.de/'],
    media: [],
    skills: {
      ec2,
      coffeescript,
      js,
      html,
      css,
    },
  },

  {
    name: 'Iary',
    description: `
      Iary is a time tracking and reporting solution build as Web Application.
      It was discontinued in favor of my work at shyftplan. All customers got
      a complete refund.
    `,
    startsAt: new Date('2014'),
    endsAt: new Date('2017'),
    urls: [],
    media: [],
    skills: {
      ec2,
      s3,
      cloudfront,
      js,
      html,
      nodejs,
      handlebars,
      meteor,
      stylus,
      websockets,
    },
  },

  {
    name: 'Butlr',
    description: `
      Butlr is a automatically generated city guide for all cities in Germany.
      It shows all Points of Interrest, Restaurants, etc. based on a enriched
      database build on GeoDB. This project is discontinued with GeoDB.
    `,
    startsAt: new Date('2013'),
    endsAt: new Date('2014'),
    urls: [],
    media: [],
    skills: {
      s3,
      cloudfront,
      nodejs,
      js,
      html,
      stylus,
      psql,
      api,
    },
  },

  {
    name: 'GeoDB',
    description: `
      GeoDB is a web scraper which is searching for all addresses and their
      geo coordinates in germany. The data is used on auto completes for
      Webpages. This project is discontinued becasue it has too high costs
      for a Website which generates no income.
    `,
    startsAt: new Date('2012'),
    endsAt: new Date('2014'),
    urls: [],
    media: [],
    skills: {
      nodejs,
      js,
      html,
      stylus,
      psql,
      api,
    },
  },
];

/********
 * Talks *
 ********/

export const talks: ShowCase[] = [
  {
    name: 'Lets talk about ... New JavaScript Features (2020 Editon)',
    description: `
      A yearly overview what happened in JavaScript and whats on the
      early stages of ECMAScript. An small into to interesting new functions.
    `,
    startsAt: new Date('2020'),
    endsAt: new Date('2020'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--new-js-features--2020',
      'https://new-js-features--2020.lets-talk-about.tamino.dev',
    ],
    media: [],
    skills: {
      nodejs,
    },
  },

  {
    name: 'Lets talk about ... AWS CDK (Cloud Development Kit)',
    description: `
      An introduction in the alternative to CloudFormation templates.
      Create your infrastructure stacks with code.
    `,
    startsAt: new Date('2019'),
    endsAt: new Date('2019'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--cdk',
      'https://cdk.lets-talk-about.tamino.dev',
    ],
    media: [],
    skills: {
      nodejs,
    },
  },

  {
    name: 'Lets talk about ... New JavaScript Features (2019 Editon)',
    description: `
      A yearly overview what happened in JavaScript and whats on the
      early stages of ECMAScript. An small into to interesting new functions.
    `,
    startsAt: new Date('2019'),
    endsAt: new Date('2019'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--new-js-features--2019',
      'https://new-js-features--2019.lets-talk-about.tamino.dev',
    ],
    media: [],
    skills: {
      nodejs,
    },
  },

  {
    name: 'Lets talk about ... SAM (Serverless Access Model)',
    description: `
      An introduction to the Tooling and concept of Serverless
      Applications within AWS.
    `,
    startsAt: new Date('2018'),
    endsAt: new Date('2018'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--sam',
      'https://sam.lets-talk-about.tamino.dev',
    ],
    media: [],
    skills: {
      nodejs,
      lambda,
    },
  },

  {
    name: 'Lets talk about ... API (of shyftplan)',
    description: `
      A short introduction of APIs in general and the models of shyftplan in
      specific. This Talk was a internal presentation for shyftplan.
    `,
    startsAt: new Date('2018'),
    endsAt: new Date('2018'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--api',
      'https://api.lets-talk-about.tamino.dev',
    ],
    media: [],
    skills: {
      api,
      nodejs,
      html,
      stylus,
    },
  },

  {
    name: 'Lets talk about ... New JavaScript Features (2018 Editon)',
    description: `
      A yearly overview what happened in JavaScript and whats on the
      early stages of ECMAScript. An small into to interesting new functions.
    `,
    startsAt: new Date('2018'),
    endsAt: new Date('2018'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--new-js-features--2018',
      'https://new-js-features--2018.lets-talk-about.tamino.dev',
    ],
    media: [],
    skills: {
      nodejs,
    },
  },

  {
    name: 'Lets talk about ... SQL Query Performance',
    description: `
      A small guide in writing good and performant SQL Queries which give very
      responsed even with millions of records. I also explain why/when a database
      index is useful and which one i should use.
      This Talk was a internal presentation for shyftplan.
    `,
    startsAt: new Date('2018'),
    endsAt: new Date('2018'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--sql-query-performance',
      'https://sql-query-performance.lets-talk-about.tamino.dev',
    ],
    media: [],
    skills: {
      psql,
      nodejs,
      html,
      stylus,
    },
  },

  {
    name: 'Lets talk about ... GraphQL',
    description: `
      When should i use GraphlQL and what are the differences to REST and how
      does a GraphQL API look like from the Consumers and Developers perspective.
      This Talk was a internal presentation for shyftplan.
    `,
    startsAt: new Date('2017'),
    endsAt: new Date('2017'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--graphql',
      'https://graphql.lets-talk-about.tamino.dev',
    ],
    media: [],
    skills: {
      gql,
      nodejs,
      html,
      stylus,
    },
  },

  {
    name: 'Lets talk about ... TypeScript',
    description: `
      A quick introduction to TypeScript and its differenced to JavaScript.
      This Talk was a internal presentation for shyftplan.
    `,
    startsAt: new Date('2017'),
    endsAt: new Date('2017'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--typescript',
      'https://typescript.lets-talk-about.tamino.dev',
    ],
    media: [],
    skills: {
      typescript,
      nodejs,
      html,
      stylus,
    },
  },

  {
    name: 'Lets talk about ... Template',
    description: `
      A template with example slides. Thats my base branch with which i create
      my slides for presentations.
    `,
    startsAt: new Date('2017'),
    endsAt: undefined,
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--template',
      'https://github.com/tamino-martinius/lets-talk-about--example',
    ],
    media: [],
    skills: {
      api,
      nodejs,
      html,
      stylus,
    },
  },
];

/***********
 * Packages *
 ***********/

export const packages: ShowCase[] = [
  {
    name: 'Lets talk about ... Template',
    description: `
      A template with example slides. Thats my base branch with which i create
      my slides for presentations.
    `,
    startsAt: new Date('2017'),
    endsAt: undefined,
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--template',
      'https://github.com/tamino-martinius/lets-talk-about--example',
    ],
    media: [],
    skills: {
      api,
      nodejs,
      html,
      stylus,
    },
  },

  {
    name: 'Next Model',
    description: `
      Next Model is the evolution of Meteor Smart Record. With this package
      you are able to define Model relations and write database independend
      queries to fetch data.
    `,
    startsAt: new Date('2016'),
    endsAt: undefined,
    urls: [
      'https://github.com/tamino-martinius/node-next-model',
      'https://github.com/tamino-martinius/node-next-model-api-router',
      'https://github.com/tamino-martinius/node-next-model-knex-connector',
      'https://github.com/tamino-martinius/node-next-model-api-server-express',
      'https://github.com/tamino-martinius/node-next-model-local-storage-connector',
      'https://github.com/tamino-martinius/node-next-model-api-client-connector',
    ],
    media: [],
    skills: {
      nodejs,
      typescript,
      js,
      psql,
      gql,
      api,
    },
  },

  {
    name: 'Meteor Smart Record',
    description: `
      Meteor Smart Record is a package to define Model relations and write
      MongoDB queries in a simple and object orientated way. It's a dependency
      for Meteor Smart Form which is a simple way to create forms based on models.
      This pacakge is discontinued on favor of Next Model which is a Meteor
      independent solution.
    `,
    startsAt: new Date('2015'),
    endsAt: new Date('2017'),
    urls: [
      'https://github.com/tamino-martinius/meteor-smart-record',
      'https://github.com/tamino-martinius/meteor-smart-form',
      'https://github.com/tamino-martinius/meteor-smart-form-delete-button',
    ],
    media: [],
    skills: {
      meteor,
      js,
      coffeescript,
      mongodb,
    },
  },

  {
    name: 'Meteor ics',
    description: `
      A iCalendar .ics export which also enabled to integrate recurring events.
    `,
    startsAt: new Date('2015'),
    endsAt: new Date('2015'),
    urls: ['https://github.com/tamino-martinius/meteor-ics'],
    media: [],
    skills: {
      meteor,
      js,
    },
  },

  {
    name: 'Meteor lazy Analytics',
    description: `
      This pacakge provides a non blocking way to integrate Google Analytics
      where the credentials are dynamically fetched from the Server.
    `,
    startsAt: new Date('2015'),
    endsAt: new Date('2015'),
    urls: ['https://github.com/tamino-martinius/meteor-lazy-analytics'],
    media: [],
    skills: {
      meteor,
      js,
    },
  },

  {
    name: 'Meteor Method Pagination',
    description: `
      This pacakge is a easy way to integrate pagination of data with Meteor
      Server side methods..
    `,
    startsAt: new Date('2014'),
    endsAt: new Date('2014'),
    urls: ['https://github.com/tamino-martinius/meteor-method-pagination'],
    media: [],
    skills: {
      meteor,
      js,
      coffeescript,
    },
  },
];

/*******
 * Misc *
 *******/

export const misc: ShowCase[] = [
  {
    name: 'RVM Docker Images',
    description: `
      This repository generates a rainbow table of Ubuntu versions and Ruby
      versions. The source is available on GitHub and the prebuild images
      are available on Docker Hub.
    `,
    startsAt: new Date('2017'),
    endsAt: new Date('2018'),
    urls: [
      'https://hub.docker.com/r/taminomartinius/rvm/',
      'https://github.com/tamino-martinius/docker-rvm',
    ],
    media: [],
    skills: {
      docker,
    },
  },

  {
    name: 'Atom Spacebars language',
    description: `
      This Atom package enables syntax highlighting of Meteors Spacebars language.
      Currently not maintained because i use VS Code now as main Editor.
    `,
    startsAt: new Date('2016'),
    endsAt: new Date('2016'),
    urls: ['https://github.com/tamino-martinius/atom-language-spacebars'],
    media: [],
    skills: {},
  },
];
