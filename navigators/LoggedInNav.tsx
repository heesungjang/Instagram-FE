//REACT
import React from "react";

//COMPONENTS
import Feed from "../screens/Feed";

//HELPER
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const RootTabs = createBottomTabNavigator();

const LoggedInNav = () => {
    return (
        <RootTabs.Navigator>
            <RootTabs.Screen name="Feed" component={Feed} />
        </RootTabs.Navigator>
    );
};

export default LoggedInNav;
