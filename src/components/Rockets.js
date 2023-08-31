import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/RocketSlice';
import './styles/Rockets.css';

function Rockets() {
  const rockets = useSelector((state) => state.rocket);
  const dispatch = useDispatch();

  const handleReserveRocket = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };

  return (
    <div>
      <ul className="rocket-list">
        {rockets.map((rocket) => (
          <li key={rocket.id} className="rocket-item">
            <img src={rocket.flickr_images[0]} alt={rocket.name} className="rocket-image" />
            <div className="rocket-details">
              <h3>{rocket.name}</h3>
              {rocket.reserved ? (
                <div>
                  <p className="reserved-description">Reserved</p>
                  <p>{rocket.description}</p>
                </div>
              ) : (
                <p>{rocket.description}</p>
              )}
              <button
                className="Butt"
                onClick={() => handleReserveRocket(rocket.id)}
                disabled={rocket.reserved} // Disable if already reserved
              >
                {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rockets;
