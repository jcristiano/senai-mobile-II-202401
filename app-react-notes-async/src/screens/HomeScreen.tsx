import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const HomeScreen: React.FC = () => {
    return(
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 16
    }
})

export default HomeScreen;