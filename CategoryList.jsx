/*import React, { useState } from "react";

const CategoryForm = ({ addCategory }) => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = { name, brand };
    addCategory(newCategory);
    setName("");
    setBrand("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Brand:
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </label>
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryForm;*/