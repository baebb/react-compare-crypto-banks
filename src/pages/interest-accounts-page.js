// NPM Dependencies
import React from 'react';
import { useRouteData, Head } from 'react-static';

// Component Dependencies
import ProductCard from '../components/product-card';

// Utility Dependencies
import { getReviewScores, getReviewLinks } from '../selectors';

// Data
import { sortedProducts } from '../demoData';
const heading = 'Grow your crypto portfolio ';
const calloutWord = 'passively';

export default function InterestAccountsPage() {
    const { reviews } = useRouteData();

    const reviewScores = getReviewScores(reviews);
    const reviewLinks = getReviewLinks(reviews);
    const productsCount = sortedProducts.length;

    const metaTitle = `Crypto Interest Accounts | Up to 12% p.a. (Compare ${productsCount} Offers)`;
    const metaDescription = `DeFi Nerd ranks ${productsCount} of the highest earning crypto interest accounts. Apply and earn up to 12% p.a. on your crypto today`;

    return (
        <div className="interest-accounts-page">
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
            </Head>
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
                            {metaDescription}
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
