// REACT
import React, { useState } from "react";

// REACT NATIVE
import { StyleSheet, Text, View } from "react-native";

// EXPO
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";

// COMPONENTS
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";

interface Error {}

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    const onFinish = () => setLoading(false);

    const preload = async () => {
        const fontToLoad = [Ionicons.font];
        const fontPromises = fontToLoad.map((font: any) =>
            Font.loadAsync(font)
        );
        console.log(fontPromises);
        await Promise.all(fontPromises);
    };

    if (loading) {
        return (
            <AppLoading
                startAsync={preload}
                onError={console.warn}
                onFinish={onFinish}
            />
        );
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
