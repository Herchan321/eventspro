import React from 'react';
import { useNavigate } from 'react-router-dom';
import './card.scss'; 

const Card = ({ item }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/details/${item.id}`); // Redirection vers la page de détails
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="imageContainer">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="textContainer">
        <h3 className="title">{item.name}</h3>
        <p className="category">{item.category}</p>
        <div className="address">{item.location}</div>
        <p className="description">{item.description}</p>
        <div className="priceRange">{item.priceRange}</div>
        <div className="ratings">
          ⭐ {item.ratings} ({item.reviews} avis)
        </div>
      </div>
    </div>
  );
};

export default Card;
