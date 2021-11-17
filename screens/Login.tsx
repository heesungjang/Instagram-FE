// REACT
import React from "react";

// RN
import { KeyboardAvoidingView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// NAVIGATOR
import { RootStackParamList } from "../navigators/LoggedOutNav";
import AuthLayout from "../components/auth/AuthLayout";
import { AuthTextInput } from "../components/auth/AuthTextInput";
import AuthButton from "../components/auth/AuthButton";
import { Platform } from "react-native";

type IProps = NativeStackScreenProps<RootStackParamList, "Login">;

const Login = ({ navigation }: IProps) => {
    return (
        <AuthLayout>
            <KeyboardAvoidingView
                style={{
                    width: "100%",
                }}
                behavior="padding"
                keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 0}
            >
                <AuthTextInput
                    placeholder="Username"
                    returnKeyType="next"
                    placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                />
                <AuthTextInput
                    placeholder="Password"
                    secureTextEntry
                    returnKeyType="done"
                    lastOne={true}
                    placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                />
                <AuthButton text="로그인" disabled={true} onPress={() => null} />
            </KeyboardAvoidingView>
        </AuthLayout>
    );
};

export default Login;
