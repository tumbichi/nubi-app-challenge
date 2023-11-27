import {useCallback} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {LanguageResource} from '@/Base/i18n';
import {createStyleSheet, useStyles} from '@/Base/theme';

import {Button, HalfOval, InputText, Logo, Text} from '@/Base/components';

import useSession from '@/Base/contexts/SessionContext/useSession';

import loginSchema, {LoginSchema} from '@/Auth/schemas/LoginSchema';
import {LoginResponse} from '@/Auth/data/AuthRepository';
import useLoginService from '@/Auth/data/AuthRepository/hooks/useLoginService';

const LoginScreen = () => {
  const {t} = useTranslation(['common', 'auth']);
  const {styles} = useStyles(stylesheet);

  const {saveSession} = useSession();
  const {login} = useLoginService();

  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<LoginSchema>({
    mode: 'onBlur',
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = useCallback(
    (_data: LoginSchema) =>
      login()
        .then((user: LoginResponse) => {
          saveSession(
            {
              email: user.email,
              name: user.name,
              lastName: user.lastName,
              password: user.password,
            },
            {
              cardData: user.cardData,
              movements: user.movements,
              navigation: user.navigation,
              services: user.services,
              summary: user.summary,
            },
          );
        })
        // TODO: handle error
        .catch(console.error),
    [login, saveSession],
  );

  return (
    <View
      style={[
        styles.screenContainer,
        isSubmitting ? styles.pointerEventsNone : undefined,
      ]}>
      <View style={styles.mainContentContainer}>
        <View style={styles.mainContent}>
          <View style={styles.logoContainer}>
            <Logo />
            <Text style={styles.welcomeText}>{t('welcome')}</Text>
          </View>
          <View style={styles.inputsContainer}>
            <Controller
              control={control}
              name="email"
              render={({field}) => (
                <InputText
                  autoCapitalize="none"
                  autoComplete="email"
                  errorMessage={
                    errors.email?.message
                      ? t(
                          `auth:login.error.${
                            errors.email
                              .message as keyof LanguageResource['auth']['login']['error']
                          }`,
                        )
                      : undefined
                  }
                  inputMode="email"
                  keyboardType="email-address"
                  label={t('auth:login.label.email')}
                  returnKeyType="next"
                  value={field.value}
                  onBlur={field.onBlur}
                  onChangeText={field.onChange}
                  // onSubmitEditing={() => passwordRef.current?.focus()}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({field}) => (
                <InputText
                  secureTextEntry
                  autoComplete="password"
                  errorMessage={
                    errors.password?.message
                      ? t(
                          `auth:login.error.${
                            errors.password
                              .message as keyof LanguageResource['auth']['login']['error']
                          }`,
                        )
                      : undefined
                  }
                  label={t('auth:login.label.password')}
                  returnKeyType="go"
                  value={field.value}
                  onBlur={field.onBlur}
                  onChangeText={field.onChange}
                />
              )}
            />
          </View>
          <Button textStyle={styles.forgotPassword} variant="unstyled">
            {t('auth:login.actions.forgotPassword')}
          </Button>
        </View>
        <HalfOval />
      </View>
      <View style={styles.bottomActionsContainer}>
        <Button loading={isSubmitting} onPress={handleSubmit(handleLogin)}>
          {t('auth:login.actions.signIn')}
        </Button>
        <Button variant="outline">{t('auth:login.actions.signUp')}</Button>
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
    paddingTop: theme.spacing['2xl'],
    paddingBottom: theme.spacing['3xl'],
    paddingHorizontal: theme.spacing.lg,
  },
  pointerEventsNone: {
    pointerEvents: 'none',
  },
}));
