// NPM Dependencies
import React from 'react';
import { Root, Routes } from 'react-static';

// Local Dependencies
import { Router } from 'components/Router';
import NavBar from 'components/navbar';
import Footer from 'components/footer';

// Styles
import './styles/app.scss';
import './flexboxgrid.min.css';

// Any routes that start with 'dynamic' will be treated as non-static routes
// addPrefetchExcludes(['dynamic']);

function App() {
    return (
        <Root>
            <div className="body-wrapper">
                <div className="content-wrapper">
                    <NavBar />
                    <div className="content">
                        <React.Suspense fallback={<em>Loading...</em>}>
                            <Router>
                                {/*<Dynamic path="dynamic" />*/}
                                <Routes path="*" />
                            </Router>
                        </React.Suspense>
                    </div>
                </div>
                <Footer />
            </div>
        </Root>
    );
}

export default App;
