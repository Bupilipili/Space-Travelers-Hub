import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions } from '../redux/missions/MissionSlice';

const Missions = () => {
  const { missions, isLoading, error } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const renderMission = (mission, index) => (
    <div key={index}>
      <p>
        {mission.mission_name}
        {mission.mission_id}
        {mission.description}
      </p>
    </div>
  );
  return (
    <div>
      {isLoading && <div>Loading ........</div>}
      {error && <div>Could not fetch data.</div>}
      {missions.missions && missions.missions.map(renderMission)}
    </div>
  );
};

export default Missions;
