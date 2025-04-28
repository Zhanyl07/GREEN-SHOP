import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../assets/image/banner.png';
import './Banner.scss';
import { Link } from 'react-router-dom';
import img1 from "../../assets/image/img1.png";

function Banner() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <div className="container">
      <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
        <Carousel.Item>
          <div className="banner">
            <div className="banner-text">
              <p>Welcome to GreenShop</p>
              <div className="big-text">
                <span>Let’s Make a Better <p>Planet</p></span>
              </div>
              <h5>
                We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!
              </h5>
              <div className="btn-banner">
                <Link to={'/shop'}>
                <button>SHOP NOW</button>
                </Link>
              </div>
            </div>
            <div className="banner-img">
              <div className="mini-img">
                <img src={banner1} alt="" />
              </div>
              <div className="big-img">
                <img src={banner1} alt="" />
              </div>
            </div>
            <div className="dots">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`dot ${index === i ? 'active' : ''}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
        <div className="banner">
            <div className="banner-text">
              <p>Welcome to GreenShop</p>
              <div className="big-text">
                <span>Let’s Make a Better <p>Planet</p></span>
              </div>
              <h5>
                We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!
              </h5>
              <div className="btn-banner">
                <Link to={'/shop'}>
                <button>SHOP NOW</button>
                </Link>
                
              </div>
            </div>
            <div className="banner-img">
              <div className="mini-img">
                <img src={banner1} alt="" />
              </div>
              <div className="big-img">
                <img src={banner1} alt="" />
              </div>
            </div>
            <div className="dots">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`dot ${index === i ? 'active' : ''}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
        <div className="banner">
            <div className="banner-text">
              <p>Welcome to GreenShop</p>
              <div className="big-text">
                <span>Let’s Make a Better <p>Planet</p></span>
              </div>
              <h5>
                We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!
              </h5>
              <div className="btn-banner">
                <Link to={'/shop'}>
                <button>SHOP NOW</button>
                </Link>
              </div>
            </div>
            <div className="banner-img">
              <div className="mini-img">
                <img src={banner1} alt="" />
              </div>
              <div className="big-img">
                <img src={banner1} alt="" />
              </div>
            </div>
            <div className="dots">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`dot ${index === i ? 'active' : ''}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
