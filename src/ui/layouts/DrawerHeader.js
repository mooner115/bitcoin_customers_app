import React from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {colors} from '../../themes/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DrawerHeader = props => {
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);
  return (
    <View style={{flex: 1, backgroundColor: colors.WHITE}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: colors.DARK}}>
        <View style={{padding: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            {/**/}
            <TouchableOpacity
              style={{height: 80, width: 100, backgroundColor: colors.DARK}}
              activeOpacity={0.6}
              onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
              <MaterialIcons
                name="arrow-back-ios"
                style={{color: colors.WHITE, fontSize: 20}}
              />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}} />
        </View>
        <View />
        <View style={{flex: 1, backgroundColor: colors.WHITE, paddingTop: 10}}>
          <View
            style={{justifyContent: 'center', alignItems: 'center', top: -60}}>
            <Image
              source={require('../../assets/images/logo2.png')}
              style={styles.image}
            />
          </View>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    width: '80%',
    backgroundColor: colors.brown,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },

  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 40,
    marginBottom: -40,
  },
});

export default DrawerHeader;
