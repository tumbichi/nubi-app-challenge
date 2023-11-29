import {useState} from 'react';
import {View} from 'react-native';

import {createStyleSheet, useStyles} from '@/Base/theme';
import {Switch, Text} from '@/Base/components';
import {EyeIcon} from '@/Base/assets/icons';

const ControlVisualitationCardData = () => {
  const {styles, theme} = useStyles(stylesheet);
  const [value, setValue] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.iconContainer}>
          <EyeIcon color={theme.colors.foreground} />
        </View>
        <Text>Ver datos</Text>
      </View>
      <Switch value={value} handleOnPress={v => setValue(v)} />
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    backgroundColor: theme.colors.background,
    flexDirection: 'row',
    marginVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.base,
    justifyContent: 'space-between',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    borderWidth: 1,
    borderColor: theme.colors.foreground,
    borderRadius: 24,
    padding: theme.spacing.xs,
    marginRight: theme.spacing.xs,
  },
}));

export default ControlVisualitationCardData;
