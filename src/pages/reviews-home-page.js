// NPM Dependencies
import React from 'react';
import { useRouteData, Head } from 'react-static';

// Utility Dependencies
import { getRealTimeInterestRates, safeGet } from '../selectors';

// Local Dependencies
import ReviewListItem from 'components/review-list-item';

// Data
const metaTitle = 'Reviews | Crypto Interest Accounts, Loans and Credit Cards';
const metaDescription = 'Our DeFi Nerd experts review the most popular crypto interest accounts, loans and credit cards on the market - and turn up a few gems you may never have heard of';

export default function ReviewsHomePage() {
    const { reviews, interestAccounts, loans, rates } = useRouteData();
    const realTimeRates = getRealTimeInterestRates(rates);

    return (
        <div className="reviews-home-page">
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
            </Head>
            <div className="header-section">
                <h1 className="header-section__title-text">Reviews by DeFi Nerd experts</h1>
                <div className="header-section__description-text">Our DeFi Nerd experts break down the most popular crypto interest accounts, loans, and credit cards on the market — and turn up a few gems you may never have heard of</div>
            </div>
            <div className="interest-accounts-section">
                <div className="interest-accounts-section__reviews-list">
                    <div className="row interest-accounts-section__reviews-list-column-titles">
                        <div className="col-xs-4">Name</div>
                        <div className="col-xs-3 col-sm-1">Score</div>
                        <div className="col-xs-5 col-sm-7">Details</div>
                    </div>
                    {reviews.map(({ fields: review }) => {
                        const companySysId = safeGet(['company', 'sys', 'id'], review);
                        const companyId = safeGet(['company', 'fields', 'id'], review);
                        const companyName = safeGet(['company', 'fields', 'name'], review);
                        const realTimeRate = realTimeRates[companyId];

                        const interestAccountContent = interestAccounts.find(item =>
                            safeGet(['fields', 'company', 'sys', 'id'], item) === companySysId);
                        const interestAccount = interestAccountContent ? interestAccountContent.fields : null;

                        const loanContent = loans.find(item =>
                            safeGet(['fields', 'company', 'sys', 'id'], item) === companySysId);
                        const loan = loanContent ? loanContent.fields : null;

                        return (
                            <ReviewListItem
                                key={review.slug}
                                review={review}
                                companyName={companyName}
                                interestAccount={interestAccount}
                                loan={loan}
                                realTimeRate={realTimeRate}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
