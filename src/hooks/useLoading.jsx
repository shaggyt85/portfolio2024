import { useDocumentReadyState } from "./LoadingHooks/useDocumentReadyState";
import { useWindowLoadState } from "./LoadingHooks/useWindowLoadState";
export const useLoading = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const readyState = useDocumentReadyState();
  const loaded = useWindowLoadState();
  const loading = isMobile ? readyState !== "complete" : !loaded;

  return loading;
};
