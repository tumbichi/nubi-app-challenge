import {useMemo} from 'react';
import {View} from 'react-native';

import {Text} from '@/Base/components';
import extractInitals from '@/Home/utils/helpers/extractInitalsOfService';
import {createStyleSheet, useStyles} from '@/Base/theme';

interface MovementInitialsProps {
  title: string;
}

const MovementInitials = ({title}: MovementInitialsProps) => {
  const {styles} = useStyles(stylesheet);
  const initials = useMemo(() => {
    const titleArr = title.split(' ');

    const word1 = titleArr[0];
    const word2 = titleArr.length >= 1 ? titleArr[1] : titleArr[0][1];

    return extractInitals(word1, word2);
  }, [title]);

  return (
    <View style={styles.container}>
      <Text style={styles.initials}>{initials}</Text>
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    borderWidth: 1,
    height: 36,
    width: 36,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.foreground,
  },
  initials: {
    fontSize: theme.fontSizes.xl,
    fontWeight: '600',
    color: theme.colors.foreground,
  },
}));

export default MovementInitials;
