import { LinkWrapper } from "../../utils";
export const ProjectLinks = ({ to, children }) => (
  <LinkWrapper
    className={"flex justify-center"}
    to={to}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </LinkWrapper>
);
