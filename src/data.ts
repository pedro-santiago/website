import {
  Stage,
  Job,
  Education,
  ShowCase,
  Skill,
  SkillSet,
  State,
} from './data_types';

/********
* State *
********/

export const state = new State();

/*********
* Header *
*********/

export const myName = 'Pedro Santiago';
export const profession = 'Desenvolvedor Freelancer';
export const street = 'Lehdenstr. 21';
export const postalCode = '06847';
export const city = 'Porto Alegre, RS';
export const emails: string[] = [
  'contato@pedrosantiago.com.br'
];
export const socialNetworks: { [key: string]: string } = {
  github: 'https://github.com/pedro-santiago',
  linkedin: 'https://www.linkedin.com/in/santiagopedro/',
};


/*********
* Habilidades *
*********/

// AWS
// AWS / Compute
export const ec2: Skill = { level: 1.0, name: 'Elastic Compute Cloud (EC2)' };
export const cloudformation: Skill = { level: 0.7, name: 'CloudFormation' };
export const elb: Skill = { level: 0.7, name: 'Simple Queue Service (SQS)' };
export const rds: Skill = { level: 0.5, name: 'RDS' };
export const s3: Skill = { level: 0.9, name: 'S3' };
export const r53: Skill = { level: 1.0, name: 'Route 53' };


// Backend / Frameworks
export const laravel: Skill = { level: 0.9, name: 'PHP/Laravel' };
export const codeigniter: Skill = { level: 0.5, name: 'PHP/CodeIgniter' };
export const slim: Skill = { level: 0.7, name: 'PHP/Slim' };
export const phalcon: Skill = { level: 0.3, name: 'Phalcon' };
export const symfony: Skill = { level: 0.6, name: 'PHP/Symfony' };
export const express: Skill = { level: 0.5, name: 'NodeJS/Express' };
export const adonis: Skill = { level: 0.8, name: 'NodeJS/AdonisJS' };
export const antd: Skill = { level: 0.7, name: 'React/Ant.Design' };
export const umijs: Skill = { level: 0.6, name: 'React/UMIJS' };

// Backend / Code
export const nodejs: Skill = { level: 0.9, name: 'Node.js' };
export const typescript: Skill = { level: 0.8, name: 'TypeScript' };
export const php: Skill = { level: 1.0, name: 'PHP' };
export const python: Skill = { level: 0.5, name: 'Python' };

// Backend / Data
export const api: Skill = { level: 1.0, name: 'API' };
export const mysql: Skill = { level: 0.8, name: 'MySQL' };
export const mongodb: Skill = { level: 0.5, name: 'MongoDB' };
export const psql: Skill = { level: 1.0, name: 'PostgreSQL' };
export const redis: Skill = { level: 0.7, name: 'Redis' };
export const couchdb: Skill = { level: 0.4, name: 'CouchDB' };

// Frontend
// Frontend / Markup
export const handlebars: Skill = { level: 0.4, name: 'Handlebars' };
export const html: Skill = { level: 1.0, name: 'HTML' };
export const markdown: Skill = { level: 0.9, name: 'Markdown' };
export const react: Skill = { level: 0.8, name: 'React' };
export const vuejs: Skill = { level: 0.2, name: 'Vue.js' };

// Frontend / Style
export const css: Skill = { level: 1.0, name: 'CSS' };
export const less: Skill = { level: 0.9, name: 'less' };
export const sass: Skill = { level: 0.9, name: 'Sass' };

// Frontend / Design
export const photoshop: Skill = { level: 0.4, name: 'Photoshop' };
export const ui: Skill = { level: 0.5, name: 'User Interface' };
export const ux: Skill = { level: 0.6, name: 'User Experience' };

// Misc


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
    title: 'Backend',
    data: [
      {
        title: 'Programação',
        data: { nodejs, typescript, python, php },
      },
      {
        title: 'Banco de Dados',
        data: { api, mysql, mongodb, psql, redis, couchdb },
      },
      {
        title: 'Frameworks',
        data: { laravel, symfony },
      },
    ],
  },
  {
    title: 'Frontend',
    data: [
      {
        title: 'Markup',
        data: { handlebars, html, markdown, react, vuejs },
      },
      {
        title: 'Estilo',
        data: { css, less, sass },
      },
      {
        title: 'Design',
        data: { photoshop, ui, ux },
      },
    ],
  },
  {
    title: 'Hobby',
    data: { logic, distributedSys, imageProcessing, math, neuronalNetwork, numeric, parallelExec },
  },
];


