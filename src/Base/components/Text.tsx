import React from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';

import {createStyleSheet, useStyles} from '../theme';

interface TextProps extends RNTextProps {}

const Text = ({children, ...props}: TextProps) => {
  const {styles} = useStyles(stylesheet);
  return (
    <RNText style={styles.defaultText} {...props}>
      {children}
    </RNText>
  );
};

const stylesheet = createStyleSheet(theme => ({
  defaultText: {
    color: theme.colors.foreground,
  },
}));

export default Text;
