// REACT
import React from "react";

// STYLE
import { colors } from "../colors";
import styled from "styled-components/native";

// NAVIGATOR
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/LoggedOutNav";
import { TouchableOpacity } from "react-native-gesture-handler";

// COMPONENTS
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";

type IProps = NativeStackScreenProps<RootStackParamList, "Welcome">;

const Welcome = ({ navigation }: IProps) => {
    // 라우팅 핸들러
    const navigateToLogin = () => navigation.navigate("Login");
    const navigateCreateAccount = () => navigation.navigate("CreateAccount");

    return (
        <AuthLayout>
            <AuthButton
                disabled={false}
                onPress={navigateCreateAccount}
                text="새로운 계정 만들기"
            />
            <LoginLinkWrapper onPress={navigateToLogin}>
                <LoginLink>로그인</LoginLink>
            </LoginLinkWrapper>
        </AuthLayout>
    );
};

const LoginLink = styled.Text`
    font-size: 15px;
    margin-top: 30px;
    font-weight: 800;
    color: ${colors.blue};
`;

const LoginLinkWrapper = styled.TouchableOpacity`
    align-items: center;
`;

export default Welcome;
