import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PokemonListItem = ({ pokemon, onPress }) => {
    const { name : nome, 
        height: altura,  
        weight: peso } = pokemon;


    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text>{`Nome: ${nome}`}</Text>
                <Text>{`Altura: ${altura}`}</Text>
                <Text>{`Peso: ${peso}`}</Text>
                <Image
                    style={styles.image}
                    source={{ uri: pokemon.sprites.front_default }}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    image: {
        width: 100,
        height: 100
    }
});

export default PokemonListItem;