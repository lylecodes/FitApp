import React from "react";
// import AuthNavigation from "./AuthNavigation";
import { StatusBar } from 'expo-status-bar';
// import UploadPost from "./components/UploadPost";
// import SignedInStack from "./navigation";
// import ShowPosts from "./screens/ShowPosts";
// import AuthNavigation from "./AuthNavigation";
// import SignedInStack from "./navigation";
import  Auth from './AuthScreen';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // return <AuthNavigation />;
  // return <UploadPost />;
  // return <AuthNavigation />;
  return(
  <View style={styles.container}>
      <Auth />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
