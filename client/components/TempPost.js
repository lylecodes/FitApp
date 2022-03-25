import { React, useEffect, useState } from "react";
import { View, Image } from "react-native";

const TempPost = (props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [uri, setUri] = useState(null);

  const mediaName = props.item.mediaName;

  const getMediaType = (media) => {
    const image = /\jpg|tif|png|gif/g;
    const video = /\mp4|mov/g;
    if (media.match(image)) {
      console.log("a Image");
    } else if (media.match(video)) {
      setIsVideo(true);
      console.log("a Video");
    } else {
      console.log("no match");
    }
  };

  const createUri = (mediaName) => {
    // https://fitappmedia.s3.amazonaws.com/test_image
    const uri = `https://fitappmedia.s3.amazonaws.com/${mediaName}`;
    setUri(uri);
  };

  getMediaType(mediaName);

  if (!isVideo) {
    createUri(mediaName);
  }

  return (
    <View>
      {isVideo && (
        <video id="videoPlayer" width="650" controls muted="muted" autoplay>
          <source src="/video/${mediaName}" type="video/mp4" />
        </video>
      )}

      {!isVideo && <Image source={{ uri: uri }} />}
    </View>
  );
};

export default TempPost;
