import { useDocumentReadyState } from "./LoadingHooks/useDocumentReadyState";
import { useWindowLoadState } from "./LoadingHooks/useWindowLoadState";
// export const useLoading = () => {
//   const [loading, setLoading] = useState(document.readyState !== "complete");

//   useEffect(() => {
//     const handleLoad = () => {
//       setLoading(false);
//     };

//     if (document.readyState === "complete") {
//       setLoading(false);
//     } else {
//       window.addEventListener("load", handleLoad);
//       return () => window.removeEventListener("load", handleLoad);
//     }
//   }, []);

//   // Agregar un efecto para manejar cambios en el estado de carga en dispositivos móviles
//   useEffect(() => {
//     const handleStateChange = () => {
//       if (document.readyState === "complete") {
//         setLoading(false);
//       }
//     };

//     document.addEventListener("readystatechange", handleStateChange);
//     return () =>
//       document.removeEventListener("readystatechange", handleStateChange);
//   }, []);

//   return loading;
// };

export const useLoading = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const readyState = useDocumentReadyState();
  const loaded = useWindowLoadState();
  const loading = isMobile ? readyState !== "complete" : !loaded;

  return loading;
};
