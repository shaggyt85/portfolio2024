import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../firebase.config";

// Función para obtener todos los documentos de la colección "Project"

export const getAllDatas = async () => {
  try {
    const querySnapshot = await getDocs(collection(firestore, "Project"));
    const data = querySnapshot.docs.map((doc) => doc.data());
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};

// Función para probar la conexión a Firebase
export const testFirebaseConnection = async () => {
  try {
    // Intenta obtener algunos documentos de tu base de datos
    const docSnap = await getDocs(collection(firestore, "projects"));

    // Si la operación es exitosa, imprime los documentos en la consola
    console.log("Connected to Firebase successfully. Documents:", docSnap.docs);
  } catch (error) {
    // Si ocurre un error, imprímelo en la consola
    console.error("Failed to connect to Firebase:", error);
  }
};
