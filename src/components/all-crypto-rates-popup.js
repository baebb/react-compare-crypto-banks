// NPM Dependencies
import React from 'react';
import Popup from 'reactjs-popup';

const AllCryptoRatesPopup = ({ rates, type = 'interest' }) => {
    const buttonText = {
        interest: 'See all rates',
        collateral: 'See all options'
    };

    return (
        <div className="product-key-details__more-info-wrapper">
            <Popup
                trigger={<button className="link-button">{buttonText[type]}</button>}
                position="top center"
                on="hover"
            >
                <div className="product-key-details__more-info-content">
                    {Object.keys(rates).map((key) => (
                        <p className="product-key-details__text" key={key}>
                            <span>{key}</span>
                            {type === 'interest' &&
                                <span className="product-key-details__rate">{`${rates[key]}%`}</span>
                            }
                        </p>
                    ))}
                </div>
            </Popup>
        </div>
    );
};

export default AllCryptoRatesPopup;