/*******************
* Curriculum Vitae *
*******************/

export const curriculumVitae: (Job | Education)[] = [
  {
    company: 'shyftplan GmbH',
    description: `
      I lead shyftplans Front- and Backend Developers. I'm responsible to
      design, manage and build the Infrastructure for thousands of concurrent
      Users at Germanys best shift planning and accounting Web Application.
    `,
    startsAt: new Date('2017-07-01'),
    endsAt: undefined,
    remote: false,
    position: [
      'Head of Development',
      'Lead Engineering',
    ],
    skills: {
      rds,
      nodejs,
      mongodb,
      api,
      psql,
      redis,
    },
  },

  {
    company: 'shyftplan GmbH',
    description: `
      I lead shyftplans Front- and Backend Developers. I'm responsible for
      the Web and Mobile Infrastructure for Germanys best shift planning and
      accounting Web Application.
    `,
    startsAt: new Date('2016-12-01'),
    endsAt: new Date('2017-06-30'),
    remote: false,
    position: [
      'Head of Code',
      'Head of Mobile',
    ],
    skills: {
      rds,
      nodejs,
      mongodb,
      api,
      psql,
      redis,
    },
  },

  {
    company: 'shyftplan GmbH',
    description: `
      I plan and build the Mobile App and Infrastructure for Germanys best
      shift planning and accounting Web Application.
    `,
    startsAt: new Date('2014-12-01'),
    endsAt: new Date('2016-11-30'),
    remote: false,
    position: [
      'Head of Mobile',
      'Backend Developer',
    ],
    skills: {
      nodejs,
      mongodb,
      api,
      psql,
      redis,
    },
  },

  {
    company: 'shyftplan GmbH',
    description: `
      I plan and build the Infrastructure pre and post launch for Germanys best
      shift planning and accounting Web Application.
    `,
    startsAt: new Date('2015-02-01'),
    endsAt: new Date('2015-07-01'),
    remote: false,
    position: 'Backend Developer',
    skills: {
      psql,
      redis,
    },
  },

  {
    company: 'shyftplan GmbH',
    description: `
      I remotely plan and build the Infrastructure pre and post launch for
      Germanys best shift planning and accounting Web Application.
    `,
    startsAt: new Date('2014-12-01'),
    endsAt: new Date('2015-01-31'),
    remote: true,
    position: 'Backend Developer',
    skills: {
      psql,
      redis,
    },
  },

  {
    company: 'Nutanix',
    description: `
      I remotely worked as Frontend Developer on the Server Admin Interface of
      Nutanix Cloud Infrastructure.
    `,
    startsAt: new Date('2014-11-01'),
    endsAt: new Date('2015-01-31'),
    remote: true,
    position: 'Frontend Developer',
    skills: {
      nodejs,
      less,
    },
  },

  {
    company: 'Nutanix',
    description: `
      I remotely implemented a complete redesign of Nutanix website with
      PHP and less.
    `,
    startsAt: new Date('2014-08-01'),
    endsAt: new Date('2014-10-31'),
    remote: true,
    position: 'Frontend Developer',
    skills: {
      php,
      less,
    },
  },

  {
    company: 'Volkswagen AG',
    description: `
      I researched a live video processing solution at Volkswagens destruction
      free analysis Team.
    `,
    startsAt: new Date('2014-02-01'),
    endsAt: new Date('2015-01-31'),
    remote: false,
    position: 'Developer (Research - NDA)',
    skills: {
      nodejs,
      mongodb,
      imageProcessing,
    },
  },

  {
    company: 'Novotrend GmbH',
    description: `
      I designed and planned build the Infrastructure of the most common Web
      Application to manage the process for pivate job adviser. I was also
      involved in creating a CRM for customer Websites.
    `,
    startsAt: new Date('2010-04-01'),
    endsAt: new Date('2013-12-31'),
    remote: false,
    position: 'Head of Code',
    skills: {
      nodejs,
    },
  },

  {
    university: 'Philipps-Universität Marburg',
    description: `
      I studied IT with secondary subject Math. My focus was on Numeric,
      Parralel Execution, Neural Networks and functional programming languages.
    `,
    startsAt: new Date('2004'),
    endsAt: new Date('2015'),
    graduiation: 'Intermediate diploma',
    skills: {
      numeric,
      logic,
      math,
      parallelExec,
      neuronalNetwork,
      distributedSys,
    },
  },

  {
    company: 'Freelancer',
    description: `
      I created Websites for small and medium sized companies and worked
      remotely for enterprise customers.
    `,
    startsAt: new Date('2002'),
    endsAt: undefined,
    remote: true,
    position: 'Full Stack Developer',
    skills: {
      nodejs,
      react,
      php,
      mongodb,
      psql,
      less,
      sass,
    },
  },
];


