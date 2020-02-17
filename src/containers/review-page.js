// NPM Dependencies
import React from 'react';
import { useRouteData } from 'react-static';
import ReactMarkdown from 'react-markdown';

// Component Dependencies
import ProductCardMini from '../components/product-card-mini';

// Data
import items from '../demoData';

// Utility Dependencies
import { formatPublishDate } from '../selectors';

export default function ReviewPage() {
    const { post } = useRouteData();
    const { productId, title, description, author, publishDate, rating, pros, cons, body } = post;

    const { name: authorName } = author.fields;

    const productData = items.find(product => productId === product.id);
    const cleanPublishDate = formatPublishDate(publishDate);

    return (
        <div className="review-page">
            <header className="header-section">
                <h5 className="header-section__editorial-text">Editorial Review</h5>
                <h1 className="header-section__title-text">{title}</h1>
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
            </header>
            <div className="review-summary-section">
                <h2>Our Take</h2>
                <ProductCardMini product={productData} />
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
            <div className="review-body-section">
                <ReactMarkdown source={body} />
            </div>
        </div>
    );
}
