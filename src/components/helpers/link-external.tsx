import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";

interface LinkExternalProps {
  href?: string;
  blank?: boolean;
  children?: React.ReactNode;
}

const LinkExternal = ({ href, blank = false, children, ...rest }: LinkExternalProps) => {
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
