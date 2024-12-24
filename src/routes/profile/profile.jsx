import React, { useState } from 'react';
import { servicesData } from '../../lib/data'; 
import Card from '../../components/card/card';
import './profile.scss'; // Importez le fichier SCSS

const Profile = () => {
  const [savedPosts, setSavedPosts] = useState([
    servicesData[0], 
    servicesData[1], 
  ]);

  const userData = {
    name: "ASOU",
    email: "Asma@outlook.com",
    ville: "Marrakech",
    tele: "0655940735",
  };

  const handleLogout = () => {
    console.log("Déconnexion...");
  };

  return (
    <div className="profile-container">
      <h1>Mon profile:</h1>
    
      <section className="user-data">
        <h2>Données Utilisateur</h2>
        <p><strong>Nom:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Ville:</strong> {userData.ville}</p>
        <p><strong>Téléphone:</strong> {userData.tele}</p>
        <button onClick={handleLogout}>Modifier profile</button>
        <button onClick={handleLogout}>Déconnexion</button>
      </section>
      
      <section>
        <h2>Publications Enregistrées</h2>
        <div className="savedPostsContainer">
          {savedPosts.length > 0 ? (
            savedPosts.map(post => (
              <Card key={post.id} item={post} />
            ))
          ) : (
            <p>Aucune publication enregistrée.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Profile;