import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

function Link({ to, children, hoverData, ...rest }) {
  return (
    <GatsbyLink to={to} {...rest}>
      {children}
    </GatsbyLink>
  );
}

export default Link;
