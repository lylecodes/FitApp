import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { firebase, db } from "../firebase";

const ProfileScreen = () => {
  const [activeUser, setActiveUser] = useState([]);
  const logOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (e) {
      Alert.alert("My Lord", e.message);
    }
  };
  useEffect(() => {
    db.collection("users").doc(firebase.auth().currentUser.email);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png",
        }}
      />
      <Text style={{ color: "white" }}>
        Currently Logged in as: {firebase.auth().currentUser.email}
      </Text>
      <TouchableOpacity onPress={logOut}>
        <Text style={{ color: "#c0392b" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 100,
    height: 100,
    borderColor: "#9b59b6",
    borderWidth: 1,
    borderRadius: 100,
  },
});

export default ProfileScreen;
