// NPM Dependencies
import 'dotenv/config';
import React from 'react';

const contentful = require('contentful');

const buildEnv = process.env.BUILD_ENV || 'staging';

const config = {
    prod: {
        CONTENTFUL_KEY: process.env.CONTENTFUL_KEY_PROD,
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID_PROD
    },
    staging: {
        CONTENTFUL_KEY: process.env.CONTENTFUL_KEY_PROD,
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID_PROD
    },
    test: {
        CONTENTFUL_KEY: process.env.CONTENTFUL_KEY_TEST,
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID_TEST
    }
};

export default {
    Document: ({
        Html,
        Head,
        Body,
        children,
        state: { siteData, renderMeta },
    }) => (
        <Html lang="en-US">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Compare Crypto Banks</title>
                <meta property="og:title" content="Compare Crypto Banks" />
                <meta property="og:url" content="https://www.comparecryptobanks.com" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Easily compare crypto finance: Compare all crypto saving accounts and crypto loans" />
                {/*<meta property="og:image" content="http://some-react-static-website/img/OG_thumb.jpg" />*/}

                <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-16x16.png" />
                <link rel="manifest" href="./favicon/site.webmanifest" />
                <link rel="mask-icon" href="./favicon/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#00a300" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <Body>{children}</Body>
        </Html>
    ),
    getRoutes: async () => {
        const contentAPI = contentful.createClient({
            accessToken: config[buildEnv].CONTENTFUL_KEY,
            space: config[buildEnv].CONTENTFUL_SPACE_ID,
            environment: 'master',
            // environment: process.env.CONTENTFUL_ENVIRONMENT_ID_PROD,
        });

        // const { data: posts } = await axios.get(
        //     'https://jsonplaceholder.typicode.com/posts'
        // );

        const { items: reviews } = await contentAPI.getEntries({
            content_type: 'review'
        });

        return [
            {
                path: '/',
                template: 'src/pages/index',
                getData: () => ({
                    reviews,
                }),
            },
            {
                path: 'blog',
                template: 'src/pages/blog',
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
                template: 'src/pages/404',
            }
        ];
    },
    plugins: [
        // [
        //     require.resolve('react-static-plugin-source-filesystem'),
        //     {
        //         location: path.resolve('./src/pages'),
        //     },
        // ],
        [
            require.resolve('react-static-plugin-google-tag-manager'),
            {
                id: 'GTM-NXRNKXK'
            }
        ],
        require.resolve('react-static-plugin-sass'),
        require.resolve('react-static-plugin-reach-router'),
        require.resolve('react-static-plugin-sitemap')
    ],
};
