//REACT
import React, { useRef, useEffect } from "react";

//RN
import { KeyboardAvoidingView, Platform, TextInput } from "react-native";

//COMPONENTS
import AuthButton from "../../components/auth/AuthButton";
import { AuthTextInput } from "../../components/auth/AuthTextInput";
import AuthLayout from "../../components/auth/AuthLayout";

//HELPER
import { useMutation } from "@apollo/client";
import { useForm, SubmitHandler } from "react-hook-form";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigators/LoggedOutNav";
import { CREATE_ACCOUNT_MUTATION } from "../../quries";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
};

type Props = NativeStackScreenProps<RootStackParamList, "CreateAccount">;

const CreateAccount = ({ navigation }: Props) => {
  const lastNameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { register, handleSubmit, setValue, getValues } = useForm<FormValues>();

  const onNext = (nextInput: React.RefObject<TextInput>) => {
    nextInput?.current?.focus();
  };
  const onValid: SubmitHandler<FormValues> = (data) => {
    if (!loading) {
      createAccountMutation({
        variables: {
          ...data,
        },
      });
    }
  };

  const onCompleted = (data: any) => {
    const {
      createAccount: { ok },
    } = data;
    const { username, password } = getValues();
    if (ok) {
      navigation.navigate("Login", { username, password });
    }
  };
  const [createAccountMutation, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });

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
          placeholder="??????"
          returnKeyType="next"
          onSubmitEditing={() => onNext(lastNameRef)}
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          onChangeText={(text) => setValue("firstName", text)}
        />
        <AuthTextInput
          ref={lastNameRef}
          placeholder="???"
          returnKeyType="next" // ????????? ?????? ?????? ??????  text
          onSubmitEditing={() => onNext(usernameRef)}
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          onChangeText={(text) => setValue("lastName", text)}
        />
        <AuthTextInput
          ref={usernameRef}
          placeholder="?????????"
          returnKeyType="next" // ????????? ?????? ?????? ??????  text
          onSubmitEditing={() => onNext(emailRef)}
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          onChangeText={(text) => setValue("username", text)}
        />
        <AuthTextInput
          ref={emailRef}
          placeholder="?????????"
          keyboardType="email-address"
          returnKeyType="next" // ????????? ?????? ?????? ??????  text
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          onSubmitEditing={() => onNext(passwordRef)}
          onChangeText={(text) => setValue("email", text)}
        />
        <AuthTextInput
          ref={passwordRef}
          lastOne={true}
          placeholder="????????????"
          secureTextEntry // ?????? ??? ?????????
          returnKeyType="done" // ????????? ?????? ?????? ??????  text
          onSubmitEditing={handleSubmit(onValid)}
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          onChangeText={(text) => setValue("password", text)}
        />
        <AuthButton text="????????? ?????? ?????????" disabled={false} loading={loading} onPress={handleSubmit(onValid)} />
      </KeyboardAvoidingView>
    </AuthLayout>
  );
};

export default CreateAccount;
