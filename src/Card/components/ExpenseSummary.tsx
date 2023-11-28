import {Dimensions, View} from 'react-native';

import PieChart from 'react-native-pie-chart';

import {Text} from '@/Base/components';
import {createStyleSheet, useStyles} from '@/Base/theme';
import {Summary} from '@/Auth/data/AuthRepository';
import {useMemo} from 'react';
import ExpenseItem from './ExpenseItem';

interface ExpenseSummary {
  summary: Summary[];
}

const CHART_WIDTH = Dimensions.get('window').width / 2 - 24;

const ExpenseSummary = ({summary = []}: ExpenseSummary) => {
  const {styles} = useStyles(stylesheet);

  const series = useMemo(
    () =>
      summary
        .map(item => parseFloat((parseInt(item.amount, 10) / 100).toFixed(2)))
        .slice(0, 3),
    [summary],
  );

  const colors = useMemo(() => ['#BC20DF', '#1AC996', '#AB91F7'], []);

  return summary.length > 0 ? (
    <View>
      <Text style={styles.title}>Resumen de gastos</Text>
      <View style={styles.card}>
        <PieChart
          coverRadius={0.6}
          widthAndHeight={CHART_WIDTH}
          series={series}
          sliceColor={colors}
        />
        <View style={styles.summaryList}>
          {summary.map((item, index) => (
            <ExpenseItem key={item.title} item={item} color={colors[index]} />
          ))}
        </View>
      </View>
    </View>
  ) : null;
};

export default ExpenseSummary;

const stylesheet = createStyleSheet(theme => ({
  title: {
    ...theme.components.typography.heading,
    color: theme.colors.foreground,
    marginBottom: theme.spacing.xs,
  },
  card: {
    backgroundColor: theme.colors.background,
    flexDirection: 'row',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.base,
    gap: theme.spacing.sm,
  },
  summaryList: {
    flex: 1,
    paddingHorizontal: theme.spacing.sm,
    justifyContent: 'center',
    gap: theme.spacing.sm,
  },
}));
