import React from 'react'
import "../Post/Post.scss"
import { Link } from 'react-router-dom'

import post from "../../assets/image/post.png"

function Post() {
  return (
    <div className='post container'>

      <div className='top-post'>
        <h1>Our Blog Posts</h1>
        <p>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
      </div>

      <div className='bottom-post'>
        <div className='post-img'>
            <img src={post} alt="" />
        </div>
        <div className='post-texts'>
            <div className='span'>
                <span>September 12</span> | <span>Read in 6 minutes</span>
            </div>
            <h2>Cactus & Succulent Care Tips</h2>
            <p>Cacti are succulents are easy care plants for any home or patio. </p>
            <Link> Read More &#8594; </Link>
        </div>
      </div>
      
    </div>
  )
}

export default Post
