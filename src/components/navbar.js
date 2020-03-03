// NPM Dependencies
import React from 'react';

// Local Dependencies
import { Link } from 'components/Router';
import LogoV1 from '../../public/images/logo/ccb-temp-logo.svg';
import IconLogo from '../../public/images/logo/ccb-temp-icon.svg';

export default function NavBar() {
    return (
        <nav>
            <div className="navbar">
                <div className="row">
                    <div className="col-xs-6">
                        <div className="nav-logo">
                            <Link to="/">
                                <img
                                    src={LogoV1}
                                    className="nav-logo__wide"
                                    alt="DeFi Nerd logo"
                                />
                            </Link>
                            <Link to="/">
                                <img
                                    src={IconLogo}
                                    className="nav-logo__fav"
                                    alt="DeFi Nerd favicon logo"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="nav-buttons">
                            <div>
                                <Link to="/crypto-interest-accounts">
                                    <button  type="button" className="nav-button">
                                        Interest Accounts
                                    </button>
                                </Link>
                            </div>
                            <div>
                                <Link to="/reviews">
                                    <button  type="button" className="nav-button">
                                        Reviews
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
