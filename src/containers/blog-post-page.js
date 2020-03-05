// NPM Dependencies
import React from 'react';
import { useRouteData, Head } from 'react-static';
import ReactMarkdown from 'react-markdown';
import { Link } from 'components/Router';

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
    const bannerTitle = 'Compare crypto savings accounts';
    const bannerText = 'DeFi Nerd ranks the highest earning crypto interest accounts. Apply and earn up to 12% p.a. on your crypto today';

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
            <div className="banner-section">
                <div className="hide-mobile">
                    <Link to="/compare-crypto-interest-accounts">
                        <div className="banner-card">
                            <div className="row">
                                <div className="col-xs-12 col-sm-8">
                                    <h3 className="banner-card__heading">{bannerTitle}</h3>
                                    <div className="banner-card__text">{bannerText}</div>
                                </div>
                                <div className="col-xs-12 col-sm-4 hide-mobile">
                                    <div className="banner-card__button-wrapper">
                                        <button type="button" className="callout-button callout-button--primary">
                                            View comparisons
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="hide-desktop">
                    <div className="banner-card">
                        <div className="row">
                            <div className="col-xs-12 col-sm-8">
                                <h3 className="banner-card__heading">{bannerTitle}</h3>
                                <div className="banner-card__text">{bannerText}</div>
                                <div className="banner-card__text-link">
                                    <Link to="/compare-crypto-interest-accounts" className="text-link">
                                        View comparisons →
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 hide-mobile">
                                <div className="banner-card__button-wrapper">
                                    <button type="button" className="callout-button callout-button--primary">
                                        View comparisons
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-section">
                <ReactMarkdown source={body} />
            </div>
        </div>
    );
};
