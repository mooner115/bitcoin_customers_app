import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors} from '../../../themes/Colors';
import {units} from '../../../themes/Units';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Formik} from 'formik';
import * as Yup from 'yup';
import authFirebase from '../../../services/firebase/auth';
import Loading from '../../components/Loading';
import {routes} from '../../../navigation/routes';

const Register = ({navigation}) => {
  const {loading, createUser} = authFirebase();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const registerIntialValue = {
    email: '',
    fullName: '',
    password: '',
  };

  const registerValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email is not in correct format')
      .required('This field is required'),
    fullName: Yup.string().required('This field is required'),
    password: Yup.string()
      .min(6, 'Password must be a minimum of 6 characters')
      .required('This field is required'),
  });

  const handleRegister = values => {
    createUser(values.email, values.password, onClickLogin);
  };

  const onClickLogin = () => {
    navigation.navigate(routes.LOGIN);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loading />}
      <KeyboardAwareScrollView>
        <View style={styles.bodyContainer}>
          <View style={styles.titleContainer}>
            <TouchableOpacity style={styles.back_area} onPress={goBack}>
              <MaterialIcons name="arrow-back-ios" style={styles.back_icon} />
            </TouchableOpacity>
            <Text style={styles.register_text}>Sign Up</Text>
          </View>

          <View style={styles.logoContainer}>
            <View style={styles.logoCircle}>
              <Image
                source={require('../../../assets/images/user.png')}
                style={[styles.logo, {tintColor: colors.ORANGE}]}
              />
            </View>
          </View>

          <View style={{paddingHorizontal: units.width / 15}}>
            <Formik
              initialValues={registerIntialValue}
              onSubmit={handleRegister}
              validationSchema={registerValidationSchema}>
              {({values, errors, touched, handleChange, handleSubmit}) => (
                <>
                  <View style={{marginTop: units.height / 50}}>
                    <Text style={styles.description}>Name</Text>
                    <CustomInput
                      placeHolder="Full Name"
                      value={values.fullName}
                      onChangeText={handleChange('fullName')}
                      width={'100%'}
                      height={50}
                      fontSize={16}
                    />
                    {errors.fullName && touched.fullName && (
                      <Text style={styles.errorText}>{errors.fullName}</Text>
                    )}
                  </View>

                  <View style={{marginTop: units.height / 50}}>
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
                    />
                    {errors.password && touched.password && (
                      <Text style={styles.errorText}>{errors.password}</Text>
                    )}
                  </View>

                  <View style={styles.agree_with}>
                    <View style={styles.checkbox}>
                      <CheckBox
                        disabled={false}
                        tintColors={colors.DARK}
                        onFillColor={colors.DARK}
                        value={toggleCheckBox}
                        onValueChange={newValue => setToggleCheckBox(newValue)}
                      />
                      <Text style={styles.agree}>I agree with </Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.6}>
                      <Text style={styles.terms_privacy}>
                        Terms of Service and Privacy Policy
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.buttonContainer}>
                    <CustomButton
                      title="SIGN UP"
                      onPress={handleSubmit}
                      backColor={colors.DARK}
                      fontColor={colors.WHITE}
                      paddingVertical={15}
                    />
                  </View>
                </>
              )}
            </Formik>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  title: {
    color: colors.BLACK,
    fontSize: 36,
    fontWeight: '600',
  },

  bodyContainer: {},

  titleContainer: {
    backgroundColor: colors.DARK,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 10,
  },

  register_text: {
    marginTop: -28,
    marginHorizontal: 30,
    textAlign: 'center',
    fontSize: 24,
    letterSpacing: 0.8,
    color: colors.WHITE,
    fontFamily: 'Roboto-Bold',
  },

  logoContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: units.height / 40,
  },

  logoCircle: {
    borderWidth: 1,
    borderColor: colors.GREY,
    borderStyle: 'dotted',
    borderRadius: 50,
    padding: 20,
  },

  logo: {
    width: 50,
    height: 50,
  },

  buttonContainer: {
    marginVertical: units.height / 50,
  },

  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: units.height / 25,
  },

  errorText: {
    color: colors.ORANGE,
    marginTop: units.height / 101,
  },

  signInText: {
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

  agree_with: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
  },

  agree: {
    marginLeft: Platform.OS === 'ios' ? 5 : 0,
    fontSize: 11,
    color: colors.BLACK,
    fontFamily: 'Roboto-Regular',
  },

  terms_privacy: {
    fontSize: 11,
    color: colors.BLACK,
    fontFamily: 'Roboto-Bold',
  },

  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  back_area: {
    paddingHorizontal: 10,
    marginTop: 15,
    width: 40,
  },

  back_icon: {
    color: colors.WHITE,
    fontSize: 24,
  },
});
