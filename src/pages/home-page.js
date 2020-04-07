// NPM Dependencies
import React from 'react';
import { Head } from 'react-static';

// Component Dependencies
import LinkTile from '../components/link-tile';

// Data
const metaTitle = 'DeFi Nerd: Easily Compare DeFi and Crypto Financial Services';
const heading = 'Make all the right money moves.';
const subHeading = 'Need expert advice, helpful tools and tailored insights to answer your DeFi questions? Turn to the Nerds.';
const subSubHeading = 'Easily compare tons of options to find your best';

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
                    <h2>{heading}</h2>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                        <div className="intro-section__sub-heading">
                            {subHeading}
                        </div>
                    </div>
                </div>
            </div>
            <div className="links-section">
                <h4 className="links-section__heading">
                    {subSubHeading}
                </h4>
                <div className="row center-xs">
                    <LinkTile linkId="interestAccounts" />
                    <LinkTile linkId="loans" />
                </div>
            </div>
        </div>
    );
};

