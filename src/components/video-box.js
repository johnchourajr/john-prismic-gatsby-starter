import React from 'react';
import Box from './box';
import VideoCover from './video-cover/video-cover';

export default function VideoBox({ video, ...rest }) {
  const videoOptions = {
    autoPlay: true,
    playsInline: true,
    preload: 'auto',
    muted: true,
    loop: true
  };

  return (
    <Box {...rest}>
      <VideoCover
        videoOptions={videoOptions}
        source={[{ src: video.url, type: 'video/mp4' }]}
        remeasureOnWindowResize
      />
    </Box>
  );
}
