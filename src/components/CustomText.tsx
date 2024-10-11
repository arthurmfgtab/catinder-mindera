import React from 'react';
import { TextProps, StyleSheet, Text } from 'react-native';
import colors from '../contants/colors';

function CustomText({ style, children, ...props }: TextProps) {
  const textStyle = StyleSheet.flatten([styles.text, style]);

  return (
    <Text style={textStyle} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Nunito Sans',
    color: colors.dark,
  },
});

export default CustomText;
