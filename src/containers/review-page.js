// NPM Dependencies
import React from 'react';
import { useRouteData } from 'react-static';
import ReactMarkdown from 'react-markdown';
//
// import { Link } from 'components/Router';

export default function ReviewPage() {
    const { post } = useRouteData();
    const { title, description, rating, pros, cons, body } = post;

    return (
        <div className="review-page">
            <header className="header-section">
                <h5 className="header-section__editorial-text">Editorial Review</h5>
                <h1 className="header-section__title-text">{title}</h1>
                <div className="header-section__description-text">
                    <ReactMarkdown source={description} />
                </div>
            </header>
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
