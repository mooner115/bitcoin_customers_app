import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import BarcodeCreatorViewManager, {
  BarcodeFormat,
} from 'react-native-barcode-creator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import {useSelector} from 'react-redux';

import Footer from '../layouts/Footer';
import {routes} from '../../navigation/routes';

const Wallet = navigation => {
  const [show, setShow] = useState(false);
  const [plus, setPlus] = useState(true);

  const Hide = () => {
    if (plus === true) {
      setPlus(false);
    }
    setShow(true);
  };

  const cross = () => {
    if (show === true) {
      setShow(false);
    }
    setPlus(true);
  };

  const handleSend = () => {
    navigation.navigation.navigate(routes.SCANPAY);
  };

  const handleRequest = () => {
    navigation.navigation.navigate(routes.SCANREQUEST);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.header}>
            <View style={styles.balance_area}>
              <View>
                <Text style={[styles.text, {paddingBottom: 5}]}>
                  Current Wallet Balance
                </Text>
                <Text style={[styles.text, {paddingBottom: 10, fontSize: 20}]}>
                  $ 1200.33
                </Text>
                <View style={styles.bitcoin_area}>
                  <Image
                    source={require('../../assets/images/Group.png')}
                    style={styles.bitcoin}
                  />
                  <Text style={[styles.text, {paddingHorizontal: 7}]}>
                    0.000563721 BTC
                  </Text>
                </View>
              </View>

              <BarcodeCreatorViewManager
                value={'https://www.youtube.com/'}
                background={colors.DARK}
                foregroundColor={colors.WHITE}
                format={BarcodeFormat.QR}
                style={styles.barcode}
              />
            </View>

            <View style={styles.address_area}>
              <Text style={styles.text}>Current Bitcoin Address</Text>
              {plus == true ? (
                <TouchableOpacity
                  onPress={Hide}
                  activeOpacity={0.6}
                  style={styles.plus}>
                  <View>
                    <MaterialCommunityIcons
                      name="plus-circle-outline"
                      style={{color: colors.WHITE, fontSize: 22, width: 30}}
                    />
                  </View>
                </TouchableOpacity>
              ) : null}

              {show == true ? (
                <View style={styles.address_panel}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.address_box}>
                    <Text style={styles.address}>
                      {'0x60aE616a2155Ee3d9A68541Ba4544'}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.6} onPress={cross}>
                    <Octicons name="x-circle" style={styles.address_cross} />
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          </View>

          <View style={styles.button_area}>
            <TouchableOpacity
              onPress={handleSend}
              activeOpacity={1}
              style={styles.send_area}>
              <FontAwesome5 name="long-arrow-alt-up" style={styles.send_icon} />
              <Text style={styles.send_text}>Send</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleRequest}
              activeOpacity={1}
              style={styles.receive_area}>
              <FontAwesome5
                name="long-arrow-alt-down"
                style={styles.receive_icon}
              />
              <Text style={styles.receive_text}>Request</Text>
            </TouchableOpacity>
          </View>

          <View style={{marginHorizontal: 20, marginTop: 15}}>
            <Text
              style={{
                color: colors.BLACK,
                fontFamily: 'Roboto-Bold',
                fontSize: 24,
              }}>
              Last Transactions
            </Text>
            <View
              style={{
                backgroundColor: colors.DARK,
                padding: 8,
                borderRadius: 10,
                paddingHorizontal: 30,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 15,
              }}>
              <View
                style={{
                  backgroundColor: colors.DARK,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    backgroundColor: colors.GREEN,
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    left: -15,
                  }}>
                  <FontAwesome5
                    name="long-arrow-alt-down"
                    style={{
                      color: colors.WHITE,
                      textAlign: 'center',
                      padding: 12,
                      fontSize: 20,
                    }}
                  />
                </TouchableOpacity>
                <View>
                  <Text style={styles.text_bold}>+ $111.53</Text>
                  <Text style={styles.text_medium}>0.25 BTX</Text>
                </View>
              </View>
              <View style={{left: 10}}>
                <Text style={styles.text_regular}>Today, 5;31 PM</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: colors.DARK,
                padding: 8,
                borderRadius: 10,
                paddingHorizontal: 30,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View
                style={{
                  backgroundColor: colors.DARK,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    backgroundColor: colors.ORANGE,
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    left: -15,
                  }}>
                  <FontAwesome5
                    name="long-arrow-alt-up"
                    style={{
                      color: colors.WHITE,
                      textAlign: 'center',
                      padding: 12,
                      fontSize: 20,
                    }}
                  />
                </TouchableOpacity>
                <View>
                  <Text style={styles.text_bold}>+ $111.53</Text>
                  <Text style={styles.text_medium}>0.25 BTX</Text>
                </View>
              </View>
              <View style={{left: 10}}>
                <Text style={styles.text_regular}>Today, 5;31 PM</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bottom} />
      </ScrollView>
      <Footer navigation={navigation.navigation} route={routes.WALLET} />
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  header: {
    backgroundColor: colors.DARK,
  },

  balance_area: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 30,
    marginTop: 10,
  },

  address_area: {
    marginHorizontal: 30,
  },

  text: {
    color: colors.WHITE,
    fontFamily: 'Roboto-Bold',
  },

  bitcoin_area: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  bitcoin: {
    height: 30,
    width: 30,
    borderRadius: 30,
    alignItems: 'center',
  },

  barcode: {
    height: 120,
    width: 120,
  },

  plus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.DARKGREY,
    padding: 10,
    borderRadius: 7,
    marginTop: 15,
    marginBottom: 50,
  },

  address_panel: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },

  address_box: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.DARKGREY,
    padding: 0,
    borderRadius: 7,
    marginBottom: 50,
  },

  address: {
    color: colors.WHITE,
    fontSize: 12,
    letterSpacing: 0.4,
    textAlignVertical: 'center',
    width: 230,
    height: 47,
  },

  address_cross: {
    color: colors.WHITE,
    fontSize: 22,
    width: 25,
    top: -25,
  },

  button_area: {
    width: '100%',
    flexDirection: 'row',
    top: -30,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  send_area: {
    backgroundColor: colors.ORANGE,
    borderColor: colors.WHITE,
    borderWidth: 2,
    width: 50,
    height: 50,
    borderRadius: 15,
  },

  send_icon: {
    color: colors.WHITE,
    textAlign: 'center',
    padding: 12,
    fontSize: 20,
  },

  send_text: {
    color: colors.BLACK,
    fontFamily: 'Roboto-Medium',
    marginVertical: 10,
    top: -5,
    left: 8,
  },

  receive_area: {
    backgroundColor: colors.GREEN,
    borderColor: colors.WHITE,
    borderWidth: 2,
    width: 50,
    height: 50,
    borderRadius: 15,
    left: -15,
  },

  receive_icon: {
    color: colors.WHITE,
    textAlign: 'center',
    padding: 12,
    fontSize: 20,
  },

  receive_text: {
    color: colors.BLACK,
    fontFamily: 'Roboto-Medium',
    marginVertical: 10,
    left: -2,
    top: -5,
    width: 60,
  },

  text_bold: {
    color: colors.WHITE,
    fontFamily: 'Roboto-Bold',
  },

  text_regular: {
    color: colors.WHITE,
    fontFamily: 'Roboto-Regular',
  },

  text_medium: {
    color: colors.WHITE,
    fontFamily: 'Roboto-Medium',
  },

  bottom: {
    marginBottom: 50,
  },
});
