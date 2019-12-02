// NPM Dependencies
import React from 'react';

// UI Dependencies
import { Button, Pane, Text, Heading } from 'evergreen-ui';

// Data
import items from '../demo';

export default () => (
    <div>
        <div className="banner">
            <Heading
                size={600}
                marginTop={0}
                is="h4"
            >
                Crypto Banks is ready
            </Heading>
        </div>
        <div className="items">
            {items.map(({ title, url}) =>
                <Pane
                    elevation={1}
                    padding={24}
                    marginBottom={24}
                    key={title}
                >
                    <div className="row">
                        <div className="col-xs-12 col-sm-4">
                            <Text>{title}</Text>
                        </div>
                        <div className="col-xs-12 col-sm-8">
                            <Text>{url}</Text>
                        </div>
                    </div>
                </Pane>
            )}
        </div>
    </div>
);
