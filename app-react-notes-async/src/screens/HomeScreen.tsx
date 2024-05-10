import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const APP_KEY_STORAGE = "APP_KEY_MY_NOTES";

const HomeScreen: React.FC = () => {

    const [ notes, setNotes ] = useState<string[]>([]);

    const loadNotes = () => {
        const notasSalvas = await AsyncStorage.getItem(APP_KEY_STORAGE);
    }

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