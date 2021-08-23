import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";

function LinkExternal({ href, blank, children, hoverData, ...rest }) {
  return (
    <LazyMotion features={domAnimation}>
      <m.a
        href={href}
        target={blank && "_blank"}
        rel={blank && "nofollow"}
        {...rest}
      >
        {children}
      </m.a>
    </LazyMotion>
  );
}

export default LinkExternal;
