import { useEffect, useState } from "react";
// funciona
// export const useLoading = () => {
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const handleLoad = () => {
//       setLoading(false);
//     };
//     window.addEventListener("load", handleLoad);
//     return () => window.removeEventListener("load", handleLoad);
//   }, []);
//   return loading;
// };
// experimental mobile
// export const useLoading = () => {
//   const [loading, setLoading] = useState(document.readyState !== "complete");
//   useEffect(() => {
//     if (document.readyState === "complete") {
//       setLoading(false);
//     } else {
//       const handleLoad = () => {
//         setLoading(false);
//       };
//       window.addEventListener("load", handleLoad);
//       return () => window.removeEventListener("load", handleLoad);
//     }
//   }, []);
//   return loading;
// };
export const useLoading = () => {
  const [loading, setLoading] = useState(document.readyState !== "complete");

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // Agregar un efecto para manejar cambios en el estado de carga en dispositivos móviles
  useEffect(() => {
    const handleStateChange = () => {
      if (document.readyState === "complete") {
        setLoading(false);
      }
    };

    document.addEventListener("readystatechange", handleStateChange);
    return () =>
      document.removeEventListener("readystatechange", handleStateChange);
  }, []);

  return loading;
};
