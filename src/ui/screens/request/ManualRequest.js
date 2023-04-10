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
import BarcodeCreatorViewManager, {
  BarcodeFormat,
} from 'react-native-barcode-creator';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../themes/Colors';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import {routes} from '../../../navigation/routes';
import {units} from '../../../themes/Units';

const FIXED_BITCOIN_LENGTH = 8;
const FIXED_USD_LENGTH = 2;

const ManualRequest = ({navigation}) => {
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
    if (!isNaN(value)) {
      const len = value.indexOf('.') !== -1 ? value.split('.')[1].length : 0;
      const amount = value;
      setLength(
        !len
          ? 100
          : value.split('.')[0].length +
              (isUSD ? FIXED_USD_LENGTH : FIXED_BITCOIN_LENGTH) +
              1,
      );
      setAmount(amount);
      setCalcBTC(getBTCFromUSD(amount, isUSD));
    }
  };

  const handleSwap = () => {
    const len = calcBTC.indexOf('.') !== -1 ? calcBTC.split('.')[1].length : 0;
    const amount = calcBTC;
    setLength(
      !len
        ? 100
        : amount.split('.')[0].length +
            (isUSD ? FIXED_BITCOIN_LENGTH : FIXED_USD_LENGTH) +
            1,
    );
    setCalcBTC(getBTCFromUSD(calcBTC.toString(), !isUSD));
    setUSD(!isUSD);
    setAmount(calcBTC.toString());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} route={routes.MANUALREQUEST} />

      <ScrollView style={styles.scroll_area}>
        <View style={styles.amount_area}>
          <View style={styles.title_area}>
            <TouchableOpacity style={styles.back_area} onPress={goBack}>
              <MaterialIcons name="arrow-back-ios" style={styles.back_icon} />
            </TouchableOpacity>

            <Text style={styles.title_text}>Request Bitcoins</Text>
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
                    width: units.width / 1.8,
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
                  keyboardType="numeric"
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
                <Image
                  source={require('../../../assets/images/exchange.png')}
                  style={{
                    color: colors.WHITE,
                    marginLeft: 10,
                    width: 40,
                    height: 40,
                  }}
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
                  paddingHorizontal: 10,
                  paddingVertical: 50,
                  marginTop: 15,
                  borderRadius: 7,
                }}>
                <TextInput
                  style={{
                    color: colors.WHITE,
                    fontSize: 13,
                    letterSpacing: 0.4,
                    width: '100%',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <BarcodeCreatorViewManager
            value={'https://www.youtube.com/'}
            background={colors.WHITE}
            foregroundColor={colors.DARK}
            format={BarcodeFormat.QR}
            style={styles.barcode}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                backgroundColor: colors.DARK,
                borderRadius: 10,
                width: units.width / 2.5,
                paddingVertical: 14,
              }}
              onPress={() => navigate(routes.CONFIRMREQUEST)}>
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

        <View style={styles.bottom} />
      </ScrollView>

      <Footer navigation={navigation} route={routes.MANUALREQUEST} />
    </SafeAreaView>
  );
};

function getBTCFromUSD(usd, isUSD) {
  const val = isUSD ? Number(usd) / 21819.3 : Number(usd) * 21819.3;
  return Number(
    val.toFixed(isUSD ? FIXED_BITCOIN_LENGTH : FIXED_USD_LENGTH),
  ).toString();
}

export default ManualRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  scroll_area: {
    height: units.height * (1 - 1 / 12 - 1 / 12),
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

  title_area: {
    flexDirection: 'row',
  },

  title_text: {
    fontFamily: 'Roboto-Bold',
    color: colors.WHITE,
    fontSize: 22,
  },

  amount_area: {
    backgroundColor: colors.DARK,
    paddingBottom: 20,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },

  barcode: {
    height: units.width / 2,
    width: units.width / 2,
    alignSelf: 'center',
  },

  bottom: {
    marginBottom: units.height / 10,
  },
});
