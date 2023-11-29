import {Text, View} from 'react-native';
import React from 'react';
import {Summary} from '@/Auth/data/AuthRepository';
import formatPrice from '@/Base/utils/formatters/formatPrice';
import {createStyleSheet, useStyles} from '@/Base/theme';

interface ExpenseItemProps {
  item: Summary;
  color: string;
}

const ExpenseItem = ({item, color}: ExpenseItemProps) => {
  const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.dotItem,
          {
            backgroundColor: color,
          },
        ]}
      />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text
          style={[
            styles.amount,
            {
              color,
            },
          ]}>
          {formatPrice(
            parseFloat((parseInt(item.amount, 10) / 100).toFixed(2)),
          )}
        </Text>
      </View>
    </View>
  );
};

export default ExpenseItem;

const stylesheet = createStyleSheet(theme => ({
  container: {flexDirection: 'row', gap: theme.spacing.xs},
  title: {fontWeight: '300', color: theme.colors.foreground},
  dotItem: {
    height: 12,
    width: 12,
    borderRadius: 12,
    marginTop: theme.spacing['2xs'],
  },
  amount: {
    fontWeight: '500',
  },
}));
