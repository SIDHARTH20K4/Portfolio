import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";

type TContribution = {
  repo: string;
  title: string;
  status: "merged" | "in-review";
  link: string;
};

const contributions: TContribution[] = [
  {
    repo: "bip451/ddust",
    title: "Dust consolidation fix — PR #46",
    status: "merged",
    link: "https://github.com/bip451/ddust/pull/46",
  },
  {
    repo: "bip451/ddust",
    title: "Dust consolidation improvement — PR #49",
    status: "merged",
    link: "https://github.com/bip451/ddust/pull/49",
  },
  {
    repo: "Ride-The-Lightning/RTL",
    title: "Contribution to RTL — PR #1609",
    status: "merged",
    link: "https://github.com/Ride-The-Lightning/RTL/pull/1609",
  },
  {
    repo: "easydweb/sdk-implementations",
    title: "SDK implementation — PR #27",
    status: "merged",
    link: "https://github.com/easydweb/sdk-implementations/pull/27",
  },
  {
    repo: "matrix-org/matrix-rust-sdk",
    title: "Contribution to matrix-rust-sdk",
    status: "in-review",
    link: "https://github.com/matrix-org/matrix-rust-sdk/pull/6712",
  },
];

const ContributionRow: React.FC<{ index: number } & TContribution> = ({
  index,
  repo,
  title,
  status,
  link,
}) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noreferrer"
    variants={fadeIn("up", "spring", index * 0.15, 0.5)}
    className="bg-tertiary group flex items-center justify-between rounded-xl px-6 py-4 transition-all duration-300 hover:translate-x-1 hover:bg-[#232631]"
  >
    <div className="flex items-center gap-4">
      <span
        className={`h-3 w-3 flex-shrink-0 rounded-full ${
          status === "merged" ? "bg-[#00d1b2]" : "bg-[#f7b731]"
        }`}
      />
      <div>
        <p className="text-[15px] font-semibold text-white">{title}</p>
        <p className="text-secondary text-[13px]">{repo}</p>
      </div>
    </div>
    <span
      className={`text-[12px] font-medium uppercase tracking-wide ${
        status === "merged" ? "text-[#00d1b2]" : "text-[#f7b731]"
      }`}
    >
      {status === "merged" ? "Merged" : "In review"}
    </span>
  </motion.a>
);

const OpenSource = () => {
  return (
    <>
      <Header useMotion={true} p="Contributing back" h2="Open Source." />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        A log of pull requests I've shipped across Bitcoin and infrastructure
        projects — from dust consolidation tooling to Lightning node
        management.
      </motion.p>

      <div className="mt-10 flex flex-col gap-4">
        {contributions.map((contribution, index) => (
          <ContributionRow
            key={contribution.link}
            index={index}
            {...contribution}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(OpenSource, "opensource");