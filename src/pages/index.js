import React from 'react'
import { Button } from 'antd';

export default () => (
  <div style={{ textAlign: 'center' }}>
    <h1>Welcome to React-Static</h1>
    <Button icon="search" type="danger" onClick={() => console.log('yes')}>What</Button>
  </div>
)
