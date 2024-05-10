import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { RootStackParamList } from "../types/AppTypes";
import { RouteProp } from "@react-navigation/native";

type AddNoteScreenRouteProp = 
    RouteProp<RootStackParamList, 'AddNote'>;

type AddNoteScreenProps = {
    route: AddNoteScreenRouteProp
}

const AddNotesScreen: React.FC<AddNoteScreenProps> = ({route}) => {
    
    const { onAddNote } = route.params;

    const [ note, setNote ] = useState<string>('');



    return(
        <View style={styles.container}>
            <TextInput style={styles.input}>

            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 16
    },
    input: {
        marginBottom: 16,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        minHeight: 100
    }
})

export default AddNotesScreen;