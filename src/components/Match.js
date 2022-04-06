
const Match = (props) => {

    const getD = () => {
        let zero = "0";
        let date = new Date(props.match.utcDate);
        let year = date.getFullYear();
        let month = date.getMonth() + 1 < 10 ? zero.concat(date.getMonth() + 1) : date.getMonth() + 1;
        let day = date.getDate() < 10 ? zero.concat(date.getDate()) : date.getDate();

        return year + "." + month + "." + day;
    }

    const getT = () => {
        let zero = "0";
        let time = new Date(props.match.utcDate);
        let hour = time.getHours() < 10 ? zero.concat(time.getHours()) : time.getHours();
        let minute = time.getMinutes() < 10 ? zero.concat(time.getMinutes()) : time.getMinutes();

        return hour + ":" + minute;
    }

    const clickHandler = () => {
        props.selectMatch(props);
    }

    return (
        <div onClick={clickHandler} className="matchCont">
            <div>{props.match.homeTeam.name}</div>
            <div className="matchVS">vs</div>
            <div>{props.match.awayTeam.name}</div>
            <div>{getD()}</div>
            <div>{getT()}</div>
            <div>{props.match.status}</div>
        </div>
    )
}

export default Match;