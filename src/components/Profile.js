import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Profile.css';

function Profile() {
  const joinedMissions = useSelector((state) => state.missions.joinedMissions);
  const rockets = useSelector((state) => state.rocket);
  // Filter reserved rockets
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="profile-container">
      <div className="mission-container">
        <h2>My Missions</h2>
        <div className="joinedMission">
          {joinedMissions.length === 0 && <p className="no-mission">No mission joined</p>}
          {joinedMissions.length > 0 && (
          <ul className="reserved-rockets-list">
            {joinedMissions.map((missionName) => (
              <li key={missionName.mission_id} className="reserved-rocket">
                {missionName.mission_name}
              </li>
            ))}
          </ul>
          )}
        </div>
      </div>
      <div className="Rockets">
        <h2 className="head">My Rockets</h2>
        {reservedRockets.length > 0 ? (
          <div>
            <ul className="reserved-rockets-list">
              {reservedRockets.map((rocket) => (
                <li key={rocket.id} className="reserved-rocket">
                  <p className="rock">{rocket.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="no-mission">You haven&apos;t reserved any rockets yet.</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
