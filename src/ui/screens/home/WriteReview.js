import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import {colors} from '../../../themes/Colors';
import {routes} from '../../../navigation/routes';
import {units} from '../../../themes/Units';

const Review = ({navigation}) => {
  const [isFavourite, setFavourite] = useState(false);
  const [value, setValue] = useState('');
  const [count, setCount] = useState(0);

  const navigate = route => {
    navigation.navigate(route);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} route={routes.WRITEREVIEW} />

      <ScrollView style={styles.scroll_area}>
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
            <TouchableOpacity onPress={() => setFavourite(!isFavourite)}>
              <Image
                source={
                  isFavourite
                    ? require('../../../assets/images/love-fill.png')
                    : require('../../../assets/images/love.png')
                }
                style={{
                  width: 30,
                  height: 26,
                  tintColor: isFavourite ? colors.ORANGE : colors.WHITE,
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: 30,
            }}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigate(routes.ABOUT)}>
              <Text
                style={{
                  color: colors.WHITE,
                  width: 80,
                  textAlign: 'center',
                  fontFamily: 'Roboto-Medium',
                  paddingBottom: 5,
                }}>
                {'About'}
              </Text>
            </TouchableOpacity>

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
                {'Review (2)'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{paddingHorizontal: units.width / 15}}>
          <Text style={styles.texts}>Overall Rating</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              right: 3,
              marginTop: 10,
            }}>
            <TouchableOpacity onPress={e => setCount(1)} activeOpacity={1}>
              <AntDesign
                name="star"
                style={{
                  color: count > 0 ? colors.ORANGE : colors.GREY,
                  fontSize: units.width / 8,
                  paddingHorizontal: 3,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={e => setCount(2)} activeOpacity={1}>
              <AntDesign
                name="star"
                style={{
                  color: count > 1 ? colors.ORANGE : colors.GREY,
                  fontSize: units.width / 8,
                  paddingHorizontal: 3,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={e => setCount(3)} activeOpacity={1}>
              <AntDesign
                name="star"
                style={{
                  color: count > 2 ? colors.ORANGE : colors.GREY,
                  fontSize: units.width / 8,
                  paddingHorizontal: 3,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={e => setCount(4)} activeOpacity={1}>
              <AntDesign
                name="star"
                style={{
                  color: count > 3 ? colors.ORANGE : colors.GREY,
                  fontSize: units.width / 8,
                  paddingHorizontal: 3,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={e => setCount(5)} activeOpacity={1}>
              <AntDesign
                name="star"
                style={{
                  color: count > 4 ? colors.ORANGE : colors.GREY,
                  fontSize: units.width / 8,
                  paddingHorizontal: 3,
                }}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.texts}>Written Review</Text>

          <TextInput
            multiline={true}
            numberOfLines={6}
            onChangeText={value => setValue(value)}
            value={value}
            style={styles.textarea}
          />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: units.height / 50,
            }}>
            <TouchableOpacity
              style={styles.buttons}
              activeOpacity={0.9}
              onPress={e => navigate(routes.REVIEW)}>
              <Text style={{color: colors.WHITE}}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              activeOpacity={0.9}
              onPress={e => navigate(routes.REVIEW)}>
              <Text style={{color: colors.WHITE}}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginBottom: 50}} />
      </ScrollView>

      <Footer navigation={navigation} route={routes.WRITEREVIEW} />
    </SafeAreaView>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
  },

  scroll_area: {
    height: units.height * (1 - 1 / 12 - 1 / 12),
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

  card: {
    padding: 20,
    marginTop: 15,
    borderRadius: 10,
    marginHorizontal: 15,
    backgroundColor: colors.DARK,
  },

  date: {
    fontSize: 13,
    bottom: -5,
    color: colors.WHITE,
    fontFamily: 'Roboto-Regular',
  },

  followers: {
    color: colors.WHITE,
    fontFamily: 'Roboto-Bold',
    paddingVertical: 5,
    fontSize: 22,
  },

  texts: {
    color: colors.BLACK,
    fontSize: 24,
    marginTop: 10,
  },

  textarea: {
    borderWidth: 1,
    borderColor: colors.GREY,
    borderRadius: 5,
    marginTop: 10,
    textAlignVertical: 'top',
  },

  buttons: {
    width: '49%',
    backgroundColor: colors.DARK,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
  },
});
