//REACT
import React, { useRef } from "react";

//RN
import { KeyboardAvoidingView, Platform, TextInput } from "react-native";

//STYLE
import styled from "styled-components/native";
import AuthButton from "../components/auth/AuthButton";

//COMPONENTS
import { AuthTextInput } from "../components/auth/AuthTextInput";
import AuthLayout from "../components/auth/AuthLayout";

const CreateAccount: React.FC = () => {
    const lastNameRef = useRef(null);
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const onNext = (nextInput: React.RefObject<TextInput>) => {
        nextInput?.current?.focus();
    };
    const onDone = () => {
        alert("done!");
    };

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
                />
                <AuthTextInput
                    ref={lastNameRef}
                    placeholder="성"
                    returnKeyType="next" // 키보드 입력 확인 버튼  text
                    onSubmitEditing={() => onNext(usernameRef)}
                    placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                />
                <AuthTextInput
                    ref={usernameRef}
                    placeholder="유저네임"
                    returnKeyType="next" // 키보드 입력 확인 버튼  text
                    onSubmitEditing={() => onNext(emailRef)}
                    placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                />
                <AuthTextInput
                    ref={emailRef}
                    placeholder="이메일"
                    keyboardType="email-address"
                    returnKeyType="next" // 키보드 입력 확인 버튼  text
                    placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                    onSubmitEditing={() => onNext(passwordRef)}
                />
                <AuthTextInput
                    ref={passwordRef}
                    lastOne={true}
                    placeholder="비밀번호"
                    secureTextEntry // 입력 값 감추기
                    returnKeyType="done" // 키보드 입력 확인 버튼  text
                    onSubmitEditing={onDone}
                    placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                />
                <AuthButton text="새로운 계정 만들기" disabled={true} onPress={() => null} />
            </KeyboardAvoidingView>
        </AuthLayout>
    );
};

const Input = styled.TextInput`
    width: 100%;
    background-color: white;
`;

export default CreateAccount;
