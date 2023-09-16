import { kebabCase } from 'lodash';
import TeamRow from './TeamRow';
import { teams } from '../data';

export default function LeagueTable(props) {
  return (
    <div className="container mobile-size">
      <div className="row">
        <img class="col-3" src={props.logoSrc} alt={kebabCase(props.name)} />
      </div>
      <TeamRow
        color=""
        name="Club"
        pos="#"
        imgSrc="../../images/transparent.png"
        gamesPlayed="P"
        wins="W"
        draws="D"
        loss="L"
        goalsFor="GF"
        goalsAgainst="GA"
        points="Pts"
      />
      <div className="row">
        {teams.map((team, index) => (
          <TeamRow
            color={(index + 1) % 2 === 1 ? "#808080" : "#D9D9D9"}
            name={team.name}
            pos={index + 1}
            imgSrc={team.logoSrc}
            gamesPlayed={38}
            wins={team.wins}
            draws={team.draws}
            loss={team.loss}
            goalsFor={team.goalsFor}
            goalsAgainst={team.goalsAgainst}
            points={team.points}
          />
        ))}
      </div>
    </div>
  );
}
