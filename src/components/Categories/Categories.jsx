import React, { useState, useEffect } from "react";
import "../Categories/Categories.scss";
import { useSelector, useDispatch } from "react-redux";
import { addWish, deleteWish } from "../../redux/Wish/WishSlice";
import { addCart, removeCart } from "../../redux/Cart/CartSlice";
import { Link } from "react-router-dom";
import sale from "../../assets/svg/sale.svg";
import cart from "../../assets/svg/cart.svg";
import wishlist from "../../assets/svg/wishlist.svg";
import wishlistFilled from "../../assets/svg/wishlist-filled.svg";
import search from "../../assets/svg/search.svg";
import productData from "../../data/products.json";

const Categories = () => {
  const dispatch = useDispatch();
  const { items: wishlistItems } = useSelector((state) => state.wishlist);
  const { ali: cartItems } = useSelector((state) => state.carts);

  const [products, setProducts] = useState([]);
  const [cartMessage, setCartMessage] = useState("");
  const [wishMessage, setWishMessage] = useState("");

  useEffect(() => {
    setProducts(productData);
  }, []);

  const isWishlisted = (productId) =>
    wishlistItems.some((item) => item.id === productId);
  const isInCart = (productId) =>
    cartItems.some((item) => item.id === productId);

  const addToCart = (product) => {
    if (!isInCart(product.id)) {
      dispatch(addCart(product));
      setCartMessage(`Товар "${product.name}" добавлен в корзину`);
      
      // Билдирүүнү 2 секунддан кийин жоюу
      setTimeout(() => {
        setCartMessage("");
      }, 2000);
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
      setWishMessage(`Товар "${product.name}" добавлен в изобранное`);

      // Билдирүүнү 2 секунддан кийин жоюу
      setTimeout(() => {
        setWishMessage("");
      }, 2000);
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

          <div className="price-filter">
            <h3>Price Range</h3>
            <div className="slider-wrapper">
              <input type="range" min={39} max={2000} />
            </div>
            <div className="range-values">
              Price: <span>$39</span> <span>-</span> <span>$1230</span>
            </div>
            <button className="filter-btn">Filter</button>
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
            <div className="sort-wrapper">
              <label htmlFor="sort-select">Sort by:</label>
              <select id="sort-select" className="sort-select">
                <option value="default">Default sorting</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          <div className="bottom-plants">
            {products.map((product) => (
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

      <div className="pagination">
        <Link to="/">
          <button className="page active">1</button>
        </Link>
        <Link to="/page2">
          <button className="page active">2</button>
        </Link>
        <Link to="/page3">
          <button className="page active">3</button>
        </Link>
        <Link to="/page4">
          <button className="page active">4</button>
        </Link>
        <button className="page">&gt;</button>
      </div>
    </div>
  );
};

export default Categories;
