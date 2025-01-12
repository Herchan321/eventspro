import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./servicesection.scss"; // SCSS stylisé

const ServicesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const services = [
    {
      id: 1,
      title: "Event Venues Rental",
      category: "Business Event",
      image: "rental.jpg",
    },
    {
      id: 2,
      title: "Event Catering",
      category: "Wedding",
      image: "Soutenance.jpg",
    },
    {
      id: 3,
      title: "Event Agencies",
      category: "Conference",
      image: "image.png",
    },
    {
      id: 4,
      title: "Online Event Management",
      category: "Online Events",
      image: "event.png",
    },
  ];

  // Filtrer les services par catégorie
  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter(service => service.category === selectedCategory);

  return (
    <div className="services-container">
      <h1>Getting Started</h1>
      <div className="categories">
        {["Business Event", "Wedding", "Conference", "Online Events", "All"].map(
          category => (
            <span
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </span>
          )
        )}
      </div>
      <div className="cards-container">
        {filteredServices.map(service => (
          <div className="card" key={service.id}>
            <Link to={`/service/${service.id}`}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
