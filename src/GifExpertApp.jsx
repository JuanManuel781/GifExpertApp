import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["Dragon Ball"]);

  const onAddCategory = (event) => {
    const existe = categorias.find((element) => element === event);
    if (existe) return;
    setCategorias([event, ...categorias]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      {/* Input Buscador */}
      <AddCategory
        //   setCategorias={setCategorias}
        onNewCategory={onAddCategory}
      />
      {/*  listado Gifs */}
      {categorias.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* gif item */}
    </>
  );
};

export default GifExpertApp;
