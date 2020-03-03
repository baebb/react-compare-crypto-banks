// NPM Dependencies
import React from 'react';
import { useRouteData } from 'react-static';

// Component Dependencies
import ProductCard from '../components/product-card';

// Utility Dependencies
import { getReviewScores, getReviewLinks } from '../selectors';

// Data
import { sortedProducts } from '../demoData';
const heading = 'Grow your crypto portfolio ';
const calloutWord = 'passively';
const subHeading = 'Crypto banks allows crypto investors to earn compound interest on their crypto assets and grow their wealth. DeFi Nerd to find the best bank for your needs.';

export default function InterestAccountsPage() {
    const { reviews } = useRouteData();

    const reviewScores = getReviewScores(reviews);
    const reviewLinks = getReviewLinks(reviews);

    return (
        <div className="interest-accounts-page">
            <div className="intro-section">
                <div className="intro-section__heading">
                    <h2>
                        {heading}
                        <span className="calloutText">{calloutWord}</span>
                    </h2>
                </div>
                <div className="intro-section__sub-heading">
                    <div className="row">
                        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                            {subHeading}
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-section">
            </div>
            <div className="products-section">
                {sortedProducts.map(product =>
                    <ProductCard
                        product={product}
                        key={product.id}
                        rating={reviewScores[product.id]}
                        reviewLink={reviewLinks[product.id]}
                    />
                )}
            </div>
        </div>
    );
};
