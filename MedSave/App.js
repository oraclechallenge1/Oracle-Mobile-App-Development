// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/pages/SplashScreen/splashScreen';
import Login from './src/pages/Login/login';
import Index from './src/pages/Index/index';
import AddMedicines from './src/pages/AddMedicines/addMedicines';
import NewUser from './src/pages/NewUser/newUser';
import MedicationList from './src/pages/MedicationList/medicationList';
import MedicationDetail from './src/pages/MedicationDetail/medicationDetail';

const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
        <Stack.Screen name="AddMedicines" component={AddMedicines} options={{ headerShown: false }} />
        <Stack.Screen name="NewUser" component={NewUser} options={{ headerShown: false }} />
        <Stack.Screen name="MedicationList" component={MedicationList} options={{ headerShown: false }} />
        <Stack.Screen name="MedicationDetail" component={MedicationDetail} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
