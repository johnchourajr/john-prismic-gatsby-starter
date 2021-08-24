import React from "react";
import styled from "styled-components";
import { m, LazyMotion, domAnimation } from "framer-motion";

/**
 * Local Components
 */
// import MotionScroll from "../motion/motion-scroll";
import AnimatedText from "../motion/motion-headline";
import MotionScrollTransform from "../motion/motion-scroll-transform";

/**
 * Local Styles/JS
 */
import { Wrapper } from "./wrappers";

const InlineHeader = ({ title, yTransform, useTransform }) => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <m.div
      style={{
        y: useTransform(yTransform, [0.5, 1], ["0vw", "-10vw"]),
        opacity: useTransform(yTransform, [0.5, 1], [1, 0]),
      }}
    >
      <PageHeaderWrapper
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 1 }}
      >
        <AnimatedText text={title} className="h1" />
      </PageHeaderWrapper>
    </m.div>
  );
};

/**
 * PageHeader Component
 *
 * @param {Object} props
 * @param {String} props.title
 */
export default function PageHeader({ title }) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionScrollTransform id="page-header">
        {(useTransform, yTransform) => (
          <Wrapper>
            <InlineHeader
              title={title}
              useTransform={useTransform}
              yTransform={yTransform}
            />
          </Wrapper>
        )}
      </MotionScrollTransform>
    </LazyMotion>
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
  max-width: 58em;
`;
