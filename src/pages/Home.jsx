import React from 'react'
import Banner from '../components/Banner/Banner'
import Categories from '../components/Categories/Categories'
import About from '../components/About/About'
import Post from '../components/Post/Post'

function Home() {
  return (
    <div>
      <Banner/>
      <Categories/>
      <About/>
      <Post/>
    </div>
  )
}

export default Home
