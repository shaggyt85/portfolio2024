import { useEffect, useState } from "react";
export const useDocumentReadyState = () => {
  const [readyState, setReadyState] = useState(document.readyState);

  useEffect(() => {
    const handleStateChange = () => {
      setReadyState(document.readyState);
    };

    document.addEventListener("readystatechange", handleStateChange);
    return () =>
      document.removeEventListener("readystatechange", handleStateChange);
  }, []);

  return readyState;
};
