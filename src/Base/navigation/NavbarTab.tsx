import {useTranslation} from 'react-i18next';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppHeader} from '@/Base/components';

import {
  ActivityIcon,
  CardIcon,
  HomeIcon,
  ProfileIcon,
} from '@/Base/assets/icons';

import ActivityStack from '@/Activity/navigation/ActivityStack';
import CardStack from '@/Card/navigation/CardStack';
import HomeStack from '@/Home/navigation/HomeStack';
import ProfileStack from '@/Profile/navigation/ProfileStack';

import {RootStackParamList} from './RootStack';

const Tab = createBottomTabNavigator();

const NAVIGATION = {
  home: 'Inicio',
  card: 'Tarjeta',
  activity: 'Actividad',
  profile: 'Perfil',
};

type NavbarTapProps = NativeStackScreenProps<RootStackParamList, 'NavbarTab'>;

const NavbarTab = ({
  route: {
    params: {details, user},
  },
}: NavbarTapProps) => {
  const {t} = useTranslation();

  return (
    <Tab.Navigator screenOptions={{header: AppHeader}}>
      {details.navigation.includes(NAVIGATION.home) && (
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          initialParams={{}}
          options={{
            title: NAVIGATION.home,
            headerTitle: t('hi', {name: user.name}),
            tabBarIcon: HomeIcon,
          }}
        />
      )}
      {details.navigation.includes(NAVIGATION.card) && (
        <Tab.Screen
          name="CardStack"
          component={CardStack}
          options={{
            title: NAVIGATION.card,
            headerTitle: NAVIGATION.card,
            tabBarIcon: CardIcon,
          }}
        />
      )}
      {details.navigation.includes(NAVIGATION.activity) && (
        <Tab.Screen
          name="ActivityStack"
          component={ActivityStack}
          options={{
            title: NAVIGATION.activity,
            headerTitle: NAVIGATION.activity,
            tabBarIcon: ActivityIcon,
          }}
        />
      )}
      {details.navigation.includes(NAVIGATION.profile) && (
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            title: NAVIGATION.profile,
            headerTitle: NAVIGATION.profile,
            tabBarIcon: ProfileIcon,
          }}
        />
      )}
    </Tab.Navigator>
  );
};

export default NavbarTab;
