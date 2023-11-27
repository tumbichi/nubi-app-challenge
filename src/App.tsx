import {
  NavigationContainer,
  Theme as NavigationTheme,
} from '@react-navigation/native';
import {UnistylesTheme} from 'react-native-unistyles';

import SessionProvider from '@/Base/contexts/SessionContext/SessionProvider';
import RootStack from '@/Base/navigation/RootStack';

import {
  lightTheme,
  darkTheme,
  AppTheme,
  lightNavigationTheme,
  darkNavigationTheme,
} from '@/Base/theme';
import useColorModeValue from '@/Base/theme/hooks/useColorSchemeValue';

import '@/Base/i18n';

function NubiApp(): JSX.Element {
  const appTheme = useColorModeValue<AppTheme, AppTheme>(lightTheme, darkTheme);
  const navigationTheme = useColorModeValue<NavigationTheme, NavigationTheme>(
    lightNavigationTheme,
    darkNavigationTheme,
  );

  return (
    <UnistylesTheme theme={appTheme}>
      <SessionProvider>
        <NavigationContainer theme={navigationTheme}>
          <RootStack />
        </NavigationContainer>
      </SessionProvider>
    </UnistylesTheme>
  );
}

export default NubiApp;
