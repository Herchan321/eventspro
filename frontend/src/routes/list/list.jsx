import React, { useState } from 'react';
import { servicesData } from '../../lib/data';
import './list.scss';
import Map from '../../components/map/map';
import Card from '../../components/card/card';
import Filter from '../../components/filter/filter';
import "./list.scss";

function ListPage() {
  const [filteredData, setFilteredData] = useState(servicesData);

  const handleSearch = (searchParams) => {
    const results = servicesData.filter(service => 
      service.name.toLowerCase().includes(searchParams.toLowerCase())
    );    setFilteredData(results);
  };
  const handleCardClick = (item) => {
    console.log("Carte cliquée : ", item);
    alert(`Vous avez cliqué sur : ${item.name}`);
   
  };

  return (
    
    <div className="listPage">
      <Filter></Filter>
      <div className="resultsContainer">
      
        <div className="cardsContainer">
          
          {filteredData.length > 0 ? (
            filteredData.map(item => (
              <Card key={item.id} item={item} />
            ))
          ) : (
            <p>Aucun service trouvé.</p>
          )}
        </div>
        <div className="mapContainer">
          <Map items={filteredData} />
        </div>
      </div>
    </div>
  );
}

export default ListPage;