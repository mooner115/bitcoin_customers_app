import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes';

import Notify from '../ui/screens/setting/Notify';
import NotifySetting from '../ui/screens/setting/NotifySetting';

const Stack = createNativeStackNavigator();

const NotifyNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.NOTIFY} component={Notify} />
      <Stack.Screen name={routes.NOTIFYSETTING} component={NotifySetting} />
    </Stack.Navigator>
  );
};

export default NotifyNavigator;
