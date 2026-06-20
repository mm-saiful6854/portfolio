export const profile = {
  name: 'Md Saiful Islam',
  role: 'Senior Software Engineer',
  location: 'Dhaka, Bangladesh',
  email: 'sm.saiful.maahi@gmail.com',
  phone: '+880 1521428565',
  linkedin: 'https://www.linkedin.com/in/md-saiful-islam-it-person/',
  github: 'https://github.com/mm-saiful6854',
  googleScholar: 'https://scholar.google.com/saiful',
  resumeUrl: '/Md_Saiful_Islam_Resume_latest.pdf',
  imageUrl: '/images/profile.png',
  summary:
    'Software engineer with 5+ years of experience building scalable cloud applications using Java, Spring Boot, Docker, and Kubernetes. Strong in fintech systems, distributed transactions, messaging, and production-ready backend services.',
  higherStudySummary:
    'Research-focused computer science graduate interested in human-computer interaction, IoT, medical imaging, machine learning, and software engineering. Published work includes gesture-controlled systems, assistive technology, and deep-learning-based review studies.',
  focusAreas: [
    'Fintech microservices',
    'Distributed transactions',
    'Cloud-native deployment',
    'High-volume data processing',
    'HCI and assistive systems research',
  ],
  metrics: [
    { value: '5+', label: 'Years building production systems' },
    { value: '6+', label: 'Microservices managed for messaging platforms' },
    { value: '4', label: 'Research publications' },
    { value: '377+', label: 'Competitive programming problems solved' },
  ],
  navigation: [
    { label: 'Home', to: '/' },
    { label: 'Experience', to: '/experience' },
    { label: 'Research', to: '/research' },
    { label: 'Projects', to: '/projects' },
    { label: 'Skills', to: '/skills' },
    { label: 'Achievements', to: '/achievements' },
    { label: 'Contact', to: '/contact' },
  ],
}

