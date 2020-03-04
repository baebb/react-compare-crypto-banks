// NPM Dependencies
import React from 'react';
import { Head } from 'react-static';

// Data
const metaTitle = '404 Not Found | DeFi Nerd';
const metaDescription = '404 - Oh no! We couldn\'t find that page :(';

export default function NotFoundPage() {
    return (
        <div className="static-page">
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
            </Head>
            <h1>{metaDescription}</h1>
        </div>
    );
};
