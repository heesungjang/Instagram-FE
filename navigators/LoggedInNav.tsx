//REACT
import React from "react";
import { View } from "react-native";

//COMPONENTS
import Feed from "../screens/Feed";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import TabIcon from "../components/nav/TabIcon";
import Notifications from "../screens/CreateAccount/Notifications";

//Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const RootTabs = createBottomTabNavigator();

const LoggedInNav = () => {
  return (
    <RootTabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "black", borderTopColor: "rgba(255,255,255,0.3)" },
        tabBarActiveTintColor: "white",
        headerShown: false,
      }}
    >
      <RootTabs.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused, color, size }) => <TabIcon iconName={"home"} color={color} focused={focused} />,
        }}
      />
      <RootTabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => <TabIcon iconName={"search"} color={color} focused={focused} />,
        }}
      />
      <RootTabs.Screen
        name="Camera"
        component={View}
        options={{
          tabBarIcon: ({ focused, color, size }) => <TabIcon iconName={"camera"} color={color} focused={focused} />,
        }}
      />
      <RootTabs.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused, color, size }) => <TabIcon iconName={"heart"} color={color} focused={focused} />,
        }}
      />
      <RootTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => <TabIcon iconName={"person"} color={color} focused={focused} />,
        }}
      />
    </RootTabs.Navigator>
  );
};

export default LoggedInNav;
