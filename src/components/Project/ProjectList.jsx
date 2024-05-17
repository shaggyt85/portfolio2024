import { ProjectItems } from "./ProjectItems";

export const ProjectList = ({ projects }) => (
  <>
    {projects.map((project, index) => (
      <ProjectItems key={index} project={project} />
    ))}
  </>
);
