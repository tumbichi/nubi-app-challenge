import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  TextProps,
  TextStyle,
} from 'react-native';
import {createStyleSheet, useStyles} from '../theme';
import Text from './Text';

interface ButtonProps extends Omit<PressableProps, 'children'> {
  children: TextProps['children'];
  variant?: 'solid' | 'outline' | 'unstyled';
  textStyle?: StyleProp<TextStyle>;
}

const Button = ({
  children,
  variant = 'solid',
  style,
  textStyle,
  ...props
}: ButtonProps) => {
  const {styles: buttonStyles} = useStyles(buttonVariants);
  const {styles: buttonPressedStyles} = useStyles(buttonPressedVariants);
  const {styles: textStyles} = useStyles(textVariants);

  return (
    <Pressable
      style={({pressed}: PressableStateCallbackType) => [
        buttonStyles[variant],
        style,
        pressed ? buttonPressedStyles[variant] : {},
      ]}
      {...props}>
      <Text style={[textStyles[variant], textStyle]}>{children}</Text>
    </Pressable>
  );
};

export default Button;

const buttonVariants = createStyleSheet(theme => ({
  solid: {
    backgroundColor: theme.colors.accent,
    borderRadius: theme.borderRadius.base,
    paddingVertical: theme.spacing.lg,
    alignItems: 'center',
  },
  outline: {
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.base,
    borderColor: theme.colors.accent,
    borderWidth: 1,
    paddingVertical: theme.spacing.lg,
    alignItems: 'center',
  },
  unstyled: {},
}));

const buttonPressedVariants = createStyleSheet(() => ({
  solid: {
    opacity: 0.8,
  },
  outline: {
    opacity: 0.8,
  },
  unstyled: {
    opacity: 0.8,
  },
}));

const textVariants = createStyleSheet(theme => ({
  solid: {
    color: theme.colors.background,
    fontSize: 16,
    fontWeight: '600',
  },
  outline: {
    color: theme.colors.accent,
    fontSize: 16,
    fontWeight: '600',
  },
  unstyled: {
    color: theme.colors.foreground,
  },
}));
