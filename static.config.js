import React from 'react';
import path from 'path';
import axios from 'axios';

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
        const { data: posts } = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        );

        return [
            {
                path: '/blog',
                getData: () => ({
                    posts,
                }),
                // children: posts.map(post => ({
                //     path: `/post/${post.id}`,
                //     template: 'src/containers/Post',
                //     getData: () => ({
                //         post,
                //     }),
                // })),
            },
        ];
    },
    plugins: [
        [
            require.resolve('react-static-plugin-source-filesystem'),
            {
                location: path.resolve('./src/pages'),
            },
        ],
        require.resolve('react-static-plugin-reach-router'),
        require.resolve('react-static-plugin-sitemap'),
    ],
};
