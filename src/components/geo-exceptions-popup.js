// NPM Dependencies
import React from 'react';
import Popup from 'reactjs-popup';

const GeoExceptionsPopup = ({ geoAvailabilityExceptions }) => {
    return (
        <Popup
            trigger={<button className="link-button">see exclusions</button>}
            position="top center"
            on="hover"
        >
            <div className="product-key-details__more-info-content">
                {geoAvailabilityExceptions.map(item =>
                    <p className="product-key-details__text" key={item}>
                        {item}
                    </p>
                )}
            </div>
        </Popup>
    );
};

export default GeoExceptionsPopup;
