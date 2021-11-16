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
    return (
        <Container>
            <Logo source={require("../assets/logo.png")} resizeMode="contain" />
            <CreateAccount>
                <TouchableOpacity>
                    <CreateAccountText>회원가입</CreateAccountText>
                </TouchableOpacity>
            </CreateAccount>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
`;

const Logo = styled.Image`
    height: 140px;
    max-width: 50%;
`;

const CreateAccount = styled.View`
    background-color: ${colors.blue};
    padding: 7px 10px;
    border-radius: 3px;
`;
const CreateAccountText = styled.Text`
    color: white;
    font-weight: 600;
`;

const LoginLink = styled.Text`
    font-size: 15px;
    margin-top: 30px;
    font-weight: 800;
    color: ${colors.blue};
`;

export default Welcome;
