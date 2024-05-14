import arrow from "../../assets/icons/arrow.svg";
import { LinkWrapper } from "../../utils";
export const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-ml text-center">{text}</p>
    <LinkWrapper to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="arrow" />
    </LinkWrapper>
  </div>
);
