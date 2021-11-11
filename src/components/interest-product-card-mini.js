// NPM Dependencies
import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

// Component Dependencies
import AllCryptoRatesPopup from './all-crypto-rates-popup';

// Utility Dependencies
import { chooseDisplayCurrencies, formatLoanScanRates, safeGet } from '../selectors';

class InterestProductCardMini extends Component {
    // static propTypes = {
    // };
    // static defaultProps = {
    // };
    render() {
        const { product, rating, realTimeRates = null } = this.props;
        const {
            productTitle,
            company,
            geoExceptions = [],
            interestPayout,
            compounding,
            terms,
            interestRates
        } = product;
        const { fields: companyData } = company;
        const {
            name: companyName,
            logo,
            securityScore,
            links
        } = companyData;

        const logoUrl = safeGet(['fields', 'file', 'url'], logo);
        const logoName = safeGet(['fields', 'title'], logo);

        const rates = realTimeRates ? formatLoanScanRates(realTimeRates) : interestRates;
        const displayCurrencies = chooseDisplayCurrencies(rates);
        const productLink = links.default;

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
                            <div className="product-key-details">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-3">
                                        <div className="product-key-details__column">
                                            <h5 className="product-key-details__heading">Availability</h5>
                                            <div className="product-key-details__text">
                                                {geoExceptions.length > 1 ?
                                                    <div>
                                                        <b>Worldwide</b>
                                                        <span>, excluding: </span>
                                                        {geoExceptions.join(', ')}
                                                    </div>
                                                    :
                                                    <div><b>Worldwide</b></div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-3">
                                        <div className="product-key-details__column">
                                            <h5 className="product-key-details__heading">Interest details</h5>
                                            <p className="product-key-details__text">
                                                {compounding ? 'Compounding' : 'Non-compounding'}
                                            </p>
                                            <p className="product-key-details__text">{`Paid ${interestPayout}`}</p>
                                            <p className="product-key-details__text">{`Terms: ${terms.join(', ')}`}</p>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-3">
                                        <div className="product-key-details__column">
                                            <h5 className="product-key-details__heading">Security score</h5>
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
                                            <h5 className="product-key-details__heading product-key-details__heading--interest-rate">Interest rate</h5>
                                            {displayCurrencies.map((currency) => (
                                                <p className="product-key-details__text" key={currency}>
                                                    <span>{`${currency}: `}</span>
                                                    <span className="product-key-details__rate">{`${rates[currency]}%`}</span>
                                                </p>
                                            ))}
                                            {Object.keys(rates).length > 3 &&
                                                <AllCryptoRatesPopup rates={rates} />
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
    }
}

export default InterestProductCardMini;
