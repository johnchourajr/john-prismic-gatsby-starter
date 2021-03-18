import React from 'react';
import styled from 'styled-components';
import { motion as m } from 'framer-motion';

/**
 * Local Components
 */
import MotionScroll from './john-motion/motion-scroll';

/**
 * Local Styles/JS
 */
import { Wrapper } from './layout-components';
import AnimatedText from './john-motion/motion-headline';

/**
 * PageHeader Component
 *
 * @param {Object} props
 * @param {String} props.title
 */
export default function PageHeader({ title }) {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  return (
    <Wrapper>
      <MotionScroll triggerPoint={0} yOffset={50}>
        <PageHeaderWrapper
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 1 }}
        >
          <AnimatedText text={title} className="h1" />
        </PageHeaderWrapper>
      </MotionScroll>
    </Wrapper>
  );
}

const PageHeaderWrapper = styled(m.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  overflow: visible;
  min-height: 50vw;
  padding: 15vw 0 10vw;
`;
