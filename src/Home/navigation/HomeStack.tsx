import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {User, UserDetails} from '@/Auth/data/AuthRepository';
import HomeScreen from '../screens/HomeScreen';

export type HomeStackParamList = {
  HomeScreen: {user: User; details: UserDetails};
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
