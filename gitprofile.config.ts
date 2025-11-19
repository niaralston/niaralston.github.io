// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'niaralston', // Your GitHub username
  },
  base: '/',

  name: 'Nia Ralston',
  designation: 'Robotics Engineer | MASc Candidate',
  company: 'Queen\'s University',
  bio: 'Developing inflatable humanoid robots. Mechanical Engineering researcher specializing in bipedal locomotion.',
  
  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 6,
        exclude: {
          forks: false,
          projects: [],
        },
      },
    },
    external: {
      header: 'Featured Projects',
      projects: [
        {
          title: 'Inflatable Bipedal Locomotion Research',
          description:
            'Master\'s research developing inflatable pneumatic humanoid robots. Built bipedal walking simulations in MATLAB and MuJoCo, implementing MPC controllers with compliant walking models. Achieved 2.3x lower cost of transport compared to rigid flat-footed walkers. Research to be presented at IROS 2025.',
          imageUrl:
            'https://img.freepik.com/free-vector/robot-illustration_1284-42466.jpg',
          link: 'https://github.com/niaralston',
        },
        {
          title: 'Terrain-Adaptive Robot',
          description:
            'NSERC-funded research developing a robot to address challenges faced by wheeled robots on soft terrains. Designed and implemented custom PCBs for sensor integration, improving real-time decision-making. Submitted paper to ICRA 2024.',
          imageUrl:
            'https://img.freepik.com/free-vector/robotic-arm-illustration_1284-42465.jpg',
          link: 'https://github.com/niaralston',
        },
        {
          title: 'Formula SAE Suspension System',
          description:
            'Led design and manufacturing of race car suspension and steering system, reducing weight by 3%. Employed Finite Element Analysis (FEA) and iterative testing to optimize design. Created technical drawings with proper tolerancing and manufactured parts using CNC equipment.',
          imageUrl:
            '/FormulaCollage.png',
          link: 'https://github.com/niaralston',
        },
        {
          title: 'Chess-Playing Robotic Arm',
          description:
            'Developed control algorithms applying inverse kinematics and path planning, enabling robotic arms to play chess. Refined algorithm to accommodate various arm designs. Implemented circuitry for real-time visualization of chess piece positions.',
          imageUrl:
            '/RobotPlayingChess.JPG',
          link: 'https://github.com/niaralston',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Nia Ralston',
    description: 'NSERC Graduate Scholar developing inflatable pneumatic humanoid robots at Queen\'s University. Robotics researcher specializing in bipedal locomotion, mechanical design, and embedded systems.',
    imageURL: '',
  },
  social: {
    linkedin: 'nia-ralston',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '856-359-6880',
    email: 'nia.ralston@gmail.com',
  },
  resume: {
    fileUrl: 'https://raw.githubusercontent.com/niaralston/niaralston.github.io/main/public/Resume%20-%20Nia%20Ralston.pdf', // Add your resume PDF link here if you want a download button
  },
  skills: [
    'MATLAB',
    'Python',
    'C++',
    'JavaScript',
    'MuJoCo Simulation',
    'Simulink',
    'SolidWorks',
    'Finite Element Analysis',
    'PCB Design (Eagle)',
    'Arduino',
    'Raspberry Pi',
    'Inverse Kinematics',
    'Path Planning',
    'MPC Controllers',
    'Linux',
    'Git',
    '3D Printing',
    'CNC Machining',
    'Embedded Systems',
  ],
  experiences: [
    {
      company: 'Queen\'s University',
      position: 'Teaching Assistant',
      from: 'September 2023',
      to: 'Present',
      companyLink: 'https://www.queensu.ca/',
    },
    {
      company: 'ASTM International Exo Technology Center of Excellence',
      position: 'Intern',
      from: 'May 2024',
      to: 'August 2024',
      companyLink: 'https://www.etcoe.org/',
    },
    {
      company: 'Ingenuity Labs (Queen\'s University)',
      position: 'Research Assistant',
      from: 'January 2023',
      to: 'April 2024',
      companyLink: 'https://ingenuitylabs.queensu.ca/',
    },
    {
      company: 'MEDATech',
      position: 'Student Consultant',
      from: 'September 2023',
      to: 'April 2024',
      companyLink: 'https://medatech.ca/',
    },
    {
      company: 'SparQ (Queen\'s University)',
      position: 'Supervisor',
      from: 'August 2023',
      to: 'April 2024',
      companyLink: 'https://www.queensu.ca/innovationcentre/facilities/sparq-studios-makerspace',
    },
    {
      company: 'AI Trillium',
      position: 'Robotics Engineering Intern',
      from: 'May 2022',
      to: 'August 2022',
      companyLink: '',
    },
    {
      company: 'Mathnasium',
      position: 'Math Instructor',
      from: 'June 2019',
      to: 'January 2023',
      companyLink: '',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'Queen\'s University',
      degree: 'Master of Applied Science, Mechanical and Materials Engineering',
      from: '2024',
      to: '2027',
    },
    {
      institution: 'Zhejiang University (Research Exchange)',
      degree: 'Visiting Researcher under Professor Tong Li',
      from: '2025',
      to: '2025',
    },
    {
      institution: 'Queen\'s University',
      degree: 'Bachelor of Applied Science, Mechanical Engineering',
      from: '2020',
      to: '2024',
    },
  ],
  publications: [
      {
      title: 'FlipWalker: Jacob’s Ladder toy-inspired robot for locomotion acrossdiverse, complex terrain',
      conferenceName: 'IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)',
      journalName: '',
      authors: 'Diancheng Li, Nia Ralston, Bastiaan Hagen, Phoebe Tan1and Matthew A. Robertson',
      link: 'https://www.researchgate.net/publication/395034427_FlipWalker_Jacob's_Ladder_toy-inspired_robot_for_locomotion_across_diverse_complex_terrain',
      description:
        'This paper introduces FlipWalker, a novel under-actuated robot locomotion system inspired by Jacob’s Ladderillusion toy, designed to traverse challenging terrains wherewheeled robots often struggle. Like the Jacob’s Ladder toy, Flip-Walker features two interconnected segments joined by ﬂexiblecables, enabling it to pivot and ﬂip around singularities in amanner reminiscent of the toy’s cascading motion. Actuation isprovided by motor-driven legs within each segment that pushoff either the ground or the opposing segment, depending onthe robot’s current conﬁguration. A physics-based model of theunderactuated ﬂipping dynamics is formulated to elucidate thecritical design parameters governing forward motion and obsta-cle clearance or climbing. The untethered prototype weighs 0.78kg, achieves a maximum ﬂipping speed of 0.2 body lengths persecond. Experimental trials on artiﬁcial grass, river rocks, andsnow demonstrate that FlipWalker’s ﬂipping strategy, whichrelies on ground reaction forces applied normal to the surface,offers a promising alternative to traditional locomotion fornavigating irregular outdoor terrain.',
    },
    {
      title: 'Inflatable Bipedal Locomotion',
      conferenceName: 'IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)',
      journalName: '',
      authors: 'Nia Ralston, Tong Li, Matthew A. Robertson',
      link: 'https://raw.githubusercontent.com/niaralston/niaralston.github.io/main/public/NiaRalston_IROS_Poster.pdf',
      description:
        'Research investigating how inflatable legs and feet affect bipedal gait dynamics, exploring whether passive compliance can replace heavy stabilizing actuators while reducing energy consumption and design complexity. Developed three MuJoCo simulation models achieving stable walking gaits, with preliminary results showing 2.3x lower cost of transport compared to rigid flat-footed walkers. To be presented at IROS 2025.',
    },
      {
      title: 'Learn how Baymax is coming to real life',
      conferenceName: 'ASTM Excellent Exo Chat',
      journalName: '',
      authors: 'Nia Ralston, Nora Nimmerichter, Bill Billotte',
      link: 'https://www.buzzsprout.com/1954112/episodes/15086207-learn-how-baymax-is-coming-to-real-life',
      description:
        'Brought on as guest for the ASTM Excellent Exo Chat',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '',
    limit: 0,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'emerald',
    disableSwitch: true,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },
  footer: ``,
  enablePWA: true,
};

export default CONFIG;
