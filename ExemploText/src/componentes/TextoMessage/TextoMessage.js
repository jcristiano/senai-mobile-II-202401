import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const TextoMessage = (props) => {
    const { mensagem: message, mensagemErro: erro } = props;

    const [ hasError, setHasError ] = useState(false);

    useEffect( () => {
        setHasError(!!erro);
    }, [ erro ]);

    return(
        <View>
            {hasError ? 
                (<Text style={styles.erro}>{erro}</Text>) 
                :(<Text style={styles.texto}>{message}</Text>) }
            
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    erro: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'red',
    }
});

export default TextoMessage;