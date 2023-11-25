import {NavigationContainer} from '@react-navigation/native';

import RootStack from '@/Base/navigation/RootStack';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
