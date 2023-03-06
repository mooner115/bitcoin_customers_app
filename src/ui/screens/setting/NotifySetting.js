import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {routes} from '../../../navigation/routes';
import {colors} from '../../../themes/Colors';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';

const NotifySetting = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} route={routes.NOTIFYSETTING} />

      <ScrollView>
        <View style={{marginBottom: 40}}>
          <View style={styles.notifications}>
            <Text style={styles.notifications_name}>Notifications Filter</Text>
          </View>

          {/* Followers etc start */}
          <View style={styles.mobl_name_container}>
            <View style={styles.mobl_name}>
              <View style={styles.icon_msg_phone}>
                <FontAwesome5
                  name="envelope-o"
                  style={styles.icon_envelop_android}
                />
              </View>
              <View style={styles.icon_msg_phone}>
                <MaterialIcons
                  name="phone-android"
                  style={styles.icon_envelop_android}
                />
              </View>
            </View>
            <View style={styles.name_bg}>
              <Text style={styles.information}>New Followers</Text>
            </View>
          </View>
          {/* Followers etc End */}

          {/* Followers etc start */}
          <View style={styles.mobl_name_container}>
            <View style={styles.mobl_name}>
              <View style={styles.icon_msg_phone}>
                <FontAwesome5
                  name="envelope-o"
                  style={styles.icon_envelop_android}
                />
              </View>
              <View style={styles.icon_msg_phone_orange}>
                <MaterialIcons
                  name="phone-android"
                  style={styles.icon_android_envelop}
                />
              </View>
            </View>
            <View style={styles.name_bg}>
              <Text style={styles.information}>Review Liked</Text>
            </View>
          </View>
          {/* Followers etc End */}

          {/* Followers etc start */}
          <View style={styles.mobl_name_container}>
            <View style={styles.mobl_name}>
              <View style={styles.icon_msg_phone}>
                <FontAwesome5
                  name="envelope-o"
                  style={styles.icon_envelop_android}
                />
              </View>
              <View style={styles.icon_msg_phone}>
                <MaterialIcons
                  name="phone-android"
                  style={styles.icon_envelop_android}
                />
              </View>
            </View>
            <View style={styles.name_bg}>
              <Text style={styles.information}>Comment Liked</Text>
            </View>
          </View>
          {/* Followers etc End */}

          {/* Followers etc start */}
          <View style={styles.mobl_name_container}>
            <View style={styles.mobl_name}>
              <View style={styles.icon_msg_phone_orange}>
                <FontAwesome5
                  name="envelope-o"
                  style={styles.icon_android_envelop}
                />
              </View>
              <View style={styles.icon_msg_phone}>
                <MaterialIcons
                  name="phone-android"
                  style={styles.icon_envelop_android}
                />
              </View>
            </View>
            <View style={styles.name_bg}>
              <Text style={styles.information}>Reply to Comments</Text>
            </View>
          </View>
          {/* Followers etc End */}

          {/* Followers etc start */}
          <View style={styles.mobl_name_container}>
            <View style={styles.mobl_name}>
              <View style={styles.icon_msg_phone}>
                <FontAwesome5
                  name="envelope-o"
                  style={styles.icon_envelop_android}
                />
              </View>
              <View style={styles.icon_msg_phone}>
                <MaterialIcons
                  name="phone-android"
                  style={styles.icon_envelop_android}
                />
              </View>
            </View>
            <View style={styles.name_bg}>
              <Text style={styles.information}>Reply to reviews</Text>
            </View>
          </View>
          {/* Followers etc End */}

          {/* Followers etc start */}
          <View style={styles.mobl_name_container}>
            <View style={styles.mobl_name}>
              <View style={styles.icon_msg_phone}>
                <FontAwesome5
                  name="envelope-o"
                  style={styles.icon_envelop_android}
                />
              </View>
              <View style={styles.icon_msg_phone}>
                <MaterialIcons
                  name="phone-android"
                  style={styles.icon_envelop_android}
                />
              </View>
            </View>
            <View style={styles.name_bg}>
              <Text style={styles.information}>
                New post From a Following Store
              </Text>
            </View>
          </View>
          {/* Followers etc End */}
          {/* Followers etc start */}
          <View style={styles.mobl_name_container}>
            <View style={styles.mobl_name}>
              <View style={styles.icon_msg_phone_orange}>
                <FontAwesome5
                  name="envelope-o"
                  style={styles.icon_android_envelop}
                />
              </View>
              <View style={styles.icon_msg_phone_orange}>
                <MaterialIcons
                  name="phone-android"
                  style={styles.icon_android_envelop}
                />
              </View>
            </View>
            <View style={styles.name_bg}>
              <Text style={styles.information}>
                New post From a Following user
              </Text>
            </View>
          </View>
          {/* Followers etc End */}
          {/* Followers etc start */}
          <View style={styles.mobl_name_container}>
            <View style={styles.mobl_name}>
              <View style={styles.icon_msg_phone}>
                <FontAwesome5
                  name="envelope-o"
                  style={styles.icon_envelop_android}
                />
              </View>
              <View style={styles.icon_msg_phone}>
                <MaterialIcons
                  name="phone-android"
                  style={styles.icon_envelop_android}
                />
              </View>
            </View>
            <View style={styles.name_bg}>
              <Text style={styles.information}>
                New Annoucement From the App
              </Text>
            </View>
          </View>
          {/* Followers etc End */}
          {/* Followers etc start */}
          <View style={styles.mobl_name_container}>
            <View style={styles.mobl_name}>
              <View style={styles.icon_msg_phone_orange}>
                <FontAwesome5
                  name="envelope-o"
                  style={styles.icon_android_envelop}
                />
              </View>
              <View style={styles.icon_msg_phone}>
                <MaterialIcons
                  name="phone-android"
                  style={styles.icon_envelop_android}
                />
              </View>
            </View>
            <View style={styles.name_bg}>
              <Text style={styles.information}>Waiting From the App</Text>
            </View>
          </View>
          {/* Followers etc End */}
          {/* Followers etc start */}
          <View style={styles.mobl_name_container}>
            <View style={styles.mobl_name}>
              <View style={styles.icon_msg_phone}>
                <FontAwesome5
                  name="envelope-o"
                  style={styles.icon_envelop_android}
                />
              </View>
              <View style={styles.icon_msg_phone}>
                <MaterialIcons
                  name="phone-android"
                  style={styles.icon_envelop_android}
                />
              </View>
            </View>
            <View style={styles.name_bg}>
              <Text style={styles.information}>New Followers</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <Footer navigation={navigation} route={routes.NOTIFYSETTING} />
    </SafeAreaView>
  );
};

export default NotifySetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  notifications: {
    marginHorizontal: 20,
    marginVertical: 20,
  },

  notifications_name: {
    fontSize: 24,
    marginBottom: 15,
    color: colors.BLACK,
    fontFamily: 'Roboto-Bold',
  },

  mobl_name_container: {
    // width: 205,
    marginBottom: 12,
    marginHorizontal: 20,
    flexDirection: 'row',
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  icon_envelop_android: {
    fontSize: 15,
    color: colors.BLACK,
  },

  icon_android_envelop: {
    fontSize: 15,
    color: colors.ORANGE,
  },

  mobl_name: {
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  icon_msg_phone: {
    padding: 3.5,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.BLACK,
  },

  icon_msg_phone_orange: {
    padding: 4,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.ORANGE,
  },

  information: {
    fontSize: 12.5,
    color: colors.BLACK,
    letterSpacing: 0.3,
    fontFamily: 'Roboto-Regular',
  },

  name_bg: {
    right: 20,
    width: 220,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
  },
});
