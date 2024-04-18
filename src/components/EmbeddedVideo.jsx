import React from "react";
import YouTube from "react-youtube";
const YouTubeEmbed = ({ children }) => {
  return (
    <YouTube videoId={children}></YouTube>
  );
};


export default YouTubeEmbed;
