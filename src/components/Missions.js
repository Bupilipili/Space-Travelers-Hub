import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setMissions,
} from '../redux/missions/MissionSlice';
import './styles/Missions.css';

function Missions() {
  const dispatch = useDispatch();
  const missionItem = useSelector((state) => state.missions);
  const joinedMissions = useSelector((state) => state.missions.joinedMissions);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v3/missions');
        const data = await response.json();
        dispatch(setMissions(data));
      } catch (error) {
        console.error('Error fetching missions:', error);
      }
    };

    fetchMissions();
  }, [dispatch]);
  return (
    { missionItem }
  );
}
export default Missions;
