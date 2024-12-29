import React from 'react';
import './banner.scss';
function Banner() {
  return (
    <div className="image-container">
    <img src="banner.jpg" alt="Votre événement parfait" />
    <div className="text-overlay">
        <h1>Votre événement,parfait commence ici, avec EventsPro.</h1>
        
    </div>
</div>

  );
}

export default Banner;
