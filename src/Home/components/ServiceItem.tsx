import {Button, Text} from '@/Base/components';
import {createStyleSheet, useStyles} from '@/Base/theme';
import {View} from 'react-native';
import {SvgProps} from 'react-native-svg';

interface ServiceItemProps {
  title: string;
  icon: (props: SvgProps) => JSX.Element;
  onPress: () => void;
}

const ServiceItem = ({title, icon: Icon, onPress}: ServiceItemProps) => {
  const {styles, theme} = useStyles(stylesheet);

  return (
    <Button variant="unstyled" style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Icon color={theme.colors.accent} />
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
    borderColor: theme.colors.accent,
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
