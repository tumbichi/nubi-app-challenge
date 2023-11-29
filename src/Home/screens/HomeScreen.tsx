import {ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import useSession from '@/Base/contexts/SessionContext/useSession';
import {createStyleSheet, useStyles} from '@/Base/theme';

import {HomeStackParamList} from '../navigation/HomeStack';
import BankCardsCarousel from '../components/MyBankCardsCarousel';
import AvailableServicesCard from '../components/AvailableServicesCard';
import Movements from '../components/Movements';
import useCardDataVisualizationContext from '@/Card/context/CardDataVisualization/useCardDataVisualizationContext';

type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, 'HomeScreen'>;

const HomeScreen = ({}: HomeScreenProps) => {
  const {styles} = useStyles(stylesheet);
  const {details} = useSession();
  const {show} = useCardDataVisualizationContext();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContentContainer}
      showsVerticalScrollIndicator={false}>
      <BankCardsCarousel
        cards={details?.cardData ?? []}
        showCardNumber={show}
      />
      <AvailableServicesCard availableServices={details?.services ?? []} />
      <Movements movements={details?.movements ?? []} />
    </ScrollView>
  );
};

export default HomeScreen;

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    marginTop: theme.spacing.xl,
  },
  scrollContentContainer: {
    paddingVertical: theme.spacing['2xl'],
  },
}));
