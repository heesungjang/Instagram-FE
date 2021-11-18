// REACT
import React, { useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// RN
import { KeyboardAvoidingView, TextInput } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// NAVIGATOR
import { RootStackParamList } from "../navigators/LoggedOutNav";
import AuthLayout from "../components/auth/AuthLayout";
import { AuthTextInput } from "../components/auth/AuthTextInput";
import AuthButton from "../components/auth/AuthButton";
import { Platform } from "react-native";

type IProps = NativeStackScreenProps<RootStackParamList, "Login">;

type FormValues = {
    username: string;
    password: string;
};

const Login = ({ navigation }: IProps) => {
    const { register, handleSubmit, setValue } = useForm();
    const passwordRef = useRef(null);

    const onValid: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    };
    const onNext = (nextInput: React.RefObject<TextInput>) => {
        nextInput?.current?.focus();
    };

    useEffect(() => {
        register("username", {
            required: true,
        });
        register("password", {
            required: true,
        });
    }, [register]);

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
                    onSubmitEditing={() => onNext(passwordRef)}
                    onChangeText={(text) => setValue("username", text)}
                />
                <AuthTextInput
                    placeholder="Password"
                    secureTextEntry
                    returnKeyType="done"
                    lastOne={true}
                    placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                    onSubmitEditing={handleSubmit(onValid)}
                    onChangeText={(text) => setValue("password", text)}
                />
                <AuthButton
                    text="로그인"
                    disabled={false}
                    onPress={handleSubmit(onValid)}
                    loading={false}
                />
            </KeyboardAvoidingView>
        </AuthLayout>
    );
};

export default Login;
