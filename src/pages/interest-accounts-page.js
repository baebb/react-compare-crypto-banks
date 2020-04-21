// NPM Dependencies
import React from 'react';
import { useRouteData, Head } from 'react-static';

// Component Dependencies
import InterestProductCard from '../components/interest-product-card';

// Utility Dependencies
import { getReviewScores, getReviewLinks, getRealTimeInterestRates, sortForMoney, safeGet } from '../selectors';

// Data
const heading = 'Compare Crypto Interest Accounts';
const tilePoints = [
    'Earn high interest on BTC, ETH, USD, Euros, and other crypto assets',
    'Find crypto interest account terms that suit you and your circumstances',
    'Learn more about services with our in-depth reviews of crypto interest accounts'
];

export default function InterestAccountsPage() {
    const { reviews, interestAccounts, rates, reviewScores } = useRouteData();

    const realTimeRates = getRealTimeInterestRates(rates);
    const reviewScoreValues = safeGet(['fields', 'values'], reviewScores);
    const reviewLinks = getReviewLinks(reviews);
    const productsCount = interestAccounts.length;
    const sortedInterestAccounts = sortForMoney(interestAccounts);

    const metaTitle = `Crypto Interest Accounts | Up to 12% p.a. | Compare ${productsCount} Offers`;
    const metaDescription = `DeFi Nerd ranks ${productsCount} of the highest earning crypto interest accounts. Apply and earn up to 12% p.a. on your crypto today.`;

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
                    <h1>
                        {heading}
                    </h1>
                </div>
                <div className="intro-section__sub-heading">
                    <div className="row">
                        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                            {metaDescription}
                        </div>
                    </div>
                </div>
            </div>
            <div className="tile-points-section">
                <div className="row center-xs">
                    {tilePoints.map(text => (
                        <div className="col-xs-12 col-sm-3">
                            <div className="tile-point">
                                <div className="tile-point__icon">
                                    <span role="img" aria-label="tick-emoji">✅</span>
                                </div>
                                <div className="tile-point__text">
                                    {text}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="banner-section">
            </div>
            <div className="products-section">
                {sortedInterestAccounts.map(({ fields: interestAccount }) =>
                    <InterestProductCard
                        product={interestAccount}
                        key={interestAccount.productTitle}
                        realTimeRate={realTimeRates[interestAccount.company.fields.id]}
                        rating={reviewScoreValues[interestAccount.company.fields.id]}
                        reviewLink={reviewLinks[interestAccount.company.fields.id]}
                    />
                )}
            </div>
        </div>
    );
};
