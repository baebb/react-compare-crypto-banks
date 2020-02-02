// NPM Dependencies
import React from 'react';
import { useRouteData } from 'react-static';
import ReactMarkdown from 'react-markdown';
//
import { Link } from 'components/Router';

export default function Post() {
    const { post } = useRouteData();
    const { title, body } = post;

    return (
        <div className="content">
            <Link to="/blog/">{'<'} Back</Link>
            <br />
            <div className="blog-post-section">
                <ReactMarkdown source={body} />
            </div>
        </div>
    );
}
