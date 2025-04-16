import React from 'react'
import "../About/About.scss"

import list from "../../assets/svg/list.svg"
import list2 from "../../assets/svg/list2.svg"
import banner from "../../assets/image/banner.png"

function About() {
  return (
    <div className='about-plants container'>

      <div className='find1'>
        <div className='images1'>
            <div className='list'>
              <img src={list} alt="" />
            </div>
            <div className='list2'>
              <img src={list2} alt="" />
            </div>
            <div className='banner-img'>
              <img src={banner} alt="" />
            </div>
        </div>
        <div className='about-flowers'>
            <h1>SUMMER CACTUS <br /> & SUCCULENTS</h1>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants</p>
            <button>
                Find More &#8594;
            </button>
        </div>
      </div>


      <div className='find1'>
        <div className='images1'>
            <div className='list'>
              <img src={list} alt="" />
            </div>
            <div className='list2'>
              <img src={list2} alt="" />
            </div>
            <div className='banner-img'>
              <img src={banner} alt="" />
            </div>
        </div>
        <div className='about-flowers'>
            <h1>SUMMER CACTUS <br /> & SUCCULENTS</h1>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants</p>
            <button>
                Find More &#8594;
            </button>
        </div>
      </div>

    </div>
  )
}

export default About
