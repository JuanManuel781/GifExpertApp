import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onsubmit = (event) => {
    event.preventDefault();
    //setCategorias([...categorias, inputValue]);
    if (inputValue.trim().length <= 1) return;
    //setCategorias((categories) => [...categories, inputValue]);

    onNewCategory(inputValue.trim());
    setInputValue("");
  };
  return (
    <form onSubmit={onsubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        onChange={onInputChange}
        value={inputValue}
      />
    </form>
  );
};

export default AddCategory;
