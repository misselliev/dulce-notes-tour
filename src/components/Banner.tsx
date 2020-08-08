import React from 'react';
import PropTypes from 'prop-types';

interface BannerProps {
    BannerImg: string;
    AltImg: string;
}
const Banner: React.FC<BannerProps> = ({ BannerImg, AltImg }) => {
    return (
        <div className="flex w-full h-full">
            <div className="container mx-auto rounded-t shadow bg-cover bg-bottom m-4">
                <img src={BannerImg} alt={AltImg} />
            </div>
        </div>
    );
};

Banner.propTypes = {
    BannerImg: PropTypes.string.isRequired,
    AltImg: PropTypes.string.isRequired,
};
export default Banner;
