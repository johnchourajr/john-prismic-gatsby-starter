import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import {
  LazyMotion,
  domAnimation,
  useViewportScroll,
  useSpring,
  useTransform,
  m,
} from "framer-motion";
import styled from "styled-components";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    if (typeof window === "undefined") return {};

    changeWindowSize();
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}

const Container = styled(m.div)`
  width: 100%;
  position: relative;
`;

/**
 * @component
 * MotionScrollTransform
 *
 * @example
 *
 * ```jsx
 * import { m, useTransform } from 'framer-motion';
 *

 * function Component() {
 *   return (
 *     <MotionScrollTransform>
 *       {(yTransform) => (
 *         <m.div
 *           style={{
 *             y: useTransform(yTransform, [0, 0.5, 1], ['50vw', '0vw', '-50vw']),
 *             rotateX: useTransform(yTransform, [0, 0.5, 1], [100, 0, -100]),
 *             rotateY: useTransform(yTransform, [0, 0.5, 1], [0, 0, -45]),
 *             background: useTransform(
 *               yTransform,
 *               [0.25, 0.5],
 *               ['#efefef', '#00A4A6']
 *             )
 *           }}
 *         >I make moves</m.div>
 *       )}
 *     </MotionScrollTransform>
 *   )
 * }
 * ```
 *
 * @param {Object} props props
 * @param {String} props.id a unique id
 * @param {Object} props.style styles for the container
 *
 * Settings
 * @param {Object} props.settings a series of options to flexibly adapt the component
 * @param {Boolean} props.settings.smooth smooth boolean
 * @param {Boolean} props.settings.anchorTop anchor to top boolean
 *
 * Content
 * @param {Function} props.children render props child
 *
 * Return
 * @returns {React.ReactElement} ScrollStorySection
 * @public
 */
function MotionScrollTransform({
  id,
  settings: { smooth = true, anchorTop = true },
  style,
  children,
}) {
  /**
   * Ref
   */
  const moveSectionRef = useRef(null);

  /**
   * State
   */
  const [sectionTop, setSectionTop] = useState(0);
  const [sectionBottom, setSectionBottom] = useState(0);

  /**
   * Hooks
   */
  const { height, width } = useWindowSize();
  const { scrollY } = useViewportScroll();

  /**
   * Section Effect
   */
  useEffect(() => {
    let offsetTop =
      moveSectionRef?.current?.offsetTop -
      moveSectionRef?.current?.offsetHeight;
    let offsetBottom =
      moveSectionRef?.current?.offsetTop +
      moveSectionRef?.current?.offsetHeight;

    if (!anchorTop) {
      offsetTop =
        moveSectionRef?.current?.offsetTop -
        height -
        moveSectionRef?.current?.offsetHeight;
      offsetBottom =
        moveSectionRef?.current?.offsetTop -
        height +
        moveSectionRef?.current?.offsetHeight;
    }

    /**
     * Set measurement calcs
     */
    setSectionTop(offsetTop);
    setSectionBottom(offsetBottom);
  }, [scrollY, width, height, moveSectionRef, anchorTop]);

  /**
   * Transform Hooks
   */
  const ySpring = useSpring(scrollY, { damping: 20, stiffness: 75 });
  const inputValue = smooth ? ySpring : scrollY;
  const yTransform = useTransform(
    inputValue,
    [sectionTop, sectionBottom],
    [0, 1]
  );

  return (
    <LazyMotion features={domAnimation} data-cy="motion-scroll-transform">
      <Container id={id} ref={moveSectionRef} style={style}>
        {children(useTransform, yTransform, scrollY, sectionTop, sectionBottom)}
      </Container>
    </LazyMotion>
  );
}

MotionScrollTransform.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  style: PropTypes.object,
  settings: PropTypes.shape({
    smooth: PropTypes.bool,
    anchorTop: PropTypes.bool,
  }),
  content: PropTypes.func,
  children: PropTypes.func.isRequired,
};

MotionScrollTransform.defaultProps = {
  settings: { smooth: true, anchorTop: true },
};

export default MotionScrollTransform;
