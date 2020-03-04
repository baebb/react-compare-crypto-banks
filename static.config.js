// NPM Dependencies
import 'dotenv/config';
import React from 'react';
const contentful = require('contentful');
const path = require('path');

const buildEnv = process.env.BUILD_ENV || 'prod';

const config = {
    prod: {
        SITE_URL: 'https://www.defi-nerd.com',
        CONTENTFUL_KEY: process.env.CONTENTFUL_KEY_PROD,
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID_PROD,
        GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID_PROD
    },
    staging: {
        SITE_URL: 'https://compare-crypto-banks-staging.firebaseapp.com/',
        CONTENTFUL_KEY: process.env.CONTENTFUL_KEY_STAGING,
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID_STAGING,
        GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID_STAGING
    },
    test: {
        SITE_URL: 'https://compare-crypto-banks-test.firebaseapp.com/',
        CONTENTFUL_KEY: process.env.CONTENTFUL_KEY_TEST,
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID_TEST,
        GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID_STAGING
    }
};

export default {
    siteRoot: config[buildEnv].SITE_URL,
    Document: ({
        Html,
        Head,
        Body,
        children,
        state: { siteData, renderMeta },
    }) => {
        return (
            <Html lang="en-US">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta property="og:url" content="https://www.defi-nerd.com" />
                    <meta property="og:type" content="website" />
                    {/*<meta property="og:image" content="http://some-react-static-website/img/OG_thumb.jpg" />*/}
                </Head>
                <Body>{children}</Body>
            </Html>
        );
    },
    getRoutes: async () => {
        const contentAPI = contentful.createClient({
            accessToken: config[buildEnv].CONTENTFUL_KEY,
            space: config[buildEnv].CONTENTFUL_SPACE_ID,
            environment: 'master',
            // environment: process.env.CONTENTFUL_ENVIRONMENT_ID_PROD,
        });

        const { items: reviews } = await contentAPI.getEntries({
            content_type: 'review'
        });

        const { items: legalPages } = await contentAPI.getEntries({
            content_type: 'legalTextPage'
        });

        const privacyPage = legalPages.find(({ fields }) => fields.pageType === 'privacy');

        return [
            {
                path: '/',
                template: 'src/pages/home-page',
            },
            {
                path: 'crypto-interest-accounts',
                template: 'src/pages/interest-accounts-page',
                getData: () => ({
                    reviews,
                }),
            },
            {
                path: 'privacy',
                template: 'src/pages/privacy-page',
                getData: () => ({
                    privacyPage,
                }),
            },
            {
                path: 'reviews',
                template: 'src/pages/reviews-home-page',
                getData: () => ({
                    reviews,
                }),
                children: reviews.map(({ fields: review }) => ({
                    path: `/${review.slug}`,
                    template: 'src/containers/review-page',
                    getData: () => ({
                        review,
                    }),
                })),
            },
            // A 404 component
            {
                path: '404',
                template: 'src/pages/404-page',
            }
        ];
    },
    plugins: [
        [
            'react-static-plugin-favicons',
            { inputFile: path.resolve('./public/images/logo/ccb-temp-icon.svg') },
        ],
        [
            require.resolve('react-static-plugin-google-tag-manager'),
            { id: config[buildEnv].GOOGLE_TAG_MANAGER_ID }
        ],
        require.resolve('react-static-plugin-sass'),
        require.resolve('react-static-plugin-reach-router'),
        require.resolve('react-static-plugin-sitemap')
    ],
};