export const experience = [
  {
    company: 'RedDot Digital Limited, Robi Axiata',
    link: 'https://www.reddotdigitalit.com/',
    role: 'Senior Software Engineer',
    period: 'Feb 2025 - Present',
    location: 'Dhaka, Bangladesh',
    domain: 'Mobile Financial Service',
    stack: ['Java', 'Spring Microservices', 'Kafka', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
    highlights: [
      'Designed and implemented a custom SAGA-based distributed transaction system for consistency across services.',
      'Built Bangla QR payment and multi-wallet architecture for flexible financial operations.',
      'Developed a real-time commission management system with high accuracy and scalability.',
      'Integrated bill payment aggregators including DESCO, NESCO, BDGCL, and PRAN.',
      'Contributed to scalable, high-availability fintech microservices architecture.',
    ],
  },
  {
    company: 'Reve Systems Ltd.',
    link: 'https://www.revesoft.com/',
    role: 'Software Engineer',
    period: 'Sep 2021 - Jan 2025',
    location: 'Dhaka, Bangladesh',
    domain: 'Messaging, SMS Gateway, Customer Portal',
    stack: ['Java', 'Spring Boot 3', 'Vue.js 3', 'Kafka', 'Docker', 'Redis', 'ScyllaDB', 'Kubernetes'],
    highlights: [
      'Managed 6 microservices for Alaap BTCL instant messaging using Java, Kafka, Docker, Redis, ScyllaDB, and Kubernetes.',
      'Led REVE SMS migration from Struts/JSP to Spring Boot 3, Spring Security 6, and Vue.js 3.',
      'Optimized SMS CDR processing and reporting to significantly improve download performance.',
      'Implemented SMPP and HTTP configuration workflows for reliable SMS delivery.',
      'Built auto reporting, invoicing, alerting systems, and Linux production deployment workflows.',
      'Developed reusable Maven modules for cross-project integration in the Indian Airtel Customer Portal.',
    ],
  },
  {
    company: 'Ostad',
    link: 'https://ostad.app/',
    role: 'Vue.js Instructor',
    period: 'Jul 2023 - Jan 2024',
    location: 'Remote',
    domain: 'Online learning platform',
    stack: ['Vue.js', 'JavaScript', 'Frontend mentoring', 'Conceptual classes'],
    highlights: [
      'Conducted support and conceptual classes as a Vue.js instructor after Ostad launched its first Vue.js course.',
      'Helped learners understand Vue fundamentals, component-driven development, and practical frontend workflows.',
    ],
  },
]

export const projects = [
  {
    title: 'IVR and Call Center',
    type: 'Telephony platform',
    stack: ['Java', 'Asterisk', 'ARI', 'Call routing'],
    description:
      'Inbound and outbound call generation system built around the Asterisk open-source project, with ARI-based Java services for call routing rules.',
  },
  {
    title: 'Email Verifier Tool',
    type: 'Developer utility',
    stack: ['Golang', 'Email validation'],
    description: 'A personal tool built in Go for efficient email verification workflows.',
  },
  {
    title: 'Computer Interaction by Hand Gesture',
    type: 'Machine learning and IoT',
    stack: ['TensorFlow', 'OpenCV', 'Python', 'tkinter', 'CNN'],
    description:
      'Controlled a computer without physical touch by detecting hand gestures through image processing and a 2D CNN model.',
  },
  {
    title: 'Treasure Hunting 3D Game',
    type: 'Graphics programming',
    stack: ['C++', 'OpenGL', 'GLUT', 'GLU'],
    description:
      'A 3D exploration game where players roam environments and find hidden treasure using in-game hints.',
  },
  {
    title: 'Real Estate Business Website',
    type: 'Full-stack web app',
    stack: ['Django', 'Python', 'PostgreSQL'],
    description:
      'A property marketplace with admin panel and user-facing interfaces for buying and selling houses.',
  },
  {
    title: 'Inventory Management System',
    type: 'Business operations platform',
    stack: ['Spring Boot', 'Vue.js', 'REST API'],
    description:
      'A product distributor management system for tracking warehouse operations, accounting, DSR workflows, and role-wise interfaces.',
  },
  {
    title: 'Know Your Expenses',
    type: 'Mobile family finance app',
    stack: ['Flutter', 'Firebase Auth', 'Cloud Firestore'],
    description:
      'A mobile application where family members can record expenses and a family admin can track spending across the household.',
  },
]

export const researchInterests = [
  'HCI',
  'Computer Networking',
  'IoT',
  'Software Engineering',
  'Medical Imaging',
  'Machine Learning',
  'Data Science',
]

export const publications = [
  {
    title: 'Finger-Gesture Controlled Wheelchair with Enabling IoT',
    authors: [
      'Muhammad Sheikh Sadi',
      'Mohammed Alotaibi',
      'Md. Repon Islam',
      'Md. Saiful Islam',
      'Zaid Bassfar',
    ],
    venue: 'Sensors',
    year: '2022',
    link: null,
  },
  {
    title: 'Towards Developing a Real-Time Hand Gesture Controlled Wheelchair',
    authors: ['Md. Repon Islam', 'Md. Saiful Islam', 'Muhammad Sheikh Sadi'],
    venue: 'SN Computer Science',
    year: '2021',
    link: null,
  },
  {
    title: 'Deep Learning Based Systems Developed for Fall Detection: A Review',
    authors: [
      'Md. Milon Islam',
      'Omar Tayan',
      'Md. Repon Islam',
      'Md. Saiful Islam',
      'Sheikh Nooruddin',
      'Muhammad Nomani Kabir',
      'Md. Rabiul Islam',
    ],
    venue: 'IEEE Access',
    year: '2020',
    link: null,
  },
  {
    title: 'An Efficient Human Computer Interaction through Hand Gesture Using Deep Convolutional Neural Network',
    authors: ['Md. Milon Islam', 'Md. Repon Islam', 'Md. Saiful Islam'],
    venue: 'SN Computer Science',
    year: '2020',
    link: null,
  },
]

export const skillGroups = [
  {
    title: 'Languages and Frameworks',
    skills: ['Java', 'Spring Boot', 'Vue.js 3', 'Django', 'Express.js', 'Flutter', 'C++', 'Python', 'Golang', 'Lua'],
  },
  {
    title: 'Databases and Messaging',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'ScyllaDB', 'Kafka'],
  },
  {
    title: 'Infrastructure and Protocols',
    skills: ['Docker', 'Kubernetes', 'Linux', 'Asterisk', 'SMPP', 'HTTP'],
  },
  {
    title: 'Machine Learning and Data',
    skills: [
      'Scikit-learn',
      'Pandas',
      'TensorFlow',
      'OpenCV',
      'NumPy',
      'Matplotlib',
      'NLP',
      'CNN',
      'Swarm Intelligence',
      'Genetic Algorithm',
    ],
  },
]

export const achievements = [
  {
    title: 'Open Source',
    details: ['Contributor to Apache Fineract and Java Design Patterns.'],
  },
  {
    title: 'Certifications',
    details: [
      'CCNAv7 Cisco Certified Network Associate with Letter of Merit.',
      'Google IT Support Professional.',
      'KodeKloud Certified Kubernetes Certification in progress.',
    ],
  },
  {
    title: 'Awards',
    details: [
      "Dean's Award criteria achieved in the last four semesters.",
      'ITEE Full Passer, 10th position.',
      'Cisco National Skill Competition final round.',
      'Intra KUET Programming Contest, 11th position.',
    ],
  },
  {
    title: 'Competitive Programming',
    details: ['Codeforces rating 1373 with 377+ solved problems.', 'CodeChef rating 1595 with global rank 231.'],
  },
]

export const education = {
  institution: 'Khulna University of Engineering & Technology',
  degree: 'B.Sc. Eng. in Computer Science Engineering',
  result: 'CGPA: 3.64',
  period: 'Feb 2017 - Mar 2022',
  location: 'Khulna, Bangladesh',
}
