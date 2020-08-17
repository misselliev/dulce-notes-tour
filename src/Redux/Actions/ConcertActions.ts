import { Dispatch } from 'redux';
import axios from 'axios';
import { ConcertDispatchTypes, CONCERT_LOADING, CONCERT_SUCCESS, CONCERT_FAIL } from './ConcertActionsTypes';

const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;
export const getConcert = () => async (dispatch: Dispatch<ConcertDispatchTypes>) => {
    try {
        dispatch({
            type: CONCERT_LOADING,
        });

        const res = await axios.get(
            `https://api.seatgeek.com/2/events?performers.slug=the-1975&client_id=${client_id}client_secret=${client_secret}`,
        );

        dispatch({
            type: CONCERT_SUCCESS,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: CONCERT_FAIL,
        });
    }
};
