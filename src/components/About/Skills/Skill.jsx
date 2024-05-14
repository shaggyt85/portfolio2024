import { Image } from "../../../utils/Image";
export const Skill = ({ skill }) => (
  <div className="block-container w-20 h-20">
    <div className="btn-back rounded-xl" />
    <div className="btn-front rounded-xl flex justify-center items-center">
      <Image
        src={skill.imageUrl}
        alt={skill.name}
        className="w-1/2 h-1/2 object-contain"
      />
    </div>
  </div>
);
