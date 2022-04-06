import Clock from './Clock';

const MatchDataSheet = (props) => {

    const getDate = () => {
        return props.match.match.utcDate.substring(0, 10);
    }

    const getTime = () => {
        return props.match.match.utcDate.substring(11, 16);
    }

    return (
        <div className="matchDataCont">
            <div className="matchTitle">{props.match.match.competition.name}</div>
            <div className="teamsCont">
                <div className='homeTeam'>{props.match.match.homeTeam.name}</div>
                <div>vs</div>
                <div className='awayTeam'>{props.match.match.awayTeam.name}</div>
            </div>
            <div className="scoresCont">
                <div className={`halfPin ${props.match.match.score.halfTime.homeTeam === "null" ? 'displayNone' : ''}`}>First Half</div>
                <div className={`halfPin ${props.match.match.score.halfTime.homeTeam !== "null" ? 'displayNone' : ''}`}>Second Half</div>
                <div>
                    <div>Half time:</div>
                    <div>{props.match.match.score.halfTime.homeTeam}</div>
                    <div>:</div>
                    <div>{props.match.match.score.halfTime.awayTeam}</div>
                </div>
                <div>
                    <div>Full time:</div>
                    <div>{props.match.match.score.fullTime.homeTeam}</div>
                    <div>:</div>
                    <div>{props.match.match.score.fullTime.awayTeam}</div>
                </div>
                <div>
                    <div>Over time:</div>
                    <div>{props.match.match.score.extraTime.homeTeam}</div>
                    <div>:</div>
                    <div>{props.match.match.score.extraTime.awayTeam}</div>
                </div>
                <div>
                    <div>Penalties:</div>
                    <div>{props.match.match.score.penalties.homeTeam}</div>
                    <div>:</div>
                    <div>{props.match.match.score.penalties.awayTeam}</div>
                </div>
            </div>
            <div className="timeBox">
                <div>{props.match.match.status}</div>
                <div className={props.match.match.status === "FINISHED" ? "displayNone" : ""}>
                    <div>Start:</div>
                    <div>{getDate()}</div>
                    <div>{getTime()}</div>
                </div>
            </div>
            <div className={`matchClock ${props.match.match.status === "FINISHED" ? "displayNone" : ""}`}>
                <div>Clock:</div>
                <Clock utc={props.match.match.utcDate} match={props.match} ></Clock>
            </div>
        </div>
    )
}

export default MatchDataSheet;