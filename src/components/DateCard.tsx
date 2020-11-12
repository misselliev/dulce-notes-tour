import React from 'react';
import PropTypes from 'prop-types';

interface DateCardProps {
    ConcertName: string;
    ConcertType: string;
    ConcertDate: string;
    ConcertLink: string;
    ConcertVenue: string;
    ConcertCity: string;
    ConcertState: string;
    ConcertCountry: string;
    ConcertCapacity: string;
}

const DateCard: React.FC<DateCardProps> = ({
    ConcertName,
    ConcertType,
    ConcertDate,
    ConcertLink,
    ConcertVenue,
    ConcertCity,
    ConcertState,
    ConcertCountry,
    ConcertCapacity,
}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-yellow-500">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{ConcertName}</div>
                <span>Type:</span>
                <p className="text-white text-base">{ConcertType}</p>
                <span>Date:</span>
                <p className="text-white text-base">{ConcertDate}</p>
                <span>Venue:</span>
                <p className="text-white text-base">{ConcertVenue}</p>
                <span>Location:</span>
                <p className="text-white text-base">
                    {ConcertCity},{ConcertState},{ConcertCountry}
                </p>
                <span>Capacity:</span>
                <p className="text-white text-base">{ConcertCapacity}</p>
                <span>Link:</span>
                <p className="text-white text-base">{ConcertLink}</p>
            </div>
        </div>
    );
};

DateCard.propTypes = {
    ConcertName: PropTypes.string.isRequired,
    ConcertType: PropTypes.string.isRequired,
    ConcertDate: PropTypes.string.isRequired,
    ConcertLink: PropTypes.string.isRequired,
    ConcertVenue: PropTypes.string.isRequired,
    ConcertCity: PropTypes.string.isRequired,
    ConcertState: PropTypes.string.isRequired,
    ConcertCountry: PropTypes.string.isRequired,
    ConcertCapacity: PropTypes.string.isRequired,
};

export default DateCard;
