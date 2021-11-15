// REACT
import React from "react";

// RN
import { Text, View, TouchableOpacity } from "react-native";

// NAVIGATOR
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/LoggedOutNav";

type IProps = NativeStackScreenProps<RootStackParamList, "Welcome">;

const Welcome = ({ navigation }: IProps) => {
    console.log(navigation);
    return (
        <View>
            <Text>Welcome</Text>
            <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
                <View>
                    <Text>Go to Create Account</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <View>
                    <Text>Go to Login</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Welcome;
