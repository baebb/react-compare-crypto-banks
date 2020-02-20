// NPM Dependencies
import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from 'components/Router';

// Component Dependencies
import AllCryptoRatesPopup from './all-crypto-rates-popup';
import GeoExceptionsPopup from './geo-exceptions-popup';

// Utility Dependencies
import { productLogos } from '../selectors';

class ProductCard extends Component {
    // static propTypes = {
    // };
    // static defaultProps = {
    // };

    constructor(props) {
        super(props);

        this.state = {
            keyPointsExpand: false
        };
    }

    toggleKeyPointsExpand() {
        this.setState({
            keyPointsExpand: !this.state.keyPointsExpand
        });
    }

    render() {
        const { keyPointsExpand } = this.state;
        const { product, rating = 0, reviewLink = null } = this.props;
        const {
            id,
            title,
            companyName,
            keyPoints,
            geoAvailability,
            geoAvailabilityExceptions,
            interestPayout,
            lockUpPeriod,
            security,
            savingsInterestRate,
            displayCurrencies
        } = product;
        const displayKeyPoints = keyPointsExpand ? keyPoints : keyPoints.slice(0, 3);

        return (
            <div className="product-card" key={title}>
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
                                        {reviewLink ?
                                            <>
                                                <span className="product-summary__star-rating">
                                                    <StarRatings
                                                        rating={rating}
                                                        starDimension="22px"
                                                        starSpacing="1px"
                                                        starRatedColor="#008255"
                                                    />
                                                </span>
                                                <span className="product-summary__rating-number">
                                                    {rating.toFixed(1)}
                                                </span>
                                                <span className="product-summary__review-link">
                                                    <Link to={`/blog/${reviewLink}`} className="text-link">
                                                        Editor's Rating
                                                    </Link>
                                                </span>
                                            </>
                                            :
                                            <div className="product-summary__rating-placeholder">
                                                Review coming soon
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className="product-summary__cta-button">
                                    <a href="https://www.rossdyson.com" target="_blank">
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
                                <h3 className="product-summary__heading hide-mobile">{title}</h3>
                                <div className="product-summary__rating hide-mobile">
                                    {reviewLink ?
                                        <>
                                            <span className="product-summary__star-rating">
                                                <StarRatings
                                                    rating={rating}
                                                    starDimension="22px"
                                                    starSpacing="1px"
                                                    starRatedColor="#008255"
                                                />
                                            </span>
                                            <span className="product-summary__rating-number">
                                                {rating.toFixed(1)}
                                            </span>
                                            <span className="product-summary__review-link">
                                                <Link to={`/blog/${reviewLink}`} className="text-link">
                                                    Editor's Rating
                                                </Link>
                                            </span>
                                        </>
                                        :
                                        <div className="product-summary__rating-placeholder">
                                            Review coming soon
                                        </div>
                                    }
                                </div>
                                <ul className="product-summary__keypoint-list">
                                    {displayKeyPoints.map((item, id) =>
                                        <li key={id}><p>{item}</p></li>
                                    )}
                                </ul>
                                {keyPoints.length > 3 &&
                                    <button
                                        className="link-button link-button--read-more"
                                        onClick={() => this.toggleKeyPointsExpand()}
                                    >
                                        {keyPointsExpand ? 'Read Less' : 'Read More'}
                                    </button>
                                }
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
        );
    }
}

export default ProductCard;
