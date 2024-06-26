import { SocialLink } from "./SocialLink";
import { DataSocialLinks } from "../../constants/DataSocialLinks";

export const Socials = () => (
  <div className="flex flex-col md:flex-1 md:flex-row items-center justify-center w-full flex-wrap gap-4 lg:gap-20 md:gap-8">
    {DataSocialLinks.map((link) => (
      <SocialLink {...link} key={link.name} />
    ))}
  </div>
);
