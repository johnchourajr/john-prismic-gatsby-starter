import React from 'react';
import { motion } from 'framer-motion';

function LinkExternal({ href, blank, children, hoverData, ...rest }) {
  return (
    <motion.a
      href={href}
      target={blank && '_blank'}
      rel={blank && 'nofollow'}
      {...rest}
    >
      {children}
    </motion.a>
  );
}

export default LinkExternal;
