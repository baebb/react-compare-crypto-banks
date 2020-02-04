// NPM Dependencies
import 'dotenv/config';
import React from 'react';
// import path from 'path';
// import axios from 'axios';
const contentful = require('contentful');

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
                <meta property="og:image" content="http://some-react-static-website/img/OG_thumb.jpg" />
            </Head>
            <Body>{children}</Body>
        </Html>
    ),
    getRoutes: async () => {
        const contentAPI = contentful.createClient({
            space: process.env.CONTENTFUL_SPACE_ID_PROD,
            environment: process.env.CONTENTFUL_ENVIRONMENT_ID_PROD,
            accessToken: process.env.CONTENTFUL_KEY_PROD
        });

        // const { data: posts } = await axios.get(
        //     'https://jsonplaceholder.typicode.com/posts'
        // );

        const { items: posts } = await contentAPI.getEntries({
            content_type: 'blogPost'
        });

        return [
            {
                path: '/',
                template: 'src/pages/index'
            },
            {
                path: 'blog',
                template: 'src/pages/blog',
                getData: () => ({
                    posts,
                }),
                children: posts.map(({ fields: post }) => ({
                    path: `/${post.slug}`,
                    template: 'src/containers/review-page',
                    getData: () => ({
                        post,
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
