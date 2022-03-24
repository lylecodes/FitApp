import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import SignUpForm from "../components/signUpScreen/SignUpForm";


const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Image source={require('../assets/Spotme.png')} style={{width: 100, height: 100}} />
      </View>
      {/* SignUpForm */}
      <SignUpForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 16,
  },
});

export default SignUpScreen;
