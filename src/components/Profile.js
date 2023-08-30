import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Profile.css';

function Profile() {
  const rockets = useSelector((state) => state.rocket);

  // Filter reserved rockets
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="profile-container">
      <div className="Rockets">
        <h2 className="head">My Rockets</h2>
        {reservedRockets.length > 0 ? (
          <div>
            <ul className="reserved-rockets-list">
              {reservedRockets.map((rocket) => (
                <li key={rocket.id} className="reserved-rocket">
                  <p>{rocket.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>You haven&apos;t reserved any rockets yet.</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
