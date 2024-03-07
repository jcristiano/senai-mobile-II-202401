import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-reanimated/lib/typescript/Animated";


const SettingsPage = () => {
    return (
        <View style={styles.container}>
            <Text>Settings Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
});

export default SettingsPage;