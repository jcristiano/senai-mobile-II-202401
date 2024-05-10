import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./src/types/AppTypes";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import AddNotesScreen from "./src/screens/AddNotesScreen";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <PaperProvider>
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
    </PaperProvider>    
  );
}

