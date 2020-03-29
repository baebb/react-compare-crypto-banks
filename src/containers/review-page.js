// NPM Dependencies
import React from 'react';
import { useRouteData, Head } from 'react-static';
import ReactMarkdown from 'react-markdown';
import StarRatings from 'react-star-ratings';

// Component Dependencies
import ProductCardMini from '../components/product-card-mini';

// Utility Dependencies
import { formatPublishDate, getRealTimeInterestRates, safeGet } from '../selectors';

export default function ReviewPage() {
    const { review, interestAccounts, rates } = useRouteData();
    const {
        title: reviewTitle,
        metaDescription = '',
        description,
        author,
        publishDate,
        rating,
        pros,
        cons,
        body,
    } = review;
    const { name: authorName } = author.fields;

    const companySysId = safeGet(['company', 'sys', 'id'], review);
    const companyId = safeGet(['company', 'fields', 'id'], review);

    const { fields: interestAccount } = interestAccounts.find(({ fields: item }) =>
        safeGet(['company', 'sys', 'id'], item) === companySysId);
    const realTimeRates = getRealTimeInterestRates(rates);
    const { productTitle } = interestAccount;
    const cleanPublishDate = formatPublishDate(publishDate);
    // console.log('realTimeRates', realTimeRates);
    // console.log('const companyId', companyId);

    const metaTitle = `${productTitle} Review | DeFi Nerd`;

    return (
        <div className="review-page">
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
            </Head>
            <div className="header-section">
                <h5 className="header-section__editorial-text">Editorial Review</h5>
                <h1 className="header-section__title-text">{reviewTitle}</h1>
                <div className="header-section__description-text">
                    <ReactMarkdown source={description} />
                </div>
                <div className="header-section__review-details">
                    <span className="header-section__author-name">
                        {authorName}
                    </span>
                    <span className="header-section__publish-time">
                        {cleanPublishDate}
                    </span>
                </div>
            </div>
            <div className="review-summary-section">
                <h2>Our Take</h2>
                <div className="review-summary-section__rating-wrapper">
                    <div className="review-summary-section__rating-number">
                        {rating.toFixed(1)}
                    </div>
                    <div>
                        <div className="review-summary-section__rating-text">
                            Editor's rating
                        </div>
                        <StarRatings
                            rating={rating}
                            starDimension="22px"
                            starSpacing="1px"
                            starRatedColor="#008255"
                        />
                    </div>
                </div>
                <ProductCardMini
                    product={interestAccount}
                    rating={rating}
                    realTimeRates={realTimeRates[companyId]}
                />
            </div>
            <div className="pros-cons-section">
                <h2 className="pros-cons-section__title">Pros & Cons</h2>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 pros-cons-section__list">
                        <h4>Pros</h4>
                        <ReactMarkdown source={pros} />
                    </div>
                    <div className="col-xs-12 col-sm-6 pros-cons-section__list">
                        <h4>Cons</h4>
                        <ReactMarkdown source={cons} />
                    </div>
                </div>
            </div>
            <div className="body-section">
                <ReactMarkdown source={body} />
            </div>
        </div>
    );
}
