import React, { FC } from "react";
import Box from ".";
import VideoCover from "../../inline-video";

interface VideoBoxProps {
  video: {
    url: string
  }
}

const VideoBox: FC<VideoBoxProps> = ({ video, ...rest }) => {
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

export default VideoBox;