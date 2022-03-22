import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Login from "./screens/Login";
import Logout from "./screens/Logout";

export default function App() {
  return (
    <SafeAreaView>
      <Login />
      <Logout />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
