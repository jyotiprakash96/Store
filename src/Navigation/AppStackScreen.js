import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Components/Home';
import AddProduct from '../Components/AddProduct';

const Stack = createStackNavigator();

const AppStackScreen = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'AddProduct'} component={AddProduct} />
      </Stack.Navigator>
  );
};

export default AppStackScreen;