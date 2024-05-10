import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { RootStackParamList } from "../types/AppTypes";
import { RouteProp } from "@react-navigation/native";

type AddNoteScreenRouteProp = 
    RouteProp<RootStackParamList, 'AddNote'>;

type AddNoteScreenProps = {
    route: AddNoteScreenRouteProp
}

const AddNotesScreen: React.FC<AddNoteScreenProps> = ({route}) => {
    debugger;
    const { onAddNote } = route.params;

    const [ note, setNote ] = useState<string>('');

    const handleChangeNote = () => {
        if (note.trim() !== ''){
            onAddNote(note)   
        }
    }

    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Digite a sua nota..."
                multiline
                value={note}
                onChangeText={setNote}
                />
            <Button mode="contained" onPress={handleChangeNote}>
                Adicionar Nota
            </Button>
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