import {Button, Text} from '@/Base/components';
import {createStyleSheet, useStyles} from '@/Base/theme';
import useColorModeValue from '@/Base/theme/hooks/useColorSchemeValue';
import {View} from 'react-native';
import {SvgProps} from 'react-native-svg';

interface ServiceItemProps {
  title: string;
  icon: (props: SvgProps) => JSX.Element;
  onPress: () => void;
}

const ServiceItem = ({title, icon: Icon, onPress}: ServiceItemProps) => {
  const {styles, theme} = useStyles(stylesheet);
  const iconColor = useColorModeValue(theme.colors.accent, theme.colors.gray);

  return (
    <Button variant="unstyled" style={styles.container} onPress={onPress}>
      <View style={[styles.iconContainer, {borderColor: iconColor}]}>
        <Icon color={iconColor} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </Button>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    maxWidth: 64,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.xs,
  },
  iconContainer: {
    borderWidth: 1,
    borderRadius: 24,
    padding: theme.spacing.xs,
  },
  title: {
    color: theme.colors.foreground,
    fontSize: theme.fontSizes.sm,
    fontWeight: '300',
    textAlign: 'center',
  },
}));

export default ServiceItem;
