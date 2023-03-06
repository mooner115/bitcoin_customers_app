import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes';
import List from '../ui/screens/home/List';
import About from '../ui/screens/home/About';
import Review from '../ui/screens/home/Review';

const Stack = createNativeStackNavigator();

const ListNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
      <Stack.Screen name={routes.LIST} component={List} />
      <Stack.Screen name={routes.ABOUT} component={About} />
      <Stack.Screen name={routes.REVIEW} component={Review} />
    </Stack.Navigator>
  );
};

export default ListNavigator;