/**************
* Experiments *
**************/

export const experiments: ShowCase[] = [
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
      ui,
      ux,
      css,
      html,
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
    urls: [
      'https://dribbble.com/shots/2649284-Dusty-Particle-Sphere',
    ],
    media: [],
    skills: {
      html,
    },
  },

  {
    name: 'Hamburder Icon Animations',
    description: `
      I created a couple of different hamburger menu icon animations to open
      and close a menu. All icons are planned with sketch. The base svgs are all
      hand written with basic svg path commands. The icons are previewed on
      dribbble and the code is available Open Source at CodePen.
    `,
    startsAt: new Date('2014-08-05'),
    endsAt: new Date('2017-07-02'),
    urls: [
      'https://dribbble.com/shots/3539398--version-3',
      'https://dribbble.com/shots/3529235--version-2',
      'https://dribbble.com/shots/1674602-Menu-open-back',
      'https://dribbble.com/shots/1671182--version-1',
    ],
    media: [],
    skills: {
      ui,
      ux,
      css,
      html,
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
      ui,
      ux,
      css,
      html,
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
    },
  },
];


/***********
* Projects *
***********/

export const projects: ShowCase[] = [
  {
    name: 'Squoint',
    description: `
      Squoint is a puzzle game which is optimized for mobile devices and touch
      gestures. The game is currently in closed beta and will be launched soon.
    `,
    startsAt: new Date('2017'),
    endsAt: undefined,
    urls: [],
    media: [],
    skills: {
      s3,
      nodejs,
      ec2,
      typescript,
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
    urls: [
      'https://colourco.de/',
      'https://github.com/tamino-martinius/colourco.de',
    ],
    media: [],
    skills: {
      s3,
      typescript,
      nodejs,
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
    urls: [
      'https://nextparticle.nextco.de/',
    ],
    media: [],
    skills: {
      s3,
      nodejs,
      psql,
      typescript,
      html,
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
      nodejs,
      html,
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
    urls: [
      'http://particleslider.de/',
    ],
    media: [],
    skills: {
      ec2,
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
    urls: [
      '',
    ],
    media: [],
    skills: {
      ec2,
      s3,
      html,
      nodejs,
      handlebars,
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
    urls: [
      '',
    ],
    media: [],
    skills: {
      s3,
      nodejs,
      html,
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
    urls: [
      '',
    ],
    media: [],
    skills: {
      nodejs,
      html,
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
    name: 'Lets talk about ... API (of shyftplan)',
    description: `
      A short introduction of APIs in general and the models of shyftplan in
      specific. This Talk was a internal presentation for shyftplan.
    `,
    startsAt: new Date('2018'),
    endsAt: new Date('2018'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--api',
      'http://lets-talk-about--api.tamino-martinius.de',
    ],
    media: [],
    skills: {
      api,
      nodejs,
      html,
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
      'http://lets-talk-about--sql-query-performance.tamino-martinius.de',
    ],
    media: [],
    skills: {
      psql,
      nodejs,
      html,
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
      'http://lets-talk-about--graphql.tamino-martinius.de',
    ],
    media: [],
    skills: {
      nodejs,
      html,
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
      'http://lets-talk-about--typescript.tamino-martinius.de',
    ],
    media: [],
    skills: {
      typescript,
      nodejs,
      html,
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
      psql,
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
    urls: [
      'https://github.com/tamino-martinius/meteor-ics',
    ],
    media: [],
    skills: {
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
    urls: [
      'https://github.com/tamino-martinius/meteor-lazy-analytics',
    ],
    media: [],
    skills: {
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
    urls: [
      'https://github.com/tamino-martinius/meteor-method-pagination',
    ],
    media: [],
    skills: {
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
    urls: [
      'https://github.com/tamino-martinius/atom-language-spacebars',
    ],
    media: [],
    skills: {},
  },
];
