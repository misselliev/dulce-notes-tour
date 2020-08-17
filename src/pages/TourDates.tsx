import React from 'react';
import DateCard from '../components/DateCard';
import { useSelector } from 'react-redux';
import { RootStore } from '../Redux/store';

const TourDates: React.FC = () => {
    const concertState = useSelector((state: RootStore) => state.concerts);
    console.log(concertState);

    return (
        <div className="container mx-auto">
            <div className="text-white">Tour Dates go here.</div>
            <DateCard ConcertDate="14/08/2020" ConcertVenue="Auditorio Telmex" ConcertLink="link" />
        </div>
    );
};

export default TourDates;
