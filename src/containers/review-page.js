// NPM Dependencies
import React from 'react';
import { useRouteData } from 'react-static';
import ReactMarkdown from 'react-markdown';
//
// import { Link } from 'components/Router';

export default function ReviewPage() {
    const { post } = useRouteData();
    const { title, description, body } = post;

    return (
        <div className="review-page">
            <header className="header-section">
                <h5 className="header-section__editorial-text">Editorial Review</h5>
                <h1 className="header-section__title-text">{title}</h1>
                <div className="header-section__description-text">
                    <ReactMarkdown source={description} />
                </div>
            </header>
            <div className="post-body">
                <ReactMarkdown source={body} />
            </div>
        </div>
    );
}
