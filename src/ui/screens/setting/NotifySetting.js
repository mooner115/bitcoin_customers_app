import React, {useState} from 'react';
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
import {units} from '../../../themes/Units';

const NotifySetting = ({navigation}) => {
  const data = [
    {id: 1, title: 'New Followers', inbox: false, phone: false},
    {id: 2, title: 'Review Liked', inbox: false, phone: true},
    {id: 3, title: 'Comment Liked', inbox: false, phone: false},
    {id: 4, title: 'Reply to Comments', inbox: true, phone: false},
    {id: 5, title: 'Reply to reviews', inbox: false, phone: false},
    {
      id: 6,
      title: 'New post From a Following Store',
      inbox: false,
      phone: false,
    },
    {id: 7, title: 'New post From a Following user', inbox: true, phone: true},
    {id: 8, title: 'New Announcement From the App', inbox: false, phone: false},
    {id: 9, title: 'Waiting From the App', inbox: true, phone: false},
    {id: 10, title: 'New Store', inbox: false, phone: false},
  ];

  const [list, setList] = useState(data);

  const handleInbox = id => {
    let temp = list;
    temp[id - 1].inbox = !temp[id - 1].inbox;
    setList([...temp]);
  };

  const handlePhone = id => {
    let temp = list;
    temp[id - 1].phone = !temp[id - 1].phone;
    setList([...temp]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} route={routes.NOTIFYSETTING} />

      <ScrollView>
        <View style={{marginBottom: units.height / 20}}>
          <View style={styles.notifications}>
            <Text style={styles.notifications_name}>Notifications Filter</Text>
          </View>

          {list.map(item => (
            <View style={styles.mobl_name_container} key={item.id}>
              <View style={styles.mobl_name}>
                <TouchableOpacity onPress={() => handleInbox(item.id)}>
                  <View
                    style={[
                      styles.icon_msg_phone,
                      {borderColor: item.inbox ? colors.ORANGE : colors.DARK},
                    ]}>
                    <FontAwesome5
                      name="envelope-o"
                      style={[
                        styles.icon_envelop_android,
                        {color: item.inbox ? colors.ORANGE : colors.DARK},
                      ]}
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePhone(item.id)}>
                  <View
                    style={[
                      styles.icon_msg_phone,
                      {borderColor: item.phone ? colors.ORANGE : colors.DARK},
                    ]}>
                    <MaterialIcons
                      name="phone-android"
                      style={[
                        styles.icon_envelop_android,
                        {color: item.phone ? colors.ORANGE : colors.DARK},
                      ]}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.name_bg}>
                <Text style={styles.information}>{item.title}</Text>
              </View>
            </View>
          ))}
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
    width: units.width / 1.8,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
  },
});
