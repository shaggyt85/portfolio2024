import { ContentData } from "./ContentData";

export const HomeInfo = ({ currentStage }) => {
  const content = ContentData.find((content) => content.id === currentStage);
  return content ? content.component : null;
};
