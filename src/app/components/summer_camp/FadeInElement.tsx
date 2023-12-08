import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
    children: React.ReactNode;
}

const FadeInElement = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { inView, ref: inViewRef } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  return (
    <div ref={inViewRef}>
      <div
        ref={ref}
        style={{
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.5s',
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default FadeInElement;