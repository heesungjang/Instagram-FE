//REACT
import React from "react";

//STYLE
import { Ionicons } from "@expo/vector-icons";

const TabIcon = ({ iconName, color, focused }: any) => {
  return <Ionicons name={focused ? iconName : `${iconName}-outline`} color={color} size={focused ? 22 : 20} />;
};

export default TabIcon;
