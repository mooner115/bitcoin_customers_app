import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import {routes} from '../../../navigation/routes';
import {colors} from '../../../themes/Colors';

const ConfirmPay = ({navigation}) => {
  const navigate = route => {
    navigation.navigate(route);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} route={routes.CONFIRMPAY} />
      <ScrollView>
        <View style={styles.amount_area}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/dollar.png')}
              style={{height: 100, width: 100}}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 17,
                top: -6,
                fontFamily: 'Roboto-Bold',
                color: colors.WHITE,
              }}>
              Transaction is Successfull
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Image
              source={require('../../../assets/images/Group.png')}
              style={{
                height: 30,
                width: 30,
                borderRadius: 30,
                alignItems: 'center',
              }}
            />
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  color: colors.WHITE,
                  fontFamily: 'Roboto-Bold',
                  paddingHorizontal: 7,
                }}>
                $12.50{' '}
              </Text>
              <Text
                style={{
                  color: colors.WHITE,
                  fontFamily: 'Roboto-Bold',
                  paddingHorizontal: 7,
                }}>
                0.00000003 BTC
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 14,
                color: colors.WHITE,
                left: -80,
              }}>
              Paid To this Address
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

        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 180,
          }}>
          <Text
            style={{
              color: colors.BLACK,
              fontFamily: 'Roboto-Medium',
              fontSize: 13,
              letterSpacing: 0.4,
              paddingBottom: 10,
            }}>
            You can check receipt we sent to your email
          </Text>
          <TouchableOpacity
            onPress={() => navigate(routes.WALLET)}
            activeOpacity={0.6}
            style={{
              backgroundColor: colors.DARK,
              borderRadius: 10,
              marginTop: 10,
              width: 150,
              paddingVertical: 14,
            }}>
            <Text
              style={{
                color: colors.WHITE,
                fontFamily: 'Roboto-Medium',
                letterSpacing: 0.6,
                textAlign: 'center',
              }}>
              CLOSE
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottom} />
      </ScrollView>

      <Footer navigation={navigation} route={routes.CONFIRMPAY} />
    </SafeAreaView>
  );
};

export default ConfirmPay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  amount_area: {
    backgroundColor: colors.DARK,
    paddingVertical: 20,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },

  bottom: {
    marginBottom: 50,
  },
});
