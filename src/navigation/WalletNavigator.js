import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes';

import Wallet from '../ui/screens/Wallet';
import ScanPay from '../ui/screens/pay/ScanPay';
import ManualPay from '../ui/screens/pay/ManualPay';
import ConfirmPay from '../ui/screens/pay/ConfirmPay';
import ScanRequest from '../ui/screens/request/ScanRequest';
import ManualRequest from '../ui/screens/request/ManualRequest';
import ConfirmRequest from '../ui/screens/request/ConfirmRequest';

const Stack = createNativeStackNavigator();

const WalletNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.WALLET} component={Wallet} />

      <Stack.Group>
        <Stack.Screen name={routes.SCANPAY} component={ScanPay} />
        <Stack.Screen name={routes.MANUALPAY} component={ManualPay} />
        <Stack.Screen name={routes.CONFIRMPAY} component={ConfirmPay} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name={routes.SCANREQUEST} component={ScanRequest} />
        <Stack.Screen name={routes.MANUALREQUEST} component={ManualRequest} />
        <Stack.Screen name={routes.CONFIRMREQUEST} component={ConfirmRequest} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default WalletNavigator;
