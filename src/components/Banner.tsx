import React from 'react';
import PropTypes from 'prop-types';

interface bannerProps {
    bannerImg: string;
    altImg: string;
}
const Banner: React.FC<bannerProps> = ({ bannerImg, altImg }) => {
    return (
        <div>
            <img src={bannerImg} alt={altImg} />
        </div>
    );
};

Banner.propTypes = {
    bannerImg: PropTypes.string.isRequired,
    altImg: PropTypes.string.isRequired,
};
export default Banner;
