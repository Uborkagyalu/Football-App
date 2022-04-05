
const footballData = (state = {competitions: []}, action) => {

    switch(action.type) {
        case "setMainData": {
            return state = action.target;
        }
        default:
            return state;
    }
}

export default footballData;