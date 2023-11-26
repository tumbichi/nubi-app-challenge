import {View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

import {createStyleSheet, useStyles} from '@/Base/theme';
import Button from '@/Base/components/Button';

import Logo from '@/Base/assets/images/nubi-logo.svg';
import Text from '@/Base/components/Text';
import InputText from '@/Base/components/InputText';

const SemiOvalSvg = () => (
  <Svg width={750} height={48} fill="none">
    <Path
      fill="#0251CC"
      d="M750 3.971C750 6.165 582.107 48 375 48S0 6.165 0 3.971C0 1.778 167.893.124 375 .124s375 1.654 375 3.847Z"
    />
    <Path fill="#0251CC" d="M0 0h750v3.971H0z" />
  </Svg>
);

const LoginScreen = () => {
  const {styles} = useStyles(stylesheet);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.mainContentContainer}>
        <View style={styles.mainContent}>
          <View style={styles.logoContainer}>
            <Logo />
            <Text style={styles.welcomeText}>¡Bienvenido!</Text>
          </View>
          <View style={styles.inputsContainer}>
            <InputText
              label="Email"
              autoComplete="email"
              autoCapitalize="none"
              keyboardType="email-address"
              inputMode="email"
              returnKeyType="next"
            />
            <InputText
              secureTextEntry
              label="Contraseña"
              autoComplete="password"
              returnKeyType="go"
            />
          </View>
          <Button textStyle={styles.forgotPassword} variant="unstyled">
            ¿Olvidaste tu contraseña?
          </Button>
        </View>
        <SemiOvalSvg />
      </View>
      <View style={styles.bottomActionsContainer}>
        <Button>Iniciar sesion</Button>
        <Button variant="outline">Registrate</Button>
      </View>
    </View>
  );
};

export default LoginScreen;

const stylesheet = createStyleSheet(theme => ({
  screenContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  mainContentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  mainContent: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.accent,
    paddingTop: theme.spacing.xl,
    paddingHorizontal: theme.spacing.lg,
  },
  logoContainer: {
    alignItems: 'center',
  },
  welcomeText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginVertical: theme.spacing.lg,
  },
  inputsContainer: {
    gap: theme.spacing.md,
    paddingVertical: theme.spacing.md,
  },
  forgotPassword: {
    color: 'white',
    fontWeight: '500',
    marginTop: theme.spacing.sm,
    fontSize: theme.fontSizes.lg,
  },
  bottomActionsContainer: {
    gap: theme.spacing.md,
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.lg,
  },
}));
