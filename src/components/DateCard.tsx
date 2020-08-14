import React from 'react';
import PropTypes from 'prop-types';

interface DateCardProps {
    ConcertDate: string;
    ConcertVenue: string;
    ConcertLink: string;
}

const DateCard: React.FC<DateCardProps> = ({ ConcertDate, ConcertVenue, ConcertLink }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-yellow-500">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <span>Date:</span>
                <p className="text-white text-base">{ConcertDate}</p>
                <span>Venue:</span>
                <p className="text-white text-base">{ConcertVenue}</p>
                <span>Link:</span>
                <p className="text-white text-base">{ConcertLink}</p>
            </div>
        </div>
    );
};

DateCard.propTypes = {
    ConcertDate: PropTypes.string.isRequired,
    ConcertVenue: PropTypes.string.isRequired,
    ConcertLink: PropTypes.string.isRequired,
};

export default DateCard;
