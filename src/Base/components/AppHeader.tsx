import {StyleSheet, View} from 'react-native';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';

import {
  /* createStyleSheet,  */ lightTheme /* , useStyles */,
  useStyles,
} from '@/Base/theme';
import {HalfOval, Logo, Text} from '.';

// FIXME: When use `useStyle(stylesheet)` here get error message about 'Rendered more hooks than during the previous render
const AppHeader = ({options}: BottomTabHeaderProps) => {
  // const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <HalfOval style={styles.halfOval} />
      <View style={styles.header}>
        <Logo height={24} width={96} />
        <Text style={styles.title}>{options.headerTitle?.toString()}</Text>
        <View style={styles.rightContent} />
      </View>
    </View>
  );
};
export default AppHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  title: {
    color: 'white',
  },
  rightContent: {
    height: 24,
    width: 96,
  },
  header: {
    backgroundColor: lightTheme.colors.accent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: lightTheme.spacing.lg,
    width: '100%',
  },
  halfOval: {
    position: 'absolute',
  },
});

/* const stylesheet = createStyleSheet(theme => ({
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  title: {
    color: 'white',
  },
  rightContent: {
    height: 24,
    width: 96,
  },
  header: {
    backgroundColor: theme.colors.accent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.lg,
    width: '100%',
  },
  halfOval: {
    position: 'absolute',
  },
})); */
