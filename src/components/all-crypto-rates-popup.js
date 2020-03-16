// NPM Dependencies
import React from 'react';
import Popup from 'reactjs-popup';

const AllCryptoRatesPopup = ({ savingsInterestRate }) => {
    return (
        <div className="product-key-details__more-info-wrapper">
            <Popup
                trigger={<button className="link-button">See all rates</button>}
                position="top center"
                on="hover"
            >
                <div className="product-key-details__more-info-content">
                    {Object.keys(savingsInterestRate).map((key) => (
                        <p className="product-key-details__text" key={key}>
                            <span>{`${key}: `}</span>
                            <span className="product-key-details__rate">{`${savingsInterestRate[key]}%`}</span>
                        </p>
                    ))}
                </div>
            </Popup>
        </div>
    );
};

export default AllCryptoRatesPopup;
