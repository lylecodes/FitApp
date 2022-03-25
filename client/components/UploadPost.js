import React, { useState, useEffect } from "react";
import { Button, Image, View, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

function UploadPost() {
  const [image, setImage] = useState(null);
  const [uri, setUri] = useState(null);

  const PORT = 3000;

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const blob = await fetchImageFromUri(result.uri);

    if (!result.cancelled) {
      setImage(blob);
      setUri(result.uri);
    }
  };

  const uploadPost = async () => {
    if (image == null) {
      Alert.alert("You must upload an image");
    } else {
      const dummyData = {
        caption: "Caption",
        type: image.type,
        uri: uri,
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dummyData),
      };
      const response = await fetch(
        `http://localhost:${PORT}/post/create`,
        requestOptions
      );
      if (response.ok) {
        console.log("Success");
      } else {
        console.error("Upload Failed");
      }
    }
  };

  const fetchImageFromUri = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image source={{ uri: uri }} style={{ width: 200, height: 200 }} />
      )}
      <Button title="Create Post" onPress={uploadPost} />
    </View>
  );
}

export default UploadPost;
