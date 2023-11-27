import {createUnistyles} from 'react-native-unistyles';

import {borderRadius} from './designTokens/borderRadius';
import {breakpoints} from './designTokens/breakpoints';
import {fontSizes} from './designTokens/fontSizes';
import {spacing} from './designTokens/spacing';

import {
  DarkTheme,
  DefaultTheme,
  Theme as NavigationTheme,
} from '@react-navigation/native';

const utils = {
  hexToRGBA: (hex: string, opacity: number) => {
    const rgb = hex
      .replace('#', '')
      .split(/(?=(?:..)*$)/)
      .map(x => parseInt(x, 16));
    return `rgba(${rgb.at(0)}, ${rgb.at(1)}, ${rgb.at(2)}, ${opacity})`;
  },
};

export const lightTheme = {
  borderRadius,
  colors: {
    background: '#FFFFFF',
    foreground: '#1E1E1E',
    accent: '#0251CC',
    red: '#EF233C',
  },
  fontSizes,
  spacing,
  utils,
};

export const darkTheme = {
  borderRadius,
  colors: {
    background: '#1E1E1E',
    foreground: '#FFFFFF',
    accent: '#0251CC',
    red: '#EF233C',
  },
  fontSizes,
  spacing,
  utils,
};

export const lightNavigationTheme: NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0251CC',
  },
};

export const darkNavigationTheme: NavigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#0251CC',
    background: '#1E1E1E',
  },
};

export type AppTheme = typeof lightTheme | typeof darkTheme;

export const {createStyleSheet, useStyles} = createUnistyles<
  typeof breakpoints,
  AppTheme
>(breakpoints);
