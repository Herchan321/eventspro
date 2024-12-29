import React from "react";

const ServiceCard = ({ image, title }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-image" />
      <h3>{title}</h3>
    </div>
  );
};

export default ServiceCard;
