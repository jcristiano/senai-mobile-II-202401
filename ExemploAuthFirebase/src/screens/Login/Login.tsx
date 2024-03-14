import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Login = () => {
    
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    return(
        <View style={styles.container}>
            <Text>Tela de login</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff',
    }
});

export default Login;
