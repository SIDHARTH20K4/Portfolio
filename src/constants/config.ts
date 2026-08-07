type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Sidharth — Portfolio",
    fullName: "Sidharth",
    email: "sidharth.120504@gmail.com", // replace with the one you want public
  },
  hero: {
    name: "Sidharth",
    p: ["I build on Bitcoin and Solana,", "and audit smart contracts for security"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a final-year CS student and CTO at Omely.ai, working across
      Bitcoin protocol development, Solana security auditing, and EVM/full-stack
      engineering. I completed the Bitshala Bitcoin Protocol Development cohort
      and Rektoff's Solana security auditing program, selected 1 of 125 from
      over 4,000 applicants. I care about protocol-level correctness and
      writing code that holds up under adversarial conditions.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `A mix of Bitcoin/Solana protocol work, smart contract security
      audits, and full-stack Web3 builds. Each project links to code and,
      where relevant, audit findings or writeups.`,
    },
  },
};