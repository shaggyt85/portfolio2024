// contentData.js
import { InfoBox } from "./InfoBox";

export const ContentData = [
  {
    id: 1,
    component: (
      <h1 className="sm:text-ml sm:leading-snug text-center neo-brutalism-blue py-2 px-4 text-white mx-5">
        Hi, I am <span className="font-bold">Robert Medina</span> 👋
        <br />A Front-End Developer.
      </h1>
    ),
  },
  {
    id: 2,
    component: (
      <InfoBox
        text="Worked with many companies and picked up many skills along the way"
        link="/about"
        btnText="Learn more"
      />
    ),
  },
  {
    id: 3,
    component: (
      <InfoBox
        text="Led multiple projects to success over the years. Curious about the impact?"
        link="/projects"
        btnText="Visit my portfolio"
      />
    ),
  },
  {
    id: 4,
    component: (
      <InfoBox
        text="Need a project done or looking for a dev? I'm just a few keystrokes away"
        link="/contact"
        btnText="Let's talk"
      />
    ),
  },
];
