import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createStyleSheet, useStyles} from '../theme';
import useSession from '../contexts/SessionContext/useSession';
import AuthStack from '@/Auth/navigation/AuthStack';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import NavbarTab from './NavbarTab';
import {User, UserDetails} from '@/Auth/data/AuthRepository';

export type RootStackParamList = {
  AuthStack: undefined;
  NavbarTab: {user: User; details: UserDetails};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const {user, details} = useSession();
  const {styles, theme} = useStyles(stylesheet);

  return (
    <>
      <StatusBar
        animated
        backgroundColor={theme.colors.accent}
        barStyle={'light-content'}
      />
      <SafeAreaProvider>
        <SafeAreaView
          style={styles.mainSafeAreaView}
          edges={['top', 'right', 'left']}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {!user || !details ? (
              <Stack.Screen name="AuthStack" component={AuthStack} />
            ) : (
              <Stack.Screen name="NavbarTab" component={NavbarTab} />
            )}
          </Stack.Navigator>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

const stylesheet = createStyleSheet(theme => ({
  mainSafeAreaView: {
    flex: 1,
    backgroundColor: theme.colors.accent,
  },
}));

export default RootStack;
