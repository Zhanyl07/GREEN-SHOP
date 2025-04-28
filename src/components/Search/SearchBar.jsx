import React, { useState, useEffect } from "react";
import "./SearchBar.scss";

const SearchBar = ({ products = [], setFilteredProducts }) => { // дефолтное значение []
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (products.length) { // Проверка на наличие товаров
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products, setFilteredProducts]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search plants..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;