import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Slider from '@react-native-community/slider';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {routes} from '../../../navigation/routes';
import {colors} from '../../../themes/Colors';
import Header from '../../layouts/Header';

const Filter = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} route={routes.FILTER} />

      <View style={{marginHorizontal: 20}}>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.DARKWHITE,
              borderColor: colors.GREY,
              borderWidth: 1,
              padding: 10,
              borderRadius: 7,
            }}>
            <View>
              <FontAwesome5
                name="heart"
                style={{color: colors.DARK, fontSize: 22, width: 30}}
              />
            </View>
            <Text
              style={{
                color: colors.DARK,
                fontFamily: 'Roboto-Regular',
                fontSize: 16,
              }}>
              Favorites
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: colors.DARKWHITE,
              borderRadius: 10,
              width: 120,
              paddingVertical: 12,
              borderWidth: 1,
              borderColor: colors.GREY,
            }}>
            <Text
              style={{
                color: colors.BLACK,
                fontFamily: 'Roboto-Medium',
                letterSpacing: 0.6,
                textAlign: 'center',
              }}>
              Open Now
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: colors.DARKWHITE,
              borderRadius: 10,
              width: 120,
              paddingVertical: 12,
              borderWidth: 1,
              borderColor: colors.GREY,
            }}>
            <Text
              style={{
                color: colors.BLACK,
                fontFamily: 'Roboto-Medium',
                letterSpacing: 0.6,
                textAlign: 'center',
              }}>
              Delivers
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: colors.DARK,
              borderRadius: 10,
              width: 120,
              paddingVertical: 12,
            }}>
            <Text
              style={{
                color: colors.WHITE,
                fontFamily: 'Roboto-Medium',
                letterSpacing: 0.6,
                textAlign: 'center',
              }}>
              Top Rated
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 30}}>
          <Text style={{color: colors.BLACK, fontFamily: 'Roboto-Medium'}}>
            Type
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: colors.DARKWHITE,
              borderRadius: 10,
              width: 120,
              paddingVertical: 12,
              borderWidth: 1,
              borderColor: colors.GREY,
            }}>
            <Text
              style={{
                color: colors.BLACK,
                fontFamily: 'Roboto-Medium',
                letterSpacing: 0.6,
                textAlign: 'center',
              }}>
              Recreational
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: colors.DARKWHITE,
              borderRadius: 10,
              width: 120,
              paddingVertical: 12,
              borderWidth: 1,
              borderColor: colors.GREY,
            }}>
            <Text
              style={{
                color: colors.BLACK,
                fontFamily: 'Roboto-Medium',
                letterSpacing: 0.6,
                textAlign: 'center',
              }}>
              Medical
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: colors.DARK,
              borderRadius: 10,
              width: 120,
              paddingVertical: 12,
            }}>
            <Text
              style={{
                color: colors.WHITE,
                fontFamily: 'Roboto-Medium',
                letterSpacing: 0.6,
                textAlign: 'center',
              }}>
              Both
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: colors.BLACK,
              fontFamily: 'Roboto-Medium',
              fontSize: 20,
              width: 110,
            }}>
            Distance
          </Text>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: colors.DARKWHITE,
              borderRadius: 5,
              width: 70,
              borderColor: colors.GREY,
              borderWidth: 1,
              paddingVertical: 5,
            }}>
            <Text
              style={{
                color: colors.BLACK,
                fontFamily: 'Roboto-Medium',
                letterSpacing: 0.6,
                textAlign: 'center',
              }}>
              Mi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: colors.DARK,
              borderRadius: 5,
              left: -15,
              width: 70,
              borderColor: colors.BLACK,
              borderWidth: 1,
              paddingVertical: 5,
            }}>
            <Text
              style={{
                color: colors.WHITE,
                fontFamily: 'Roboto-Medium',
                letterSpacing: 0.6,
                textAlign: 'center',
              }}>
              Km
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: colors.DARKWHITE,
              borderRadius: 5,
              width: 70,
              borderColor: colors.GREY,
              borderWidth: 1,
              paddingVertical: 5,
            }}>
            <Text
              style={{
                color: colors.BLACK,
                fontFamily: 'Roboto-Medium',
                letterSpacing: 0.6,
                textAlign: 'center',
              }}>
              0 Km
            </Text>
          </TouchableOpacity>
        </View>

        <Slider
          style={styles.slider}
          minimumValue={10}
          maximumValue={40}
          maximumTrackTintColor={colors.GREY}
          minimumTrackTintColor={colors.BLACK}
          thumbTintColor={colors.BLACK}
        />

        <View
          style={{
            marginHorizontal: 20,
            marginTop: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: colors.DARKWHITE,
              borderRadius: 10,
              width: 150,
              borderColor: colors.GREY,
              borderWidth: 1,
              paddingVertical: 12,
            }}>
            <Text
              style={{
                color: colors.BLACK,
                fontFamily: 'Roboto-Medium',
                letterSpacing: 0.6,
                textAlign: 'center',
              }}>
              CLEAR ALL
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: colors.DARK,
              borderRadius: 10,
              width: 150,
              paddingVertical: 12,
            }}>
            <Text
              style={{
                color: colors.WHITE,
                fontFamily: 'Roboto-Medium',
                letterSpacing: 0.6,
                textAlign: 'center',
              }}>
              SHOW RESULTS
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  slider: {
    marginTop: 30,
    color: colors.BLACK,
  },
});
