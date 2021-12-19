//REACT
import React from "react";

//COMPONENTS
import Photo from "../../screens/Photo";
import Profile from "../../screens/Profile";

//NAVIGATION
import { createStackNavigator } from "@react-navigation/stack";
import Feed from "../../screens/Feed";
import Search from "../../screens/Search";
import Me from "../../screens/Me";
import Notifications from "../../screens/CreateAccount/Notifications";

export type RootStackNavigatorFactory = {
  Profile: undefined;
  Photo: undefined;
  rootFeed: undefined;
  rootSearch: undefined;
  rootMe: undefined;
  rootNotifications: undefined;
};

type StackNavFactoryProps = {
  screenName: string;
};

const Stack = createStackNavigator<RootStackNavigatorFactory>();

const StackNavFactory = ({ screenName }: StackNavFactoryProps) => {
  return (
    <Stack.Navigator>
      {screenName === "Feed" ? <Stack.Screen name={"rootFeed"} component={Feed} /> : null}
      {screenName === "Search" ? <Stack.Screen name={"rootSearch"} component={Search} /> : null}
      {screenName === "Notifications" ? <Stack.Screen name={"rootNotifications"} component={Notifications} /> : null}
      {screenName === "Me" ? <Stack.Screen name={"rootMe"} component={Me} /> : null}
      <Stack.Screen name={"Profile"} component={Profile} />
      <Stack.Screen name={"Photo"} component={Photo} />
    </Stack.Navigator>
  );
};

export default StackNavFactory;
