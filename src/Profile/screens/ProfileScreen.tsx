import Text from '@/Base/components/Text';
import {createStyleSheet, useStyles} from '@/Base/theme';
import {View} from 'react-native';

const ProfileScreen = () => {
  const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Text>Profile screen</Text>
    </View>
  );
};

export default ProfileScreen;

const stylesheet = createStyleSheet(theme => ({
  container: {
    /* margin: theme.spacing.md */
    flex: 1,
    marginTop: theme.spacing.xl,
  },
}));
