import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import {routes} from '../../navigation/routes';

import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {DrawerActions} from '@react-navigation/native';
import CustomStatusBar from '../components/CustomStatusBar';

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
      <CustomStatusBar bgColor={colors.DARK} barStyle={'light-content'} />

      <View
        style={
          isMatched(routes.MANUALPAY) ||
          isMatched(routes.CONFIRMPAY) ||
          isMatched(routes.MANUALREQUEST) ||
          isMatched(routes.CONFIRMREQUEST) ||
          isMatched(routes.ABOUT) ||
          isMatched(routes.REVIEW) ||
          isMatched(routes.WRITEREVIEW)
            ? styles.container
            : isMatched(routes.FILTER)
            ? styles.container_white
            : styles.container_round
        }>
        <View style={styles.name_area}>
          <TouchableOpacity activeOpacity={0.6} onPress={handleOpenDrawer}>
            <Image
              source={require('../../assets/images/more.png')}
              style={[
                styles.more_icon,
                {
                  tintColor: isMatched(routes.FILTER)
                    ? colors.DARK
                    : colors.WHITE,
                },
              ]}
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
                placeholder="Search"
                value={inputValue}
                onChangeText={handleInputChange}
                placeholderTextColor={colors.GREY}
                style={styles.input}
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
                  style={[styles.filter_icon, {tintColor: colors.WHITE}]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigate(routes.NOTIFYNAVIGATOR, routes.NOTIFY)}
                activeOpacity={0.8}>
                <Image
                  source={require('../../assets/images/alarm.png')}
                  style={[styles.alarm_icon, {tintColor: colors.WHITE}]}
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
                  style={[styles.filter_icon, {tintColor: colors.WHITE}]}
                />
              </TouchableOpacity>
            )}

            {isMatched(routes.NOTIFYSETTING) && (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigate(routes.NOTIFYNAVIGATOR, routes.NOTIFY)}>
                <Image
                  source={require('../../assets/images/alarm_setting.png')}
                  style={[styles.filter_icon, {tintColor: colors.WHITE}]}
                />
              </TouchableOpacity>
            )}

            {(isMatched(routes.NOTIFY) || isMatched(routes.NOTIFYSETTING)) && (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigate(routes.MAPNAVIGATOR, routes.MAP)}>
                <Image
                  source={require('../../assets/images/close.png')}
                  style={[styles.back_icon, {tintColor: colors.WHITE}]}
                />
              </TouchableOpacity>
            )}

            {isMatched(routes.FILTER) && (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigate(routes.MAPNAVIGATOR, routes.MAP)}>
                <Image
                  source={require('../../assets/images/close.png')}
                  style={[styles.back_icon, {tintColor: colors.DARK}]}
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
    height: units.height / 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: units.width / 13.3,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: colors.DARK,
    justifyContent: 'space-between',
    zIndex: -1,
  },

  container_white: {
    height: units.height / 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: units.width / 13.3,
    backgroundColor: colors.WHITE,
    justifyContent: 'space-between',
    zIndex: -1,
  },

  container: {
    height: units.height / 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: units.width / 13.3,
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
    height: units.height / 20.5,
    width: units.width / 1.8,
    borderRadius: 5,
    color: colors.GREY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.WHITE,
  },

  input: {
    width: units.width / 2,
    color: colors.BLACK,
    fontFamily: 'Roboto-Medium',
    paddingVertical: 4,
    height: units.height / 10.2,
    paddingLeft: 10,
  },

  icon_area: {
    width: units.width / 5.7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input_icon: {
    color: colors.BLACK,
    left: -6,
    fontSize: 25,
    width: units.width / 13.3,
  },

  close_icon: {
    color: colors.BLACK,
    left: -6,
    fontSize: 15,
    width: units.width / 20,
  },

  more_icon: {
    width: units.width / 14.8,
    height: units.width / 14.8,
  },

  filter_icon: {
    width: units.width / 14.8,
    height: units.width / 14.8,
  },

  back_icon: {
    width: units.width / 16,
    height: units.width / 16,
  },

  alarm_icon: {
    width: units.width / 14.8,
    height: units.width / 14.8,
  },

  header_path: {
    width: '90%',
    fontFamily: 'Roboto-Medium',
    fontSize: units.width / 20,
    fontWeight: 'bold',
    letterSpacing: 0.4,
    color: colors.WHITE,
    paddingHorizontal: units.width / 40,
    alignItems: 'center',
  },

  header_path_dark: {
    width: '90%',
    fontFamily: 'Roboto-Medium',
    fontSize: units.width / 20,
    fontWeight: 'bold',
    letterSpacing: 0.4,
    color: colors.DARK,
    paddingHorizontal: units.width / 40,
    alignItems: 'center',
  },
});
