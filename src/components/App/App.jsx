import { useLoading } from "../../hooks";
import { LoadingWrapper } from "../Loader/LoadingWrapper";
import { AppRoutes } from "./AppRoutes";

export const App = () => {
  const loading = useLoading();
  return (
    <main className="lg:h-[100vh]">
      <LoadingWrapper loading={loading}>
        <AppRoutes />
      </LoadingWrapper>
    </main>
  );
};
