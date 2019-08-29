// NPM Dependencies
import React from 'react';
import { Button, Heading } from 'evergreen-ui';

export default () => (
    <div className="content">
        <Heading
            size={600}
            marginTop={0}
            is="h4"
        >
            Crypto Banks
        </Heading>
        <Button appearance="primary" iconAfter="arrow-right">
            Icon After
        </Button>
    </div>
);
