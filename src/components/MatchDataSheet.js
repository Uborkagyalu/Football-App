import Clock from './Clock';

const MatchDataSheet = (props) => {

    const getD = () => {
        let zero = "0";
        let date = new Date(props.match.match.utcDate);
        let year = date.getFullYear();
        let month = date.getMonth() + 1 < 10 ? zero.concat(date.getMonth() + 1) : date.getMonth() + 1;
        let day = date.getDay() < 10 ? "0" + date.getMonth() : date.getMonth();

        return year + "." + month + "." + day;
    }

    const getT = () => {
        let zero = "0";
        let time = new Date(props.match.match.utcDate);
        let hour = time.getHours() < 10 ? zero.concat(time.getHours()) : time.getHours();
        let minute = time.getMinutes() < 10 ? zero.concat(time.getMinutes()) : time.getMinutes();

        return hour + ":" + minute;
    }

    return (
        <div className="matchDataCont">
            <div className="matchTitle">{props.match.match.competition.name}</div>
            <div className="teamsCont">
                <div className='homeTeam'>
                    <div>{props.match.match.homeTeam.name}</div>
                    <div>{props.match.match.score.fullTime.homeTeam}</div>
                </div>
                <div>vs</div>
                <div className='awayTeam'>
                    <div>{props.match.match.awayTeam.name}</div>
                    <div>{props.match.match.score.fullTime.awayTeam}</div>
                </div>
            </div>
            <div className="scoresCont">
                <div>Scores:</div>
                <div>
                    <div>Half time:</div>
                    <div className={props.match.match.score.halfTime.homeTeam === null ? "displayNone" : ""}>
                        <div>{props.match.match.score.halfTime.homeTeam}</div>
                        <div>:</div>
                        <div>{props.match.match.score.halfTime.awayTeam}</div>
                    </div>
                </div>
                <div>
                    <div>Full time:</div>
                    <div className={props.match.match.score.halfTime.homeTeam === null ? "displayNone" : ""}>
                        <div>{props.match.match.score.fullTime.homeTeam}</div>
                        <div>:</div>
                        <div>{props.match.match.score.fullTime.awayTeam}</div>
                    </div>
                </div>
                <div>
                    <div>Over time:</div>
                    <div className={props.match.match.score.extraTime.homeTeam === null ? "displayNone" : ""}>
                        <div>{props.match.match.score.extraTime.homeTeam}</div>
                        <div>:</div>
                        <div>{props.match.match.score.extraTime.awayTeam}</div>
                    </div>
                </div>
                <div>
                    <div>Penalties:</div>
                    <div className={props.match.match.score.penalties.homeTeam === null ? "displayNone" : ""}>
                        <div>{props.match.match.score.penalties.homeTeam}</div>
                        <div>:</div>
                        <div>{props.match.match.score.penalties.awayTeam}</div>
                    </div>
                </div>
            </div>
            <div className="timeBox">
                <div>{props.match.match.status}</div>
                <div className={props.match.match.status === "FINISHED" ? "displayNone" : ""}>
                    <div>Start:</div>
                    <div>{getD()}</div>
                    <div>{getT()}</div>
                </div>
            </div>
            <div className={`halfPin ${props.match.match.score.halfTime.homeTeam === null ? '' : 'displayNone'}`}>-- First Half --</div>
            <div className={`halfPin ${props.match.match.score.halfTime.homeTeam === null ? 'displayNone' : ''}`}>-- Second Half --</div>
            <div className={`matchClock ${props.match.match.status === "FINISHED" ? "displayNone" : ""}`}>
                <div>Match clock:</div>
                <Clock utc={props.match.match.utcDate} match={props.match} ></Clock>
            </div>
        </div>
    )
}

export default MatchDataSheet;