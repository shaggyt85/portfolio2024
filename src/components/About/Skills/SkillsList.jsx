import { Skill } from "./Skill";
export const SkillsList = ({ skills }) => (
  <div className="mt-16 flex flex-wrap gap-8 ">
    {skills.map((skill, index) => (
      <Skill key={index} skill={skill} />
    ))}
  </div>
);
