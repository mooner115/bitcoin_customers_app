import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {colors} from '../../themes/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {routes} from '../../navigation/routes';
import {units} from '../../themes/Units';

const CustomCard = ({navigation, data}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routes.ABOUT)}
      style={{
        backgroundColor: colors.DARK,
        padding: units.width / 40,
        marginBottom: units.height / 70,
        borderRadius: 20,
        justifyContent: 'center',
      }}
      activeOpacity={0.8}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Image source={data.cover} style={styles.profile_image} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              top: 10,
            }}>
            <AntDesign
              name="star"
              style={{
                color: colors.ORANGE,
                fontSize: units.width / 30,
                paddingHorizontal: 1,
              }}
            />
            <AntDesign
              name="star"
              style={{
                color: colors.ORANGE,
                fontSize: units.width / 30,
                paddingHorizontal: 1,
              }}
            />
            <AntDesign
              name="star"
              style={{
                color: colors.ORANGE,
                fontSize: units.width / 30,
                paddingHorizontal: 1,
              }}
            />
            <AntDesign
              name="star"
              style={{
                color: colors.ORANGE,
                fontSize: units.width / 30,
                paddingHorizontal: 1,
              }}
            />
            <AntDesign
              name="staro"
              style={{color: colors.WHITE, fontSize: units.width / 30}}
            />
            <Text
              style={{
                color: colors.WHITE,
                fontFamily: 'Roboto-Medium',
                fontSize: 12,
                marginLeft: 5,
              }}>
              {data.totalRating}
            </Text>
          </View>
        </View>
        <View style={{width: units.width / 2.2}}>
          <Text
            style={{
              color: colors.WHITE,
              fontSize: 18,
              fontFamily: 'Roboto-Bold',
            }}>
            {data.name}
          </Text>
          <Text
            style={{
              color: colors.WHITE,
              fontSize: 11,
              fontFamily: 'Roboto-Medium',
            }}>
            Open : <Text style={{color: colors.WHITE}}>{data.time}</Text>
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              width: units.width / 2.5,
            }}>
            {data.isRecreational && (
              <TouchableOpacity
                style={{
                  color: colors.WHITE,
                  borderRadius: 5,
                  paddingVertical: 3,
                  paddingHorizontal: 5,
                  marginVertical: 10,
                  backgroundColor: colors.ORANGE,
                }}>
                <Text
                  style={{
                    color: colors.DARK,
                    fontSize: 11,
                    textAlign: 'center',
                  }}>
                  Recreational
                </Text>
              </TouchableOpacity>
            )}
            {data.isMedical && (
              <TouchableOpacity
                style={{
                  color: colors.WHITE,
                  borderRadius: 5,
                  paddingVertical: 3,
                  paddingHorizontal: 5,
                  marginVertical: 10,
                  backgroundColor: colors.GREEN,
                }}>
                <Text
                  style={{
                    color: colors.DARK,
                    fontSize: 11,
                    textAlign: 'center',
                  }}>
                  Medical
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <Text
            style={{
              color: colors.WHITE,
              fontSize: 10,
              fontFamily: 'Roboto-Regular',
            }}>
            {data.address}
          </Text>
          <Text
            style={{
              color: colors.WHITE,
              fontSize: units.width / 30,
              letterSpacing: 0.3,
              fontFamily: 'Roboto-Medium',
            }}>
            {data.distance}
          </Text>
        </View>
        <View>
          <Image
            source={
              data.isFavourite
                ? require('../../assets/images/love-fill.png')
                : require('../../assets/images/love.png')
            }
            style={{
              width: 30,
              height: 26,
              tintColor: data.isFavourite ? colors.ORANGE : colors.WHITE,
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  profile_image: {
    width: units.width / 5,
    height: units.width / 5,
    marginHorizontal: 5,
  },
});
