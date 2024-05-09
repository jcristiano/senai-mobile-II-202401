import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../types/AppTypes";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import AddNotesScreen from "../screens/AddNotesScreen";

const Stack = createStackNavigator<RootStackParamList>();

const AppRouter = () => {
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{title: 'Lista de Notas'}}
            />
            <Stack.Screen
                name="AddNote"
                component={AddNotesScreen}
                options={{title: 'Adicionar Nota'}}
                initialParams={{ onAddNote: () => {} }}
            />
        </Stack.Navigator>
    </NavigationContainer>
}

