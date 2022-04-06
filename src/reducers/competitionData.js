
const competitionData = (state = {competition: {name: ""}}, action) => {

    switch(action.type) {
        case "setCompetitionData": {
            return state = action.target;
        }
        default:
            return state;
    }
}

export default competitionData;