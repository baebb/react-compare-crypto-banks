import React from 'react';
import { useRouteData } from 'react-static';
//
import { Link } from 'components/Router';

export default function Blog() {
    const { reviews } = useRouteData();

    return (
        <div>
            <h1>It's blog time.</h1>
            <div>
                <a href="#bottom" id="top">
                    Scroll to bottom!
                </a>
            </div>
            <br />
            All Posts:
            <ul>
                {reviews.map(({ fields: review }) => (
                    <li key={review.slug}>
                        <Link to={`/blog/${review.slug}/`}>{review.title}</Link>
                    </li>
                ))}
            </ul>
            <a href="#top" id="bottom">
                Scroll to top!
            </a>
        </div>
    );
}
