import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Activity/HomeScreen';
import DetailScreen from './Activity/DetailScreen';
import Menu from './Activity/Menu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailScreen} options={{title: "Detalles"}}/>
        <Stack.Screen name="Menu" component={Menu}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
