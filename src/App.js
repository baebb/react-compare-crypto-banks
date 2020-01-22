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
                                <div className="nav-logo">
                                    <img src="https://dummyimage.com/280x40/008255/ffffff" className="nav-logo__wide" />
                                    <img src="https://dummyimage.com/40x40/008255/ffffff" className="nav-logo__fav" />
                                </div>
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
