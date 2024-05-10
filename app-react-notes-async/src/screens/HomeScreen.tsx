import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";

const APP_KEY_STORAGE = "APP_KEY_MY_NOTES";

const HomeScreen: React.FC = () => {

    const [ notes, setNotes ] = useState<string[]>([]);

    useEffect( () => {
        loadNotes();
    }, []);

    const loadNotes = async () => {
        try {
            const notasSalvas = await AsyncStorage.getItem(APP_KEY_STORAGE);
            if (notasSalvas !== null ){
                setNotes(JSON.parse(notasSalvas));
            }
        } catch (err) {
            console.error("Erro ao ler notas:", err);
            
        }
    }

    return(
        <View style={styles.container}>
            <ScrollView>
                {notes.map((note, index) => (
                    <Card key={index} style={styles.card}>
                        
                    </Card>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 16
    },
    card: {
        marginBottom: 16
    }
})

export default HomeScreen;