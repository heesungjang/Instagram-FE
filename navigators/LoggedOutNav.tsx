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
    Welcome: { onPress: (event: GestureResponderEvent) => void };
    Login: { onPress: (event: GestureResponderEvent) => void } | undefined;
    CreateAccount: undefined;
};

const RootStack = createStackNavigator();

const LoggedOutNav = () => {
    return (
        <RootStack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
            <RootStack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
            <RootStack.Screen name="Login" component={Login} />
            <RootStack.Screen
                name="CreateAccount"
                component={CreateAccount}
                options={{ headerTitle: "", headerTransparent: true, headerTintColor: "white" }}
            />
        </RootStack.Navigator>
    );
};

export default LoggedOutNav;
