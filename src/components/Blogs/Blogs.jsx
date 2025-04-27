import React from "react";
import { Link } from "react-router-dom";
import "./Blogs.css"; // создашь стиль отдельно

const blogPosts = [
  {
    id: 1,
    title: "Как ухаживать за домашними растениями",
    description: "10 простых советов для тех, кто только начинает свой путь в мире комнатных растений.",
    image: "/images/blog1.jpg",
  },
  {
    id: 2,
    title: "Лучшие растения для очищения воздуха",
    description: "Узнайте, какие растения сделают ваш дом чище и уютнее.",
    image: "/images/blog2.jpg",
  },
  {
    id: 3,
    title: "Как выбрать идеальное растение в подарок",
    description: "Руководство по выбору растения для любого события.",
    image: "/images/blog3.jpg",
  },
];

const Blogs = () => {
  return (
    <div className="blogs container">
      <h1>Наш Блог</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <Link to={`/blog/${post.id}`} className="read-more">
                Читать дальше →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
