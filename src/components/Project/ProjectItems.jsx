import { ProjectImage, ProjectTechs } from "../Project";
import { Text } from "../../utils";

export const ProjectItems = ({ project }) => {
  return (
    <section className="flex flex-wrap md:max-w-screen-xl items-center justify-evenly my-8 gap-4  p-4">
      <div className=" border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out ">
        <Text className="text-lg text-textBase font-medium uppercase">
          {project.name}
        </Text>
        <ProjectImage
          to={project.web}
          src={project.imageSrc}
          alt={project.name}
        />
        <div className="flex flex-l items-center justify-between">
          <ProjectTechs techs={project.techs} />
        </div>
      </div>
    </section>
  );
};
