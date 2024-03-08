import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "../pages/HomePage";
import SettingsPage from "../pages/SettingsPage/Settings";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const AppRoute = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name="Home" 
                    component={HomePage} />
                <Tab.Screen
                    name="Settings"
                    component={SettingsPage} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppRoute;