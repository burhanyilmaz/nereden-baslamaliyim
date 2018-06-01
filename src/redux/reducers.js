import { combineReducers } from 'redux';
import { STATE_HOME } from '../modules/Home/constants';

import HomeReducer from '../modules/Home/reducer/HomeReducer';

export default combineReducers({
    [STATE_HOME]: HomeReducer,
});