import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  typescript,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  rust,
  solidity,
  bitcoin,
  solana,
  ligerGames,
  rektoff,
  bitshala,
  vaultis,
  fairpass,
  smartContract,
  solanaAudit,
  bitcoinDev,
  fullstack,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "work-showcase",
    title: "Projects",
  },
  {
    id: "opensource",
    title: "Open Source",
  },
  {
    id: "credentials",
    title: "Credentials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Smart Contract Developer",
    icon: smartContract,
  },
  {
    title: "Solana Security Auditor",
    icon: solanaAudit,
  },
  {
    title: "Bitcoin Protocol Developer",
    icon: bitcoinDev,
  },
  {
    title: "Full Stack Blockchain Developer",
    icon: fullstack,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Bitcoin Core",
    icon: bitcoin,
  },
  {
    name: "Solana",
    icon: solana,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Fullstack Blockchain Developer",
    companyName: "LigerGames",
    icon: ligerGames,
    iconBg: "#383E56",
    date: "March 2025 - August 2025",
    points: [
      "Developed and audited smart contracts for blockchain-based game mechanics.",
      "Built full-stack web2 features alongside the on-chain components, working across frontend and backend.",
      "Identified and fixed security vulnerabilities in smart contracts before deployment.",
      "Collaborated with the core team to ship blockchain game features end-to-end.",
    ],
  },
  {
    title: "Solana Security Auditor",
    companyName: "Rektoff",
    icon: rektoff,
    iconBg: "#E6DEDD",
    date: "2026",
    points: [
      "Selected 1 of 125 from over 4,000 applicants for Rektoff's Solana security auditing program.",
      "Studied Rust security fundamentals including use-after-free, data races, and memory safety issues.",
      "Audited Solana/Anchor programs, identifying vulnerabilities like missing ownership checks and account reinitialization bugs.",
      "Completed a capstone audit under NDA, plus additional published findings including an orientation asymmetry bug in a CLMM protocol.",
    ],
  },
  {
    title: "Bitcoin Protocol Developer",
    companyName: "Bitshala",
    icon: bitshala,
    iconBg: "#383E56",
    date: "2026",
    points: [
      "Completed the Bitshala Bitcoin Protocol Development cohort.",
      "Worked through Bitcoin Core RPC assignments in Rust, including multi-wallet client scoping and address network-checking patterns.",
      "Contributed to BIP451, a dust consolidation mechanism sweeping small UTXOs via OP_RETURN, with a merged PR.",
      "Completed the Bitshala Lightning cohort covering Lightning Network fundamentals.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Vaultis",
    description:
      "An ERC-4626 tokenized yield vault with inflation-attack protection, built as a portfolio piece exploring secure vault design patterns in Solidity.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "erc-4626",
        color: "green-text-gradient",
      },
      {
        name: "defi",
        color: "pink-text-gradient",
      },
    ],
    image: vaultis,
    sourceCodeLink: "https://github.com/SIDHARTH20K4/Vaultis",
    liveDemoLink: "https://vaultis-chi.vercel.app/",
  },
  {
    name: "FairPass",
    description:
      "A ZK-enabled event management dApp that lets users prove eligibility and attend events without revealing their identity, built with Semaphore.js for zero-knowledge proofs.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "zk",
        color: "green-text-gradient",
      },
      {
        name: "wagmi",
        color: "pink-text-gradient",
      },
    ],
    image: fairpass,
    sourceCodeLink: "https://github.com/SIDHARTH20K4/FairPass",
    liveDemoLink: "https://fairpass.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
