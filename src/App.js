import { Container } from 'react-bootstrap';
import leadershipTeamJSON from "./posts/leadership_team.json";

export default function App() {


  console.log("./" + leadershipTeamJSON.positions[0].people[0].photo);
  const logo = require("./" + leadershipTeamJSON.positions[0].people[0].photo).default;

  return (
    <Container>
      <p>{leadershipTeamJSON.positions[0].positions_category}</p>
      <img width = "50" alt = "portrait" src = {require("./" + leadershipTeamJSON.positions[0].people[0].photo).default}></img>

      <p>{leadershipTeamJSON.positions[0].people[0].name}</p>
      <p>{leadershipTeamJSON.positions[0].people[0].title}</p>
      <p>{leadershipTeamJSON.positions[0].people[0].bio}</p>
    </Container>
  );
}
