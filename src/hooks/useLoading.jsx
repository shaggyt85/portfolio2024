import { useEffect, useState } from "react";

export const useLoading = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };
    window.addEventListener("DOMContentLoaded", handleLoad);
    return () => window.removeEventListener("DOMContentLoaded", handleLoad);
  }, []);
  return loading;
};
