import {useCallback, useEffect} from 'react';
import {ColorValue, Pressable} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {createStyleSheet, useStyles} from '../theme';

interface SwitchProps {
  handleOnPress: (value: boolean) => void;
  activeTrackColor?: string;
  inActiveTrackColor?: string;
  thumbColor?: string;
  value: boolean;
}

const Switch = ({
  activeTrackColor = '#007AFF',
  inActiveTrackColor = '#F2F5F7',
  thumbColor = '#FFF',
  value,
  handleOnPress,
}: SwitchProps) => {
  const {styles, theme} = useStyles(stylesheet);

  const switchTranslate = useSharedValue(0);

  const interpolateBackgroundColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      switchTranslate.value,
      [0, 22],
      [theme.colors.gray, theme.colors.accent],
    );

    return {
      backgroundColor,
    };
  });

  useEffect(() => {
    if (value) {
      switchTranslate.value = withSpring(21, {
        mass: 1,
        damping: 15,
        stiffness: 120,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
      });
    } else {
      switchTranslate.value = withSpring(0, {
        mass: 1,
        damping: 15,
        stiffness: 120,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
      });
    }
  }, [value, switchTranslate]);

  const onPress = useCallback(() => {
    handleOnPress(!value);
  }, [handleOnPress, value]);

  return (
    <Pressable style={{width: styles.containerStyle.width}} onPress={onPress}>
      <Animated.View
        style={[styles.containerStyle, interpolateBackgroundColor]}>
        <Animated.View
          style={[
            styles.circleStyle,
            {backgroundColor: thumbColor},
            {
              transform: [
                {
                  translateX: switchTranslate,
                },
              ],
            },
            styles.shadowValue,
          ]}
        />
      </Animated.View>
    </Pressable>
  );
};

const stylesheet = createStyleSheet({
  circleStyle: {
    width: 24,
    height: 24,
    borderRadius: 24,
  },
  containerStyle: {
    width: 50,
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 36.5,
  },
  shadowValue: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});

export default Switch;
