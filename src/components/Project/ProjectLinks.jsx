import { LinkWrapper } from "../../utils";
export const ProjectLinks = ({ to, children }) => (
  <LinkWrapper to={to} target="_blank" rel="noopener noreferrer">
    {children}
  </LinkWrapper>
);
