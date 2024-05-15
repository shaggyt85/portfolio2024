import { about_image } from "../../assets/images";
import { Image } from "../../utils/Image";
export const ProfileImage = () => (
  <div className="w-full h-[420px] flex items-center justify-center">
    <div className="w-[275px] h-[340px] bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-md relative">
      <Image
        className="w-full h-full rounded-lg absolute -left-4 -top-4 object-cover drop-shadow-2xl"
        src={about_image}
        alt="photo_me"
      />
    </div>
  </div>
);
