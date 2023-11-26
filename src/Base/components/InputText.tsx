import {TextInput, TextInputProps, View} from 'react-native';
import {createStyleSheet, useStyles} from '../theme';
import Text from './Text';

interface InputTextProps extends TextInputProps {
  label?: string;
}

const InputText = ({style, label, ...props}: InputTextProps) => {
  const {styles} = useStyles(stylesheet);

  return (
    <View>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput style={[styles.textInput, style]} {...props} />
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
  },
  label: {
    color: '#ffffff',
    fontWeight: '300',
    marginBottom: theme.spacing['2xs'],
  },
}));
