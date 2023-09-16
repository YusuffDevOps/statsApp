import PlayerCard from "./PlayerCard";
import players from "../../public/data.js";
import LeagueTable from "./LeagueTable";

export default function App() {
  return (
    // <div className="container">
    //   <div className="row my-5">
    //     {players.map((player) => (
    //       <PlayerCard
    //         imgSrc={player.image}
    //         name={player.name}
    //         apps={player.appearances}
    //         goals={player.goals}
    //         assists={player.assists}
    //         bcm={player.bCM}
    //         pos={player.pos}
    //       />
    //     ))}
    //   </div>
    // </div>
    <div>
      <LeagueTable
        name="Premier League"
        logoSrc="images/leagues/premier-league/premier-league.png"
      />
    </div>
  );
}
