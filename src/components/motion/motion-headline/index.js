import React, { useEffect } from "react";
import styled from "styled-components";
import { m, LazyMotion, domAnimation, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { wrapHeadlineInArray } from "../../../functions/util";
import { animation } from "../../../style/theme";

export default function MotionHeadline({
  text,
  staggerChildren = 0.1,
  triggerOnce = true,
  ...rest
}) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: triggerOnce });

  useEffect(() => {
    if (inView) {
      controls.start("active");
    }
    if (!inView) {
      controls.start("pre");
    }
  }, [controls, inView]);

  const textContainerVariants = {
    pre: {},
    active: {
      transition: {
        staggerChildren: staggerChildren,
        duration: 1,
        ease: [animation.timingFunction.js],
      },
    },
  };

  const textVariants = {
    pre: {
      opacity: 0,
      rotate: "6deg",
      y: "50%",
    },
    active: {
      opacity: 1,
      rotate: "0deg",
      y: "0%",
      transition: {
        duration: 0.5,
        ease: [animation.timingFunction.js],
      },
    },
  };

  const array = wrapHeadlineInArray(text);

  return (
    <LazyMotion features={domAnimation}>
      <P
        ref={ref}
        variants={textContainerVariants}
        initial="pre"
        animate={controls}
        {...rest}
      >
        {array.map((item, i) => {
          return (
            <Mask key={i}>
              <m.span variants={textVariants}>{item.text}</m.span>
            </Mask>
          );
        })}
      </P>
    </LazyMotion>
  );
}

const P = styled(m.p)`
  margin-left: -0.16em;
  margin-right: -0.16em;
`;

const Mask = styled.span`
  position: relative;
  overflow: hidden;
  display: inline-block;
  padding: 0.2em 0.12em;
  margin-bottom: -1em;

  > span,
  > em {
    display: inline-block;
    position: relative;
  }
`;
