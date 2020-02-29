// NPM Dependencies
import React from 'react';
import { useRouteData } from 'react-static';
import ReactMarkdown from 'react-markdown';

export default function PrivacyPage() {
    const { privacyPage } = useRouteData();

    const { body } = privacyPage.fields;

    return (
        <div className="static-page">
            <ReactMarkdown source={body} />
        </div>
    );
}
