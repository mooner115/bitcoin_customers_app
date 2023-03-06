import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {routes} from '../../../navigation/routes';
import {colors} from '../../../themes/Colors';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import {ScrollView} from 'react-native-gesture-handler';
import {Notification} from '../../../_mock/Notification';

const Notify = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} route={routes.NOTIFY} />

      <ScrollView>
        <View style={{marginBottom: 40}}>
          <View style={styles.notifications}>
            <Text style={styles.notifications_name}>Notifications</Text>
          </View>

          {Notification.map(notify => (
            <TouchableOpacity
              style={[
                styles.card,
                {backgroundColor: notify.new ? colors.DARK : colors.GREY},
              ]}
              activeOpacity={0.9}
              key={notify.id}>
              <Text style={styles.date}>{notify.date}</Text>
              <Text style={styles.followers}>{notify.title}</Text>
              <Text style={styles.info}>{notify.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <Footer navigation={navigation} route={routes.NOTIFY} />
    </SafeAreaView>
  );
};

export default Notify;

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
    width: 220,
    fontSize: 28,
    color: colors.BLACK,
    fontFamily: 'Roboto-Bold',
  },

  date: {
    fontSize: 13,
    color: colors.WHITE,
    fontFamily: 'Roboto-Regular',
  },

  followers: {
    color: colors.WHITE,
    fontFamily: 'Roboto-Bold',
    paddingVertical: 5,
    fontSize: 22,
  },

  info: {
    color: colors.WHITE,
    fontFamily: 'Roboto-Regular',
  },

  info_inside: {
    color: colors.ORANGE,
    fontFamily: 'Roboto-Medium',
  },

  card: {
    backgroundColor: colors.BLACK,
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});
