// NPM Dependencies
import React from 'react';
import { useRouteData, Head } from 'react-static';

// Utility Dependencies
import { safeGet } from '../selectors';

// Local Dependencies
import ReviewListItem from 'components/review-list-item';

// Data
const metaTitle = 'Blog Posts | Learn about crypto interest accounts and crypto loans';
const metaDescription = 'Our DeFi Nerd experts dig into the details of crypto interest accounts and crypto loans.';

export default function ReviewsHomePage() {
    const { blogPosts } = useRouteData();

    return (
        <div className="reviews-home-page">
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
            </Head>
            <div className="header-section">
                <h1 className="header-section__title-text">Blog posts</h1>
                <div className="header-section__description-text">{metaDescription}</div>
            </div>
            <div className="blog-post-section">
                <div className="row">
                    {blogPosts.map(({ fields: post }) => (
                        <div className="col-xs-12 col-sm-4 blog-post-tile-wrapper">
                            <div className="blog-post-tile">{post.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
