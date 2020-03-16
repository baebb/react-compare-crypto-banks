// NPM Dependencies
import React from 'react';

// Local Dependencies
import { Link } from 'components/Router';
import Logo from '../../public/images/logo/DN-logo-wide.png';
import IconLogo from '../../public/images/logo/DN-logo-icon.png';

export default function NavBar() {
    return (
        <nav>
            <div className="navbar">
                <div className="row">
                    <div className="col-xs-6">
                        <div className="nav-logo">
                            <Link to="/">
                                <img
                                    src={Logo}
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
                                <Link to="/compare-crypto-interest-accounts">
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
