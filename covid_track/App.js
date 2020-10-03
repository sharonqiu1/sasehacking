import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/HomePage.js';
import InitialSymptomSelection from './pages/InitialSymptomSelection.js'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            title: 'HomePage',
            headerStyle: {
              backgroundColor: '#ADD8E6',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Symptom Selection"
          component={InitialSymptomSelection}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
