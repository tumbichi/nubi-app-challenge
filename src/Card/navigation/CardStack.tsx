import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CardScreen from '../screens/CardScreen';

const Stack = createNativeStackNavigator();

const CardStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Card"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Card" component={CardScreen} />
    </Stack.Navigator>
  );
};

export default CardStack;
