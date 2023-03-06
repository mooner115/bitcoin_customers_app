import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import {colors} from '../../../themes/Colors';
import {routes} from '../../../navigation/routes';
import CustomMap from '../../components/CustomMap';
import {Place} from '../../../_mock/Place';

const About = ({navigation}) => {
  const [places, setPlaces] = useState([Place[0]]);
  const [position, setPosition] = useState(0);

  const navigate = route => {
    navigation.navigate(route);
  };

  const handleSelect = id => {
    setPosition(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} route={routes.ABOUT} />

      <ScrollView>
        <View style={styles.detail_area}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            }}>
            <View style={{left: -10}}>
              <Image
                source={require('../../../assets/images/logo2.png')}
                style={styles.profile_image}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  right: 3,
                  marginTop: 5,
                }}>
                <AntDesign
                  name="star"
                  style={{
                    color: colors.ORANGE,
                    fontSize: 15,
                    paddingHorizontal: 1,
                  }}
                />
                <AntDesign
                  name="star"
                  style={{
                    color: colors.ORANGE,
                    fontSize: 15,
                    paddingHorizontal: 1,
                  }}
                />
                <AntDesign
                  name="star"
                  style={{
                    color: colors.ORANGE,
                    fontSize: 15,
                    paddingHorizontal: 1,
                  }}
                />
                <AntDesign
                  name="star"
                  style={{
                    color: colors.ORANGE,
                    fontSize: 15,
                    paddingHorizontal: 1,
                  }}
                />
                <AntDesign
                  name="staro"
                  style={{color: colors.WHITE, fontSize: 15}}
                />
                <Text
                  style={{
                    color: colors.WHITE,
                    right: -6,
                    fontFamily: 'Roboto-Medium',
                    fontSize: 12,
                  }}>
                  4.6
                </Text>
              </View>
            </View>
            <View style={{width: 182, left: -3}}>
              <Text
                style={{
                  color: colors.WHITE,
                  fontSize: 18,
                  fontFamily: 'Roboto-Bold',
                }}>
                Super Employer
              </Text>
              <Text
                style={{
                  color: colors.WHITE,
                  fontSize: 11,
                  fontFamily: 'Roboto-Medium',
                }}>
                Open :{' '}
                <Text style={{color: colors.WHITE}}>8:00AM - 8:00 PM</Text>{' '}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  width: 160,
                  left: -10,
                }}>
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
              </View>
              <Text
                style={{
                  color: colors.WHITE,
                  fontSize: 11,
                  fontFamily: 'Roboto-Regular',
                }}>
                Sloneczena 27, 55-010 Radwanice
              </Text>
              <Text
                style={{
                  color: colors.WHITE,
                  fontSize: 15,
                  letterSpacing: 0.3,
                  fontFamily: 'Roboto-Medium',
                }}>
                8,1 Miles Away
              </Text>
            </View>
            <View style={{left: 8}}>
              <FontAwesome5
                name="heart"
                style={{color: colors.WHITE, fontSize: 25, width: 30}}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: 30,
            }}>
            <TouchableOpacity activeOpacity={0.6}>
              <Text
                style={{
                  color: colors.ORANGE,
                  borderBottomColor: colors.ORANGE,
                  width: 80,
                  borderBottomWidth: 2,
                  textAlign: 'center',
                  fontFamily: 'Roboto-Medium',
                  paddingBottom: 5,
                }}>
                {'About'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigate(routes.REVIEW)}>
              <Text
                style={{
                  color: colors.WHITE,
                  width: 80,
                  textAlign: 'center',
                  fontFamily: 'Roboto-Medium',
                  paddingBottom: 5,
                }}>
                {'Review (2)'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <CustomMap
          height={350}
          places={places}
          handleSelect={handleSelect}
          position={position}
        />

        <View style={{marginHorizontal: 20, marginVertical: 50}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 17,
            }}>
            <Text
              style={{
                color: colors.BLACK,
                fontFamily: 'Roboto-Medium',
                letterSpacing: 0.3,
              }}>
              Monday
            </Text>
            <Text style={{color: colors.BLACK, fontFamily: 'Roboto-Bold'}}>
              8:00 AM - 8:00 PM
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 17,
            }}>
            <Text
              style={{
                color: colors.BLACK,
                fontFamily: 'Roboto-Medium',
                letterSpacing: 0.3,
              }}>
              Tuesday
            </Text>
            <Text style={{color: colors.BLACK, fontFamily: 'Roboto-Bold'}}>
              8:00 AM - 8:00 PM
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 17,
            }}>
            <Text
              style={{
                color: colors.BLACK,
                fontFamily: 'Roboto-Medium',
                letterSpacing: 0.3,
              }}>
              Wednesday
            </Text>
            <Text style={{color: colors.BLACK, fontFamily: 'Roboto-Bold'}}>
              8:00 AM - 8:00 PM
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 17,
            }}>
            <Text
              style={{
                color: colors.BLACK,
                fontFamily: 'Roboto-Medium',
                letterSpacing: 0.3,
              }}>
              Thursday
            </Text>
            <Text style={{color: colors.BLACK, fontFamily: 'Roboto-Bold'}}>
              8:00 AM - 8:00 PM
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 17,
            }}>
            <Text
              style={{
                color: colors.BLACK,
                fontFamily: 'Roboto-Medium',
                letterSpacing: 0.3,
              }}>
              Friday
            </Text>
            <Text style={{color: colors.BLACK, fontFamily: 'Roboto-Bold'}}>
              8:00 AM - 8:00 PM
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 17,
            }}>
            <Text
              style={{
                color: colors.BLACK,
                fontFamily: 'Roboto-Medium',
                letterSpacing: 0.3,
              }}>
              Saturday
            </Text>
            <Text style={{color: colors.BLACK, fontFamily: 'Roboto-Bold'}}>
              8:00 AM - 8:00 PM
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 17,
            }}>
            <Text
              style={{
                color: colors.BLACK,
                fontFamily: 'Roboto-Medium',
                letterSpacing: 0.3,
              }}>
              Sunday
            </Text>
            <Text style={{color: colors.BLACK, fontFamily: 'Roboto-Bold'}}>
              8:00 AM - 8:00 PM
            </Text>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                backgroundColor: colors.DARK,
                borderRadius: 10,
                width: 180,
                paddingVertical: 10,
              }}>
              <Text
                style={{
                  color: colors.WHITE,
                  fontFamily: 'Roboto-Medium',
                  letterSpacing: 0.3,
                  fontSize: 11,
                  textAlign: 'center',
                }}>
                REPORT INACCURATE HOURS
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Footer navigation={navigation} route={routes.ABOUT} />
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  detail_area: {
    backgroundColor: colors.DARK,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingTop: 20,
    paddingHorizontal: 15,
  },

  profile_image: {
    width: 90,
    height: 90,
    marginHorizontal: 10,
  },
});
