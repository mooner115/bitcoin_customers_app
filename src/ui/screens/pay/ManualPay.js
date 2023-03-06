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
            <TouchableOpacity
              style={{paddingHorizontal: 10, paddingTop: 20, width: 40}}
              onPress={goBack}>
              <MaterialIcons
                name="arrow-back-ios"
                style={{color: colors.WHITE, fontSize: 24, height: 40}}
              />
            </TouchableOpacity>

            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                color: colors.WHITE,
                marginTop: 17,
                fontSize: 22,
              }}>
              Send Bitcoins
            </Text>
          </View>

          <View style={{paddingHorizontal: 30}}>
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                color: colors.WHITE,
                marginTop: 20,
                fontSize: 18,
              }}>
              Amount
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginTop: 20,
              }}>
              <Image
                source={
                  isUSD
                    ? require('../../../assets/images/usd.png')
                    : require('../../../assets/images/bitcoin.png')
                }
                style={{
                  height: 30,
                  width: 20,
                  alignItems: 'center',
                  top: -13,
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                }}>
                <TextInput
                  style={{
                    padding: 10,
                    width: 250,
                    marginLeft: 10,
                    height: 40,
                    borderRadius: 5,
                    backgroundColor: colors.DARKGREY,
                    color: colors.WHITE,
                    fontFamily: 'Roboto-Medium',
                    letterSpacing: 2,
                  }}
                  value={amount}
                  maxLength={length}
                  onChangeText={handleInput}
                />
                {isUSD ? (
                  <Text
                    style={{
                      color: colors.WHITE,
                      fontFamily: 'Roboto-Bold',
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                    }}>
                    {calcBTC} BTC
                  </Text>
                ) : (
                  <Text
                    style={{
                      color: colors.WHITE,
                      fontFamily: 'Roboto-Bold',
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                    }}>
                    $ {calcBTC}
                  </Text>
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
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  fontSize: 14,
                  color: colors.WHITE,
                }}>
                Request From Address
              </Text>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: colors.DARKGREY,
                  paddingVertical: 15,
                  padding: 10,
                  marginTop: 15,
                  borderRadius: 7,
                  marginBottom: 5,
                }}>
                <Text
                  style={{
                    color: colors.WHITE,
                    fontSize: 13,
                    letterSpacing: 0.4,
                  }}>
                  0x60aE616a2155Ee3d9A68541Ba454486231
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 13,
              color: colors.BLACK,
            }}>
            Send to Address
          </Text>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.DARKWHITE,
              paddingVertical: 15,
              padding: 10,
              marginTop: 15,
              borderRadius: 7,
              marginBottom: 5,
            }}>
            <TextInput
              style={{
                color: colors.BLACK,
                fontSize: 13,
                letterSpacing: 0.4,
              }}
              defaultValue={'0x60aE616a2155Ee3d9A68541Ba454486231'}
            />
          </TouchableOpacity>

          <View
            style={{
              marginHorizontal: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 70,
            }}>
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
    paddingVertical: 20,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});
