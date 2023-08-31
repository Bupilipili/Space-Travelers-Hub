import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import { setRockets } from './redux/rockets/RocketSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchRockets() {
      try {
        const response = await fetch('https://api.spacexdata.com/v3/rockets');
        const data = await response.json();
        // Extract the required data fields
        const rocketsData = data.map((rocket) => ({
          id: rocket.rocket_id,
          name: rocket.rocket_name,
          type: rocket.rocket_type,
          description: rocket.description,
          flickr_images: rocket.flickr_images,
        }));
        dispatch(setRockets(rocketsData));
      } catch (error) {
        console.error('Error fetching rockets data:', error);
      }
    }

    fetchRockets();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
