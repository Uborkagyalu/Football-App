
const competitionsData = (state = {competitions: []}, action) => {

    switch(action.type) {
        case "setCompetitionsData": {
            return state = action.target;
        }
        default:
            return state;
    }
}

export default competitionsData;