import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Profile.css';

function Profile() {
  const joinedMissions = useSelector((state) => state.missions.joinedMissions);

  return (
    <div className="mission-container">
      <h2>My Missions</h2>
      <div className="joinedMission">
        {joinedMissions.length === 0 && <p className="no-mission">No mission joined</p>}
        {joinedMissions.length > 0 && (
          <ul>
            {joinedMissions.map((missionName) => (
              <li key={missionName.mission_id}>
                {missionName.mission_name}
              </li>
            ))}
          </ul>

        )}
      </div>
    </div>
  );
}

export default Profile;
