// NPM Dependencies
import React from 'react';

// UI Dependencies
import { Pane, Text, Heading } from 'evergreen-ui';

// Data
import items from '../demo';
import BlockFiLogo from '../blockfi.png';

export default () => (
    <div className="content">
        <div className="banner">
            <h1>Test</h1>
            <p>Earn cash rewards</p>
            <a href="http://rossdyson.com" target="_blank">
                <button  type="button" className="callout-button callout-button--primary">
                    Apply now
                </button>
            </a>
            <Heading
                size={600}
                marginTop={0}
                is="h4"
            >
                Segemnt is trash
            </Heading>
        </div>
        <div className="items">
            {items.map(({ title, url, companyName}) =>
                <Pane
                    elevation={1}
                    padding={24}
                    marginBottom={24}
                    key={title}
                >
                    <div className="row">
                        <div className="col-xs-12 col-sm-3">
                            <div
                                style={{ textAlign: 'center', marginBottom: 16, minHeight: 100 }}
                                className="img-center-frame"
                            >
                                <img src={BlockFiLogo} style={{ maxWidth: 240 }} />
                            </div>
                            <div style={{ textAlign: 'center', marginBottom: 8 }}>
                                {/*<a target="_blank" href={url} rel="noopener noreferrer">*/}
                                {/*    <Button*/}
                                {/*        appearance="primary"*/}
                                {/*        intent="success"*/}
                                {/*        height={48}*/}
                                {/*        iconBefore="tick"*/}
                                {/*    >*/}
                                {/*        Apply Now*/}
                                {/*    </Button>*/}
                                {/*</a>*/}
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <Text size={400} color="muted">on {companyName}'s website</Text>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-9">
                            <Heading size={900} marginTop={0}>{title}</Heading>
                        </div>
                    </div>
                </Pane>
            )}
        </div>
    </div>
);
