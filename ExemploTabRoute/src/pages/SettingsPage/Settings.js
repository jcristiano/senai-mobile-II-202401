import React from "react";
import { StyleSheet, View, Text } from "react-native";


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
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default SettingsPage;