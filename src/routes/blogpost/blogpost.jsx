import React from 'react';
import './blogpost.scss';

const BlogPost = () => {
  return (
    <div className="blog-post">
      <h1>Un beau mariage </h1>
      <div className="post-meta">
        <p className="author">Par Auteur</p>
        <p className="date">Publié le 15 décembre 2024</p>
      </div>

      <div className="post-content">
        <p>
          Un mariage est un moment unique dans la vie de chacun, et ce mariage ne fait pas exception. Dans un cadre
          enchanteur, entouré d'amis et de famille, les mariés ont échangé leurs vœux, et la magie a opéré.
        </p>
        <img src="/i.png" alt="" className="main-image" />
        
        <p>
          Le cadre était parfait, la décoration sublime et l'atmosphère magique. Chaque détail était pensé pour rendre
          ce moment inoubliable.
        </p>
        <div className="image-gallery">
          <img src="/images.jpg" alt="Lieu de réception" className="gallery-image" />
          <img src="/m.jpg" alt="Ambiance de la fête" className="gallery-image" />
        </div>
        
        <p>
          En conclusion, cet événement restera gravé dans les mémoires comme un exemple parfait de l'amour et de la
          beauté d'un mariage.
        </p>
      </div>

      <div className="related-posts">
        <h3>Articles connexes</h3>
        <div className="related-item">
          <img src="/traiteur2.jpg" alt="Article Connexe 1" />
          <p>Les tendances des mariages en 2024</p>
        </div>
        <div className="related-item">
          <img src="/Mariage-marocain-1536x864.webp" alt="Article Connexe 2" />
          <p>Comment choisir le lieu parfait pour votre mariage</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
