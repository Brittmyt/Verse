import React, { useState } from 'react';
import { logExperience } from '../services/polygonService';

const EducationLedger = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logExperience(title, description);
      alert('Experience logged successfully!');
    } catch (err) {
      console.error(err);
      alert('Error logging experience');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Log Experience</button>
    </form>
  );
};

export default EducationLedger;
