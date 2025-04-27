import React from "react";
import { Link } from "react-router-dom";
import "./Blogs.css"; // create a separate style file

const blogPosts = [
  {
    id: 1,
    title: "How to Care for Houseplants",
    description: "10 simple tips for those just starting their journey into the world of indoor plants.",
    image: "https://i.pinimg.com/736x/35/1a/23/351a231c37027b9ba6fa59d8d6b730b4.jpg",
  },
  {
    id: 2,
    title: "Best Plants for Air Purification",
    description: "Learn which plants will make your home cleaner and cozier.",
    image: "https://i.pinimg.com/736x/7b/0e/df/7b0edf59b616595578cbe4080209c0ff.jpg",
  },
  {
    id: 3,
    title: "How to Choose the Perfect Plant as a Gift",
    description: "A guide to choosing the right plant for any occasion.",
    image: "https://i.pinimg.com/736x/4e/0e/41/4e0e41a2f51913e3a8a41502cb5cb704.jpg",
  },
];

const Blogs = () => {
  return (
    <div className="blogs container">
      <h1>Our Blog</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <Link to={`/blog/${post.id}`} className="read-more">
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
