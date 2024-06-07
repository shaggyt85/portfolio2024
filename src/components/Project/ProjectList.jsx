import { ProjectItems } from "./ProjectItems";

export const ProjectList = ({ projects }) => (
  <>
    {[...projects]
      .sort((a, b) => b.id - a.id)
      .map((project) => (
        <ProjectItems key={project.id} project={project} />
      ))}
  </>
);
