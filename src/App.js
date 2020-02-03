// NPM Dependencies
import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';

// Local Dependencies
import { Link, Router } from 'components/Router';
// import Dynamic from 'containers/Dynamic';
import './styles/app.scss';
import './flexboxgrid.min.css';
import LogoV1 from '../public/images/logo/logo_v2.1.png';
import IconLogo from '../public/images/logo/icon01_Artboard 1.png';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

function App() {
    return (
        <Root>
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
            <React.Suspense fallback={<em>Loading...</em>}>
                <Router>
                    {/*<Dynamic path="dynamic" />*/}
                    <Routes path="*" />
                </Router>
            </React.Suspense>
        </Root>
    );
}

export default App;
