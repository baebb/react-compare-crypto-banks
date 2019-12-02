// NPM Dependencies
import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { Button, Heading } from 'evergreen-ui';

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
                <div className="navbar">
                    <div className="row">
                        <div className="col-xs-6">
                            <Link to="/">
                                <Heading
                                    size={600}
                                    marginTop={0}
                                    is="h1"
                                >
                                    Crypto Banks Compared
                                </Heading>
                            </Link>
                        </div>
                        <div className="col-xs-6" style={{ textAlign: 'right' }}>
                            <Link to="/blog">
                                <Button appearance="primary">
                                    Blog
                                </Button>
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
