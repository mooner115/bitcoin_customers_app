import React from 'react';
import {Linking, AppRegistry} from 'react-native';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {routes} from '../../../navigation/routes';
import {colors} from '../../../themes/Colors';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';

const ScanPay = ({navigation}) => {
  const onSuccess = async e => {
    try {
      await Linking.openURL(e.data);
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = route => {
    navigation.navigate(route);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} route={routes.SCANPAY} />

      <ScrollView>
        <TouchableOpacity
          style={{paddingHorizontal: 20, paddingTop: 20, width: 100}}
          onPress={goBack}>
          <MaterialIcons
            name="arrow-back-ios"
            style={{color: colors.BLACK, fontSize: 24, height: 40}}
          />
        </TouchableOpacity>

        <View style={{width: '100%', borderRadius: 20, marginTop: 30}}>
          <View>
            <Text
              style={{
                color: colors.BLACK,
                textAlign: 'center',
                fontFamily: 'Roboto-Bold',
                fontSize: 17,
              }}>
              Scan & Pay
            </Text>
            <Text
              style={{
                color: colors.BLACK,
                textAlign: 'center',
                fontFamily: 'Roboto-Regular',
                marginTop: 10,
                fontSize: 13,
                letterSpacing: 0.3,
              }}>
              Hold Camera to QR Code
            </Text>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <QRCodeScanner
              onRead={e => onSuccess(e)}
              containerStyle={{
                width: 200,
                marginTop: 30,
                marginBottom: 20,
                borderRadius: 100,
              }}
              cameraStyle={[
                {height: 250, width: 200, borderRadius: 10, overflow: 'hidden'},
              ]}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.button}
              onPress={() => navigate(routes.MANUALPAY)}>
              <Text style={styles.button_text}>Enter Address Manually</Text>
              <MaterialIcons
                name="arrow-forward-ios"
                style={{color: colors.WHITE, fontSize: 15}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Footer navigation={navigation} route={routes.SCANPAY} />
    </SafeAreaView>
  );
};

export default ScanPay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  button: {
    top: -100,
    height: 45,
    width: '65%',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    justifyContent: 'space-around',
    backgroundColor: colors.DARK,
  },

  button_text: {
    fontSize: 13,
    letterSpacing: 0.8,
    textAlign: 'center',
    color: colors.WHITE,
    fontFamily: 'Roboto-Bold',
  },
});
