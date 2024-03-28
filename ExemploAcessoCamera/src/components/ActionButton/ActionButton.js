import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons/faLightbulb";


const ActionButton = ({action, title}) => {
   
    return(
        <TouchableOpacity
            style={styles.button}
            onPress={action}
            activeOpacity={0.7}
            >
            <FontAwesomeIcon
                icon={faLightbulb}                 
            />
            <Text style={styles.textButton}>{title}</Text>
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
    },
    textButton: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10
    }
});

export default ActionButton;