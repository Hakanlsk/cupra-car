import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='login'>
            <Stack.Screen name='login' options={{headerShown:false}} component={LoginScreen}/>
            <Stack.Screen name='Home' options={{headerShown:false}} component={HomeScreen}/>
            <Stack.Screen name='Detail' options={{headerShown:false}} component={DetailScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation