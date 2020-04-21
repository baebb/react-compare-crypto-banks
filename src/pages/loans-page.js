// NPM Dependencies
import React from 'react';
import { useRouteData, Head } from 'react-static';

// Component Dependencies
import LoanProductCard from '../components/loan-product-card';

// Utility Dependencies
import { getReviewScores, getReviewLinks, getRealTimeInterestRates, sortForMoney, safeGet } from '../selectors';

// Data
const heading = 'Compare Crypto Loans';
const tilePoints = [
    'Avoid capital gains tax on your assets by getting a crypto loan instead of selling',
    'Receive stablecoins, USD, or EUR in exchange for crypto collateral',
    'Learn more about services with our in-depth reviews of crypto loans'
];

export default function LoansPage() {
    const { reviews, loans, rates, reviewScores } = useRouteData();

    // const realTimeRates = getRealTimeInterestRates(rates);
    const reviewScoreValues = safeGet(['fields', 'values'], reviewScores);
    const reviewLinks = getReviewLinks(reviews);
    const productsCount = loans.length;
    const sortedLoans = sortForMoney(loans);

    const metaTitle = `Compare Crypto Loans | DeFi Nerd`;
    const metaDescription = `DeFi Nerd compares the top ${productsCount} crypto loans from Compound, BlockFi, & others to reduce the cost of your loan and maximise your upside.`;

    return (
        <div className="loans-page">
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
            </Head>
            <div className="intro-section">
                <div className="intro-section__heading">
                    <h1>{heading}</h1>
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
                {sortedLoans.map(({ fields: loan }) =>
                    <LoanProductCard
                        product={loan}
                        rating={reviewScoreValues[loan.company.fields.id]}
                        reviewLink={reviewLinks[loan.company.fields.id]}
                    />
                )}
            </div>
        </div>
    );
};
