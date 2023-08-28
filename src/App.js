import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import Missions from './components/Missions';

function App() {
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
