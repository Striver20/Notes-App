import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home.js";
import Notes from "./screens/Notes.js";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          component={Home}
          name="Home"
          options={{ headerShown: false }}
        />
        <Stack.Screen component={Notes} name="Notes" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
