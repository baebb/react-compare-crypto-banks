// NPM Dependencies
import React from 'react';

import BlockFiLogo from "../blockfi.png";

const ProductCard = ({ product }) => {
    const {
        title,
        companyName,
        geoAvailability,
        interestPayout,
        interestPayoutCurrencies,
        lockUpPeriod,
        security,
        savingsInterestRate,
    } = product;

    return (
        <div className="product-card">
            <div className="product-summary">
                <div className="row">
                    <div className="col-xs-12 col-sm-3">
                        <div className="product-summary__cta-column">
                            <div
                                style={{ textAlign: 'center', marginBottom: 16, minHeight: 100 }}
                                className="img-center-frame"
                            >
                                <img src={BlockFiLogo} style={{ maxWidth: 240 }} />
                            </div>
                            <div className="product-summary__cta-button">
                                <a href="http://rossdyson.com" target="_blank">
                                    <button  type="button" className="callout-button callout-button--primary">
                                        Apply now
                                    </button>
                                </a>
                            </div>
                            <div className="product-summary__muted-cta-text">
                                <span>on {companyName}'s website</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-9">
                        <div className="product-summary__text-column">
                            <h3 className="product-summary__heading">{title}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-key-details">
                <div className="row">
                    <div className="col-xs-12 col-sm-3">
                        <div className=" product-key-details__column">
                            <h5 className="product-key-details__heading">Interest rate</h5>
                            {Object.keys(savingsInterestRate).map((key) => (
                                <p className="product-key-details__text" key={key}>
                                    <span>{`${key}: `}</span>
                                    <span>{`${savingsInterestRate[key]}%`}</span>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-3">
                        <div className=" product-key-details__column">
                            <h5 className="product-key-details__heading">Interest details</h5>
                            <p className="product-key-details__text">{interestPayout}</p>
                            <p className="product-key-details__text">{`Paid in ${interestPayoutCurrencies.join(', ')}`}</p>
                            <p className="product-key-details__text">{lockUpPeriod}</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-3">
                        <div className=" product-key-details__column">
                            <h5 className="product-key-details__heading">Availability</h5>
                            <p className="product-key-details__text">{geoAvailability}</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-3">
                        <div className=" product-key-details__column">
                            <h5 className="product-key-details__heading">Security</h5>
                            {security.map((securityItem) => (
                                <p className="product-key-details__text" key={securityItem}>
                                    {`- ${securityItem}`}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
