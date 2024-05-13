import { Html } from "@react-three/drei";
import { Spinner } from "../../utils";

export const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    </Html>
  );
};
