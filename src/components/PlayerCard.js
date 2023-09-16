import { kebabCase } from "lodash";
import { useState } from "react";

export default function PlayerCard(props) {
  const [pos, setPos] = useState(props.pos);
  const [full, setFull] = useState(false);

  const fullForms = {
    GK: "Goalkeeper",
    D: "Defender",
    M: "Midfielder",
    F: "Forward"
  };

  function showFull() {
    setFull(true);
    setPos(fullForms[pos]);
  }

  function hideFull() {
    for (const p in fullForms) {
      if (fullForms[p] === pos) {
        setPos(p);
        setFull(false);
        break;
      }
    }
  }

  return (
    <div className="col-lg-3 col-6">
      <div className="player-card py-3">
        <div className="player-img">
          <div
            className={(full ? "player-pos-full" : "player-pos") + " me-3"}
            onMouseEnter={showFull}
            onMouseLeave={hideFull}
          >
            <p className="m-0">{pos}</p>
          </div>
          <img src={props.imgSrc} alt={kebabCase(props.name)} />
        </div>
        <div className="player-name px-3 py-2">{props.name}</div>
        <div className="player-stats px-3">
          <p>Appearances: {props.apps}</p>
          <p>Goals: {props.goals}</p>
          <p>Assists: {props.assists}</p>
          <p>Big Chances Missed: {props.bcm}</p>
        </div>
      </div>
    </div>
  );
}
