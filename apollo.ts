import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");

export const logUserIn = async (token: string) => {
  await AsyncStorage.multiSet([
    ["token", JSON.stringify(token)],
    ["isLoggedIn", JSON.stringify("yes")],
  ]);
  isLoggedInVar(true);
  tokenVar(token);
};

const client = new ApolloClient({
  uri: "http://9a22-114-202-230-52.ngrok.io/graphql",
  cache: new InMemoryCache(),
});

export default client;
