import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className: string;
}

const Link = ({ to, children, ...rest }: LinkProps) => {
  return (
    <GatsbyLink to={to} {...rest}>
      {children}
    </GatsbyLink>
  );
}

export default Link;
