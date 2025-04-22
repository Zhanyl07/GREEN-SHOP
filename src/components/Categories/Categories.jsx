import React, { useState } from 'react';
import "../Categories/Categories.scss";
import sale from "../../assets/svg/sale.svg"
import cart from "../../assets/svg/cart.svg"
import wishlist from "../../assets/svg/wishlist.svg"
import search from "../../assets/svg/search.svg"
import banner from "../../assets/image/banner.png"

function Categories() {
  const [maxPrice, setMaxPrice] = useState(1230);
  const minPrice = 39;

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= minPrice) {
      setMaxPrice(value);
    }
  };

  const handleFilter = () => {
    console.log(`Filtered: $${minPrice} – $${maxPrice}`);
  };

  return (

    <div className='categories container'>

      <div className='category'>
            <div className='category-plants'>
              <h2>Categories</h2>
              <div>
                <ul>
                  <li>House Plants</li>
                  <li>House Plants</li>
                  <li>House Plants</li>
                  <li>House Plants</li>
                  <li>House Plants</li>
                  <li>House Plants</li>
                  <li>House Plants</li>
                  <li>House Plants</li>
                </ul>
              </div>

              <div className="price-filter">
                <h3>Price Range</h3>
                <div className="slider-wrapper">
                  <input
                    type="range"
                    min={minPrice}
                    max={2000}
                    value={maxPrice}
                    onChange={handlePriceChange}
                  />
                </div>
                <div className="range-values">
                  Price: <span>${minPrice}</span> <span>-</span> <span>${maxPrice}</span>
                </div>
                <button className="filter-btn" onClick={handleFilter}>Filter</button>
              </div>

              <div className='size'>
                  <h2>Size</h2>
                  <div>
                      <ul>
                          <li>Small</li>
                          <li>Medium</li>
                          <li>Large</li>
                      </ul>
                  </div>
              </div>

              <div className='sale-img'>
                  <img src={sale} alt="" />
              </div>
            </div>

            <div className='all-plants'>
              <div className='top-plants'>
                  <div>
                      <ul>
                          <li>All Plants</li>
                          <li>New Arrivals</li>
                          <li>Sale</li>
                      </ul>
                  </div>
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
              
              <div className='bottom-plants'>
                  <div className='box'>
                      <div className='top-card'>
                          <div className='discount'>
                            <h3>13% OFF</h3>
                          </div>
                          <div className='box-img'>
                            <img src={banner} alt="" />
                          </div>
                          <div className='add'>
                              <img src={cart} alt="" />
                              <img src={wishlist} alt="" />
                              <img src={search} alt="" />
                          </div>
                      </div>
                      <div className='bottom-card'>
                          <div>
                            <h3>Barberton Daisy</h3>
                          </div>
                          <div className='price'>
                              <b>$119.00</b>
                              <del>$229.00</del>
                          </div>
                      </div>
                  </div>
              </div>
            </div>

      </div>

      <div class="pagination">
        <button class="page active">1</button>
        <button class="page">2</button>
        <button class="page">3</button>
        <button class="page">4</button>
        <button class="page">&gt;</button>
      </div>
        
    </div>
    
  );
}

export default Categories;
