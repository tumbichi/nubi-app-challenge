import {View} from 'react-native';

import {createStyleSheet, useStyles} from '@/Base/theme';
import {Text} from '@/Base/components';

import {Movement} from '@/Auth/data/AuthRepository';

import MovementCard from './MovementCard';
import {useTranslation} from 'react-i18next';

interface MovementsProps {
  movements: Movement[];
}

const Movements = ({movements}: MovementsProps) => {
  const {t} = useTranslation('home');
  const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('movements.title')}</Text>
      <View style={styles.cardListContainer}>
        {movements.map(movement => (
          <MovementCard key={movement.title} movement={movement} />
        ))}
      </View>
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
  cardListContainer: {
    gap: theme.spacing.md,
  },
}));
