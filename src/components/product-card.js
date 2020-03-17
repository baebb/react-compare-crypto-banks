// NPM Dependencies
import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from 'components/Router';

// Component Dependencies
import AllCryptoRatesPopup from './all-crypto-rates-popup';

// Utility Dependencies
import { chooseDisplayCurrencies } from '../selectors';

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
            productTitle,
            company,
            links,
            keyPoints,
            geoExceptions = [],
            security,
            interestPayout,
            compounding,
            terms,
            interestRates
        } = product;
        const { fields: companyData } = company;
        const {
            name: companyName,
            id,
            logo
        } = companyData;

        const logoUrl = logo.fields.file.url;
        const logoName = logo.fields.title;
        const productLink = links.default;

        const displayKeyPoints = keyPointsExpand ? keyPoints : keyPoints.slice(0, 3);
        const displayCurrencies = chooseDisplayCurrencies(interestRates);

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
                                                    <Link to={`/reviews/${reviewLink}`} className="text-link">
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
                                                <Link to={`/reviews/${reviewLink}`} className="text-link">
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
                                <h5 className="product-key-details__heading">Security</h5>
                                {security.map((securityItem) => (
                                    <p className="product-key-details__text" key={securityItem}>{securityItem}</p>
                                ))}
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            <div className="product-key-details__column">
                                <h5 className="product-key-details__heading product-key-details__heading--interest-rate">Interest rates</h5>
                                {displayCurrencies.map((currency) => (
                                    <p className="product-key-details__text" key={currency}>
                                        <span>{`${currency}: `}</span>
                                        <span className="product-key-details__rate">{`${interestRates[currency]}%`}</span>
                                    </p>
                                ))}
                                {Object.keys(interestRates).length > 3 &&
                                    <AllCryptoRatesPopup savingsInterestRate={interestRates} />
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
