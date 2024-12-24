import React, { useState } from 'react';
import './searchbar.scss';
const SearchBar = ({ onSearch }) => {
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        onSearch(category, location);
    };

    return (
        <div className="search-bar">
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Choisissez une catégorie</option>
                <option value="catering">Traiteur</option>
                <option value="photography">Photographie</option>
                <option value="venue">Lieu</option>
                {/* Ajoutez d'autres catégories ici */}
            </select>
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="">Localisation</option>
                <option value="rabat">Rabat</option>
                <option value="casa">Casa</option>
                <option value="marrakech">Marrakech</option>
                {/* Ajoutez d'autres localisations ici */}
            </select>
            <button onClick={handleSearch}>Recherche</button>
        </div>
    );
};

export default SearchBar;