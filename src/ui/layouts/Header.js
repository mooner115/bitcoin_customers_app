import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {colors} from '../../themes/Colors';
import {routes} from '../../navigation/routes';

import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {DrawerActions} from '@react-navigation/native';

const Header = ({navigation, route}) => {
  const [pathname, setPathName] = useState('');
  const isMatched = path => pathname === path;
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setPathName(route);
  }, [route]);

  const handleInputChange = value => {
    setInputValue(value);
  };

  const handleClear = () => {
    setInputValue('');
  };

  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const navigate = (navigator, route) => {
    navigation.navigate(navigator, {screen: route});
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.DARK} barStyle={'light-content'} />

      <View
        style={
          isMatched(routes.MANUALPAY) ||
          isMatched(routes.CONFIRMPAY) ||
          isMatched(routes.MANUALREQUEST) ||
          isMatched(routes.CONFIRMREQUEST) ||
          isMatched(routes.ABOUT) ||
          isMatched(routes.REVIEW)
            ? styles.container
            : isMatched(routes.FILTER)
            ? styles.container_white
            : styles.container_round
        }>
        <View style={styles.name_area}>
          <TouchableOpacity activeOpacity={0.6} onPress={handleOpenDrawer}>
            <Image
              source={require('../../assets/images/more.png')}
              style={styles.more_icon}
              tintColor={isMatched(routes.FILTER) ? colors.DARK : colors.WHITE}
            />
          </TouchableOpacity>
        </View>

        {(isMatched(routes.SCANPAY) ||
          isMatched(routes.MANUALPAY) ||
          isMatched(routes.CONFIRMPAY)) && (
          <Text style={styles.header_path}>Pay</Text>
        )}

        {(isMatched(routes.SCANREQUEST) ||
          isMatched(routes.MANUALREQUEST) ||
          isMatched(routes.CONFIRMREQUEST)) && (
          <Text style={styles.header_path}>Request</Text>
        )}

        {isMatched(routes.PROFILE) && (
          <Text style={styles.header_path}>Profile</Text>
        )}

        {isMatched(routes.FILTER) && (
          <Text style={styles.header_path_dark}>Filter Options</Text>
        )}

        {!isMatched(routes.PROFILE) &&
          !isMatched(routes.NOTIFY) &&
          !isMatched(routes.NOTIFYSETTING) &&
          !isMatched(routes.SCANPAY) &&
          !isMatched(routes.MANUALPAY) &&
          !isMatched(routes.CONFIRMPAY) &&
          !isMatched(routes.SCANREQUEST) &&
          !isMatched(routes.MANUALREQUEST) &&
          !isMatched(routes.CONFIRMREQUEST) &&
          !isMatched(routes.FILTER) &&
          !isMatched(routes.NOTIFY) &&
          !isMatched(routes.NOTIFYSETTING) && (
            <View style={styles.input_area}>
              <TextInput
                placeholder="Search ..."
                value={inputValue}
                onChangeText={handleInputChange}
                placeholderTextColor={colors.GREY}
                style={{
                  width: '80%',
                  color: colors.BLACK,
                  fontFamily: 'Roboto-Medium',
                  paddingVertical: 4,
                  height: 80,
                }}
              />
              {inputValue.length == '' ? (
                <MaterialIcons name="search" style={styles.input_icon} />
              ) : (
                <TouchableOpacity onPress={handleClear} activeOpacity={0.4}>
                  <Octicons name="x-circle" style={styles.close_icon} />
                </TouchableOpacity>
              )}
            </View>
          )}

        {!isMatched(routes.PROFILE) &&
          !isMatched(routes.NOTIFY) &&
          !isMatched(routes.NOTIFYSETTING) &&
          !isMatched(routes.SCANPAY) &&
          !isMatched(routes.MANUALPAY) &&
          !isMatched(routes.CONFIRMPAY) &&
          !isMatched(routes.SCANREQUEST) &&
          !isMatched(routes.MANUALREQUEST) &&
          !isMatched(routes.CONFIRMREQUEST) &&
          !isMatched(routes.FILTER) &&
          !isMatched(routes.NOTIFY) &&
          !isMatched(routes.NOTIFYSETTING) && (
            <View style={styles.icon_area}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigate(routes.FILTER, routes.FILTER)}>
                <Image
                  source={require('../../assets/images/filter.png')}
                  style={styles.filter_icon}
                  tintColor={colors.WHITE}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigate(routes.NOTIFYNAVIGATOR, routes.NOTIFY)}
                activeOpacity={0.8}>
                <Image
                  source={require('../../assets/images/alarm.png')}
                  style={styles.alarm_icon}
                  tintColor={colors.WHITE}
                />
              </TouchableOpacity>
            </View>
          )}

        {(isMatched(routes.NOTIFY) ||
          isMatched(routes.NOTIFYSETTING) ||
          isMatched(routes.FILTER)) && (
          <View style={styles.icon_area}>
            {isMatched(routes.NOTIFY) && (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() =>
                  navigate(routes.NOTIFYNAVIGATOR, routes.NOTIFYSETTING)
                }>
                <Image
                  source={require('../../assets/images/alarm_setting.png')}
                  style={styles.filter_icon}
                  tintColor={colors.WHITE}
                />
              </TouchableOpacity>
            )}

            {isMatched(routes.NOTIFYSETTING) && (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigate(routes.NOTIFYNAVIGATOR, routes.NOTIFY)}>
                <Image
                  source={require('../../assets/images/alarm_setting.png')}
                  style={styles.filter_icon}
                  tintColor={colors.ORANGE}
                />
              </TouchableOpacity>
            )}

            {(isMatched(routes.NOTIFY) || isMatched(routes.NOTIFYSETTING)) && (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigate(routes.MAPNAVIGATOR, routes.MAP)}>
                <Image
                  source={require('../../assets/images/close.png')}
                  style={styles.back_icon}
                  tintColor={colors.WHITE}
                />
              </TouchableOpacity>
            )}

            {isMatched(routes.FILTER) && (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigate(routes.MAPNAVIGATOR, routes.MAP)}>
                <Image
                  source={require('../../assets/images/close.png')}
                  style={styles.back_icon}
                  tintColor={colors.DARK}
                />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container_round: {
    height: 70,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: colors.DARK,
    justifyContent: 'space-between',
    zIndex: -1,
  },

  container_white: {
    height: 70,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: colors.WHITE,
    justifyContent: 'space-between',
    zIndex: -1,
  },

  container: {
    height: 70,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: colors.DARK,
    justifyContent: 'space-between',
    zIndex: -1,
  },

  name_area: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input_area: {
    zIndex: 2,
    height: 40,
    width: '65%',
    borderRadius: 5,
    color: colors.GREY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.WHITE,
  },

  icon_area: {
    width: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input_icon: {
    color: colors.BLACK,
    left: -6,
    fontSize: 25,
    width: 30,
  },

  close_icon: {
    color: colors.BLACK,
    left: -6,
    fontSize: 15,
    width: 20,
  },

  more_icon: {
    width: 27,
    height: 27,
  },

  filter_icon: {
    width: 27,
    height: 27,
  },

  back_icon: {
    width: 25,
    height: 25,
  },

  alarm_icon: {
    width: 27,
    height: 27,
  },

  header_path: {
    width: '90%',
    fontFamily: 'Roboto-Medium',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.4,
    color: colors.WHITE,
    paddingHorizontal: 10,
    alignItems: 'center',
  },

  header_path_dark: {
    width: '90%',
    fontFamily: 'Roboto-Medium',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.4,
    color: colors.DARK,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});
