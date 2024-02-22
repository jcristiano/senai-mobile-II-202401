import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import PokemonDetailsScreen from '../screens/PokemonDetailsScreen';


const Stack = createStackNavigator();

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Pokédex' }} />
                <Stack.Screen name="PokemonDetails" component={PokemonDetailsScreen} options={{ title: 'Pokemon Details' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;