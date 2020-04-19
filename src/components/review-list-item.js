// NPM Dependencies
import React from 'react';

// Local Dependencies
import { Link } from 'components/Router';

// Util Dependencies
import { chooseDisplayCurrencies, formatLoanScanRates } from '../selectors';

const ReviewListItem = ({ review, interestAccount, loans, companyName, realTimeRate = null }) => {
    const { slug, rating } = review;
    const { productTitle, interestRates, geoExceptions = [] } = interestAccount;

    const rates = realTimeRate ? formatLoanScanRates(realTimeRate) : interestRates;
    const displayCurrencies = chooseDisplayCurrencies(rates);

    return (
        <div className="interest-accounts-section__review-list-item">
            <div className="row">
                <div className="col-xs-4">
                    <Link to={`/reviews/${slug}`}>{companyName} Review</Link>
                </div>
                <div className="col-xs-3 col-sm-1 interest-accounts-section__review-list-item-score">
                    {rating}
                </div>
                <div className="col-xs-5 col-sm-7 interest-accounts-section__review-list-item-details">
                    <div className="interest-accounts-section__review-list-item-rates">
                        <div className="interest-accounts-section__review-list-item-details-title">
                            Interest rates:
                        </div>
                        <div>
                            {displayCurrencies.map((currency) => (
                                <span key={currency}>{`${currency}: ${rates[currency]}% `}</span>
                            ))}
                            {Object.keys(rates).length > 3 &&
                                <span>+more</span>
                            }
                        </div>
                    </div>
                    <div className="interest-accounts-section__review-list-item-availability">
                        <div className="interest-accounts-section__review-list-item-details-title">
                            Availability:
                        </div>
                        <div>
                            {geoExceptions.length > 1 ?
                                <div>
                                    <span>Not available in: </span>
                                    {geoExceptions.join(', ')}
                                </div>
                                :
                                <div>Worldwide</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewListItem;
