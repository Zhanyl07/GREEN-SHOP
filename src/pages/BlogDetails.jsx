import React from "react";
import { useParams, Link } from "react-router-dom";
import './style/BlockDetail.scss'
const blogPosts = [
  {
    id: 1,
    title: "Как ухаживать за домашними растениями",
    content: `Растения делают наш дом уютнее и чище. 
Вот 5 советов: 
1) Поливайте умеренно. 
2) Используйте правильную землю. 
3) Обеспечьте доступ к солнечному свету. 
4) Протирайте листья.
5) Пересаживайте раз в год.`,
    image: "/images/blog1.jpg",
  },
  {
    id: 2,
    title: "Лучшие растения для очищения воздуха",
    content: `Такие растения, как сансевиерия, спатифиллум и алоэ вера, помогают очищать воздух от токсинов. 
Разместите их в спальне или гостиной для лучшего эффекта.`,
    image: "/images/blog2.jpg",
  },
  {
    id: 3,
    title: "Как выбрать идеальное растение в подарок",
    content: `Выбирайте неприхотливые растения: суккуленты, кактусы или фикусы. 
Обратите внимание на освещенность в доме получателя подарка.`,
    image: "/images/blog3.jpg",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div className="not-found">Статья не найдена.</div>;
  }

  return (
    <div className="blog-details container">
      <Link to="/blogs" className="back-button">← Назад к блогу</Link>
      <div className="blog-header">
        <img src={post.image} alt={post.title} />
        <h1>{post.title}</h1>
      </div>
      <div className="blog-content">
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
