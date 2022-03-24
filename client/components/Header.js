import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { firebase } from "../firebase";

const Header = ({ navigation }) => {
  const logOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (e) {
      Alert.alert("My Lord", e.message);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={logOut}>
        <Image
          style={styles.logo}
          source={require("../assets/header-logo.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
          <Ionicons name="add-circle" size={24} style={styles.icon} />
          {/* <Text style={{ color: "white" }}>DUmmy</Text> */}
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={24} style={styles.icon} />
          {/* <Text style={{ color: "white" }}>DUmmy</Text> */}
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>7</Text>
          </View>
          <Fontisto name="messenger" size={24} style={styles.icon} />
          {/* <Text style={{ color: "white" }}>DUmmy</Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    // flex: 1,
    backgroundColor: "#0c0c0c",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 25,
  },
  iconContainer: {
    flexDirection: "row",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  icon: {
    // width: 30,
    color: "white",
    // resizeMode: "contain",
    marginHorizontal: 5,
  },
  unreadBadge: {
    backgroundColor: "#ff3250",
    position: "absolute",
    left: 12,
    bottom: 17,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});

export default Header;
