import React from 'react';
import DateCard from '../components/DateCard';

const TourDates: React.FC = () => {
    return (
        <div className="container mx-auto">
            <div className="text-white">Tour Dates go here.</div>
            <DateCard ConcertDate="14/08/2020" ConcertVenue="Auditorio Telmex" ConcertLink="link" />
        </div>
    );
};

export default TourDates;
