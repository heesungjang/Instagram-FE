// REACtT
import React from "react";

// NAVIGATION
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";
import CreateAccount from "../screens/CreateAccount";

// TYPE
// import { NativeStackScreenProps } from "@react-navigation/native-stack";

const Stack = createStackNavigator();

const LoggedOutNav: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
        </Stack.Navigator>
    );
};

export default LoggedOutNav;
