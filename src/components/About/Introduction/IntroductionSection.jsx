import { ProfileImage } from "../ProfileImage";
import { IntroductionText } from "./IntroductionText";
import { IntroductionTexts } from "../../../constants/IntroductionTexts";

export const IntroductionSection = () => (
  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
    <ProfileImage />
    {IntroductionTexts.map((text, index) => (
      <IntroductionText key={index}>{text}</IntroductionText>
    ))}
  </div>
);
