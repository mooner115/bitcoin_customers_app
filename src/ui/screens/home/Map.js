import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  Platform,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../../themes/Colors';
import {routes} from '../../../navigation/routes';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import CustomMap from '../../components/CustomMap';
import {Place} from '../../../_mock/Place';
import {units} from '../../../themes/Units';

const Map = ({navigation}) => {
  const [position, setPosition] = useState(0);
  const [detail, setDetail] = useState({});
  const [isFavourite, setFavourite] = useState(false);

  const navigate = route => {
    navigation.navigate(route);
  };

  const handleSelect = id => {
    setPosition(id);
  };

  useEffect(() => {
    const selected = Place.filter(place => place.id === position);
    setDetail(selected[0]);
    if (selected[0]) setFavourite(selected[0].isFavourite);
  }, [position]);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} route={routes.MAP} />

      <ScrollView>
        <View>
          <CustomMap
            height={units.height * (1 - 1 / 12 - 1 / 12)}
            places={Place}
            handleSelect={handleSelect}
            position={position}
          />

          {detail && detail.id && (
            <TouchableOpacity
              onPress={() => navigate(routes.ABOUT)}
              style={{
                width: units.width / 1.1,
                marginHorizontal: units.width / 22,
                padding: units.width / 40,
                backgroundColor: colors.DARK,
                borderRadius: 20,
                position: 'absolute',
                bottom: units.height / 12,
              }}
              activeOpacity={0.8}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Image source={detail.cover} style={styles.profile_image} />
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 10,
                    }}>
                    <AntDesign
                      name="star"
                      style={{color: colors.ORANGE, fontSize: units.width / 30}}
                    />
                    <AntDesign
                      name="star"
                      style={{color: colors.ORANGE, fontSize: units.width / 30}}
                    />
                    <AntDesign
                      name="star"
                      style={{color: colors.ORANGE, fontSize: units.width / 30}}
                    />
                    <AntDesign
                      name="star"
                      style={{color: colors.ORANGE, fontSize: units.width / 30}}
                    />
                    <AntDesign
                      name="staro"
                      style={{color: colors.WHITE, fontSize: units.width / 30}}
                    />
                    <Text
                      style={{
                        color: colors.WHITE,
                        marginLeft: 5,
                        fontFamily: 'Roboto-medium',
                        fontSize: 12,
                      }}>
                      {detail.totalRating}
                    </Text>
                  </View>
                </View>
                <View style={{marginLeft: 5}}>
                  <Text
                    style={{
                      color: colors.WHITE,
                      fontSize: 18,
                      fontFamily: 'Roboto-Bold',
                    }}>
                    {detail.name}
                  </Text>
                  <Text style={{color: colors.WHITE, fontSize: 11}}>
                    open :{' '}
                    <Text style={{color: colors.WHITE}}>{detail.time}</Text>{' '}
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      width: units.width / 2.5,
                    }}>
                    {detail.isRecreational && (
                      <TouchableOpacity
                        style={{
                          color: colors.WHITE,
                          borderRadius: 5,
                          paddingVertical: 3,
                          paddingHorizontal: 5,
                          backgroundColor: colors.ORANGE,
                        }}>
                        <Text
                          style={{
                            color: colors.BLACK,
                            fontSize: 11,
                            textAlign: 'center',
                          }}>
                          Recreational
                        </Text>
                      </TouchableOpacity>
                    )}

                    {detail.isMedical && (
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
                            color: colors.BLACK,
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
                      fontSize: 11,
                      fontFamily: 'Roboto-Regular',
                    }}>
                    {detail.address}
                  </Text>
                  <Text
                    style={{
                      color: colors.WHITE,
                      fontSize: 12,
                      letterSpacing: 0.3,
                      fontFamily: 'Roboto-Medium',
                    }}>
                    {detail.distance}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => setFavourite(!isFavourite)}>
                  <Image
                    source={
                      isFavourite
                        ? require('../../../assets/images/love-fill.png')
                        : require('../../../assets/images/love.png')
                    }
                    style={{
                      width: units.width / 12,
                      height: units.height / 25,
                      tintColor: isFavourite ? colors.ORANGE : colors.WHITE,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>

      <Footer navigation={navigation} route={routes.MAP} />
    </SafeAreaView>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
  },

  profile_image: {
    width: units.width / 5,
    height: units.width / 5,
    marginHorizontal: 5,
  },
});
