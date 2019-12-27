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
        <div className="banner">
            <h1>Test</h1>
            <p>Earn cash rewards</p>
        </div>
        <div className="items">
            {items.map(product =>
                <ProductCard product={product} key={product.title} />
            )}
        </div>
    </div>
);
