// REACT
import React, { useState } from "react";

// REACT NATIVE
import { StyleSheet, Text, View } from "react-native";

// EXPO
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";

// COMPONENTS
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";

interface Error {}

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

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
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
