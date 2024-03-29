// NPM Dependencies
import React from 'react';

// Local Dependencies
import { Link } from 'components/Router';

// Image Dependencies
import WideLogo from '../../public/images/logo/DN-logo-wide.svg';
import WideIconLogo from '../../public/images/logo/DN-logo-wide-icon.svg';

export default function NavBar() {
    return (
        <nav>
            <div className="navbar">
                <div className="row">
                    <div className="col-xs-6">
                        <div className="nav-logo">
                            <Link to="/">
                                <img
                                    src={WideLogo}
                                    className="nav-logo nav-logo__wide"
                                    alt="DeFi Nerd logo"
                                />
                            </Link>
                            <Link to="/">
                                <img
                                    src={WideIconLogo}
                                    className="nav-logo nav-logo__fav"
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
                                <Link to="/crypto-loans">
                                    <button  type="button" className="nav-button">
                                        Loans
                                    </button>
                                </Link>
                            </div>
                            <div className="hide-mobile">
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
