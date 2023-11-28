import {createUnistyles} from 'react-native-unistyles';

import {typography} from './components/typography';

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
    foreground: '#010101',
    accent: '#0251CC',
    red: '#EF233C',
    gray: '#ADB1B8',
    green: '#48BB78',
  },
  components: {typography},
  fontSizes,
  spacing,
  utils,
};

export const darkTheme = {
  borderRadius,
  colors: {
    background: '#010101',
    foreground: '#FFFFFF',
    accent: '#0251CC',
    red: '#EF233C',
    gray: '#ADB1B8',
    green: '',
  },
  components: {typography},
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
