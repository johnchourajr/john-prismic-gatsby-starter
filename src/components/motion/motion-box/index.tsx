import React, { useEffect } from "react";
import { m, LazyMotion, domAnimation, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Box({
  children,
  transitionOverrides,
  hiddenStyles,
  visibleStyles,
  triggerOnce = true,
  ...rest
}) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: triggerOnce });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: { opacity: 0, scale: 1, y: 10, ...hiddenStyles },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      ...visibleStyles,
      transition: {
        ease: [0.1, 0.25, 0.3, 1],
        duration: 1,
        delay: 0.15,
        ...transitionOverrides,
      },
    },
  };
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        className="Box"
        initial="hidden"
        animate={controls}
        variants={boxVariants}
        {...rest}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
