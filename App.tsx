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

const App: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);

    const onFinish = () => setLoading(false);

    const preload = async () => {
        // 로드 폰트
        const fontToLoad = [Ionicons.font];
        const fontPromises = fontToLoad.map((font: any) => Font.loadAsync(font));
        // 로드 이미지
        const imagesToLoad = [require("./assets/logo.png")];
        const imagePromises = imagesToLoad.map((image: any) => Asset.loadAsync(image));

        await Promise.all<Promise<void> | Promise<Asset[]>>([...fontPromises, ...imagePromises]);
    };

    if (loading) {
        return <AppLoading startAsync={preload} onError={console.warn} onFinish={onFinish} />;
    }

    return (
        <NavigationContainer>
            <LoggedOutNav />
        </NavigationContainer>
    );
};

export default App;
