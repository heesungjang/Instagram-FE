//REACT
import React from "react";
import { View } from "react-native";

//COMPONENTS
import TabIcon from "../components/nav/TabIcon";

//Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavFactory from "./StackNavFactory";

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
        options={{
          tabBarIcon: ({ focused, color, size }) => <TabIcon iconName={"home"} color={color} focused={focused} />,
        }}
      >
        {() => <StackNavFactory screenName="Feed" />}
      </RootTabs.Screen>

      <RootTabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ focused, color, size }) => <TabIcon iconName={"search"} color={color} focused={focused} />,
        }}
      >
        {() => <StackNavFactory screenName="Search" />}
      </RootTabs.Screen>

      <RootTabs.Screen
        name="Camera"
        component={View}
        options={{
          tabBarIcon: ({ focused, color, size }) => <TabIcon iconName={"camera"} color={color} focused={focused} />,
        }}
      />
      <RootTabs.Screen
        name="Notifications"
        options={{
          tabBarIcon: ({ focused, color, size }) => <TabIcon iconName={"heart"} color={color} focused={focused} />,
        }}
      >
        {() => <StackNavFactory screenName="Notifications" />}
      </RootTabs.Screen>
      <RootTabs.Screen
        name="Me"
        options={{
          tabBarIcon: ({ focused, color, size }) => <TabIcon iconName={"person"} color={color} focused={focused} />,
        }}
      >
        {() => <StackNavFactory screenName="Me" />}
      </RootTabs.Screen>
    </RootTabs.Navigator>
  );
};

export default LoggedInNav;
