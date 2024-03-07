import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomePage = () => {

    return(
        <View style={styles.container}>
            <Text>Home Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomePage;