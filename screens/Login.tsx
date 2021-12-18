// REACT
import React, { useEffect, useRef } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

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
import { isLoggedInVar, logUserIn } from "../apollo";
import { LOGIN_MUTATION } from "../quries";

type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">;

const Login = ({ route: { params } }: LoginProps) => {
  const passwordRef = useRef(null);
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      username: params?.username,
      password: params?.password,
    },
  });

  const onCompleted = async (data: any) => {
    const {
      login: { ok, token },
    } = data;
    if (ok) {
      await logUserIn(token);
    }
  };
  const onValid: SubmitHandler<FieldValues> = (data) => {
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

  const [logInMutation, { loading }] = useMutation(LOGIN_MUTATION, { onCompleted });

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
          value={watch("username")}
          placeholder="Username"
          returnKeyType="next"
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          onSubmitEditing={() => onNext(passwordRef)}
          onChangeText={(text) => setValue("username", text)}
          autoCapitalize="none"
        />
        <AuthTextInput
          ref={passwordRef}
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
