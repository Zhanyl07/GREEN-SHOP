import React from "react";
import { useParams, Link } from "react-router-dom";
import './style/BlockDetail.scss';

const blogPosts = [
  {
    id: 1,
    title: "How to Care for Houseplants",

    content1: `Plants make our homes cozier and cleaner`,
    content2: '1) Water moderately.',
    content3: "2) Use the right soil.",
    content4: "3) Ensure access to sunlight.",
    content5: "4) Wipe the leaves. ",
    content6: "5) Repot once a year.",
    image: "https://i.pinimg.com/736x/35/1a/23/351a231c37027b9ba6fa59d8d6b730b4.jpg",
  },
  {
    id: 2,
    title: "Best Plants for Air Purification",
    content: `Plants like snake plant, peace lily, and aloe vera help clean the air from toxins. 
Place them in your bedroom or living room for the best effect.`,
    image: "https://i.pinimg.com/736x/7b/0e/df/7b0edf59b616595578cbe4080209c0ff.jpg",
  },
  {
    id: 3,
    title: "How to Choose the Perfect Plant as a Gift",
    content: `Choose low-maintenance plants: succulents, cacti, or ficuses. 
Consider the light conditions in the recipient’s home.`,
    image: "https://i.pinimg.com/736x/4e/0e/41/4e0e41a2f51913e3a8a41502cb5cb704.jpg",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div className="not-found">Article not found.</div>;
  }

  return (
    <div className="blog-details container">
      <Link to="/blogs" className="back-button">← Back to Blog</Link>
      <div className="blog-header">
        <img src={post.image} alt={post.title} />
        <h1>{post.title}</h1>
      </div>
      <div className="blog-content">
        <div className="blog-content1">
        <p>{post.content1}</p>
        <span>{post.content2}</span>
        <span>{post.content3}</span>
        <span>{post.content4}</span>
        <span>{post.content5}</span>
        <span>{post.content6}</span>

        </div>
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
