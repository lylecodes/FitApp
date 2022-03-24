import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";
import StoryScreen from "./screens/StoryScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createStackNavigator();
const headerOptions = {
  headerShown: false,
};
export const SignedInStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={headerOptions}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={headerOptions}
        ></Stack.Screen>
        <Stack.Screen
          name="NewPostScreen"
          component={NewPostScreen}
          options={headerOptions}
        ></Stack.Screen>
        <Stack.Screen
          name="StoryScreen"
          component={StoryScreen}
          options={{ headerShown: true }}
        ></Stack.Screen>
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: true }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const SignedOutStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={headerOptions}
      >
        <Stack.Screen
          name="StoryScreen"
          component={StoryScreen}
          options={{ headerShown: true }}
        ></Stack.Screen>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={headerOptions}
        ></Stack.Screen>
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={headerOptions}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// export default SignedInStack;
