import React from "react";
import { View, Text, Image } from "react-native";

const StoryScreen = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://i.insider.com/602ee9ced3ad27001837f2ac?width=1000&format=jpeg&auto=webp",
        }}
        style={{ height: "100%", width: "100%" }}
      />
    </View>
  );
};

export default StoryScreen;
