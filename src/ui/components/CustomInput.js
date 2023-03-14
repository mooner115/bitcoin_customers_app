import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomInput = ({
  value,
  placeHolder,
  onChangeText,
  secure,
  type,
  width,
  height,
  fontSize,
}) => {
  const [showPassword, setShowPassword] = useState(secure);

  const handleIcon = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={[styles.container, {width: width, height: height}]}>
      <TextInput
        placeholder={placeHolder}
        style={[styles.input, {fontSize: fontSize}]}
        value={value}
        onChangeText={onChangeText}
        keyboardType={type}
        secureTextEntry={showPassword}
        autoCapitalize="none"
      />
      {secure && (
        <TouchableOpacity onPress={handleIcon}>
          <Icon
            name={showPassword ? 'eye' : 'eye-off'}
            size={25}
            color={colors.GRAY}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.LIGHTGREY,
    borderRadius: 10,
    shadowColor: colors.LIGHTGREY,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontFamily: 'Roboto-Medium',
    paddingLeft: '5%',
    color: colors.BLACK,
  },
  icon: {
    marginRight: units.width / 16,
  },
});
