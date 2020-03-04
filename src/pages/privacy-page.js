// NPM Dependencies
import React from 'react';
import { useRouteData, Head } from 'react-static';
import ReactMarkdown from 'react-markdown';

// Data
const metaTitle = 'Privacy Policy | DeFi Nerd';
const metaDescription = '';

export default function PrivacyPage() {
    const { privacyPage } = useRouteData();

    const { body } = privacyPage.fields;

    return (
        <div className="static-page">
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
            </Head>
            <ReactMarkdown source={body} />
        </div>
    );
}
