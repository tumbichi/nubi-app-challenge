import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme as NavigationTheme,
} from '@react-navigation/native';
import {UnistylesTheme} from 'react-native-unistyles';

import SessionProvider from '@/Base/contexts/SessionContext/SessionProvider';
import RootStack from '@/Base/navigation/RootStack';

import {lightTheme, darkTheme, AppTheme} from '@/Base/theme';
import useColorModeValue from '@/Base/theme/hooks/useColorSchemeValue';

import '@/Base/i18n';

function NubiApp(): JSX.Element {
  const appTheme = useColorModeValue<AppTheme, AppTheme>(lightTheme, darkTheme);
  const navigationTheme = useColorModeValue<NavigationTheme, NavigationTheme>(
    DefaultTheme,
    DarkTheme,
  );

  return (
    <SessionProvider>
      <UnistylesTheme theme={appTheme}>
        <NavigationContainer theme={navigationTheme}>
          <RootStack />
        </NavigationContainer>
      </UnistylesTheme>
    </SessionProvider>
  );
}

export default NubiApp;
