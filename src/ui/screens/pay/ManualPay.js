import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../themes/Colors';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import {routes} from '../../../navigation/routes';

const FIXED_LENGTH = 8;

const ManualPay = ({navigation}) => {
  const [amount, setAmount] = useState('0');
  const [calcBTC, setCalcBTC] = useState(getBTCFromUSD('0', false));
  const [isUSD, setUSD] = useState(false);
  const [length, setLength] = useState(100);

  const navigate = route => {
    navigation.navigate(route);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const handleInput = value => {
    const len = value.indexOf('.') !== -1 ? value.split('.')[1].length : 0;
    const amount = value;
    setLength(!len ? 100 : value.split('.')[0].length + 9);
    setAmount(amount);
    setCalcBTC(getBTCFromUSD(amount, isUSD));
  };

  const handleSwap = () => {
    const len = calcBTC.indexOf('.') !== -1 ? calcBTC.split('.')[1].length : 0;
    const amount = calcBTC;
    setLength(!len ? 100 : amount.split('.')[0].length + 9);
    setCalcBTC(getBTCFromUSD(calcBTC.toString(), !isUSD));
    setUSD(!isUSD);
    setAmount(calcBTC.toString());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} route={routes.MANUALPAY} />

      <ScrollView>
        <View style={styles.amount_area}>
          <View style={styles.title_area}>
            <TouchableOpacity style={styles.back_area} onPress={goBack}>
              <MaterialIcons name="arrow-back-ios" style={styles.back_icon} />
            </TouchableOpacity>

            <Text style={styles.title_text}>Send Bitcoins</Text>
          </View>

          <View style={styles.input_area}>
            <Text style={styles.amount_text}>Amount</Text>

            <View style={styles.amount}>
              <Image
                source={
                  isUSD
                    ? require('../../../assets/images/usd.png')
                    : require('../../../assets/images/bitcoin.png')
                }
                style={styles.amount_icon}
              />
              <View style={styles.input_box}>
                <TextInput
                  style={styles.input}
                  value={amount}
                  maxLength={length}
                  onChangeText={handleInput}
                />
                {isUSD ? (
                  <Text style={styles.input_amount}>{calcBTC} BTC</Text>
                ) : (
                  <Text style={styles.input_amount}>$ {calcBTC}</Text>
                )}
              </View>
              <TouchableOpacity onPress={handleSwap}>
                <Ionicons
                  name="swap-vertical"
                  style={{color: colors.WHITE, fontSize: 50, marginLeft: 10}}
                />
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 30}}>
              <Text style={styles.address_title}>Request From Address</Text>
              <TouchableOpacity activeOpacity={0.6} style={styles.address_area}>
                <Text style={styles.address}>
                  0x60aE616a2155Ee3d9A68541Ba454486231
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Text style={styles.send_title}>Send to Address</Text>
          <TouchableOpacity activeOpacity={0.6} style={styles.send_area}>
            <TextInput
              style={styles.send_address}
              defaultValue={'0x60aE616a2155Ee3d9A68541Ba454486231'}
            />
          </TouchableOpacity>

          <View style={styles.button}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                backgroundColor: colors.DARK,
                borderRadius: 10,
                width: 150,
                paddingVertical: 14,
              }}
              onPress={() => navigate(routes.CONFIRMPAY)}>
              <Text
                style={{
                  color: colors.WHITE,
                  fontFamily: 'Roboto-Medium',
                  letterSpacing: 0.6,
                  textAlign: 'center',
                }}>
                CONFIRM PAY
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Footer navigation={navigation} route={routes.MANUALPAY} />
    </SafeAreaView>
  );
};

function getBTCFromUSD(usd, isUSD) {
  const val = isUSD ? Number(usd) / 21819.3 : Number(usd) * 21819.3;
  return Number(val.toFixed(FIXED_LENGTH)).toString();
}

export default ManualPay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  title_area: {
    flexDirection: 'row',
  },

  amount_area: {
    backgroundColor: colors.DARK,
    paddingBottom: 20,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },

  back_area: {
    paddingHorizontal: 10,
    width: 40,
  },

  back_icon: {
    color: colors.WHITE,
    fontSize: 24,
    height: 40,
  },

  title_text: {
    fontFamily: 'Roboto-Bold',
    color: colors.WHITE,
    fontSize: 22,
  },

  input_area: {
    paddingHorizontal: 30,
  },

  amount_text: {
    fontFamily: 'Roboto-Bold',
    color: colors.WHITE,
    marginTop: 20,
    fontSize: 18,
  },

  amount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },

  amount_icon: {
    height: 30,
    width: 20,
    alignItems: 'center',
    top: -13,
  },

  input_box: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  input: {
    padding: 10,
    width: 250,
    marginLeft: 10,
    height: 40,
    borderRadius: 5,
    backgroundColor: colors.DARKGREY,
    color: colors.WHITE,
    fontFamily: 'Roboto-Medium',
    letterSpacing: 2,
  },

  input_amount: {
    color: colors.WHITE,
    fontFamily: 'Roboto-Bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  address_title: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: colors.WHITE,
  },

  address_area: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.DARKGREY,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop: 15,
    borderRadius: 7,
  },

  address: {
    color: colors.WHITE,
    fontSize: 13,
    letterSpacing: 0.4,
  },

  send_title: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    color: colors.BLACK,
  },

  send_area: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.DARKWHITE,
    paddingVertical: 15,
    padding: 10,
    marginTop: 15,
    borderRadius: 7,
    marginBottom: 5,
  },

  send_address: {
    color: colors.BLACK,
    fontSize: 13,
    letterSpacing: 0.4,
  },

  button: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
});
