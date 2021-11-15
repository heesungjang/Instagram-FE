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

const LoggedOutNav: React.FC = () => {
    return (
        <RootStack.Navigator
            screenOptions={{ headerBackTitleVisible: false, headerTintColor: "black" }}
        >
            <RootStack.Screen name="welcome" component={Welcome} />
            <RootStack.Screen name="Login" component={Login} />
            <RootStack.Screen name="CreateAccount" component={CreateAccount} />
        </RootStack.Navigator>
    );
};

export default LoggedOutNav;
