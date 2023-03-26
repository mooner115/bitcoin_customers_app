import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../themes/Colors';
import {units} from '../../../themes/Units';
import Header from '../../layouts/Header';
import {routes} from '../../../navigation/routes';
import Footer from '../../layouts/Footer';
import Stores from '../../../_mock/Stores.js';
import StoreList from '../../components/StoreList';

const Liked = ({navigation}) => {
  const [sort, setSort] = useState(true);

  const handleRating = () => {
    setSort(true);
  };

  const handleDistance = () => {
    setSort(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} route={routes.LIKED} />

      <ScrollView style={styles.scroll_area}>
        <View
          style={{
            marginHorizontal: units.width / 25,
            marginVertical: units.height / 40,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: colors.DARK,
              fontFamily: 'Roboto-Bold',
              letterSpacing: 0.3,
              fontSize: 24,
              width: units.width / 4,
            }}>
            Liked
          </Text>

          <View>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                backgroundColor: sort ? colors.DARK : colors.WHITE,
                borderWidth: !sort ? 2 : 0,
                borderColor: colors.GREY,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
                width: 100,
                borderRadius: 5,
                paddingVertical: sort ? 4 : 2,
              }}
              onPress={handleRating}>
              <Text
                style={{
                  color: sort ? colors.WHITE : colors.DARK,
                  fontFamily: 'Roboto-Regular',
                  letterSpacing: 0.3,
                  fontSize: 12,
                }}>
                Rating
              </Text>
              <Image
                source={require('../../../assets/images/sort.png')}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: sort ? colors.WHITE : colors.DARK,
                }}
              />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                backgroundColor: !sort ? colors.DARK : colors.WHITE,
                borderWidth: sort ? 2 : 0,
                borderColor: colors.GREY,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
                width: 100,
                borderRadius: 5,
                paddingVertical: !sort ? 4 : 2,
              }}
              onPress={handleDistance}>
              <Text
                style={{
                  color: !sort ? colors.WHITE : colors.DARK,
                  fontFamily: 'Roboto-Medium',
                  letterSpacing: 0.3,
                  fontSize: 12,
                }}>
                Distance
              </Text>
              <Image
                source={require('../../../assets/images/sort.png')}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: !sort ? colors.WHITE : colors.DARK,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <StoreList navigation={navigation} route={routes.LIKED} />
      </ScrollView>

      <Footer navigation={navigation} route={routes.LIKED} />
    </SafeAreaView>
  );
};

export default Liked;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
  },

  scroll_area: {
    height: units.height * (1 - 1 / 12 - 1 / 12),
  },
});
