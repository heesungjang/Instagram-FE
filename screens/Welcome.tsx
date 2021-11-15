import React, { ReactChild } from "react";
import { Text, View, TouchableOpacity } from "react-native";

interface IProps {
    children: ReactChild;
}

const Welcome: React.FC = ({ navigation }) => {
    console.log(props);
    return (
        <View>
            <Text>Welcome</Text>
            <TouchableOpacity onPress={navigation}>
                <View>
                    <Text>Go to Create Account</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Welcome;
