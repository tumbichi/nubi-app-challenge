import {useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import useSession from '@/Base/contexts/SessionContext/useSession';
import {AppHeader} from '@/Base/components';

import {
  ActivityIcon,
  CardIcon,
  HomeIcon,
  ProfileIcon,
} from '@/Base/assets/icons';
import {NAVIGATION} from '@/Base/utils/constants/navigation';

import ActivityStack from '@/Activity/navigation/ActivityStack';
import CardStack from '@/Card/navigation/CardStack';
import HomeStack from '@/Home/navigation/HomeStack';
import ProfileStack from '@/Profile/navigation/ProfileStack';

import {RootStackParamList} from './RootStack';
import CardDataVisualizationProvider from '@/Card/context/CardDataVisualization/CardDataVisualizationProvider';

export type NavbarTabParamList = {
  HomeStack: undefined;
  CardStack: undefined;
  ActivityStack: undefined;
  ProfileStack: undefined;
};

const Tab = createBottomTabNavigator<NavbarTabParamList>();

type NavbarTapProps = NativeStackScreenProps<RootStackParamList, 'NavbarTab'>;

const NavbarTab = ({}: NavbarTapProps) => {
  const {t} = useTranslation();
  const {details, user} = useSession();

  const tabs = useMemo(
    () =>
      [
        {
          name: 'HomeStack',
          component: HomeStack,
          options: {
            title: NAVIGATION.home,
            headerTitle: t('hi', {name: user?.name}),
            tabBarIcon: HomeIcon,
          },
        },
        {
          name: 'CardStack',
          component: CardStack,
          options: {
            title: NAVIGATION.card,
            headerTitle: NAVIGATION.card,
            tabBarIcon: CardIcon,
          },
        },
        {
          name: 'ActivityStack',
          component: ActivityStack,
          options: {
            title: NAVIGATION.activity,
            headerTitle: NAVIGATION.activity,
            tabBarIcon: ActivityIcon,
          },
        },
        {
          name: 'ProfileStack',
          component: ProfileStack,
          options: {
            title: NAVIGATION.profile,
            headerTitle: NAVIGATION.profile,
            tabBarIcon: ProfileIcon,
          },
        },
      ].filter(value => details?.navigation.includes(value.options.title)),
    [details?.navigation, t, user?.name],
  );

  return (
    <CardDataVisualizationProvider>
      <Tab.Navigator screenOptions={{header: AppHeader}}>
        {tabs.map(tab => (
          <Tab.Screen
            key={tab.name}
            name={tab.name as keyof NavbarTabParamList}
            component={tab.component}
            options={tab.options}
          />
        ))}
      </Tab.Navigator>
    </CardDataVisualizationProvider>
  );
};

export default NavbarTab;
