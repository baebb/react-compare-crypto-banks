// NPM Dependencies
import React from 'react';

// Data
import items from '../demoData';
import BlockFiLogo from '../blockfi.png';

export default () => (
    <div className="content">
        <div className="banner">
            <h1>Test</h1>
            <p>Earn cash rewards</p>
        </div>
        <div className="items">
            {items.map(({ title, url, companyName}) =>
                <div className="product-card" key={title}>
                    <div className="product-card__summary">
                        <div className="row">
                            <div className="col-xs-12 col-sm-3">
                                <div className="product-card__cta-column">
                                    <div
                                        style={{ textAlign: 'center', marginBottom: 16, minHeight: 100 }}
                                        className="img-center-frame"
                                    >
                                        <img src={BlockFiLogo} style={{ maxWidth: 240 }} />
                                    </div>
                                    <div className="product-card__cta-button">
                                        <a href="http://rossdyson.com" target="_blank">
                                            <button  type="button" className="callout-button callout-button--primary">
                                                Apply now
                                            </button>
                                        </a>
                                    </div>
                                    <div className="product-card__muted-cta-text">
                                        <span>on {companyName}'s website</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-9">
                                <div className="product-card__summary-text-column">
                                    <h3 className="product-card__summary-heading">{title}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-card__key-details">
                        <div className="row">
                            <div className="col-xs-12 col-sm-3">One</div>
                            <div className="col-xs-12 col-sm-3">Two</div>
                            <div className="col-xs-12 col-sm-3">Three</div>
                            <div className="col-xs-12 col-sm-3">Four</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
);
