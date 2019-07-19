// NPM Dependencies
import React from 'react';
import { Button, Pane, Text } from 'evergreen-ui';

export default () => (
    <div>
        <div className="banner">
            <h1>Compare Crypto Banks</h1>
            <Button appearance="primary" iconAfter="arrow-right">
                Icon After
            </Button>
        </div>
        <div className="items">
            {['one', 'two', 'three'].map((card) =>
                <Pane
                    elevation={1}
                    padding={24}
                    marginBottom={24}
                >
                    <div className="row">
                        <div className="col-xs-12 col-sm-4">
                            <Text>{card}</Text>
                        </div>
                        <div className="col-xs-12 col-sm-8">
                            <Text>{card}</Text>
                        </div>
                    </div>
                </Pane>
            )}
        </div>
    </div>
);
