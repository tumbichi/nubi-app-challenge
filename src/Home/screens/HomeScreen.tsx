import {createStyleSheet, useStyles} from '@/Base/theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View} from 'react-native';
import {HomeStackParamList} from '../navigation/HomeStack';
import CardCarousel from '../components/CardCarousel';
import useSession from '@/Base/contexts/SessionContext/useSession';

type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, 'HomeScreen'>;

const HomeScreen = ({}: HomeScreenProps) => {
  const {styles} = useStyles(stylesheet);
  const {details} = useSession();
  return (
    <View style={styles.container}>
      <CardCarousel cards={details?.cardData ?? []} />
    </View>
  );
};

export default HomeScreen;

const stylesheet = createStyleSheet(theme => ({
  container: {
    /* margin: theme.spacing.md */
    flex: 1,
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing['2xl'],
  },
}));
