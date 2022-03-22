import * as AuthSession from "expo-auth-session";
import { Platform, View, Button } from "react-native";
import { AUTH0_DOMAIN, AUTH0_CLIENT_ID } from "@env";

const auth0ClientId = AUTH0_CLIENT_ID;
const authorizationEndpoint = `${AUTH0_DOMAIN}/authorize`;

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

export default function Login() {
  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: auth0ClientId,
      // id_token will return a JWT token
      responseType: "id_token",
      // retrieve the user's profile
      scopes: ["openid", "profile", "email"],
      extraParams: {
        // ideally, this will be a random value
        nonce: "nonce",
      },
    },
    { authorizationEndpoint }
  );

  return (
    <View>
      <Button
        title="Log in"
        onPress={() => promptAsync({ useProxy })} // <-- will open the universal login
      >
        Login
      </Button>
    </View>
  );
}
