import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./src/pages/SplashScreen/splashScreen";
import HomeScreen from "./src/pages/Index/index";
import AddMedicine from "./src/pages/AddMedicines/addMedicines"; 
import NewUser from "./src/pages/NewUser/newUser";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="MedicineCreate"
          component={AddMedicine}
        />
        <Stack.Screen
          name="UserCreate"
          component={NewUser}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
