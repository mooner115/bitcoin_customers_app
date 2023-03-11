import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
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

  const navigate = route => {
    navigation.navigate(route);
  };

  const handleSelect = id => {
    setPosition(id);
  };

  useEffect(() => {
    const selected = Place.filter(place => place.id === position);
    setDetail(selected[0]);
  }, [position]);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} route={routes.MAP} />

      <ScrollView>
        <View>
          <CustomMap
            height={units.height / 1.2}
            places={Place}
            handleSelect={handleSelect}
            position={position}
          />

          {detail && detail.id && (
            <TouchableOpacity
              onPress={() => navigate(routes.ABOUT)}
              style={{
                backgroundColor: colors.DARK,
                height: 150,
                marginHorizontal: 25,
                padding: 15,
                borderRadius: 20,
                position: 'absolute',
                bottom: 50,
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
                      style={{color: colors.ORANGE, fontSize: 15}}
                    />
                    <AntDesign
                      name="star"
                      style={{color: colors.ORANGE, fontSize: 15}}
                    />
                    <AntDesign
                      name="star"
                      style={{color: colors.ORANGE, fontSize: 15}}
                    />
                    <AntDesign
                      name="star"
                      style={{color: colors.ORANGE, fontSize: 15}}
                    />
                    <AntDesign
                      name="staro"
                      style={{color: colors.WHITE, fontSize: 15}}
                    />
                    <Text
                      style={{
                        color: colors.WHITE,
                        right: -6,
                        fontFamily: 'Roboto-medium',
                        fontSize: 12,
                      }}>
                      {detail.totalRating}
                    </Text>
                  </View>
                </View>
                <View style={{paddingHorizontal: 10}}>
                  <Text
                    style={{
                      color: colors.WHITE,
                      fontSize: 18,
                      fontFamily: 'Roboto-Bold',
                    }}>
                    {detail.name}
                  </Text>
                  <Text style={{color: colors.GREY, fontSize: 11}}>
                    open :{' '}
                    <Text style={{color: colors.WHITE}}>{detail.time}</Text>{' '}
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      width: 160,
                      left: -10,
                    }}>
                    {detail.isRecreational && (
                      <TouchableOpacity
                        style={{
                          color: colors.WHITE,
                          borderRadius: 5,
                          paddingVertical: 3,
                          marginVertical: 10,
                          backgroundColor: colors.ORANGE,
                          width: 80,
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
                          marginVertical: 10,
                          backgroundColor: colors.GREEN,
                          width: 60,
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
                      color: colors.GREY,
                      fontSize: 11,
                      fontFamily: 'Roboto-Regular',
                    }}>
                    {detail.address}
                  </Text>
                  <Text
                    style={{
                      color: colors.WHITE,
                      fontSize: 15,
                      letterSpacing: 0.3,
                      fontFamily: 'Roboto-Medium',
                    }}>
                    {detail.distance}
                  </Text>
                </View>
                <View>
                  <Image
                    source={
                      detail.isFavourite
                        ? require('../../../assets/images/love-fill.png')
                        : require('../../../assets/images/love.png')
                    }
                    style={{
                      width: 30,
                      height: 26,
                      tintColor: detail.isFavourite
                        ? colors.ORANGE
                        : colors.WHITE,
                    }}
                  />
                </View>
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
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  profile_image: {
    width: 90,
    height: 90,
    marginHorizontal: 10,
  },
});
