import { StyleSheet, Text, View } from "react-native";

const PokemonDetailsScreen = ({ route }) => {
    const { pokemon } = route.params;

    return(
        <View style={styles.container}>
            <Text>{`Nome: ${pokemon.name}`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default PokemonDetailsScreen;