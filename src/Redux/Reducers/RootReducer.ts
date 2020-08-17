import { combineReducers } from 'redux';
import ConcertReducer from './ConcertReducer';

const RootReducer = combineReducers({
    concerts: ConcertReducer,
});

export default RootReducer;
