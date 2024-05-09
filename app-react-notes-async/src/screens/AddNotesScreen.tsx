import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { RootStackParamList } from "../types/AppTypes";
import { RouteProp } from "@react-navigation/native";

type AddNoteScreenRouteProp = 
    RouteProp<RootStackParamList, 'AddNote'>;

type AddNoteScreenProps = {
    route: AddNoteScreenRouteProp
}

const AddNotesScreen: React.FC<AddNoteScreenProps> = ({route}) => {
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

export default AddNotesScreen;