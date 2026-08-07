import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { config } from "../../constants/config";
import { ParticlesBackground } from "../canvas";
import { useTypewriter } from "../../hooks/useTypewriter";

const ROLES = [
  "Bitcoin Protocol Developer",
  "Solana Security Auditor",
  "Full Stack Blockchain Developer",
];

const Hero = () => {
  const typedRole = useTypewriter(ROLES, 70, 35, 1800);

  return (
    <section className="relative mx-auto flex h-screen w-full items-center overflow-hidden">
      <ParticlesBackground />

      <div
        className={`relative z-10 mx-auto flex w-full max-w-7xl flex-row items-center gap-5 ${styles.paddingX}`}
      >
        <div className="flex flex-col items-center justify-center self-stretch">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient w-1 flex-1" />
        </div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #915EFF, #00d1b2, #915EFF)",
                backgroundSize: "200% auto",
                animation: "hero-gradient-move 4s linear infinite",
              }}
            >
              {config.hero.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={`${styles.heroSubText} text-white-100 mt-2`}
          >
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 min-h-[32px] font-mono text-[16px] text-[#915EFF] sm:text-[20px]"
          >
            {typedRole}
            <span className="animate-pulse">|</span>
          </motion.p>
        </div>
      </div>

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>

      <style>
        {`
          @keyframes hero-gradient-move {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;