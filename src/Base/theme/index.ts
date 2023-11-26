// import library factory
import {createUnistyles} from 'react-native-unistyles';
// import your breakpoints, add whatever keys and numeric values you want
import {borderRadius} from './borderRadius';
import {breakpoints} from './breakpoints';
import {spacing} from './spacing';
// import your app's theme TypeScript type, or simply use 'typeof theme'

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
  },
  spacing,
  utils,
};

export const darkTheme = {
  borderRadius,
  colors: {
    background: '#1E1E1E',
    foreground: '#FFFFFF',
    accent: '#0251CC',
  },
  spacing,
  utils,
};

type AppTheme = typeof lightTheme | typeof darkTheme;

export const {createStyleSheet, useStyles} = createUnistyles<
  typeof breakpoints,
  AppTheme
>(breakpoints);
