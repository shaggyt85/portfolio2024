import { ExperiencesList } from "./ExperiencesList";
import { Experiences } from "../../../constants/Experiences";
export const ExperienceSection = () => (
  <div className="py-16">
    <h3 className="subhead-text">Work Experience</h3>
    <div className="mt-5 flex flex-col gap-3 text-slate-500">
      <p>
        I&apos;ve worked with all sort companies, leveling up my skills and
        teaming up with smart people. Here&apos;s the rundown:
      </p>
    </div>
    <div className="mt-12 flex">
      <ExperiencesList experiences={Experiences} />
    </div>
  </div>
);
