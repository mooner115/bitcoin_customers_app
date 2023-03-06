import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';

const CustomButton = ({
  title,
  onPress,
  backColor,
  fontColor,
  width,
  paddingVertical,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: backColor,
          width: width,
          paddingVertical: paddingVertical,
        },
      ]}>
      <Text style={[styles.title, {color: fontColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ORANGE,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto-Bold',
    color: colors.WHITE,
    fontWeight: '500',
    fontSize: 14,
  },
});
