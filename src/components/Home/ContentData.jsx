// contentData.js
import { InfoBox } from "./InfoBox";

export const ContentData = [
  {
    id: 1,
    component: (
      <div className="flex flex-col  gap-64  lg:gap-96 xl:gap-[28rem] ">
        <h1 className="sm:text-ml sm:leading-snug text-center neo-brutalism-blue py-2 px-4 text-white mx-5">
          Hi, I am <span className="font-bold">Robert Medina</span> 👋
          <br />A Front-End Developer.
        </h1>
        <h2 className="sm:text-ml sm:leading-snug text-center neo-brutalism-blue py-2 px-4 text-white mx-5">
          You can navigate using the arrow keys{" "}
          <span className="font-bold">👈 👉</span>
          <br />
          by swiping the screen to the <span className="font-bold"> 👈 👉</span>
        </h2>
      </div>
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
  {
    id: 5,
    component: (
      <h2 className="sm:text-ml sm:leading-snug text-center neo-brutalism-blue py-2 px-4 text-white mx-5">
        You can navigate using the arrow keys{" "}
        <span className="font-bold">👈 👉</span> 👋
        <br />
        by swiping the screen to the <span className="font-bold"> 👈 👉</span>
      </h2>
    ),
  },
];
