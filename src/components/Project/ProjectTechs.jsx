import { Text } from "../../utils";

export const ProjectTechs = ({ techs }) => (
  <Text className="text-lg text-gray-300">
    Technologies
    <span className="block text-sm text-gray-500">{techs}</span>
  </Text>
);
