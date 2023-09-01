import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMissions, joinMission, leaveMission } from '../redux/missions/MissionSlice';
import './styles/Missions.css';

function Missions() {
  const dispatch = useDispatch();
  const missionItem = useSelector((state) => state.missions);
  const joinedMissions = useSelector((state) => state.missions.joinedMissions);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMissions = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.spacexdata.com/v3/missions');
        const data = await response.json();
        dispatch(setMissions(data));
        return data;
      } catch (error) {
        setError('Error fetching missions:');
        setIsLoading(false);
        return null;
      }
    };

    fetchMissions();
  }, [dispatch]);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };

  const isMissionJoined = (missionId) => joinedMissions
    .some((mission) => mission.mission_id === missionId);

  return (
    <div className="container">
      {isLoading && <p className="loader">Loading...</p>}
      {error && error}
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: '130px' }}>Mission</th>
            <th>Description</th>
            <th rowSpan="3">Status</th>
          </tr>
        </thead>
        <tbody>
          {missionItem.missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="mission-name"><h4>{mission.mission_name}</h4></td>
              <td className="mission-description">{mission.description}</td>
              <td>
                <div style={{ width: '115px', marginLeft: '5px', fontSize: '12px' }}>
                  <span
                    className={`status ${
                      isMissionJoined(mission.mission_id)
                        ? 'active'
                        : ''
                    }`}
                    style={{
                      backgroundColor: isMissionJoined(mission.mission_id)
                        ? '#0290ff'
                        : 'grey',
                      padding: '2px 4px',
                      borderRadius: '5px',
                    }}
                  >
                    {isMissionJoined(mission.mission_id)
                      ? 'ACTIVE MEMBER'
                      : 'NOT A MEMBER'}
                  </span>
                </div>
              </td>
              <td style={{
                width: '130px',
                marginLeft: '10px',
              }}
              >
                <button
                  type="button"
                  onClick={() => (isMissionJoined(mission.mission_id)
                    ? handleLeaveMission(mission.mission_id)
                    : handleJoinMission(mission.mission_id))}
                  className={`join-button ${
                    isMissionJoined(mission.mission_id) ? 'active' : ''
                  }`}
                  style={{
                    border: isMissionJoined(mission.mission_id)
                      ? '2px solid red'
                      : '2px solid grey',
                    background: 'transparent',
                    color: isMissionJoined(mission.mission_id) ? 'red' : 'grey',
                  }}
                >
                  {isMissionJoined(mission.mission_id)
                    ? 'Leave Mission'
                    : 'Join Mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;