// NPM Dependencies
import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

import BlockFiLogo from "../blockfi.png";

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
        const {
            keyPointsExpand
        } = this.state;
        const {
            title,
            companyName,
            keyPoints,
            editorRating,
            geoAvailability,
            interestPayout,
            lockUpPeriod,
            minimums,
            savingsInterestRate,
        } = this.props.product;
        const displayKeyPoints = keyPointsExpand ? keyPoints : keyPoints.slice(0, 3);

        return (
            <div className="product-card" key={title}>
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
                                <div className="product-summary__rating">
                                    <span>{editorRating.toFixed(1)} Editor's Rating</span>
                                    <span className="product-summary__star-rating">
                                        <StarRatings
                                            rating={editorRating}
                                            starDimension="22px"
                                            starSpacing="1px"
                                            starRatedColor="#008255"
                                        />
                                    </span>
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
                            <div className=" product-key-details__column">
                                <h5 className="product-key-details__heading">Availability</h5>
                                <p className="product-key-details__text">{geoAvailability}</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            <div className=" product-key-details__column">
                                <h5 className="product-key-details__heading">Interest details</h5>
                                <p className="product-key-details__text">{interestPayout}</p>
                                {/*<p className="product-key-details__text">{`Paid in ${payoutCurrencies.join(', ')}`}</p>*/}
                                <p className="product-key-details__text">{lockUpPeriod}</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            <div className=" product-key-details__column">
                                <h5 className="product-key-details__heading">Minimum deposit</h5>
                                {minimums === 'none' ?
                                    <p className="product-key-details__text">None</p>
                                    :
                                    (Object.keys(minimums).map((key) => (
                                        <p className="product-key-details__text" key={key}>
                                            <span>{`${key}: `}</span>
                                            <span className="product-key-details__rate">{`${minimums[key]}`}</span>
                                        </p>
                                    )))
                                }
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            <div className=" product-key-details__column">
                                <h5 className="product-key-details__heading">Interest rate</h5>
                                {Object.keys(savingsInterestRate).map((key) => (
                                    <p className="product-key-details__text" key={key}>
                                        <span>{`${key}: `}</span>
                                        <span className="product-key-details__rate">{`${savingsInterestRate[key]}%`}</span>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCard;
