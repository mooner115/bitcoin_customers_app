import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import {routes} from '../../navigation/routes';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';

const Footer = ({navigation, route}) => {
  const [pathname, setPathName] = useState('');
  const isMatched = path => pathname === path;

  const navigate = (navigator, route) => {
    navigation.navigate(navigator, {screen: route});
  };

  useEffect(() => {
    setPathName(route);
  }, [route]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigate(routes.LISTNAVIGATOR, routes.LIST)}>
        <Image
          source={require('../../assets/images/menu.png')}
          style={[
            styles.icon,
            {tintColor: isMatched(routes.LIST) ? colors.ORANGE : colors.WHITE},
          ]}
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigate(routes.MAPNAVIGATOR, routes.MAP)}>
        <Image
          source={require('../../assets/images/map.png')}
          style={[
            styles.icon,
            {tintColor: isMatched(routes.LIST) ? colors.ORANGE : colors.WHITE},
          ]}
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigate(routes.WALLETNAVIGATOR, routes.WALLET)}>
        <Image
          source={require('../../assets/images/Group.png')}
          style={styles.bitcoin}
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigate(routes.LIKEDNAVIGATOR, routes.LIKED)}>
        <Image
          source={require('../../assets/images/love.png')}
          style={[
            styles.icon,
            {tintColor: isMatched(routes.LIST) ? colors.ORANGE : colors.WHITE},
          ]}
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigate(routes.PROFILENAVIGATOR, routes.PROFILE)}>
        <Image
          source={require('../../assets/images/user.png')}
          style={[
            styles.icon,
            {tintColor: isMatched(routes.LIST) ? colors.ORANGE : colors.WHITE},
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    height: units.height / 12,
    width: units.width,
    backgroundColor: colors.DARK,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    zIndex: 10,
  },

  icon: {
    height: 30,
    width: 30,
  },

  bitcoin: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: colors.WHITE,
    top: -35,
  },
});
