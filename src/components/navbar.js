// NPM Dependencies
import React from 'react';

// Local Dependencies
import { Link } from 'components/Router';
import LogoV1 from '../../public/images/logo/logo_v2.1.svg';
import IconLogo from '../../public/images/logo/icon01.svg';

export default function NavBar() {
    return (
        <nav>
            <div className="navbar">
                <div className="row">
                    <div className="col-xs-6">
                        <div className="nav-logo">
                            <Link to="/">
                                <img src={LogoV1} className="nav-logo__wide" />
                            </Link>
                            <Link to="/">
                                <img src={IconLogo} className="nav-logo__fav" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="nav-buttons">
                            <div>
                                <Link to="/blog">
                                    <button  type="button" className="nav-button">
                                        Blog
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
