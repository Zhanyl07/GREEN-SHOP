import React, { useState, useEffect } from "react";
import "../Categories/Categories.scss";
import { useSelector, useDispatch } from "react-redux";
import { addWish, deleteWish } from "../../redux/Wish/WishSlice";
import { addCart, removeCart } from "../../redux/Cart/CartSlice";
import sale from "../../assets/svg/sale.svg";
import cart from "../../assets/svg/cart.svg";
import wishlist from "../../assets/svg/wishlist.svg";
import wishlistFilled from "../../assets/svg/wishlist-filled.svg";
import search from "../../assets/svg/search.svg";
import productData from "../../data/products.json";
import SearchBar from "../Search/SearchBar";
const Categories = () => {
  const dispatch = useDispatch();
  const { items: wishlistItems } = useSelector((state) => state.wishlist);
  const { ali: cartItems } = useSelector((state) => state.carts);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [selectedMin, setSelectedMin] = useState(0);
  const [selectedMax, setSelectedMax] = useState(0);
  const [cartMessage, setCartMessage] = useState("");
  const [wishMessage, setWishMessage] = useState("");

  useEffect(() => {
    setProducts(productData);
  }, []);

  // Установка цен после загрузки продуктов
  useEffect(() => {
    if (products.length) {
      const prices = products.map((p) => p.price);
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      setMinPrice(min);
      setMaxPrice(max);
      setSelectedMin(min);
      setSelectedMax(max);
      setFilteredProducts(productData); // показываем всё сначала
    }
  }, [products]);

  // Автофильтр по цене
  useEffect(() => {
    const result = products.filter(
      (product) => product.price >= selectedMin && product.price <= selectedMax
    );
    setFilteredProducts(result);
  }, [selectedMin, selectedMax, products]);

  const isWishlisted = (productId) =>
    wishlistItems.some((item) => item.id === productId);
  const isInCart = (productId) =>
    cartItems.some((item) => item.id === productId);

  const addToCart = (product) => {
    if (!isInCart(product.id)) {
      dispatch(addCart(product));
      setCartMessage(`Товар "${product.name}" добавлен в корзину`);
      setTimeout(() => setCartMessage(""), 2000);
    }
  };

  const removeFromCart = (productId) => {
    dispatch(removeCart(productId));
  };

  const toggleWishlist = (product) => {
    if (isWishlisted(product.id)) {
      dispatch(deleteWish(product.id));
    } else {
      dispatch(addWish(product));
      setWishMessage(`Товар "${product.name}" добавлен в избранное`);
      setTimeout(() => setWishMessage(""), 2000);
    }
  };

  return (
    <div className="categories container">
      <div className="category">
        <div className="category-plants">
          <h2>Categories</h2>
          <ul>
            <li>House Plants</li>
          </ul>

          {/* Фильтр по цене */}
          <div className="price-filter">
            <h3>Price Range</h3>
            <div className="slider-wrapper">
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={selectedMin}
                onChange={(e) => setSelectedMin(Number(e.target.value))}
              />
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={selectedMax}
                onChange={(e) => setSelectedMax(Number(e.target.value))}
              />
            </div>
            <div className="range-values">
              Price: <span>${selectedMin}</span> - <span>${selectedMax}</span>
            </div>
          </div>

          <div className="size">
            <h2>Size</h2>
            <ul>
              <li>Small</li>
              <li>Medium</li>
              <li>Large</li>
            </ul>
          </div>


<div className="sale-img">
            <img src={sale} alt="sale" />
          </div>
        </div>

        <div className="all-plants">
          <div className="top-plants">
            <ul>
              <li>All Plants</li>
              <li>New Arrivals</li>
              <li>Sale</li>
            </ul>
          </div>

          {/* Поиск */}
          <SearchBar products={products} setFilteredProducts={setFilteredProducts} />

          <div className="bottom-plants">
            {filteredProducts.map((product) => (
              <div className="box" key={product.id}>
                <div className="top-card">
                  <div className="discount">
                    <h3>13% OFF</h3>
                  </div>
                  <div className="box-img">
                    <img src={product.urlPhoto} alt={product.name} />
                  </div>
                  <div className="add">
                    <img
                      src={isInCart(product.id) ? cart : cart}
                      alt="cart"
                      onClick={() =>
                        isInCart(product.id)
                          ? removeFromCart(product.id)
                          : addToCart(product)
                      }
                    />
                    <img
                      src={isWishlisted(product.id) ? wishlistFilled : wishlist}
                      alt="wishlist"
                      onClick={() => toggleWishlist(product)}
                      style={{ cursor: "pointer" }}
                    />
                    <img src={search} alt="search" />
                  </div>
                </div>
                <div className="bottom-card">
                  <h3>{product.name}</h3>
                  <div className="price">
                    <b>${product.price}</b>
                    <del>${product.originalPrice}</del>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Билдирүүлөр */}
      {cartMessage && (
        <div className="cart-message">{cartMessage}</div>
      )}
      {wishMessage && (
        <div className="wish-message">{wishMessage}</div>
      )}

    </div>
  );
};

export default Categories;