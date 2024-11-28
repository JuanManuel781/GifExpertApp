import { useEffect, useState } from "react";
import { getFifs } from "../helpers/getGif";

export const useFetchGifs = (category) => {
  const [imagenes, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //Uso del use effect
  useEffect(() => {
    getFifs(category).then((newImages) => {
      setImages(newImages);
      setIsLoading(false);
    });
  }, []);
  return {
    imagenes: imagenes,
    isLoading: isLoading,
  };
};
