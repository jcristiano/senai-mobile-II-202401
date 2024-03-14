import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Login = () => {
    
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                autoCapitalize="none"
                value={email}
                onChangeText={ (text) => setEmail(text) }
                />
            <TextInput
                style={styles.input}
                placeholder="Password"
                autoCapitalize="none"
                value={password}
                onChangeText={ (text) => setPassword(text) }
                secureTextEntry={true}
                />
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
