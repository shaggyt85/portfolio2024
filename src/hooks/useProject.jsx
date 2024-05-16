import { useEffect, useState } from "react";
import { getAllDatas } from "../utils/firebase/FirebaseFunction";

export const useProject = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllDatas();
      setData(result);
    };

    fetchData();
  }, []);
  return data;
};
