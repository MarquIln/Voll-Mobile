import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Register from '../screens/Register';
import Tabs from '../Tabs';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ 
                        headerShown: false }}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{ 
                        headerShown: false }}
                />
                <Stack.Screen
                    name='Tabs'
                    component={Tabs}
                    options={{ 
                        headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
