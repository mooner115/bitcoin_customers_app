import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes';
import Login from '../ui/screens/auth/Login';
import Register from '../ui/screens/auth/Register';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.LOGIN} component={Login} />
      <Stack.Screen name={routes.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
