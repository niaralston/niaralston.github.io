// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'niaralston', // Your GitHub username
  },
  base: '/',
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
      header: 'Projects',
      projects: [
        {
          title: 'Gearbox Design',
          description:
            'As part of a competition to design a single gearbox for both speed and torque tests, I worked with a team to develop a sliding gearbox for an RC car. The sliding mechanism allowed us to switch between gear ratios optimized for hill climbing and maximum speed. We used MATLAB to determine optimal gear ratios and applied gear design equations to specify tooth counts, module sizing, and mesh geometry. The gearbox was manufactured and tested on course, where we evaluated performance metrics including maximum incline angle and top speed.',
          imageUrl:
            'https://raw.githubusercontent.com/niaralston/niaralston.github.io/main/public/GearBoxDrawing.png',
          imageUrl2: 'https://raw.githubusercontent.com/niaralston/niaralston.github.io/main/public/GearboxTeamWithCar.jpg',
          link: '', 
        },
        {
          title: 'Scaffold Design',
          description:
            'Designed a scaffold and validated its performance through both Finite Element Analysis (FEA) simulations and physical mechanical testing.',
          imageUrl: 'https://raw.githubusercontent.com/niaralston/niaralston.github.io/main/public/FEA.png',
          imageUrl2: 'https://raw.githubusercontent.com/niaralston/niaralston.github.io/main/public/BeforAndAfterTesting.png',
          link: '',   
        },
        {
          title: 'Formula SAE Suspension System',
          description:
            'Led design and manufacturing of race car suspension and steering system, reducing weight by 3%. Employed Finite Element Analysis (FEA) and iterative testing to optimize design. Created technical drawings with proper tolerancing and manufactured parts using CNC equipment.',
          imageUrl:
            'https://raw.githubusercontent.com/niaralston/niaralston.github.io/main/public/FormulaCollage.png',
          link: '',
        },
        {
          title: 'Chess-Playing Robotic Arm',
          description:
            'Developed control algorithms applying inverse kinematics and path planning, enabling robotic arms to play chess. Refined algorithm to accommodate various arm designs. Implemented circuitry for real-time visualization of chess piece positions.',
          imageUrl:
            'https://raw.githubusercontent.com/niaralston/niaralston.github.io/main/public/RobotPlayingChess.JPG',
          link: '',
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
    title: 'FlipWalker: Jacob\'s Ladder toy-inspired robot for locomotion across diverse, complex terrain',
    conferenceName: 'IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)',
    journalName: '',
    authors: 'Diancheng Li, Nia Ralston, Bastiaan Hagen, Phoebe Tan and Matthew A. Robertson',
    link: 'https://www.researchgate.net/publication/395034427_FlipWalker_Jacob\'s_Ladder_toy-inspired_robot_for_locomotion_across_diverse_complex_terrain',
    description:
      'Our work, which won the IROS Best Entertainment and Amusement Paper Award, introduces FlipWalker—a novel under-actuated robotic locomotion system inspired by the Jacob’s Ladder illusion toy, designed to traverse challenging terrains where wheeled robots often struggle. I worked on the developement of the initial prototypes, both on the mechanical design and electical PCB design.',
    imageUrl: 'https://raw.githubusercontent.com/niaralston/niaralston.github.io/main/public/SequenceFlipbot.png',
    imageUrl2: 'https://raw.githubusercontent.com/niaralston/niaralston.github.io/main/public/IROSAward.jpg',
    imageUrl3: 'https://raw.githubusercontent.com/niaralston/niaralston.github.io/main/public/PCBBoardDesign.PNG',
    imageUrl4: 'https://raw.githubusercontent.com/niaralston/niaralston.github.io/main/public/PCBMillingCloseUP.png',
  },
  {
    title: 'Inflatable Bipedal Locomotion',
    conferenceName: 'IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)',
    journalName: '',
    authors: 'Nia Ralston, Tong Li, Matthew A. Robertson',
    link: 'https://raw.githubusercontent.com/niaralston/niaralston.github.io/main/public/NiaRalston_IROS_Poster.pdf',
    description:
      'My research investigates how inflatable legs and feet affect bipedal gait dynamics, exploring whether passive compliance can replace heavy stabilizing actuators while reducing energy consumption and design complexity. I developed three MuJoCo simulation models achieving stable walking gaits, with preliminary results showing 2.3x lower cost of transport compared to rigid flat-footed walkers. I presented this research at IROS 2025.',
    imageUrl: 'https://raw.githubusercontent.com/niaralston/niaralston.github.io/main/public/IROSPresentation.png',
    imageUrl2: 'https://raw.githubusercontent.com/niaralston/niaralston.github.io/main/public/IROSPosterPicture.png',
    videoUrl: 'https://raw.githubusercontent.com/niaralston/niaralston.github.io/main/public/SoftWalkerTrimmed.mp4',
    videoUrl2: 'https://www.youtube.com/embed/RoTWsi8_IXY?si=wDu-UoAS187vcPTW',
  },
  {
    title: 'Learn how Baymax is coming to real life',
    conferenceName: 'ASTM Excellent Exo Chat',
    journalName: '',
    authors: 'Nia Ralston, Nora Nimmerichter, Bill Billotte',
    link: 'https://www.buzzsprout.com/1954112/episodes/15086207-learn-how-baymax-is-coming-to-real-life',
    description:
      'Interviewed on the ASTM Excellent Exo Chat podcast to discuss inflatable robotics research.',
    imageUrl: 'https://raw.githubusercontent.com/niaralston/niaralston.github.io/main/public/Podcast.png',
  },
  {
    title: 'Exo Games',
    conferenceName: 'ASTM International Exo Games',
    journalName: '',
    authors: '',
    link: 'https://www.etcoe.org/exo-games',
    description:
      'Part of team of 6 that ran and organized the 2024 ASTM International Exo Games. These games were ran in partnership with the National Institute of Standards and Technology (NIST).',
    imageUrl: '',
    videoUrl: 'https://raw.githubusercontent.com/niaralston/niaralston.github.io/main/public/ExoGamesVideo.mp4',
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
