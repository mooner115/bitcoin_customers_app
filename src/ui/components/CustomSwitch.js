import React from 'react';
import {Switch} from 'react-native';
import {colors} from '../../themes/Colors';

const CustomSwitch = ({value, onChange}) => {
  return (
    <Switch
      value={value}
      onValueChange={onChange}
      trackColor={colors.GREEN}
      thumbColor={value ? colors.GREEN : colors.GREY}
    />
  );
};

export default CustomSwitch;
