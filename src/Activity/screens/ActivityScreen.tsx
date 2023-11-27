import {View} from 'react-native';
import Text from '@/Base/components/Text';
import {createStyleSheet, useStyles} from '@/Base/theme';

const ActivityScreen = () => {
  const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Text>Activity screen</Text>
    </View>
  );
};

export default ActivityScreen;

const stylesheet = createStyleSheet(theme => ({
  container: {
    /* margin: theme.spacing.md */
    flex: 1,
    marginTop: theme.spacing.xl,
  },
}));
