import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomInput from '../../components/CustomInput';
import {colors} from '../../../themes/Colors';
import {units} from '../../../themes/Units';
import CustomButton from '../../components/CustomButton';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {routes} from '../../../navigation/routes';
import Loading from '../../components/Loading';
import authFirebase from '../../../services/firebase/auth';

const Login = ({navigation}) => {
  const {loading, loginUser} = authFirebase();

  const initailLoginValue = {
    email: '',
    password: '',
  };

  const loginValidationSchema = Yup.object().shape({
    password: Yup.string().required('This field is required'),
  });

  const handeleLogin = values => {
    loginUser(values.email, values.password);
  };

  const onClickSignUp = () => {
    navigation.navigate(routes.REGISTER);
  };

  const goBack = () => {
    navigation.navigate(routes.MAP);
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loading />}
      <KeyboardAwareScrollView>
        <View style={styles.bodyContainer}>
          <View style={styles.logoContainer}>
            <TouchableOpacity style={styles.back_area} onPress={goBack}>
              <MaterialIcons name="arrow-back-ios" style={styles.back_icon} />
            </TouchableOpacity>
            <Text style={styles.login_text}>Login</Text>
            <Image
              source={require('../../../assets/images/avatar.png')}
              style={styles.login_image}
            />
          </View>
          <Formik
            initialValues={initailLoginValue}
            onSubmit={handeleLogin}
            validationSchema={loginValidationSchema}>
            {({values, errors, touched, handleChange, handleSubmit}) => (
              <View
                style={{
                  paddingHorizontal: units.width / 13,
                  paddingVertical: units.height / 20,
                }}>
                <View style={{marginTop: units.height / 20}}>
                  <Text style={styles.description}>Email</Text>
                  <CustomInput
                    placeHolder="Email"
                    type="email-address"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    width={'100%'}
                    height={50}
                    fontSize={16}
                  />
                  {errors.email && touched.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}
                </View>
                <View style={{marginTop: units.height / 50}}>
                  <Text style={styles.description}>Password</Text>
                  <CustomInput
                    placeHolder="Password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    width={'100%'}
                    height={50}
                    fontSize={16}
                    secure
                  />
                  {errors.password && touched.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                </View>
                <View style={{marginTop: units.height / 50}}>
                  <TouchableOpacity>
                    <Text style={styles.forgotText}>Forgot Your Password?</Text>
                  </TouchableOpacity>
                  <View style={styles.loginContainer}>
                    <CustomButton
                      title="LOGIN"
                      onPress={handleSubmit}
                      backColor={colors.DARK}
                      fontColor={colors.WHITE}
                      width={'100%'}
                      paddingVertical={15}
                    />
                  </View>
                </View>

                <View>
                  <TouchableOpacity activeOpacity={0.9}>
                    <Text style={styles.already_have}>Or</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.image_container}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.back_imag}>
                    <Image
                      source={require('../../../assets/images/google.png')}
                      style={styles.img}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.back_imag}>
                    <Image
                      source={require('../../../assets/images/facebook.png')}
                      style={styles.img}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.back_imag}>
                    <Image
                      source={require('../../../assets/images/apple.png')}
                      style={styles.img}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.back_imag}>
                    <Image
                      source={require('../../../assets/images/microsoft.png')}
                      style={styles.img}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.dont_account_account}>
                  <Text style={styles.already_have_account}>
                    Don't Have an account?
                  </Text>
                  <TouchableOpacity activeOpacity={0.6} onPress={onClickSignUp}>
                    <Text style={styles.already_have_sign_up}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  bodyContainer: {
    // paddingHorizontal: units.width / 41.05,
    // marginTop: units.height / 40,
  },

  logoContainer: {
    height: 140,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: colors.DARK,
    justifyContent: 'space-between',
  },

  login_text: {
    fontSize: 24,
    marginTop: -25,
    marginHorizontal: 30,
    letterSpacing: 0.8,
    textAlign: 'center',
    color: colors.WHITE,
    fontFamily: 'Roboto-Bold',
  },

  login_image: {
    left: units.width / 2.9,
    width: units.width / 3.2,
    height: units.width / 3.2,
    borderWidth: 2,
    borderRadius: 100,
    top: 20,
    borderColor: colors.WHITE,
  },

  text1: {
    fontFamily: 'Noto Sans JP',
    fontSize: 16,
    textAlign: 'center',
    color: '#626a7a',
    lineHeight: 20,
  },

  text2: {
    marginTop: units.height / 58.64,
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
    color: '#1d242e',
    textAlign: 'center',
  },

  emailText: {
    color: colors.DARKGREY,
    fontSize: 16,
    marginBottom: units.height / 67,
  },

  title: {
    color: colors.BLACK,
    fontSize: 36,
    fontWeight: '600',
  },

  forgotText: {
    color: colors.BLACK,
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },

  loginContainer: {
    marginVertical: units.height / 40,
  },

  line: {
    height: 1,
    width: units.width / 3.5,
    backgroundColor: colors.GRAY,
  },

  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  errorText: {
    color: colors.ORANGE,
    marginTop: units.height / 101,
  },

  signUpText: {
    color: colors.PURPLE,
    textDecorationLine: 'underline',
    textDecorationColor: colors.PURPLE,
    textDecorationStyle: 'solid',
    fontFamily: 'Noto Sans JP',
    fontWeight: '500',
    fontSize: 14,
  },

  description: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    paddingBottom: 10,
    paddingHorizontal: 10,
    letterSpacing: 0.3,
    color: colors.BLACK,
  },

  already_have: {
    fontSize: 16,
    letterSpacing: 0.2,
    color: colors.BLACK,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
  },

  image_container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-around',
  },

  back_imag: {
    padding: 10,
    borderRadius: 30,
  },

  img: {
    height: 30,
    width: 30,
  },

  dont_account_account: {
    marginTop: 20,
    marginHorizontal: units.width / 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  already_have_account: {
    color: colors.BLACK,
    fontFamily: 'Roboto-Regular',
  },

  already_have_sign_up: {
    color: colors.BLACK,
    fontFamily: 'Roboto-Bold',
  },

  back_area: {
    paddingHorizontal: 10,
    marginTop: 30,
    width: 40,
  },

  back_icon: {
    color: colors.WHITE,
    fontSize: 24,
  },
});
