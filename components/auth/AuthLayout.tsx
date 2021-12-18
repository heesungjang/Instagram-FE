//REACT
import React from "react";

//RN
import { Keyboard, Platform, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";

//STYLE
import styled from "styled-components/native";

interface IAuthLayout {}

const AuthLayout: React.FC<IAuthLayout> = ({ children }) => {
  const [name, setName] = React.useState("");

  const pullDownKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={pullDownKeyboard} disabled={Platform.OS === "web"}>
      <Container>
        <KeyboardAvoidingView
          style={{
            width: "100%",
          }}
          behavior="position"
          keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}
        >
          <Logo resizeMode="contain" source={require("../../assets/logo.png")} />
          {children}
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
};
1;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 0px 20px;
`;

const Logo = styled.Image`
  height: 120px;
  width: 100%;
  margin-bottom: 15px;
`;

export default AuthLayout;
