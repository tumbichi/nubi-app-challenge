import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ActivityScreen from '../screens/ActivityScreen';

const Stack = createNativeStackNavigator();

const ActivityStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Activity"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Activity" component={ActivityScreen} />
    </Stack.Navigator>
  );
};

export default ActivityStack;
