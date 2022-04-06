import competitionsData from './competitionsData';
import competitionData from './competitionData';
import matchData from './matchData';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    competitionsData: competitionsData,
    competitionData: competitionData,
    matchData: matchData
});

export default allReducers;