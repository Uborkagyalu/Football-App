
const matchData = (state = { match: { homeTeam: { name: "" }, awayTeam: { name: "" } } }, action) => {

    switch (action.type) {
        case "setMatchData": {
            return state = action.target;
        }
        default:
            return state;
    }
}

export default matchData;