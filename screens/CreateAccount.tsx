//REACT
import React, { useRef } from "react";

//RN
import { KeyboardAvoidingView, Platform, TextInput } from "react-native";

//STYLE
import styled from "styled-components/native";
import AuthButton from "../components/auth/AuthButton";

//COMPONENTS
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
                <Input
                    placeholder="First Name"
                    placeholderTextColor="gray"
                    returnKeyType="next"
                    onSubmitEditing={() => onNext(lastNameRef)}
                />
                <Input
                    placeholder="Last Name"
                    placeholderTextColor="gray"
                    returnKeyType="next"
                    ref={lastNameRef}
                    onSubmitEditing={() => onNext(usernameRef)}
                />
                <Input
                    placeholder="Username"
                    placeholderTextColor="gray"
                    returnKeyType="next"
                    ref={usernameRef}
                    onSubmitEditing={() => onNext(emailRef)}
                />
                <Input
                    placeholder="Email"
                    placeholderTextColor="gray"
                    keyboardType="email-address"
                    returnKeyType="next"
                    ref={emailRef}
                    onSubmitEditing={() => onNext(passwordRef)}
                />
                <Input
                    placeholder="Password"
                    placeholderTextColor="gray"
                    secureTextEntry
                    returnKeyType="done"
                    ref={passwordRef}
                    onSubmitEditing={onDone}
                />
                <AuthButton text="Create Account" disabled={true} onPress={() => null} />
            </KeyboardAvoidingView>
        </AuthLayout>
    );
};

const Input = styled.TextInput`
    width: 100%;
    background-color: white;
`;

export default CreateAccount;
