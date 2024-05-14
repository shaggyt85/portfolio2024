import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Image } from "../../../utils/Image";
import { Text } from "../../../utils/Text";
export const Experience = ({ experience }) => (
  <VerticalTimelineElement
    key={experience.company_name}
    date={experience.date}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <Image
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    contentStyle={{
      borderBottom: "8px",
      borderStyle: "solid",
      borderBottomColor: experience.iconBg,
      boxShadow: "none",
    }}
  >
    <h3 className="text-black text-xl font-poppins">{experience.title}</h3>
    <Text
      className="text-black-500 font-medium font-base"
      style={{ margin: 0 }}
    >
      {experience.company_name}
    </Text>
    <Text className="text-black-500/50 text-sm" style={{ margin: 0 }}>
      {experience.country}
    </Text>
    <ul className="my-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-black-500/50 font-normal pl-1 text-sm"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);
