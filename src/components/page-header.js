import React from 'react';
import styled from 'styled-components';
import { motion as m } from 'framer-motion';

/**
 * Local Components
 */
import MotionScroll from './motion-scroll';

/**
 * Local Styles/JS
 */
import { Wrapper } from './layout-components';
import AnimatedText from './animated-text';

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
  text-align: center;
  overflow: visible;
  height: 50vh;
  min-height: 50vw;
  min-height: 500px;
`;
