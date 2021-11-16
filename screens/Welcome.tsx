// REACT
import React from "react";

// STYLE
import { colors } from "../colors";
import styled from "styled-components/native";

// NAVIGATOR
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/LoggedOutNav";
import { TouchableOpacity } from "react-native-gesture-handler";

type IProps = NativeStackScreenProps<RootStackParamList, "Welcome">;

const Welcome = ({ navigation }: IProps) => {
    // 라우팅 핸들러
    const navigateToLogin = () => navigation.navigate("Login");
    const navigateCreateAccount = () => navigation.navigate("CreateAccount");

    return (
        <Container>
            <Logo source={require("../assets/logo.png")} resizeMode="contain" />

            <CreateAccount onPress={navigateCreateAccount}>
                <CreateAccountText>새로운 계정 만들기</CreateAccountText>
            </CreateAccount>

            <TouchableOpacity onPress={navigateToLogin}>
                <LoginLink>로그인</LoginLink>
            </TouchableOpacity>
        </Container>
    );
};

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: black;
    padding: 0 40px;
`;

const Logo = styled.Image`
    height: 120px;
    max-width: 50%;
`;

const CreateAccount = styled.TouchableOpacity`
    background-color: ${colors.blue};
    padding: 12px;
    border-radius: 3px;
    width: 100%;
`;
const CreateAccountText = styled.Text`
    color: white;
    font-weight: 600;
    text-align: center;
`;

const LoginLink = styled.Text`
    font-size: 15px;
    margin-top: 30px;
    font-weight: 800;
    color: ${colors.blue};
`;

export default Welcome;
