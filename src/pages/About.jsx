import { Cta } from "../components";
import {
  SkillsSection,
  ExperienceSection,
  IntroductionSection,
} from "../components/About";
import "react-vertical-timeline-component/style.min.css";

export const About = () => {
  return (
    <section className=" max-container">
      <h1 className="head-text px-4">
        Hello, I&apos;m{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Robert Medina
        </span>{" "}
        👋
      </h1>
      <IntroductionSection />
      <SkillsSection />
      <ExperienceSection />
      <hr className="border-slate-200" />
      <Cta />
    </section>
  );
};
