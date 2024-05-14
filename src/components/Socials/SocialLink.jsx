import { LinkContent } from "./LinkContent";

export const SocialLink = ({ name, link, iconUrl }) => (
  <a
    href={link}
    key={name}
    className=" flex flex-wrap items-center  content-center  flex-col  "
    target="_blank"
    rel="noreferrer"
  >
    <LinkContent name={name} iconUrl={iconUrl} />
  </a>
);
