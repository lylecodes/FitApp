import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { USERS } from "../data/users";

const Stories = ({ navigation }) => {
  return (
    <View
      style={{
        marginBottom: 13,
        paddingBottom: 14,
        borderBottomWidth: 1,
        borderBottomColor: "#3d3d3d",
        marginLeft: 15,
        marginRight: 15,
      }}
    >
      <ScrollView horizontal showHorizontalScrollIndicator={false}>
        {USERS.map((user, index) => (
          <View key={index} style={styles.storyContainer}>
            <TouchableOpacity onPress={() => navigation.push("StoryScreen")}>
              <Image source={{ uri: user.image }} style={styles.story} />
            </TouchableOpacity>
            <Text style={styles.text}>
              {user.user.length > 11
                ? user.user.slice(0, 10).toLowerCase() + "..."
                : user.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  storyContainer: {
    alignItems: "center",
  },
  story: {
    width: 80,
    height: 80,
    borderRadius: 2990,
    marginLeft: 6,
    borderWidth: 3,
    // padding: 10,
    borderColor: "#ff8501",
    // backgroundImage: "linear-gradient(to right, #7b4397, #dc2430)",
  },
  text: {
    color: "white",
  },
});

export default Stories;
