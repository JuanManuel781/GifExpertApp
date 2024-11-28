import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  // hook personalizado
  const { imagenes, isLoading } = useFetchGifs(category);
  console.log({ isLoading });

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando....</h2>}
      <div className="card-grid">
        {imagenes.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
