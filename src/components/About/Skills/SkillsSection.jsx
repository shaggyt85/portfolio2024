import { SkillsList } from "./SkillsList";
import { Skills } from "../../../constants/Skills";

export const SkillsSection = () => (
  <div className="p-4 flex flex-col">
    <h3 className="subhead-text">My Skills</h3>
    <SkillsList skills={Skills} />
  </div>
);
