//REACT
import React from "react";

//STYLE
import styled from "styled-components/native";

interface IAuthLayout {
    children: React.ReactNode;
}

const AuthLayout: React.FC<IAuthLayout> = ({ children }) => {
    return (
        <Container>
            <Logo source={require("../../assets/logo.png")} resizeMode="contain" />
            {children}
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
    width: 100%;
    max-width: 50%;
    margin-bottom: 20px;
`;

export default AuthLayout;
