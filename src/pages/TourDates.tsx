import React, { useEffect } from 'react';
import DateCard from '../components/DateCard';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../Redux/store';
import { getConcert } from '../Redux/Actions/ConcertActions';

const TourDates: React.FC = () => {
    const concertState = useSelector((state: RootStore) => state.concerts);
    console.log(concertState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getConcert());
    }, [dispatch]);

    return (
        <div className="container mx-auto">
            <div className="text-white">Tour Dates go here.</div>
            <DateCard ConcertDate="14/08/2020" ConcertVenue="Auditorio Telmex" ConcertLink="link" />
        </div>
    );
};

export default TourDates;
