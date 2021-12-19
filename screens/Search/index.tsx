import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootStackNavigatorFactory } from "../../navigators/StackNavFactory";

type Props = NativeStackScreenProps<RootStackNavigatorFactory, "rootSearch">;

const Search = ({ navigation }: Props) => {
  return (
    <View style={{ backgroundColor: "black", flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={() => navigation.navigate("Photo")}>
        <Text style={{ color: "white", fontSize: 25 }}>Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
