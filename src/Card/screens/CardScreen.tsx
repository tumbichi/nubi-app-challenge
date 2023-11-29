import Text from '@/Base/components/Text';
import {createStyleSheet, useStyles} from '@/Base/theme';
import {View} from 'react-native';
import BankCard from '../components/BankCard';
import useSession from '@/Base/contexts/SessionContext/useSession';
import {useMemo} from 'react';
import ControlVisualitationCardData from '../components/ControlVisualitationCardData';
import ExpenseSummary from '../components/ExpenseSummary';

const CardScreen = () => {
  const {details} = useSession();
  const {styles} = useStyles(stylesheet);

  const myPhisicalCard = useMemo(
    () => details?.cardData.find(card => card.kind === 'PHYSICAL'),
    [details?.cardData],
  );

  return (
    <View style={styles.container}>
      {myPhisicalCard ? (
        <BankCard card={myPhisicalCard} />
      ) : (
        <Text>Todavia no tenes tu tarjeta</Text>
      )}
      <ControlVisualitationCardData />
      <ExpenseSummary summary={details?.summary ?? []} />
    </View>
  );
};

export default CardScreen;

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing['2xl'],
    paddingHorizontal: theme.spacing.lg,
  },
}));
