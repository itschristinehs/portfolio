export const palettes = {
  home: {
    bg: '#244092', panel: '#2c4aa0', text: '#f4ecdd',
    muted: 'rgba(244,236,221,0.72)', border: 'rgba(244,236,221,0.2)',
    accent: '#f2917c', sub: '#46c9b0',
  },
  about: {
    bg: '#efe6d4', panel: '#e6dbc4', text: '#26324f',
    muted: 'rgba(38,50,79,0.7)', border: 'rgba(38,50,79,0.16)',
    accent: '#c85a3c', sub: '#4f7ad1',
  },
  work: {
    bg: '#f6f3ec', panel: '#ece7db', text: '#1e2a44',
    muted: 'rgba(30,42,68,0.7)', border: 'rgba(30,42,68,0.16)',
    accent: '#2f6fe0', sub: '#c85a3c',
  },
  life: {
    bg: '#ecd7dc', panel: '#e3c8cf', text: '#3a2733',
    muted: 'rgba(58,39,51,0.72)', border: 'rgba(58,39,51,0.16)',
    accent: '#f2917c', sub: '#0c5346',
  },
  contact: {
    bg: '#1c1730', panel: '#261f42', text: '#f4ecdd',
    muted: 'rgba(244,236,221,0.72)', border: 'rgba(244,236,221,0.2)',
    accent: '#f2917c', sub: '#46c9b0',
  },
};

export const navDefs = [
  { key: 'home', label: 'Overview' },
  { key: 'about', label: 'About' },
  { key: 'work', label: 'Work' },
  { key: 'life', label: 'Life' },
  { key: 'contact', label: 'Contact' },
];

export const cardDefs = [
  { key: 'about', tag: 'Me', label: 'About', blurb: 'From medical imaging to robots that act in the world.' },
  { key: 'work', tag: 'Papers & builds', label: 'Work', blurb: 'Research on vision–language–action, plus the projects and tools I’ve built.' },
  { key: 'life', tag: 'Off the clock', label: 'Life', blurb: 'Film, writing, and the places that stayed with me.' },
  { key: 'contact', tag: 'Say hi', label: 'Contact', blurb: 'Email, GitHub, Scholar, LinkedIn, CV.' },
];

export const workTabDefs = [
  { key: 'research', label: 'Research' },
  { key: 'projects', label: 'Projects' },
];

export const lifeTabDefs = [
  { key: 'film', label: 'Film' },
  { key: 'writing', label: 'Writing' },
  { key: 'travel', label: 'Travel' },
];

export const publications = [
  { year: '2025', title: 'Anatomically-Focused Patches for Lightweight and Explainable Knee OA Grading', authors: 'Tzu-Tsen Hsieh*, Tien-En Chang*, Hervé Lombaert', venue: 'Under submission · IEEE Transactions on Biomedical Engineering (TBME)', links: [] },
  { year: '2025', title: 'AS²: Accelerating Diffusion Models for Low-Level Vision Tasks via Approximation Shortcut and Adaptive Scheduling', authors: 'Yu-Shan Tai, Tzu-Tsen Hsieh, Hsi-Chun Cheng, Qian-Hui Chen, Co Yong, Dai-Jie Wu, An-Yeu Andy Wu, Shao-Hua Sun', venue: 'Submitted · ICML 2025', links: [] },
  { year: '2024', title: 'Bipartite Soft Matching for Vision Transformer Training-Free Token Pruning on Dense Tasks', authors: 'Tzu-Tsen Hsieh, Oscar Chew', venue: 'Research intern project · ASUS', links: [] },
  { year: '2024', title: 'Low Frequency Vascular Analysis of Dual-mode Transcranial Brain Stimulation', authors: 'Tzu-Tsen Hsieh, Yung-Han Lee, Bao-Yu Hsieh, Hao-Li Liu', venue: 'Master’s thesis · 2024 IEEE UFFC · Oral presentation', links: [] },
];

export const projects = [
  { name: 'Feastforward', tag: 'Web · React · Spring Boot', desc: 'A platform to reduce food wastage by connecting surplus food with people who need it, built end-to-end with Scrum and DevOps practices.', href: '#' },
  { name: 'Memohub', tag: 'Web · React · OpenAI API', desc: 'Capture, connect, contemplate — a platform for tracking thoughts and assisting personal introspection, with AI-generated prompts.', href: '#' },
  { name: 'Yozicare', tag: 'Flutter · Mobile', desc: 'A mobile app supporting people with chronic kidney disease — CKD map, statistics, chatbot, and food composition analysis. Global Top 100, 2023 GDSC Solution Challenge.', href: '#' },
];

export const films = [
  { title: 'My first documentary film', role: 'Directed by Christine · Edited by Christine', year: '2025', desc: 'A short personal film. Drop the YouTube or Vimeo link here when it’s ready.', href: 'https://www.youtube.com/watch?v=ydMNk5UsWwU' },
];

export const posts = [
  { date: 'Coming soon', title: 'Why I finally made a personal site', excerpt: 'A short note on writing more, and thinking in public.', href: '#' },
  { date: 'Draft', title: 'What a vision–language–action model actually does', excerpt: 'An attempt to explain my research to a friend who isn’t in the field.', href: '#' },
];

export const places = [
  { name: 'Paris', note: 'French, cinema, long walks.' },
  { name: 'Somewhere next', note: 'Hoping to live in Europe or the US.' },
  { name: 'Add a place', note: 'Swap in your favorite trips.' },
];
