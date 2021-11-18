//REACT
import React, { useRef, useEffect } from "react";

//RN
import { KeyboardAvoidingView, Platform, TextInput } from "react-native";

//COMPONENTS
import AuthButton from "../components/auth/AuthButton";
import { AuthTextInput } from "../components/auth/AuthTextInput";
import AuthLayout from "../components/auth/AuthLayout";

//HELPER
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
};

const CreateAccount: React.FC = () => {
    const { register, handleSubmit, setValue } = useForm<FormValues>();
    const lastNameRef = useRef(null);
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const onNext = (nextInput: React.RefObject<TextInput>) => {
        nextInput?.current?.focus();
    };

    const onValid: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    };

    useEffect(() => {
        register("firstName", {
            required: true,
        });
        register("lastName", {
            required: true,
        });
        register("username", {
            required: true,
        });
        register("email", {
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
                    placeholder="이름"
                    returnKeyType="next"
                    onSubmitEditing={() => onNext(lastNameRef)}
                    placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                    onChangeText={(text) => setValue("firstName", text)}
                />
                <AuthTextInput
                    ref={lastNameRef}
                    placeholder="성"
                    returnKeyType="next" // 키보드 입력 확인 버튼  text
                    onSubmitEditing={() => onNext(usernameRef)}
                    placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                    onChangeText={(text) => setValue("lastName", text)}
                />
                <AuthTextInput
                    ref={usernameRef}
                    placeholder="유저네임"
                    returnKeyType="next" // 키보드 입력 확인 버튼  text
                    onSubmitEditing={() => onNext(emailRef)}
                    placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                    onChangeText={(text) => setValue("username", text)}
                />
                <AuthTextInput
                    ref={emailRef}
                    placeholder="이메일"
                    keyboardType="email-address"
                    returnKeyType="next" // 키보드 입력 확인 버튼  text
                    placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                    onSubmitEditing={() => onNext(passwordRef)}
                    onChangeText={(text) => setValue("email", text)}
                />
                <AuthTextInput
                    ref={passwordRef}
                    lastOne={true}
                    placeholder="비밀번호"
                    secureTextEntry // 입력 값 감추기
                    returnKeyType="done" // 키보드 입력 확인 버튼  text
                    onSubmitEditing={handleSubmit(onValid)}
                    placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                    onChangeText={(text) => setValue("password", text)}
                />
                <AuthButton
                    text="새로운 계정 만들기"
                    disabled={true}
                    onPress={handleSubmit(onValid)}
                />
            </KeyboardAvoidingView>
        </AuthLayout>
    );
};

export default CreateAccount;
