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
        <div>
            <Link to="/blog/">{'<'} Back</Link>
            <br />
            <h3>{title}</h3>
            <ReactMarkdown source={body} />
        </div>
    );
}
