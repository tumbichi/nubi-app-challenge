import Text from '@/Base/components/Text';
import {createStyleSheet, useStyles} from '@/Base/theme';
import {View} from 'react-native';

const HomeScreen = () => {
  const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
    </View>
  );
};

export default HomeScreen;

const stylesheet = createStyleSheet(theme => ({
  container: {margin: theme.spacing.md},
}));
