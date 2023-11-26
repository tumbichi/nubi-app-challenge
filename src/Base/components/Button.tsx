import {Pressable, PressableProps, TextProps} from 'react-native';
import {createStyleSheet, useStyles} from '../theme';
import Text from './Text';

interface ButtonProps extends Omit<PressableProps, 'children'> {
  children: TextProps['children'];
  variant?: 'solid' | 'outline';
}

const Button = ({children, variant = 'solid', ...props}: ButtonProps) => {
  const {styles: buttonStyles} = useStyles(buttonVariants);
  const {styles: textStyles} = useStyles(textVariants);
  return (
    <Pressable style={buttonStyles[variant]} {...props}>
      <Text style={textStyles[variant]}>{children}</Text>
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
}));
