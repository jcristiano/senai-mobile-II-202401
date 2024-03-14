import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, TextInput, View } from "react-native";

const Login = () => {
    
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);

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
            { loading ? 
                (<ActivityIndicator />) : 
                (<View>
                    
                </View>)
            }
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
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    buttonClick: {
        backgroundColor: '#006db2',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        flex: 1
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
});

export default Login;
