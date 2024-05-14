import { VerticalTimeline } from "react-vertical-timeline-component";
import { Experience } from "./Experience";
export const ExperiencesList = ({ experiences }) => (
  <VerticalTimeline>
    {experiences.map((experience) => (
      <Experience key={experience.company_name} experience={experience} />
    ))}
  </VerticalTimeline>
);
