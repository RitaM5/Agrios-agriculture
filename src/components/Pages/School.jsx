import React, { useState } from 'react';

const School = () => {
  const [schools, setSchools] = useState([]);
  const [schoolName, setSchoolName] = useState('');

  const findNearbySchools = async () => {
    try {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const apiKey = import.meta.env.VITE_GOOGLE_API_KEY; // Updated to use VITE prefix
          const radius = 1000; // Search radius in meters
          const type = 'school'; // Type of place

          const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${apiKey}`;

          const response = await fetch(apiUrl);
          const data = await response.json();
          setSchools(data.results);
        });
      } else {
        console.log("Geolocation is not available in this browser.");
      }
    } catch (error) {
      console.error('Error fetching data from Google Places API:', error);
    }
  };

  const searchSchools = async () => {
    try {
      if (schoolName === '') return; // If no school name provided, return
      
      const apiKey = import.meta.env.VITE_GOOGLE_API_KEY; // Updated to use VITE prefix
      const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${apiKey}&query=${schoolName}+school`;

      const response = await fetch(apiUrl);
      const data = await response.json();
      setSchools(data.results);
    } catch (error) {
      console.error('Error fetching data from Google Places API:', error);
    }
  };

  return (
    <div className="py-44">
      <h1>Find Nearby Schools</h1>
      <input
        type="text"
        placeholder="Enter school name"
        value={schoolName}
        onChange={(e) => setSchoolName(e.target.value)}
      />
      <button onClick={searchSchools}>Search Schools</button>
      <button onClick={findNearbySchools}>Find Nearby Schools</button>
      <ul>
        {schools.map(school => (
          <li key={school.place_id}>{school.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default School;
