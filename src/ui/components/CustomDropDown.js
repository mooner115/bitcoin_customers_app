import React from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {colors} from '../../themes/Colors';

const CustomDropDown = ({data, value, placeholder, onSelect}) => {
  return (
    <>
      <Dropdown
        style={styles.container}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="$ (Us Dollar)"
        itemTextStyle={{color: colors.BLACK}}
        selectedStyle={{color: colors.BLACK}}
        value={value}
        onChange={onSelect}
      />
    </>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 40,
    color: '#000',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.DARKWHITE,
    paddingHorizontal: 10,
    backgroundColor: colors.WHITE,
  },
  placeholderStyle: {
    color: colors.BLACK,
    fontFamily: 'Roboto-Medium',
    fontSize: 11,
    paddingLeft: 5,
  },
  selectedTextStyle: {
    color: colors.BLACK,
    fontSize: 13,
    fontFamily: 'Roboto-Medium',
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: colors.BLACK,
  },
});
