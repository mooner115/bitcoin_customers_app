import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes';
import {useSelector} from 'react-redux';
import Profile from '../ui/screens/Profile';
import Login from '../ui/screens/auth/Login';
import Register from '../ui/screens/auth/Register';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  const isLogin = useSelector(selector => selector.user.isLogin);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLogin ? (
        <Stack.Screen name={routes.PROFILE} component={Profile} />
      ) : (
        <Stack.Group>
          <Stack.Screen name={routes.LOGIN} component={Login} />
          <Stack.Screen name={routes.REGISTER} component={Register} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
