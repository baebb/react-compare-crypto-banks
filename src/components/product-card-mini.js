// NPM Dependencies
import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

// Component Dependencies
import AllCryptoRatesPopup from './all-crypto-rates-popup';
import GeoExceptionsPopup from './geo-exceptions-popup';

// Utility Dependencies
import { productLogos } from '../selectors';

class ProductCardMini extends Component {
    // static propTypes = {
    // };
    // static defaultProps = {
    // };
    render() {
        const {
            id,
            title,
            companyName,
            editorRating,
            geoAvailability,
            geoAvailabilityExceptions,
            interestPayout,
            lockUpPeriod,
            security,
            savingsInterestRate,
            displayCurrencies
        } = this.props.product;

        return (
            <div className="product-card product-card--mini" key={title}>
                <div className="product-summary">
                    <div className="row">
                        <div className="col-xs-12 col-sm-3">
                            <div className="product-summary__cta-column">
                                <div className="product-summary__logo-img">
                                    <img alt={`${title}-logo`} src={productLogos[id]} />
                                </div>
                                <div className="product-summary__mobile-text hide-desktop">
                                    <h3 className="product-summary__heading">{title}</h3>
                                    <div className="product-summary__rating">
                                        <span className="product-summary__star-rating">
                                            <StarRatings
                                                rating={editorRating}
                                                starDimension="18px"
                                                starSpacing="1px"
                                                starRatedColor="#008255"
                                            />
                                        </span>
                                        <span className="product-summary__star-rating-text">
                                            {editorRating.toFixed(1)} Editor's Rating
                                        </span>
                                    </div>
                                </div>
                                <div className="product-summary__cta-button">
                                    <a href="https://www.rossdyson.com" target="_blank">
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
                                <h3 className="product-summary__heading hide-mobile">{title}</h3>
                                <div className="product-summary__rating hide-mobile">
                                    <span className="product-summary__star-rating">
                                        <StarRatings
                                            rating={editorRating}
                                            starDimension="18px"
                                            starSpacing="1px"
                                            starRatedColor="#008255"
                                        />
                                    </span>
                                    <span className="product-summary__star-rating-text">
                                        {editorRating.toFixed(1)} Editor's Rating
                                    </span>
                                </div>
                            </div>
                            <div className="product-key-details">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-3">
                                        <div className="product-key-details__column">
                                            <h5 className="product-key-details__heading">Availability</h5>
                                            <div className="product-key-details__text">
                                                <span>{geoAvailability} </span>
                                                {geoAvailabilityExceptions.length > 1 &&
                                                    <span>
                                                        (<GeoExceptionsPopup geoAvailabilityExceptions={geoAvailabilityExceptions} />)
                                                    </span>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-3">
                                        <div className="product-key-details__column">
                                            <h5 className="product-key-details__heading">Interest details</h5>
                                            <p className="product-key-details__text">{interestPayout}</p>
                                            <p className="product-key-details__text">{lockUpPeriod}</p>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-3">
                                        <div className="product-key-details__column">
                                            <h5 className="product-key-details__heading">Security</h5>
                                            {security.map((securityItem) => (
                                                <p className="product-key-details__text" key={securityItem}>{securityItem}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-3">
                                        <div className="product-key-details__column">
                                            <h5 className="product-key-details__heading product-key-details__heading--interest-rate">Interest rate</h5>
                                            {displayCurrencies.map((currency) => (
                                                <p className="product-key-details__text" key={currency}>
                                                    <span>{`${currency}: `}</span>
                                                    <span className="product-key-details__rate">{`${savingsInterestRate[currency]}%`}</span>
                                                </p>
                                            ))}
                                            {Object.keys(savingsInterestRate).length > 3 &&
                                                <AllCryptoRatesPopup savingsInterestRate={savingsInterestRate} />
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

export default ProductCardMini;
