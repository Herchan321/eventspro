import React from "react";
import { Link } from "react-router-dom";
import './blog.scss';

const Blog = () => {
  const tips = [
    {
      id: 1,
      title: "10 idées originales pour rendre votre mariage inoubliable",
      image: "marriage.jpeg",
    },
    {
      id: 2,
      title: "Comment rendre l'anniversaire de ton enfant inoubliable",
      image: "aniver.png",
    },
    {
      id: 3,
      title: "Choisir la meilleure salle pour votre événement",
      image: "beaa1054-salle_fetes.jpg",
    },
  ];

  return (
    <div className="blog">
      <h2>Blog Tips</h2>
      <div className="blog-container">
        {tips.map(tip => (
          <div key={tip.id} className="blog-item">
            <Link to={`/blog/${tip.id}`}>
              <img src={tip.image} alt={tip.title} />
              <h3>{tip.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;