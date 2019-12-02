// NPM Dependencies
import React from 'react';

import { Button, Pane, Text, Heading } from 'evergreen-ui';

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
                    key={card}
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
