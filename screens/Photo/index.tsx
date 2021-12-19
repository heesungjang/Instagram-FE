import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootStackNavigatorFactory } from "../../navigators/StackNavFactory";

type Props = NativeStackScreenProps<RootStackNavigatorFactory, "Photo">;

const Photo = ({ navigation }: Props) => {
  return (
    <View style={{ backgroundColor: "black", flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text style={{ color: "white", fontSize: 25 }}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Photo;
