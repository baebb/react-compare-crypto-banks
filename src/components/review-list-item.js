// NPM Dependencies
import React from 'react';

// Local Dependencies
import { Link } from 'components/Router';

// Data
import { items } from '../demoData';

const ReviewListItem = ({ review }) => {
    const { productId, slug, rating } = review;
    const productData = items.find(product => productId === product.id);
    const {
        title,
        displayCurrencies,
        savingsInterestRate,
        geoAvailability,
        geoAvailabilityExceptions
    } = productData;

    return (
        <div className="interest-accounts-section__review-list-item">
            <div className="row">
                <div className="col-xs-4">
                    <Link to={`/reviews/${slug}/`}>{title}</Link>
                </div>
                <div className="col-xs-5 col-sm-6 interest-accounts-section__review-list-item-details">
                    <div className="interest-accounts-section__review-list-item-rates">
                        <span className="interest-accounts-section__review-list-item-details-title">
                            Interest rates:
                        </span>&nbsp;
                        {displayCurrencies.map((currency) => (
                            <span key={currency}>{`${currency}: ${savingsInterestRate[currency]}% `}</span>
                        ))}
                        {Object.keys(savingsInterestRate).length > 3 &&
                            <span>+more</span>
                        }
                    </div>
                    <div className="interest-accounts-section__review-list-item-availability">
                        <span className="interest-accounts-section__review-list-item-details-title">
                            Availability:
                        </span>&nbsp;
                        {geoAvailabilityExceptions.length > 1 ?
                            <span>
                                {`${geoAvailability} except `}
                                {geoAvailabilityExceptions.join(', ')}
                            </span>
                            :
                            <span>{geoAvailability}</span>
                        }
                    </div>
                </div>
                <div className="col-xs-3 col-sm-2 interest-accounts-section__review-list-item-score">
                    {rating}
                </div>
            </div>
        </div>
    );
};

export default ReviewListItem;
