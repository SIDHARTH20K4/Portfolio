import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";

type TCredential = {
  title: string;
  issuer: string;
  link: string;
  rotation: number;
};

const credentials: TCredential[] = [
  {
    title: "Solana Security Auditing",
    issuer: "Rektoff",
    link: "https://drive.google.com/file/d/1mDY28STpVqPHmSfFqZhSN_Y4sR1EeyHa/view",
    rotation: -6,
  },
  {
    title: "Bitcoin Protocol Development",
    issuer: "Bitshala",
    link: "https://drive.google.com/file/d/1CHPCSHm1egvay2nNjD0dnGwXgjp3wiVh/view",
    rotation: 4,
  },
  {
    title: "AWS Mastery",
    issuer: "AWS",
    link: "https://drive.google.com/file/d/1mIk0c1fTUyLT29VR0KRMfc6jScMMRGQb/view",
    rotation: -3,
  },
  {
    title: "Security & Compliance",
    issuer: "Microsoft",
    link: "https://drive.google.com/file/d/1mBb7t_50wbRYr-vj_bDUNG6W5dft2W2s/view",
    rotation: 7,
  },
  {
    title: "Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    link: "https://drive.google.com/file/d/14nNJej2mvYPKb8ou0xl9eydLvWtT75D4/view",
    rotation: -5,
  },
];

type StampCardProps = {
  index: number;
} & TCredential;

const StampCard = (props: StampCardProps) => {
  const { index, title, issuer, link, rotation } = props;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.12, 0.6)}
      style={{ rotate: hovered ? 0 : rotation }}
      className="transition-transform duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        glareEnable
        glareColor="#915EFF"
        glareMaxOpacity={0.2}
      >
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="bg-tertiary relative flex h-[170px] w-[170px] flex-col items-center justify-center rounded-full border-4 border-dashed border-[#915EFF]/60 p-6 text-center shadow-[0_0_25px_-5px_rgba(145,94,255,0.5)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#915EFF"
            strokeWidth="1.5"
            className="mb-2 h-7 w-7"
          >
            <path d="M12 15a5 5 0 100-10 5 5 0 000 10z" />
            <path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" />
          </svg>
          <p className="text-[12px] font-bold leading-tight text-white">
            {title}
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-widest text-[#915EFF]">
            {issuer}
          </p>
        </a>
      </Tilt>
    </motion.div>
  );
};

const Credentials = () => {
  return (
    <>
      <Header useMotion={true} p="Verified learning" h2="Credentials." />

      <div className="mt-14 flex flex-wrap justify-center gap-8">
        {credentials.map((credential, index) => (
          <StampCard key={credential.title} index={index} {...credential} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Credentials, "credentials");