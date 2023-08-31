import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Rockets.css';

function Rockets() {
  const rockets = useSelector((state) => state.rocket);

  return (
    <div>
      <h2>Rockets</h2>
      <ul className="rocket-list">
        {rockets.map((rocket) => (
          <li key={rocket.id} className="rocket-item">
            <img src={rocket.flickr_images[0]} alt={rocket.name} className="rocket-image" />
            <div className="rocket-details">
              <h3>{rocket.name}</h3>
              <p>
                Type:
                {rocket.type}
              </p>
              {/* Add more details if needed */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rockets;
