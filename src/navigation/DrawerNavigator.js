import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {routes} from './routes';
import {colors} from '../themes/Colors';

import DrawerHeader from '../ui/layouts/DrawerHeader';
import NotFound from '../ui/screens/NotFound';
import AuthNavigator from './AuthNavigator';
import WalletNavigator from './WalletNavigator';
import ProfileNavigator from './ProfileNavigator';
import ListNavigator from './ListNavigator';

import {useDispatch} from 'react-redux';
import {logOutAccount} from '../context/userSlice';
import LikedNavigator from './LikedNavigator';
import MapNavigator from './MapNavigator';
import Filter from '../ui/screens/setting/Filter';
import NotifyNavigator from './NotifyNavigator';
import {tintColor} from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutAccount);
  };

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerHeader {...props} />}
      initialRouteName={routes.MAPNAVIGATOR}
      screenOptions={{
        headerShown: false,
        swipeEnabled: true,
        drawerActiveTintColor: colors.ORANGE,
        drawerInactiveTintColor: colors.DARKGREY,
      }}>
      <Drawer.Screen
        name={routes.PROFILENAVIGATOR}
        component={ProfileNavigator}
        options={{
          drawerLabel: 'Profile',
          drawerIcon: ({focused}) => (
            <Image
              source={require('../assets/images/user.png')}
              style={[
                styles.drawer,
                {tintColor: focused ? colors.ORANGE : colors.DARK},
              ]}
            />
          ),
        }}
      />

      <Drawer.Screen
        name={routes.WALLETNAVIGATOR}
        component={WalletNavigator}
        options={{
          drawerLabel: 'Wallet',
          drawerIcon: ({focused}) => (
            <Image
              source={require('../assets/images/wallet.png')}
              style={[
                styles.drawer,
                {tintColor: focused ? colors.ORANGE : colors.DARK},
              ]}
            />
          ),
        }}
      />

      <Drawer.Screen
        name={routes.HISTORY}
        component={NotFound}
        options={{
          drawerLabel: 'History',
          drawerIcon: ({focused}) => (
            <Image
              source={require('../assets/images/file.png')}
              style={[
                styles.drawer,
                {tintColor: focused ? colors.ORANGE : colors.DARK},
              ]}
            />
          ),
        }}
      />

      <Drawer.Screen
        name={routes.REVIEWS}
        component={NotFound}
        options={{
          drawerLabel: 'Reviews',
          drawerIcon: ({focused}) => (
            <Image
              source={require('../assets/images/star.png')}
              style={[
                styles.drawer,
                {tintColor: focused ? colors.ORANGE : colors.DARK},
              ]}
            />
          ),
        }}
      />

      <Drawer.Screen
        name={routes.COMMENTS}
        component={NotFound}
        options={{
          drawerLabel: 'Comments',
          drawerIcon: ({focused}) => (
            <Image
              source={require('../assets/images/bubble-chat.png')}
              style={[
                styles.drawer,
                {tintColor: focused ? colors.ORANGE : colors.DARK},
              ]}
            />
          ),
        }}
      />

      <Drawer.Screen
        name={routes.FOLLOWING}
        component={NotFound}
        options={{
          drawerLabel: 'Following',
          drawerIcon: ({focused}) => (
            <Image
              source={require('../assets/images/follow.png')}
              style={[
                styles.drawer,
                {tintColor: focused ? colors.ORANGE : colors.DARK},
              ]}
            />
          ),
        }}
      />

      <Drawer.Screen
        name={routes.HELP}
        component={NotFound}
        options={{
          drawerLabel: 'Help',
          drawerIcon: ({focused}) => (
            <Image
              source={require('../assets/images/question.png')}
              style={[
                styles.drawer,
                {tintColor: focused ? colors.ORANGE : colors.DARK},
              ]}
            />
          ),
        }}
      />

      <Drawer.Screen
        name={routes.CONTACT}
        component={NotFound}
        options={{
          drawerLabel: 'Contact',
          drawerIcon: ({focused}) => (
            <Image
              source={require('../assets/images/phone-call.png')}
              style={[
                styles.drawer,
                {tintColor: focused ? colors.ORANGE : colors.DARK},
              ]}
            />
          ),
        }}
      />

      <Drawer.Screen
        name={routes.ABOUTS}
        component={NotFound}
        options={{
          drawerLabel: 'About',
          drawerIcon: ({focused}) => (
            <Image
              source={require('../assets/images/information.png')}
              style={[
                styles.drawer,
                {tintColor: focused ? colors.ORANGE : colors.DARK},
              ]}
            />
          ),
        }}
      />

      <Drawer.Screen
        name={routes.LOGOUT}
        component={AuthNavigator}
        listeners={{
          drawerItemPress: e => {
            e.preventDefault();

            handleLogout();
          },
        }}
        options={{
          drawerLabel: 'Logout',
          drawerIcon: ({focused}) => (
            <Image
              source={require('../assets/images/logout.png')}
              style={[
                styles.drawer,
                {tintColor: focused ? colors.ORANGE : colors.DARK},
              ]}
            />
          ),
        }}
      />

      <Drawer.Screen
        name={routes.LISTNAVIGATOR}
        component={ListNavigator}
        options={{
          drawerItemStyle: {height: 0},
        }}
      />

      <Drawer.Screen
        name={routes.LIKEDNAVIGATOR}
        component={LikedNavigator}
        options={{
          drawerItemStyle: {height: 0},
        }}
      />

      <Drawer.Screen
        name={routes.MAPNAVIGATOR}
        component={MapNavigator}
        options={{
          drawerItemStyle: {height: 0},
        }}
      />

      <Drawer.Screen
        name={routes.NOTIFYNAVIGATOR}
        component={NotifyNavigator}
        options={{
          drawerItemStyle: {height: 0},
        }}
      />

      <Drawer.Screen
        name={routes.FILTER}
        component={Filter}
        options={{
          drawerItemStyle: {height: 0},
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  drawer: {
    height: 20,
    width: 20,
    top: 2,
  },
});
