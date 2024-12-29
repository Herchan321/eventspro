import React, { useState } from 'react';
import './filter.scss';

const Filter = ({ onFilter }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [service, setService] = useState('');

    const handleFilterChange = () => {
        onFilter({ minPrice, maxPrice, service });
    };

    const handleSearch = () => {
        console.log('Recherche avec:', { minPrice, maxPrice, service });
    };
    
    return (
        <div className="filter-container">
           
            <div className="input-group">
            <label htmlFor="services">Choisissez un service:</label>
            <select
                id="services"
                value={service}
                onChange={(e) => {
                    setService(e.target.value);
                    handleFilterChange();
                }}
            >
                <option value="">Tous</option>
                <option value="catering">Traiteur</option>
                <option value="decor">Décorations</option>
                <option value="venue">Salle de Réception</option>
            </select>
                <label htmlFor="min-price">Prix Min:</label>
                <input
                    type="number"
                    id="min-price"
                    value={minPrice}
                    onChange={(e) => {
                        setMinPrice(e.target.value);
                        handleFilterChange();
                    }}
                    placeholder="200 MAD"
                />
                <label htmlFor="max-price">Prix Max:</label>
                <input
                    type="number"
                    id="max-price"
                    value={maxPrice}
                    onChange={(e) => {
                        setMaxPrice(e.target.value);
                        handleFilterChange();
                    }}
                    placeholder="1000 MAD"
                />
            </div>

            

            <div className="button-group">
                <button onClick={handleSearch}>Rechercher</button>
                <button onClick={() => { setMinPrice(''); setMaxPrice(''); setService(''); handleFilterChange(); }}>
                    Réinitialiser
                </button>
            </div>
        </div>
    );
};

export default Filter;