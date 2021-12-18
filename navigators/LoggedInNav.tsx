//REACT
import React from "react";

//COMPONENTS
import Feed from "../screens/Feed";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import Notifications from "../screens/CreateAccount/Notifications";

//HELPER
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const RootTabs = createBottomTabNavigator();

const LoggedInNav = () => {
  return (
    <RootTabs.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "black", borderTopColor: "rgba(255,255,255,0.3)" },
        tabBarActiveTintColor: "white",
        headerShown: false,
      }}
    >
      <RootTabs.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Ionicons name="home" color={color} size={focused ? 22 : 18} />,
        }}
      />
      <RootTabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Ionicons name="search" color={color} size={focused ? 22 : 18} />,
        }}
      />
      <RootTabs.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="notifications" color={color} size={focused ? 22 : 18} />
          ),
        }}
      />
      <RootTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Ionicons name="person" color={color} size={focused ? 22 : 18} />,
        }}
      />
    </RootTabs.Navigator>
  );
};

export default LoggedInNav;
