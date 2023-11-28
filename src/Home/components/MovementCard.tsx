import {View} from 'react-native';

import {createStyleSheet, useStyles} from '@/Base/theme';
import {Text} from '@/Base/components';

import {Movement} from '@/Auth/data/AuthRepository';
import MovementInitials from './MovementInitials';
import checkIsAmountPositive from '../utils/helpers/checkIsAmountPositive';

interface MovementCardProps {
  movement: Movement;
}

const MovementCard = ({movement}: MovementCardProps) => {
  const {styles} = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <MovementInitials title={movement.title} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{movement.title}</Text>
        <Text style={styles.date}>{movement.date}</Text>
      </View>
      <Text
        style={[
          styles.amount,
          checkIsAmountPositive(movement['amount '])
            ? styles.positive
            : styles.negative,
        ]}>
        {movement['amount '].replace(' ', '')}
      </Text>
    </View>
  );
};

export default MovementCard;

const stylesheet = createStyleSheet(theme => ({
  container: {
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.base,
    flexDirection: 'row',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
  },
  detailsContainer: {
    flex: 1,
    marginHorizontal: theme.spacing.sm,
  },
  title: {
    fontWeight: '500',
    color: theme.colors.foreground,
  },
  date: {
    color: theme.colors.gray,
    marginTop: theme.spacing.xs,
  },
  amount: {
    fontWeight: '500',
  },
  positive: {
    color: theme.colors.green,
  },
  negative: {
    color: theme.colors.red,
  },
}));
