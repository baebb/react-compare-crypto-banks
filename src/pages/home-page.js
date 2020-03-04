// NPM Dependencies
import React from 'react';
import { Head } from 'react-static';

// Data
const metaTitle = 'DeFi Nerd: Easily Compare DeFi and Crypto Financial Services';
const heading = 'Make all the right money moves.';
const subHeading = 'Need expert advice, helpful tools and tailored insights to answer your DeFi questions? Turn to the Nerds.';

export default function HomePage() {
    return (
        <div className="home-page">
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={subHeading} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={subHeading} />
            </Head>
            <div className="intro-section">
                <div className="intro-section__heading">
                    <h2>
                        {heading}
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                        <div className="intro-section__sub-heading">
                            {subHeading}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

