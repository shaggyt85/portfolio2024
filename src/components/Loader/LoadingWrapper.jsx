import { Spinner } from "../../utils";
export const LoadingWrapper = ({ loading, children }) => {
  return loading ? <Spinner /> : children;
};
