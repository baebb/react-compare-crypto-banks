// NPM Dependencies
import React from 'react';

// Local Dependencies
import { Link } from 'components/Router';
import IconLogo from '../../public/images/logo/DN-logo-icon.png';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <div className="footer-content__links">
                            <div>
                                <Link to="/compare-crypto-interest-accounts" className="text-link text-link--hover-green">
                                    Interest Accounts
                                </Link>
                            </div>
                            <div>
                                <Link to="/reviews" className="text-link text-link--hover-green">
                                    Reviews
                                </Link>
                            </div>
                            {/*<div>*/}
                            {/*    <Link to="/blog" className="text-link text-link--hover-green">*/}
                            {/*        Blog*/}
                            {/*    </Link>*/}
                            {/*</div>*/}
                            {/*<div>*/}
                            {/*    <Link to="/about" className="text-link text-link--hover-green">*/}
                            {/*        About*/}
                            {/*    </Link>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <p className="footer-content__disclaimer-text">
                            Disclaimer: DeFi Nerd strives to keep its information accurate and up to date. This information may be different than what you see when you visit a financial institution, service provider or specific product’s site. All financial products, shopping products and services are presented without warranty. When evaluating offers, please review the financial institution’s Terms and Conditions.
                        </p>
                    </div>
                </div>
                <div className="footer-content__brand-container">
                    <div className="footer-content__brand-img">
                        <Link to="/">
                            <img
                                src={IconLogo}
                                alt="DeFi Nerd favicon logo"
                            />
                        </Link>
                    </div>
                    <div className="footer-content__brand-text">
                        <div>© 2020 DeFi Nerd</div>
                        <div className="footer-content__brand-legal-links">
                            <Link to="/privacy" className="text-link text-link--hover-green">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
