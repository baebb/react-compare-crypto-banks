// NPM Dependencies
import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from 'components/Router';

// Component Dependencies
import AllCryptoRatesPopup from './all-crypto-rates-popup';

// Utility Dependencies
import { chooseDisplayCurrencies, safeGet, formatLoanScanRates } from '../selectors';

export default function LoanProductCard({ product, rating = 0, reviewLink = null, realTimeRate = null }) {
    const {
        productTitle,
        company,
        kycRequired,
        terms,
        collateralAccepted,
        payoutMethods,
        aprUpperLimit,
        aprLowerLimit,
        ltvUpperLimit,
        ltvLowerLimit,
        availabilityExceptions,
        links,
    } = product;
    const { fields: companyData } = company;
    const { name: companyName, logo } = companyData;
    const productLink = links.default;

    const logoUrl = safeGet(['fields', 'file', 'url'], logo);
    const logoName = safeGet(['fields', 'title'], logo);

    // return (
    //     <div className="loan-product-card" key={productTitle}>
    //         title: {productTitle}
    //     </div>
    // );

    return (
        <div className="product-card" key={productTitle}>
            <div className="product-summary">
                <div className="row">
                    <div className="col-xs-12 col-sm-3">
                        <div className="product-summary__cta-column">
                            <div className="product-summary__logo-img">
                                <img alt={logoName} src={logoUrl} />
                            </div>
                            <div className="product-summary__mobile-text hide-desktop">
                                <h3 className="product-summary__heading">{productTitle}</h3>
                                <div className="product-summary__rating">
                                    <div className="product-summary__rating-placeholder">
                                        Review coming soon
                                    </div>
                                </div>
                            </div>
                            <div className="product-summary__cta-button">
                                <a href={productLink} target="_blank">
                                    <button type="button" className="callout-button callout-button--primary">
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
                            <h3 className="product-summary__heading hide-mobile">{productTitle}</h3>
                            <div className="product-summary__rating hide-mobile">
                                <div className="product-summary__rating-placeholder">
                                    Review coming soon
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-key-details">
                <div className="row">
                    <div className="col-xs-12 col-sm-3">
                        <div className="product-key-details__column">
                            <h5 className="product-key-details__heading">Availability</h5>
                            <div className="product-key-details__text">
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-3">
                        <div className="product-key-details__column">
                            <h5 className="product-key-details__heading">Interest details</h5>
                            <div className="product-key-details__text">
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-3">
                        <div className="product-key-details__column">
                            <h5 className="product-key-details__heading">Security</h5>
                            <div className="product-key-details__text">
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-3">
                        <div className="product-key-details__column">
                            <h5 className="product-key-details__heading product-key-details__heading--interest-rate">Interest rates</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
