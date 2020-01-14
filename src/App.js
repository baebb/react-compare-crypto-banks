// NPM Dependencies
import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';

// Local Dependencies
import { Link, Router } from 'components/Router';
// import Dynamic from 'containers/Dynamic';
import './styles/app.scss';
import './flexboxgrid.min.css';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

function App() {
    return (
        <Root>
            <nav>
                <div className="navbar">
                    <div className="row">
                        <div className="col-xs-6">
                            <Link to="/">
                                <h1 className="navbar__home-text">Compare Crypto Banks</h1>
                            </Link>
                        </div>
                        <div className="col-xs-6" style={{ textAlign: 'right' }}>
                            <Link to="/blog">
                                <button  type="button" className="nav-button">
                                    Blog
                                </button>
                            </Link>
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
