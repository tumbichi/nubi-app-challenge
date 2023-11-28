import {View} from 'react-native';

import {createStyleSheet, useStyles} from '@/Base/theme';
import {Text} from '@/Base/components';

const Movements = () => {
  const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movimientos</Text>
    </View>
  );
};

export default Movements;

const stylesheet = createStyleSheet(theme => ({
  container: {
    paddingHorizontal: theme.spacing.lg,
    marginTop: theme.spacing.md,
  },
  title: {
    ...theme.components.typography.heading,
    color: theme.colors.foreground,
    marginBottom: theme.spacing.xs,
  },
}));
