import {createUnistyles} from 'react-native-unistyles';

import {borderRadius} from './designTokens/borderRadius';
import {breakpoints} from './designTokens/breakpoints';
import {fontSizes} from './designTokens/fontSizes';
import {spacing} from './designTokens/spacing';

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
  },
  fontSizes,
  spacing,
  utils,
};

export type AppTheme = typeof lightTheme | typeof darkTheme;

export const {createStyleSheet, useStyles} = createUnistyles<
  typeof breakpoints,
  AppTheme
>(breakpoints);
