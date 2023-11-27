import {createStyleSheet, useStyles} from '@/Base/theme';

import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

const CarouselDot = ({isActive}: {isActive: boolean}) => {
  const {styles, theme} = useStyles(stylesheet);

  const progress = useDerivedValue(() =>
    withTiming(isActive ? 0 : 1, {duration: 500}),
  );

  const bgStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [theme.colors.accent, theme.colors.gray],
    );
    return {
      backgroundColor,
    };
  });

  return <Animated.View style={[styles.dot, bgStyle]} />;
};

const stylesheet = createStyleSheet(() => ({
  dot: {
    height: 12,
    width: 12,
    borderRadius: 12,
  },
}));

export default CarouselDot;
