import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { wrapHeadlineInArray } from '../functions/util';
import { animation } from '../style/theme';

export default function AnimatedText({
  text,
  staggerChildren = 0.1,
  triggerOnce = true,
  ...rest
}) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: triggerOnce });

  useEffect(() => {
    if (inView) {
      controls.start('active');
    }
    if (!inView) {
      controls.start('pre');
    }
  }, [controls, inView]);

  const textContainerVariants = {
    pre: {},
    active: {
      transition: {
        staggerChildren: staggerChildren,
        duration: 2,
        ease: [animation.timingFunction.js]
      }
    }
  };

  const textVariants = {
    pre: {
      opacity: 0,
      rotate: '-3deg',
      y: '140%'
    },
    active: {
      opacity: 1,
      rotate: '0deg',
      y: '0%',
      transition: {
        duration: 0.9,
        ease: [animation.timingFunction.js]
      }
    }
  };

  const array = wrapHeadlineInArray(text);

  return (
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
            <motion.span variants={textVariants}>{item.text}</motion.span>
          </Mask>
        );
      })}
    </P>
  );
}

const P = styled(motion.p)`
  margin-left: -0.12em;
  margin-right: -0.12em;
`;

const Mask = styled.span`
  position: relative;
  overflow: hidden;
  display: inline-block;
  padding: 0.2em 0.12em;
  margin-bottom: -0.4em;

  > span,
  > em {
    display: inline-block;
    position: relative;
  }
`;
