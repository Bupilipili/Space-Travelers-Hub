function Missions() {
  return (
    <div>
      {missionItem.missions.map((mission) => (
        mission.mission_id
        // mission.mission_name
        // mission.description
      ))}
    </div>
  );
}

export default Missions;
