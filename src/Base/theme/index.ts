import {createUnistyles} from 'react-native-unistyles';

import {typography} from './components/typography';

import {borderRadius} from './designTokens/borderRadius';
import {breakpoints} from './designTokens/breakpoints';
import {commonColors, darkColors, lightColors} from './designTokens/colors';
import {fontSizes} from './designTokens/fontSizes';
import {spacing} from './designTokens/spacing';

import {
  DarkTheme,
  DefaultTheme,
  Theme as NavigationTheme,
} from '@react-navigation/native';

export const lightTheme = {
  borderRadius,
  colors: {
    ...commonColors,
    ...lightColors,
  },
  components: {typography},
  fontSizes,
  spacing,
};

export const darkTheme = {
  borderRadius,
  colors: {
    ...commonColors,
    ...darkColors,
  },
  components: {typography},
  fontSizes,
  spacing,
};

export const lightNavigationTheme: NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: commonColors.accent,
    background: lightColors.appBackground,
  },
};

export const darkNavigationTheme: NavigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: commonColors.accent,
    background: darkColors.appBackground,
  },
};

export type AppTheme = typeof lightTheme | typeof darkTheme;

export const {createStyleSheet, useStyles} = createUnistyles<
  typeof breakpoints,
  AppTheme
>(breakpoints);
