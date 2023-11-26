import useColorScheme from './useColorScheme';

function useColorModeValue<TLight = unknown, TDark = unknown>(
  light: TLight,
  dark: TDark,
) {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? dark : light;
}

export default useColorModeValue;
