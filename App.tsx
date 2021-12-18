// REACT
import React, { useState } from "react";

// EXPO
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";

// COMPONENTS
import AppLoading from "expo-app-loading";
import LoggedOutNav from "./navigators/LoggedOutNav";
import { NavigationContainer } from "@react-navigation/native";

//FETCH
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import client, { isLoggedInVar, tokenVar } from "./apollo";
import LoggedInNav from "./navigators/LoggedInNav";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App: React.FC = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const [loading, setLoading] = useState<boolean>(true);

  const onFinish = () => setLoading(false);

  const preloadAssets = async () => {
    // 로드 폰트
    const fontToLoad = [Ionicons.font];
    const fontPromises = fontToLoad.map((font: any) => Font.loadAsync(font));
    // 로드 이미지
    const imagesToLoad = [require("./assets/logo.png")];
    const imagePromises = imagesToLoad.map((image: any) => Asset.loadAsync(image));
    Promise.all<Promise<void> | Promise<Asset[]>>([...fontPromises, ...imagePromises]);
  };

  const preload = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      isLoggedInVar(true);
      tokenVar(token);
    }
    preloadAssets();
  };

  if (loading) {
    // promise 작업이 모두 끝나면 onFinish 실행 --> loading state to true
    return <AppLoading startAsync={preload} onError={console.warn} onFinish={onFinish} />;
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>{isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}</NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
