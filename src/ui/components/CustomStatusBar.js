import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

const CustomStatusBar = ({bgColor, ...props}) => {
  return (
    <SafeAreaView style={{backgroundColor: bgColor}}>
      <StatusBar backgroundColor={bgColor} {...props} />
    </SafeAreaView>
  );
};

export default CustomStatusBar;
