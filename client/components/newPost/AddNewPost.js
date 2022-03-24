import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FormikPostUploader from "./FormikPostUploader";

const AddNewPost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <FormikPostUploader navigation={navigation} />
    </View>
  );
};

const Header = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" style={{ color: "white" }} size={30} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Add a New Post</Text>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontWeight: "100",
    fontSize: 20,
    // textAlign: "center",
    marginRight: 25,
  },
});

export default AddNewPost;
