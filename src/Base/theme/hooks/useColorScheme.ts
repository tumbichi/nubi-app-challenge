import {useColorScheme as useColorSchemeRN} from 'react-native';

const useColorScheme = () => {
  const colorSchemescheme = useColorSchemeRN();

  return colorSchemescheme;
};

export default useColorScheme;
