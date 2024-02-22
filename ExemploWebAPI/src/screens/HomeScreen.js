import { useState } from "react";
import { searchPokemonByName } from "../services/PokemonServices";
import { ActivityIndicator, Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import { PokemonListItem } from "../components";

const HomeScreen = ({navigation}) => {
    const [ searchText, setSearchText ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ pokemons, setPokemons ] = useState([]);

    const handleSearchPokemon = async () => {
        setLoading(true);
        try {
            const response = await searchPokemonByName(searchText);
            setPokemons(response);
        } catch (error){
            console.error('Error fetching Pokemon: ', error);
            setPokemons([]);
        }
        setLoading(false);
    }

    const handlePokemonPress = (pokemon) => {
        navigation.navigate('PokemonDetails', {pokemon});
    }

    return(
        <View>
            <TextInput 
                style={styles.inputText}
                placeholder="Buscar por um Pokemon"
                onChangeText={ (text) => setSearchText(text) }
                value={searchText}
            />
            <Button title="Buscar" onPress={handleSearchPokemon} />
            { loading && <ActivityIndicator style={styles.spin} /> }
            <FlatList
                data={pokemons}
                keyExtractor={ (item) => item.id.toString() }
                renderItem={ ({item}) => (<PokemonListItem pokemon={item} onPress={ () => handlePokemonPress(item)} />)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputText: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    spin: {
        marginTop: 20
    }
});

export default HomeScreen;