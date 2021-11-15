// REACT
import React from "react";

// RN
import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// NAVIGATOR
import { RootStackParamList } from "../navigators/LoggedOutNav";
import { TouchableOpacity } from "react-native-gesture-handler";

type IProps = NativeStackScreenProps<RootStackParamList, "Login">;

const Login = ({ navigation }: IProps) => {
    return (
        <View>
            <Text>Login</Text>
            <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
                <Text>Go to Create Account</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
