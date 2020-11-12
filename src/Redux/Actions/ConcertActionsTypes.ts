export const CONCERT_LOADING = 'CONCERT_LOADING';
export const CONCERT_FAIL = 'CONCERT_FAIL';
export const CONCERT_SUCCESS = 'CONCERT_SUCCESS';

export type ConcertDetails = {
    name: string;
    datetime_local: string;
    type: string;
    url: string;
};

export type VenueDetails = {
    name: string;
    city: string;
    state: string;
    country: string;
    capacity: string;
};

export type ConcertType = {
    concert: ConcertDetails[];
    venue: VenueDetails[];
};

export interface ConcertLoading {
    type: typeof CONCERT_LOADING;
}

export interface ConcertFail {
    type: typeof CONCERT_FAIL;
}

export interface ConcertSuccess {
    type: typeof CONCERT_SUCCESS;
    payload: ConcertType;
}

export type ConcertDispatchTypes = ConcertLoading | ConcertFail | ConcertSuccess;
