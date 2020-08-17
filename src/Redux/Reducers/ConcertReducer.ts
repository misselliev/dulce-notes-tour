import {
    ConcertType,
    ConcertDispatchTypes,
    CONCERT_LOADING,
    CONCERT_FAIL,
    CONCERT_SUCCESS,
} from '../Actions/ConcertActionsTypes';

interface DefaultStateConcert {
    loading: boolean;
    concert?: ConcertType;
}

const defaultState: DefaultStateConcert = {
    loading: false,
};

const ConcertReducer = (
    state: DefaultStateConcert = defaultState,
    action: ConcertDispatchTypes,
): DefaultStateConcert => {
    switch (action.type) {
        case CONCERT_FAIL:
            return { loading: false };
        case CONCERT_LOADING:
            return { loading: true };
        case CONCERT_SUCCESS:
            return { loading: false, concert: action.payload };
        default:
            return state;
    }
};

export default ConcertReducer;
