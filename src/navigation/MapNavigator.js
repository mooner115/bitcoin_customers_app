import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes';
import Map from '../ui/screens/home/Map';
import About from '../ui/screens/home/About';
import Review from '../ui/screens/home/Review';
import WriteReview from '../ui/screens/home/WriteReview';

const Stack = createNativeStackNavigator();

const MapNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
      <Stack.Screen name={routes.MAP} component={Map} />
      <Stack.Screen name={routes.ABOUT} component={About} />
      <Stack.Screen name={routes.REVIEW} component={Review} />
      <Stack.Screen name={routes.WRITEREVIEW} component={WriteReview} />
    </Stack.Navigator>
  );
};

export default MapNavigator;
