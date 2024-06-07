import { UserInteractionMouse } from "./Interaction/TouchInteraction/UserInteractionMouse";
import { UserInteractionKeyboard } from "./Interaction/KeyboardInteraction/UserInteractionKeyboard";
import { StageSetter } from "./Interaction/RotationInteraction/StageSetter";
import { RotationHandler } from "./Interaction/RotationInteraction/RotationHandler";

export const UserInteraction = (props) => {
  return (
    <>
      <RotationHandler {...props} />
      <StageSetter {...props} />
      <UserInteractionMouse {...props} />
      <UserInteractionKeyboard {...props} />
    </>
  );
};
