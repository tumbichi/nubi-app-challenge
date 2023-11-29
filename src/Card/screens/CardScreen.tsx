import {useMemo} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import {createStyleSheet, useStyles} from '@/Base/theme';
import useSession from '@/Base/contexts/SessionContext/useSession';
import {Text} from '@/Base/components';

import BankCard from '../components/BankCard';
import ControlVisualitationCardData from '../components/ControlVisualitationCardData';
import ExpenseSummary from '../components/ExpenseSummary';
import useCardDataVisualizationContext from '../context/CardDataVisualization/useCardDataVisualizationContext';

const CardScreen = () => {
  const {t} = useTranslation('card');
  const {details} = useSession();
  const {styles} = useStyles(stylesheet);

  const {show, onChange} = useCardDataVisualizationContext();

  const myPhisicalCard = useMemo(
    () => details?.cardData.find(card => card.kind === 'PHYSICAL'),
    [details?.cardData],
  );

  return (
    <View style={styles.container}>
      {myPhisicalCard ? (
        <>
          <BankCard card={myPhisicalCard} showCardNumber={show} />
          <ControlVisualitationCardData value={show} handlePress={onChange} />
          <ExpenseSummary summary={details?.summary ?? []} />
        </>
      ) : (
        <Text>{t('emptyMessage')}</Text>
      )}
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
