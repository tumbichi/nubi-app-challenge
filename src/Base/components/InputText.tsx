import {TextInput, TextInputProps, View} from 'react-native';
import {createStyleSheet, useStyles} from '../theme';
import Text from './Text';

interface InputTextProps extends TextInputProps {
  errorMessage?: string;
  label?: string;
}

const InputText = ({errorMessage, label, style, ...props}: InputTextProps) => {
  const {styles} = useStyles(stylesheet);

  return (
    <View>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput style={[styles.textInput, style]} {...props} />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

export default InputText;

const stylesheet = createStyleSheet(theme => ({
  textInput: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.lg,
    borderRadius: theme.borderRadius.base,
    color: theme.colors.foreground,
  },
  label: {
    color: '#ffffff',
    fontWeight: '300',
    marginBottom: theme.spacing['2xs'],
  },
  errorMessage: {
    marginTop: theme.spacing.xs,
    color: theme.colors.red,
    fontWeight: '500',
  },
}));
