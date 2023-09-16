export default function TeamRow(props) {
  return (
    <div className="mb-1">
      <div className="row team-row" style={{ backgroundColor: props.color }}>
        <div className="col">
          <h2 className="text-end">{props.pos}</h2>
        </div>
        <div className="col team-img text-end">
          <div className="row m-0 p-0">
            <div className="col m-0 p-0" />
            <div className="col team-logo-div p-0">
              <img src={props.imgSrc} alt={props.name} className="team-logo" />
            </div>
          </div>
        </div>
        <div className="col-3">
          <h2 className="text-start">{props.name}</h2>
        </div>
        <div className="col">
          <h2 className="text-center">{props.gamesPlayed}</h2>
        </div>
        <div className="col">
          <h2 className="text-center">{props.wins}</h2>
        </div>
        <div className="col">
          <h2 className="text-center">{props.draws}</h2>
        </div>
        <div className="col">
          <h2 className="text-center">{props.loss}</h2>
        </div>
        <div className="col">
          <h2 className="text-center">{props.goalsFor}</h2>
        </div>
        <div className="col">
          <h2 className="text-center">{props.goalsAgainst}</h2>
        </div>
        <div className="col">
          <h2 className="text-center">{props.points}</h2>
        </div>
      </div>
    </div>
  );
}
