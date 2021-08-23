import React from "react";
import Box from ".";
import VideoCover from "../../inline-video";

export default function VideoBox({ video, ...rest }) {
  const videoOptions = {
    autoPlay: true,
    playsInline: true,
    preload: "auto",
    muted: true,
    loop: true,
  };

  return (
    <Box {...rest}>
      <VideoCover
        videoOptions={videoOptions}
        source={[{ src: video.url, type: "video/mp4" }]}
        remeasureOnWindowResize
      />
    </Box>
  );
}
