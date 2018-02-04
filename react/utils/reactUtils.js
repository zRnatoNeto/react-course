import React from 'react';

function childremWithProps(children, props) {
  return React.Children.map(
    props.children,
    child => React.cloneElement(child, { ...props }),
  )
}

export { childremWithProps };