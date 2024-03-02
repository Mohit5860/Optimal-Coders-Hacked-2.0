import React, { useState } from 'react';
import axios from 'axios';

const CampaignForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    by: '',
    img: '',
    description: '',
    city: '',
    pincode: '',
    completed: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/campaigns/form', formData);
      alert('Campaign data submitted successfully!');
      setFormData({
        name: '',
        date: '',
        by: '',
        img: '',
        description: '',
        city: '',
        pincode: '',
        completed: false,
      });
    } catch (error) {
      console.error('Error submitting campaign data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Campaign Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="date"
        placeholder="Date"
        value={formData.date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="by"
        placeholder="By"
        value={formData.by}
        onChange={handleChange}
      />
      <input
        type="text"
        name="img"
        placeholder="Image URL"
        value={formData.img}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />
      <input
        type="text"
        name="pincode"
        placeholder="Pincode"
        value={formData.pincode}
        onChange={handleChange}
      />
      <label>
        Completed:
        <input
          type="checkbox"
          name="completed"
          checked={formData.completed}
          onChange={() =>
            setFormData({ ...formData, completed: !formData.completed })
          }
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CampaignForm;
