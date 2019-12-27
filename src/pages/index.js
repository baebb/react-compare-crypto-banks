// NPM Dependencies
import React from 'react';

// Local Dependencies
import ProductCard from '../components/product-card';

// Data
import items from '../demoData';
const heading = 'Grow your crypto portfolio ';
const calloutWord = 'passively';
const subHeading = 'Crypto banks allows crypto investors to earn compound interest on their crypto deposits and grow their wealth. Simply deposit your crypto in the account and start saving right away.';

export default () => (
    <div className="content">
        <div className="intro-section">
            <div className="intro-section__heading">
                <h2>
                    {heading}
                    <span className="calloutText">{calloutWord}</span>
                </h2>
            </div>
            <div className="intro-section__sub-heading">
                <div className="row">
                    <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                        {subHeading}
                    </div>
                </div>
            </div>
        </div>
        <div className="banner">
        </div>
        <div className="items">
            {items.map(product =>
                <ProductCard product={product} key={product.title} />
            )}
        </div>
    </div>
);
