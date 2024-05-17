import { Image } from "../../utils";
import { ProjectLinks } from "./ProjectLinks";

export const ProjectImage = ({ to, src, alt }) => (
  <ProjectLinks to={to}>
    <Image src={src} alt={alt} className=" object-cover rounded-md my-4" />
  </ProjectLinks>
);
