import { motion } from "framer-motion";

import { socials } from "../../constants/socials";

const HeroSocialDock = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="absolute bottom-0 left-6 top-0 z-10 hidden flex-col items-center justify-center gap-5 sm:flex md:left-10"
    >
      {socials.map((social, index) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer"
          title={social.name}
          className="group relative flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
        >
          <img
            src={social.icon}
            alt={social.name}
            className="h-5 w-5 object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
          />
        </a>
      ))}
      <div className="mt-1 h-24 w-[1.5px] bg-gradient-to-b from-[#915EFF] to-transparent" />
    </motion.div>
  );
};

export default HeroSocialDock;