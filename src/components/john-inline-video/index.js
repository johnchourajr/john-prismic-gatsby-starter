import React from 'react';
import PropTypes from 'prop-types';

import CoverFallback from './fallback';

function VideoCover(props) {
  const style = {
    width: '100%',
    height: '100%',
    ...props.style,
    objectFit: 'cover'
  };

  if (typeof window != 'undefined') {
    if (
      props.forceFallback ||
      (typeof window !== 'undefined' &&
        /MSIE|Trident|Edge/.test(window.navigator.userAgent))
    ) {
      return <CoverFallback {...props} />;
    }
  }

  return (
    <video
      id={props.id ? props.id : 'video'}
      className={props.className}
      style={style}
      {...props.videoOptions}
      muted
    >
      {props.source.map((item, i) => (
        <source key={i} src={item.src} type={item.type} />
      ))}
    </video>
  );
}

VideoCover.propTypes = {
  forceFallback: PropTypes.bool,
  remeasureOnWindowResize: PropTypes.bool,
  onFallbackDidMount: PropTypes.func,
  onFallbackWillUnmount: PropTypes.func,
  videoOptions: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
  source: PropTypes.array
};

VideoCover.defaultProps = {
  forceFallback: false,
  remeasureOnWindowResize: false
};

export default VideoCover;
