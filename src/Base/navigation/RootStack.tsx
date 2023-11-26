import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeStack from '@/Home/navigation/HomeStack';
import {createStyleSheet, useStyles} from '../theme';
import useSession from '../contexts/SessionContext/useSession';
import AuthStack from '@/Auth/navigation/AuthStack';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const {accessToken} = useSession();
  const {styles, theme} = useStyles(stylesheet);

  return (
    <>
      <StatusBar backgroundColor={theme.colors.accent} />
      <SafeAreaProvider>
        <SafeAreaView
          style={styles.mainSafeAreaView}
          edges={['top', 'right', 'left']}>
          <Stack.Navigator initialRouteName="Home Stack">
            {!accessToken ? (
              <Stack.Screen
                name="AuthStack"
                component={AuthStack}
                options={{headerShown: false}}
              />
            ) : (
              <Stack.Screen name="HomeStack" component={HomeStack} />
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
