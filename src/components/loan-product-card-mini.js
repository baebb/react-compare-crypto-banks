// NPM Dependencies
import React from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from 'components/Router';

// Component Dependencies
import AllCryptoRatesPopup from './all-crypto-rates-popup';

// Utility Dependencies
import { chooseDisplayCurrencies, safeGet, formatFloat, formatBankMethods } from '../selectors';

export default function LoanProductCardMini({ product, rating = 0, reviewLink = null, realTimeRate = null }) {
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
        availabilityExceptions = [],
        links,
    } = product;
    const { fields: companyData } = company;
    const { name: companyName, logo, securityScore } = companyData;
    const productLink = links.default;

    const logoUrl = safeGet(['fields', 'file', 'url'], logo);
    const logoName = safeGet(['fields', 'title'], logo);

    const formatAprLower = formatFloat(aprLowerLimit, 1);
    const formatAprUpper = formatFloat(aprUpperLimit, 1);
    const formatLtvLower = formatFloat(ltvLowerLimit, 1);
    const formatLtvUpper = formatFloat(ltvUpperLimit, 1);

    const kycText = kycRequired ? 'KYC required' : 'KYC NOT required';
    const cleanLoanMethods = formatBankMethods(payoutMethods);
    const payoutMethodsText = `Receive loan in ${cleanLoanMethods.join(', ')}`;
    const displayAcceptedCollateral = chooseDisplayCurrencies(collateralAccepted);

    return (
        <div className="product-card product-card--mini" key={productTitle}>
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
                                    <span className="product-summary__star-rating">
                                        <StarRatings
                                            rating={rating}
                                            starDimension="18px"
                                            starSpacing="1px"
                                            starRatedColor="#e8b923"
                                        />
                                    </span>
                                    <span className="product-summary__star-rating-text">
                                        {rating.toFixed(1)} Editor's Rating
                                    </span>
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
                        <div className="row">
                            <div className="col-xs-12 col-sm-3 last-sm">
                                <div className="product-summary__APR-content">
                                    <div className="product-summary__APR-title">
                                        APR
                                    </div>
                                    <div className="product-summary__APR-number">
                                        {!aprLowerLimit || aprLowerLimit === aprUpperLimit ?
                                            <span>{formatAprUpper}%</span>
                                            :
                                            <span>{formatAprLower}-{formatAprUpper}%</span>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-9">
                                <div className="product-summary__text-column">
                                    <h3 className="product-summary__heading hide-mobile">{productTitle}</h3>
                                    <div className="product-summary__rating hide-mobile">
                                        <span className="product-summary__star-rating">
                                            <StarRatings
                                                rating={rating}
                                                starDimension="18px"
                                                starSpacing="1px"
                                                starRatedColor="#e8b923"
                                            />
                                        </span>
                                        <span className="product-summary__star-rating-text">
                                            {rating.toFixed(1)} Editor's Rating
                                        </span>
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
                                            {availabilityExceptions.length > 1 ?
                                                <div>
                                                    <b>Unavailable in: </b>
                                                    {availabilityExceptions.join(', ')}
                                                </div>
                                                :
                                                <div><b>Worldwide</b></div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="product-key-details__column">
                                        <h5 className="product-key-details__heading">Loan details</h5>
                                        <p className="product-key-details__text">{kycText}</p>
                                        <div className="product-key-details__text">
                                            <span>Loan-to-value: </span>
                                            {!ltvLowerLimit || ltvLowerLimit === ltvUpperLimit ?
                                                <span>{formatLtvUpper}%</span>
                                                :
                                                <span>{formatLtvLower}-{formatLtvUpper}%</span>
                                            }
                                        </div>
                                        <p className="product-key-details__text">{`Terms: ${terms.join(', ')}`}</p>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="product-key-details__column">
                                        <h5 className="product-key-details__heading">Security</h5>
                                        <div className="product-key-details__text">
                                            <StarRatings
                                                rating={securityScore}
                                                starDimension="16px"
                                                starSpacing="1px"
                                                starRatedColor="#008255"
                                            />
                                            <span> {securityScore.toFixed(1)}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="product-key-details__column">
                                        <h5 className="product-key-details__heading">Collateral accepted</h5>
                                        {displayAcceptedCollateral.map((currency) => (
                                            <p className="product-key-details__text" key={currency}>
                                                <span>{currency}</span>
                                            </p>
                                        ))}
                                        {Object.keys(collateralAccepted).length > 3 &&
                                        <AllCryptoRatesPopup rates={collateralAccepted} type="collateral" />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
