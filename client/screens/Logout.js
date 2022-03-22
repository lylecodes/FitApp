import React from "react";
import * as AuthSession from "expo-auth-session";
import { openAuthSessionAsync } from "expo-web-browser";
import { Alert, Button, Platform, StyleSheet, Text, View } from "react-native";
import { AUTH0_DOMAIN, AUTH0_CLIENT_ID } from "@env";

const auth0ClientId = AUTH0_CLIENT_ID;
const authorizationEndpoint = `${AUTH0_DOMAIN}/authorize`;

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy }); // <-- must be set in allowed logout urls

export default function Logout() {
  const logout = async () => {
    try {
      await openAuthSessionAsync(
        `${authorizationEndpoint}?client_id=${auth0ClientId}&returnTo=${redirectUri}`,
        "redirectUrl"
      );
      // handle unsetting your user from store / context / memory
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
