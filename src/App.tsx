import {useColorScheme} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {UnistylesTheme} from 'react-native-unistyles';

import SessionProvider from '@/Base/contexts/SessionContext/SessionProvider';
import RootStack from '@/Base/navigation/RootStack';

import {lightTheme, darkTheme} from './Base/theme';

function App(): JSX.Element {
  const scheme = useColorScheme();
  return (
    <SessionProvider>
      <UnistylesTheme theme={scheme === 'light' ? lightTheme : darkTheme}>
        <NavigationContainer
          theme={scheme === 'light' ? DefaultTheme : DarkTheme}>
          <RootStack />
        </NavigationContainer>
      </UnistylesTheme>
    </SessionProvider>
  );
}

export default App;
