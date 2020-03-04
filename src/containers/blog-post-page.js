// NPM Dependencies
import React from 'react';
import { useRouteData, Head } from 'react-static';
import ReactMarkdown from 'react-markdown';

// Utility Dependencies
import { formatPublishDate } from '../selectors';

export default function BlogPostPage() {
    const { blogPost } = useRouteData();
    const {
        title: postTitle,
        metaDescription = '',
        description,
        author,
        publishDate,
        body
    } = blogPost;
    const { name: authorName } = author.fields;

    const cleanPublishDate = formatPublishDate(publishDate);
    const metaTitle = `${postTitle} | DeFi Nerd`;

    return (
        <div className="blog-post-page">
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
            </Head>
            <div className="header-section">
                <h5 className="header-section__editorial-text">Blog Post</h5>
                <h1 className="header-section__title-text">{postTitle}</h1>
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
        </div>
    );
};
