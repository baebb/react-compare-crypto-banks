// NPM Dependencies
import React from 'react';
import { useRouteData } from 'react-static';

// Local Dependencies
import { Link } from 'components/Router';
import ReviewListItem from 'components/review-list-item';

export default function ReviewsHomePage() {
    const { reviews } = useRouteData();

    console.log('reviews', reviews);

    return (
        <div className="reviews-home-page">
            <header className="header-section">
                <h1 className="header-section__title-text">Reviews by DeFi Nerd experts</h1>
                <div className="header-section__description-text">Our DeFi Nerd experts break down the most popular crypto financial service products on the market — and turn up a few gems you may never have heard of</div>
            </header>
            <div className="interest-accounts-section">
                <h2>Interest account reviews</h2>
                <div className="interest-accounts-section__reviews-list">
                    <div className="row interest-accounts-section__reviews-list-column-titles">
                        <div className="col-xs-4">Name</div>
                        <div className="col-xs-5 col-sm-6">Details</div>
                        <div className="col-xs-3 col-sm-2">Score</div>
                    </div>
                    {reviews.map(({ fields: review }) => (
                        <ReviewListItem review={review} key={review.slug} />
                    ))}
                </div>
            </div>
        </div>
    );
}
