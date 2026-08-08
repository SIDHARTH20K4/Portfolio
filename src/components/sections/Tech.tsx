import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { useIsMobile } from "../../hooks/useIsMobile";

/** Flat, non-WebGL icon grid — used on mobile to avoid WebGL context limits */
const FlatTechGrid = () => (
  <div className="flex flex-row flex-wrap justify-center gap-6">
    {technologies.map((technology) => (
      <div
        key={technology.name}
        className="bg-tertiary flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-2xl p-3 transition-transform duration-300 active:scale-95"
      >
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-9 w-9 object-contain"
        />
      </div>
    ))}
  </div>
);

/** 3D rotating ball grid — desktop/tablet only */
const ThreeDTechGrid = () => (
  <div className="flex flex-row flex-wrap justify-center gap-10">
    {technologies.map((technology) => (
      <div className="h-28 w-28" key={technology.name}>
        <BallCanvas icon={technology.icon} />
      </div>
    ))}
  </div>
);

const Tech = () => {
  const isMobile = useIsMobile();

  return isMobile ? <FlatTechGrid /> : <ThreeDTechGrid />;
};

export default SectionWrapper(Tech, "tech");