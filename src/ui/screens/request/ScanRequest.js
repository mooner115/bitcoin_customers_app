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
import {units} from '../../../themes/Units';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';

const ScanRequest = ({navigation}) => {
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
      <Header navigation={navigation} route={routes.SCANREQUEST} />

      <ScrollView>
        <TouchableOpacity style={styles.back_area} onPress={goBack}>
          <MaterialIcons name="arrow-back-ios" style={styles.back_icon} />
        </TouchableOpacity>

        <View>
          <View>
            <Text style={styles.scan_title}>Scan & Pay</Text>
            <Text style={styles.scan_text}>Hold Camera to QR Code</Text>
          </View>

          <View style={styles.justify_center}>
            <QRCodeScanner
              onRead={e => onSuccess(e)}
              containerStyle={styles.scan_area}
              cameraStyle={styles.camera}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.button}
              onPress={() => navigate(routes.MANUALREQUEST)}>
              <Text style={styles.button_text}>Enter Address Manually</Text>
              <MaterialIcons
                name="arrow-forward-ios"
                style={styles.button_icon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottom} />
      </ScrollView>

      <Footer navigation={navigation} route={routes.SCANREQUEST} />
    </SafeAreaView>
  );
};

export default ScanRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  back_area: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  back_icon: {
    color: colors.BLACK,
    fontSize: 24,
    height: 40,
  },

  justify_center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  scan_area: {
    width: units.width / 1.6,
    height: units.height / 2.5,
    marginVertical: 30,
  },

  scan_title: {
    color: colors.BLACK,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 17,
  },

  scan_text: {
    color: colors.BLACK,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    marginTop: 10,
    fontSize: 13,
    letterSpacing: 0.3,
  },

  camera: {
    width: units.width / 1.6,
    height: units.height / 2.5,
    borderRadius: 10,
    overflow: 'hidden',
  },

  button: {
    height: units.height / 15,
    width: units.width / 1.6,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.DARK,
  },

  button_text: {
    fontSize: 14,
    letterSpacing: 0.8,
    textAlign: 'center',
    color: colors.WHITE,
    fontFamily: 'Roboto-Bold',
  },

  button_icon: {
    color: colors.WHITE,
    fontSize: 15,
  },

  bottom: {
    marginBottom: units.height / 10,
  },
});
