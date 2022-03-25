import React from "react";
import { StatusBar } from 'expo-status-bar';
// import AuthNavigation from "./AuthNavigation";
// import SignedInStack from "./navigation";
import { StyleSheet, Text, View } from 'react-native';

import  Auth from './AuthScreen';

export default function App() {
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