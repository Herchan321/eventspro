import React, { useState } from 'react';
import './feedback.scss';

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      name: 'Asma',
      description: 'great services',
    },
    {
      id: 2,
      name: 'oumaima',
      description: 'great services',
    },
    {
      id: 3,
      name: 'Adrae',
      description: 'great services',
    },
  ]);

  const [newFeedback, setNewFeedback] = useState('');
  const [newName, setNewName] = useState('');

  const handleAddFeedback = () => {
    if (newFeedback && newName) {
      setFeedbacks([
        ...feedbacks,
        { id: feedbacks.length + 1, name: newName, description: newFeedback },
      ]);
      setNewFeedback('');
      setNewName('');
    }
  };

  return (
    <div className="feedbacks-container">
      <h2>FeedBacks</h2>
      <div className="feedbacks-list">
        {feedbacks.map((feedback) => (
          <div className="feedback-card" key={feedback.id}>
            <div className="feedback-content">
              <p className="feedback-description">"{feedback.description}"</p>
              <p className="feedback-name">- {feedback.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="add-feedback">
        <h3>Ajouter un feedback</h3>
        <input
          type="text"
          placeholder="Votre nom"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <textarea
          placeholder="Votre feedback"
          value={newFeedback}
          onChange={(e) => setNewFeedback(e.target.value)}
        />
        <button className="add-feedback-button" onClick={handleAddFeedback}>
          Ajouter un feedback
        </button>
      </div>
    </div>
  );
};

export default Feedbacks;
