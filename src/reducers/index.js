import footballData from './footballData';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    footballData: footballData

});

export default allReducers;