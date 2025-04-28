import React, { useState } from "react";
import "./ShopCom.scss";
import { Link } from "react-router-dom";

import shopgreen from "../../assets/image/shopgreen.png";
import shopgreen2 from "../../assets/image/shopgreen2.png";
import shopgreen3 from "../../assets/image/shopgreen3.png";
import star from "../../assets/svg/star.svg";
import graystar from "../../assets/svg/graystar.svg";
import heart from "../../assets/svg/heart.svg";
import search from "../../assets/svg/search.svg";
import green from "../../assets/image/g.png";
import email from "../../assets/svg/shopemail.svg";
import facebook from "../../assets/svg/shopfacebook.svg";
import twitter from "../../assets/svg/shoptwitter.svg";
import linkedin from "../../assets/svg/shoplinkedin.svg";
import tr from "../../assets/image/tr.png";
import tr2 from "../../assets/image/tr2.png";
import tr3 from "../../assets/image/tr3.png";
import tr4 from "../../assets/image/tr4.png";

import img1 from "../../assets/image/img1.png";
import img2 from "../../assets/image/img2.png";
import img3 from "../../assets/image/img3.png";
import img4 from "../../assets/image/img4.png";
import aloe from "../../assets/image/aloe.png";

function ShopCom() {
  const [mainImage, setMainImage] = useState(shopgreen);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleBuyNow = () => {
    alert(`Buying ${quantity} item(s) of size ${selectedSize}`);
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) of size ${selectedSize} to cart`);
  };

  return (
    <div className="shop">
      <div className="home-shop">
        <Link className="shophome" to={"/"}>
          Home
        </Link>
        /
        <Link className="shopshop" to={"/shop"}>
          Shop
        </Link>
      </div>

      <div className="shop-product">
        <div className="shop-img">
          <div className="shop-search">
            <img src={search} alt="search" />
          </div>
          <div className="shop-flover">
            <div className="flover1">
              {[tr4, tr, tr2, tr3].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx}`}
                  onClick={() => handleImageClick(img)}
                />
              ))}
            </div>
            <div className="flover2">
              <img src={mainImage} alt="Main Product" />
            </div>
          </div>
        </div>

        <div className="shop-daisy">
          <div className="daisy-text">
            <h2>Barberton Daisy</h2>
            <div className="daisy-price">
              <p>$119.00</p>
              <div className="stars">
                {[...Array(4)].map((_, i) => (
                  <img key={i} src={star} alt="star" />
                ))}
                <img src={graystar} alt="gray star" />
                <span>19 Customer Review</span>
              </div>
            </div>
          </div>

          <div className="shop-border"></div>

          <div className="short">
            <h3>Short Description:</h3>
            <p>
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground.
            </p>
          </div>

          <div className="shop-size">
            <div className="size">
              <p>Size:</p>
              <div className="size-img">
                {["S", "M", "L", "XL"].map((size) => (
                  <p
                    key={size}
                    className={selectedSize === size ? "selected" : ""}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </p>
                ))}
              </div>
            </div>

            <div className="shop-button">
              <div className="minus-btn">
                <button onClick={handleDecrease}>-</button>
                <p>{quantity}</p>
                <button onClick={handleIncrease}>+</button>
              </div>

              <div className="buy-btn">
                <button onClick={handleBuyNow}>BUY NOW</button>
                <button onClick={handleAddToCart}>ADD TO CART</button>
              </div>

              <div className="wish-btn">
                <Link to={"/wishlist"}>
                  <button>
                    <img src={heart} alt="wishlist" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="shop-sku">
            <div className="sku">
              <p>SKU:</p>
              <span>1995751877966</span>
            </div>
            <div className="sku">
              <p>Categories:</p>
              <span> Potter Plants</span>
            </div>
            <div className="sku">
              <p>Tags:</p>
              <span> Home, Garden, Plants</span>
            </div>

            <div className="share">
              <p>Share this product:</p>
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={linkedin} alt="linkedin" />
              <img src={email} alt="email" />
            </div>
          </div>
        </div>
      </div>

      {/* Описание продукта и связанные товары оставлю без изменений, у тебя там все нормально */}
      <div className="description">
        <div className="des-link">
          <Link className="des-product" to={"/shop"}>
            Product Description
          </Link>
          <Link className="des-reviews" to={"/revies"}>
            Reviews (19)
          </Link>
        </div>
        <div className="line"></div>

        <div className="des-lorem">
          <p>
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla augue nec est tristique auctor. Donec non est at libero
            vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
            Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
          </p>
        </div>

        <div className="des-lorem">
          <p>
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
            sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
            Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
            vulputate, sapien libero hendrerit est, sed commodo augue nisi non
            neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in
            accumsan elit odio quis mi. Cras neque metus, consequat et blandit
            et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet
            ligula euismod eget. The ceramic cylinder planters come with a
            wooden stand to help elevate your plants off the ground.
          </p>
        </div>

        <div className="living">
          <h4>Living Room:</h4>
          <p>
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="living">
          <h4>Dining Room:</h4>
          <p>
            The benefits of houseplants are endless. In addition to cleaning the
            air of harmful toxins, they can help to improve your mood, reduce
            stress and provide you with better sleep. Fill every room of your
            home with houseplants and their restorative qualities will improve
            your life.
          </p>
        </div>

        <div className="living">
          <h4>Office:</h4>
          <p>
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <div className="releted">
        <h3>Releted Products</h3>
        <div className="line"></div>

        <div className="oll">
            <div className="rel-product">
              <img src={green} alt="" />
              
              
              <div className="rel-text">
                <p>Beach Spider Lily</p>
                <span>$129.00</span>
              </div>
            </div>

            <div className="rel-product">
              <img src={img1} alt="" />
              
              
              <div className="rel-text">
                <p>Beach Spider Lily</p>
                <span>$129.00</span>
              </div>
            </div>

            <div className="rel-product">
              <img src={img2} alt="" />
              
              
              <div className="rel-text">
                <p>Beach Spider Lily</p>
                <span>$129.00</span>
              </div>
            </div>

            <div className="rel-product">
              <img src={img3} alt="" />
              
              
              <div className="rel-text">
                <p>Beach Spider Lily</p>
                <span>$129.00</span>
              </div>
            </div>

            <div className="rel-product">
              <img src={img4} alt="" />
              
              
              <div className="rel-text">
                <p>Beach Spider Lily</p>
                <span>$129.00</span>
              </div>
            </div>

            <div className="rel-product">
              <img src={aloe} alt="" />
              
              
              <div className="rel-text">
                <p>Beach Spider Lily</p>
                <span>$129.00</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCom;
