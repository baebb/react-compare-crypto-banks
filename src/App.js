// NPM Dependencies
import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';

// Local Dependencies
import { Link, Router } from 'components/Router';
// import Dynamic from 'containers/Dynamic';
import './app.css';
import './flexboxgrid.min.css';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

function App() {
    return (
        <Root>
            <nav>
                <div className="row">
                    <div className="col-xs-6">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="col-xs-6">
                        <Link to="/blog">Blog</Link>
                    </div>
                </div>
            </nav>
            <div className="content">
                <React.Suspense fallback={<em>Loading...</em>}>
                    <Router>
                        {/*<Dynamic path="dynamic" />*/}
                        <Routes path="*" />
                    </Router>
                </React.Suspense>
            </div>
        </Root>
    );
}

export default App;
