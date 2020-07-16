import React from 'react';
import PropTypes from 'prop-types';

interface Props {
    bannerImg: string;
}
const Banner: React.FC<Props> = ({ bannerImg }) => {
    return (
        <div>
            <img src={bannerImg} />
        </div>
    );
};

Banner.propTypes = {
    bannerImg: PropTypes.string.isRequired,
};
export default Banner;
