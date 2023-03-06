import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes';

import NotFound from '../ui/screens/NotFound';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.NOTFOUND} component={NotFound} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
