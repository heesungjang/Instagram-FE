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

//FETCH
import { gql, useMutation } from "@apollo/client";
import { isLoggedInVar } from "../apollo";

type IProps = NativeStackScreenProps<RootStackParamList, "Login">;

type FormValues = {
  username: string;
  password: string;
};

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

const Login = ({ route: { params } }: IProps) => {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      username: params?.username,
      password: params?.password,
    },
  });

  const onCompleted = (data: any) => {
    const {
      login: { ok, token },
    } = data;
    if (ok) {
      isLoggedInVar(true);
      console.log(token);
    }
  };

  const [logInMutation, { loading }] = useMutation(LOGIN_MUTATION, { onCompleted });

  const passwordRef = useRef(null);

  const onValid: SubmitHandler<FormValues> = (data) => {
    if (!loading) {
      logInMutation({
        variables: {
          ...data,
        },
      });
    }
  };

  const onNext = (nextInput: React.RefObject<TextInput>) => {
    nextInput?.current?.focus();
  };

  useEffect(() => {
    register("username", {
      required: true,
    });
    register("password", {
      // required: true,
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
          value={watch("username")}
          placeholder="Username"
          returnKeyType="next"
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          onSubmitEditing={() => onNext(passwordRef)}
          onChangeText={(text) => setValue("username", text)}
          autoCapitalize="none"
        />
        <AuthTextInput
          value={watch("password")}
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
          loading={loading}
          onPress={handleSubmit(onValid)}
          disabled={!watch("username") || !watch("password")}
        />
      </KeyboardAvoidingView>
    </AuthLayout>
  );
};

export default Login;
