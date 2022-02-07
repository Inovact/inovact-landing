import React from "react";
import { Container } from "theme-ui";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div style={{ margin: "0 auto" }}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        width="100%"
        height="90vh"
        controls
      />
    </div>
  );
};

export default Video;
