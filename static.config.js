// NPM Dependencies
import 'dotenv/config';
import React from 'react';
import axios from 'axios';
const contentful = require('contentful');
const path = require('path');

const buildEnv = process.env.BUILD_ENV || 'prod';

const config = {
    prod: {
        SITE_URL: 'https://www.defi-nerd.com',
        CONTENTFUL_KEY: process.env.CONTENTFUL_KEY_PROD,
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID_PROD,
        GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID_PROD,
        LOANSCAN_KEY_PROD: process.env.LOANSCAN_KEY_PROD
    },
    staging: {
        SITE_URL: 'https://compare-crypto-banks-staging.firebaseapp.com',
        CONTENTFUL_KEY: process.env.CONTENTFUL_KEY_STAGING,
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID_STAGING,
        GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID_STAGING,
        LOANSCAN_KEY_PROD: process.env.LOANSCAN_KEY_PROD
    },
    test: {
        SITE_URL: 'https://compare-crypto-banks-test.firebaseapp.com',
        CONTENTFUL_KEY: process.env.CONTENTFUL_KEY_TEST,
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID_TEST,
        GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID_STAGING,
        LOANSCAN_KEY_PROD: process.env.LOANSCAN_KEY_PROD
    },
    local: {
        SITE_URL: 'http://localhost:3000',
        CONTENTFUL_KEY: process.env.CONTENTFUL_KEY_PROD,
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID_PROD,
        GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID_STAGING,
        LOANSCAN_KEY_PROD: process.env.LOANSCAN_KEY_PROD
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
            environment: 'master'
        });

        const loanScanApi = axios.create({
            baseURL: 'https://api.loanscan.io/v1',
            timeout: 16000,
            headers: {
                "x-api-key": config[buildEnv].LOANSCAN_KEY_PROD
            }
        });

        const { data: rates } = await loanScanApi.get('/interest-rates');

        // const { items: companies } = await contentAPI.getEntries({
        //     content_type: 'company'
        // });

        const { items: interestAccounts } = await contentAPI.getEntries({
            content_type: 'interestAccount'
        });

        const { items: reviews } = await contentAPI.getEntries({
            content_type: 'review'
        });

        const { items: legalPages } = await contentAPI.getEntries({
            content_type: 'legalTextPage'
        });

        const { items: blogPosts } = await contentAPI.getEntries({
            content_type: 'blogPost'
        });

        const privacyPage = legalPages.find(({ fields }) => fields.pageType === 'privacy');

        return [
            {
                path: '/',
                template: 'src/pages/home-page',
            },
            {
                path: 'compare-crypto-interest-accounts',
                template: 'src/pages/interest-accounts-page',
                getData: () => ({
                    reviews,
                    interestAccounts,
                    rates
                }),
            },
            {
                path: 'crypto-interest-accounts',
                redirect: 'compare-crypto-interest-accounts',
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
                    interestAccounts,
                    rates
                }),
                children: reviews.map(({ fields: review }) => ({
                    path: `/${review.slug}`,
                    template: 'src/containers/review-page',
                    getData: () => ({
                        review,
                        interestAccounts,
                        rates
                    }),
                })),
            },
            {
                path: 'blog',
                redirect: '404',
                children: blogPosts.map(({ fields: blogPost }) => ({
                    path: `/${blogPost.slug}`,
                    template: 'src/containers/blog-post-page',
                    getData: () => ({
                        blogPost,
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
            {
                inputFile: path.resolve('./public/images/logo/DN-logo-eye-only.png'),
                configuration: {
                    start_url: '/',
                    icons: {
                        android: true,
                        appleIcon: true,
                        appleStartup: false,
                        coast: false,
                        favicons: true,
                        firefox: false,
                        windows: false,
                        yandex: false
                    }
                }
            },
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
