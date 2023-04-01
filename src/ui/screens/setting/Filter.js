import React, {useState} from 'react';
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
import {units} from '../../../themes/Units';

const Filter = ({navigation}) => {
  const [isFavourite, setFavourite] = useState(false);
  const [openNow, setOpenNow] = useState(false);
  const [delivers, setDelivers] = useState(false);
  const [topRated, setTopRated] = useState(false);
  const [type, setType] = useState(0);
  const [unit, setUnit] = useState('Km');
  const [value, setValue] = useState(0);

  const handleFavourite = () => {
    setFavourite(!isFavourite);
  };

  const handleSlide = value => {
    setValue(value);
  };

  const handleClear = () => {
    setFavourite(false);
    setOpenNow(false);
    setDelivers(false);
    setTopRated(false);
    setType(0);
    setUnit('Km');
    setValue(0);
  };

  const navigate = route => {
    navigation.navigate(route);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} route={routes.FILTER} />

      <View style={{marginHorizontal: units.width / 20}}>
        <View style={{marginTop: units.height / 40}}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: isFavourite ? colors.DARK : colors.DARKWHITE,
              borderColor: colors.GREY,
              borderWidth: 1,
              padding: 10,
              borderRadius: 7,
            }}
            onPress={handleFavourite}>
            <View>
              <FontAwesome5
                name="heart"
                style={{
                  color: isFavourite ? colors.WHITE : colors.DARK,
                  fontSize: 22,
                  width: 30,
                }}
              />
            </View>
            <Text
              style={{
                color: isFavourite ? colors.WHITE : colors.DARK,
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
              backgroundColor: openNow ? colors.DARK : colors.DARKWHITE,
              borderRadius: 10,
              width: units.width / 3.5,
              paddingVertical: 12,
              borderWidth: 1,
              borderColor: colors.GREY,
            }}
            onPress={() => setOpenNow(!openNow)}>
            <Text
              style={{
                color: openNow ? colors.WHITE : colors.BLACK,
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
              backgroundColor: delivers ? colors.DARK : colors.DARKWHITE,
              borderRadius: 10,
              width: units.width / 3.5,
              paddingVertical: 12,
              borderWidth: 1,
              borderColor: colors.GREY,
            }}
            onPress={() => setDelivers(!delivers)}>
            <Text
              style={{
                color: delivers ? colors.WHITE : colors.BLACK,
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
              backgroundColor: topRated ? colors.DARK : colors.DARKWHITE,
              borderRadius: 10,
              width: units.width / 3.5,
              paddingVertical: 12,
              borderWidth: 1,
              borderColor: colors.GREY,
            }}
            onPress={() => setTopRated(!topRated)}>
            <Text
              style={{
                color: topRated ? colors.WHITE : colors.BLACK,
                fontFamily: 'Roboto-Medium',
                letterSpacing: 0.6,
                textAlign: 'center',
              }}>
              Top Rated
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginVertical: units.height / 40}}>
          <Text style={{color: colors.BLACK, fontFamily: 'Roboto-Medium'}}>
            Type
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: type === 1 ? colors.DARK : colors.DARKWHITE,
              borderRadius: 10,
              width: units.width / 3.5,
              paddingVertical: 12,
              borderWidth: 1,
              borderColor: colors.GREY,
            }}
            onPress={() => setType(1)}>
            <Text
              style={{
                color: type === 1 ? colors.WHITE : colors.BLACK,
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
              backgroundColor: type === 2 ? colors.DARK : colors.DARKWHITE,
              borderRadius: 10,
              width: units.width / 3.5,
              paddingVertical: 12,
              borderWidth: 1,
              borderColor: colors.GREY,
            }}
            onPress={() => setType(2)}>
            <Text
              style={{
                color: type === 2 ? colors.WHITE : colors.BLACK,
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
              backgroundColor: type === 3 ? colors.DARK : colors.DARKWHITE,
              borderRadius: 10,
              width: units.width / 3.5,
              paddingVertical: 12,
              borderWidth: 1,
              borderColor: colors.GREY,
            }}
            onPress={() => setType(3)}>
            <Text
              style={{
                color: type === 3 ? colors.WHITE : colors.BLACK,
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
              width: units.width / 4,
            }}>
            Distance
          </Text>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: unit === 'mi' ? colors.DARK : colors.DARKWHITE,
              borderRadius: 5,
              width: units.width / 6,
              borderColor: colors.GREY,
              borderWidth: 1,
              paddingVertical: 5,
            }}
            onPress={() => setUnit('mi')}>
            <Text
              style={{
                color: unit === 'mi' ? colors.WHITE : colors.BLACK,
                fontFamily: 'Roboto-Medium',
                letterSpacing: 0.6,
                textAlign: 'center',
              }}>
              mi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: unit === 'Km' ? colors.DARK : colors.DARKWHITE,
              borderRadius: 5,
              width: units.width / 6,
              borderColor: colors.GREY,
              borderWidth: 1,
              paddingVertical: 5,
            }}
            onPress={() => setUnit('Km')}>
            <Text
              style={{
                color: unit === 'Km' ? colors.WHITE : colors.BLACK,
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
              width: units.width / 4,
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
              {value} {unit}
            </Text>
          </TouchableOpacity>
        </View>

        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          maximumTrackTintColor={colors.GREY}
          minimumTrackTintColor={colors.BLACK}
          thumbTintColor={colors.BLACK}
          onValueChange={handleSlide}
          value={value}
        />

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
              width: units.width / 2.3,
              borderColor: colors.GREY,
              borderWidth: 1,
              paddingVertical: 12,
            }}
            onPress={handleClear}>
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
              width: units.width / 2.3,
              paddingVertical: 12,
            }}
            onPress={() => navigate(routes.MAP)}>
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
