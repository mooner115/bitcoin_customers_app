import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  Modal,
  Animated,
  SafeAreaView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Header from '../layouts/Header';
import CustomDropDown from '../components/CustomDropDown';
import {Currency} from '../../_mock/Currency';
import CustomSwitch from '../components/CustomSwitch';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Footer from '../layouts/Footer';
import {routes} from '../../navigation/routes';
import {useDispatch} from 'react-redux';
import {logOutAccount} from '../../context/userSlice';

const Profile = navigation => {
  const [mode, setMode] = useState(false);
  const [currency, setCurrency] = useState(Currency[2]);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const initialValue = {
    email: '',
    phone: '',
    password: '',
    confirm: '',
  };

  const validateSchema = Yup.object().shape({
    email: Yup.string().required('This field is required'),
    phone: Yup.string().required('This field is required'),
    password: Yup.string()
      .min(6, 'Password must be a minimum of 6 characters')
      .required('This field is required'),
    confirm: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords are not the same')
      .required('This field is required'),
  });

  const handleSwitch = () => {
    setMode(value => !value);
  };

  const handleSelect = item => {
    setCurrency(item.value);
  };

  const handleUpdate = () => {};

  const handleDelete = () => {
    dispatch(logOutAccount());
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const ModalPoup = ({visible, children}) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      toggleModal();
    }, [visible]);

    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 100);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };

    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[
              styles.modalContainer,
              {
                transform: [{scale: scaleValue}],
                backgroundColor: colors.WHITE,
              },
            ]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation.navigation} route={routes.PROFILE} />

      <KeyboardAwareScrollView style={styles.scroll_area}>
        <View style={styles.avatar_area}>
          <ImageBackground
            source={require('../../assets/images/bg_mage.png')}
            style={styles.image}
            resizeMode="cover">
            <Image
              source={require('../../assets/images/AVATAR.png')}
              style={styles.avatar}
            />
          </ImageBackground>
          <Text style={styles.avatar_text}>Super Employer</Text>
        </View>

        <View>
          <View style={styles.item_area}>
            <Text style={styles.item_text}>Profile Private</Text>
            <View style={styles.switch_area}>
              <CustomSwitch value={mode} onChange={handleSwitch} />
            </View>
          </View>

          <View style={styles.item_area}>
            <Text style={styles.item_text}>Currency</Text>
            <CustomDropDown
              data={Currency}
              value={currency}
              onSelect={handleSelect}
              placeholder="$ (Us Dollar)"
            />
          </View>

          <Formik
            initialValues={initialValue}
            onSubmit={handleUpdate}
            validationSchema={validateSchema}>
            {({values, errors, touched, handleChange, handleSubmit}) => (
              <View>
                <View style={styles.item_area}>
                  <Text style={styles.item_text}>Email</Text>
                  <View style={styles.badge}>
                    <MaterialCommunityIcons
                      name="check"
                      style={{color: colors.DARKGREY, fontSize: 14}}
                    />
                    <Text style={styles.item_text}>Verified</Text>
                  </View>
                  <CustomInput
                    placeHolder="Email"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    width={150}
                    height={40}
                    fontSize={12}
                  />
                </View>

                <View style={styles.item_area}>
                  <Text style={styles.item_text}>Phone</Text>
                  <CustomInput
                    placeHolder="Phone"
                    value={values.phone}
                    onChangeText={handleChange('phone')}
                    width={150}
                    height={40}
                    fontSize={12}
                  />
                </View>

                <View style={styles.item_area}>
                  <Text style={styles.item_text}>Password</Text>
                  <CustomInput
                    placeHolder="Password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    width={150}
                    height={40}
                    fontSize={12}
                  />
                </View>

                <View style={[styles.item_area, {borderTopWidth: 0}]}>
                  <Text style={styles.item_text}>Confirm Password</Text>
                  <CustomInput
                    placeHolder="Confirm Password"
                    value={values.confirm}
                    onChangeText={handleChange('confirm')}
                    width={150}
                    height={40}
                    fontSize={12}
                  />
                </View>

                <View style={styles.item_area}>
                  <View />
                  <CustomButton
                    title="UPDATE"
                    onPress={handleSubmit}
                    backColor={colors.DARK}
                    fontColor={colors.WHITE}
                    width={150}
                    paddingVertical={10}
                  />
                </View>
              </View>
            )}
          </Formik>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.item_area}
            onPress={() => setVisible(true)}>
            <Text style={styles.item_text}>Delete Account</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              style={{color: colors.BLACK, fontSize: 14}}
            />
          </TouchableOpacity>
          <View style={[styles.item_area, {marginBottom: 50}]} />
        </View>
      </KeyboardAwareScrollView>

      <Footer navigation={navigation.navigation} route={routes.PROFILE} />

      <View style={styles.modal_box}>
        <ModalPoup visible={visible} style={styles.modalpop}>
          <Text style={styles.modal_email}>
            Are you sure you want to delete your account?
          </Text>
          <View style={styles.modal_cancel_more}>
            <TouchableOpacity activeOpacity={0.6} onPress={handleCancel}>
              <Text style={styles.modal_cancel}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.border_line} />
            <TouchableOpacity activeOpacity={0.6} onPress={handleDelete}>
              <Text style={[styles.modal_logout, {color: colors.DARK}]}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </ModalPoup>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  scroll_area: {
    height: units.height / 1.2,
  },

  avatar_area: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: 200,
    top: -40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },

  avatar: {
    height: 120,
    width: 120,
    position: 'absolute',
    bottom: 0,
  },

  avatar_text: {
    color: colors.BLACK,
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    top: -35,
  },

  item_area: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: colors.DARKWHITE,
  },

  item_text: {
    color: colors.BLACK,
    fontFamily: 'Roboto-Medium',
  },

  switch_area: {
    flexDirection: 'row',
    width: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  badge: {
    backgroundColor: colors.GREEN,
    width: 80,
    paddingHorizontal: 8,
    paddingVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    left: -40,
  },

  modal_box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalpop: {
    borderWidth: 4,
    borderColor: colors.WHITE,
  },

  modal_text: {
    fontSize: 14,
    paddingLeft: 9,
    marginBottom: 10,
    letterSpacing: 0.2,
    textAlign: 'center',
    color: colors.BLACK,
    fontFamily: 'Roboto-Bold',
  },

  modal_email: {
    paddingBottom: 10,
    color: colors.BLACK,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
  },

  modal_cancel_more: {
    borderTopWidth: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: colors.GREY,
  },

  modal_logout: {
    paddingTop: 20,
    paddingRight: 40,
    color: colors.DARK,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
  },

  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    width: '80%',
    backgroundColor: colors.WHITE,
    borderColor: colors.WHITE,
    borderWidth: 0.4,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },

  modal_cancel: {
    paddingTop: 20,
    paddingLeft: 40,
    color: colors.DARK,
    textAlign: 'center',
    fontFamily: 'Inter-Medium',
  },
});
