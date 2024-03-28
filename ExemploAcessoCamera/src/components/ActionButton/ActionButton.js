import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";


const ActionButton = ({action, title}) => {
   

    return(
        <TouchableOpacity>
            <FontAwesomeIcon />
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20
    }
});