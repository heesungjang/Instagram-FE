// REACtT
import React from "react";

// RN
import { GestureResponderEvent } from "react-native";

// NAVIGATION
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";
import CreateAccount from "../screens/CreateAccount";

// TYPE
export type RootStackParamList = {
  Welcome: undefined;
  //   Login: { onPress: (event: GestureResponderEvent) => void } | undefined;
  Login: { username: string; password: string };
  CreateAccount: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const LoggedOutNav = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitle: undefined,
        headerTransparent: true,
        headerTintColor: "white",
      }}
    >
      <RootStack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="CreateAccount" component={CreateAccount} />
    </RootStack.Navigator>
  );
};

export default LoggedOutNav;
