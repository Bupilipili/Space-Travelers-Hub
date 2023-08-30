import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const rockets = useSelector((state) => state.rocket);

  // Filter reserved rockets
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div>
      <h2>My Profile</h2>
      {reservedRockets.length > 0 ? (
        <div>
          <h3>Reserved Rockets</h3>
          <ul>
            {reservedRockets.map((rocket) => (
              <li key={rocket.id}>
                <p>{rocket.name}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>You haven&apos;t reserved any rockets yet.</p>
      )}
    </div>
  );
}

export default Profile;
