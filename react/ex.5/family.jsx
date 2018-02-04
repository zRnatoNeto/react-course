import React from 'react';
import { childremWithProps } from '../utils/reactUtils';

export default props => (
  <div>
    <h1>Família</h1>
    {childremWithProps(props.children, props)}
  </div>
);
